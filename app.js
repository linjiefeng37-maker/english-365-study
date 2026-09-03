(function () {
  "use strict";

  const STORAGE_KEY = "english365-progress-v1";
  const data = window.ENGLISH_365_DATA;
  const defaultState = {
    currentDay: 3,
    customDays: {},
    statuses: {},
    mistakes: {},
    dictation: {},
    touchedDays: {},
    activityDates: {},
    sentenceOffset: 0,
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHTML = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  let state = loadState();
  let currentView = "home";
  let currentWordIndex = 0;
  let dictationIndex = 0;
  let dictationScored = false;
  let reviewFilter = "all";
  let playbackToken = 0;
  let activePlayback = null;
  let isPaused = false;
  let toastTimer = null;
  let recognition = null;
  let voiceActive = false;

  const sentenceTemplates = [
    sentence("I want to learn.", "我想学习。", ["want", "learn"], [["I", "我"], ["want", "想要"], ["to learn", "学习"]]),
    sentence("I like English.", "我喜欢英语。", ["like"], [["I", "我"], ["like", "喜欢"], ["English", "英语"]]),
    sentence("We go to school.", "我们去学校。", ["we", "go"], [["We", "我们"], ["go to", "去"], ["school", "学校"]]),
    sentence("They come today.", "他们今天来。", ["they", "come"], [["They", "他们"], ["come", "来"], ["today", "今天"]]),
    sentence("I eat food.", "我吃食物。", ["eat"], [["I", "我"], ["eat", "吃"], ["food", "食物"]]),
    sentence("I work today.", "我今天工作。", ["work", "today"], [["I", "我"], ["work", "工作"], ["today", "今天"]]),
    sentence("I go home now.", "我现在回家。", ["home", "now"], [["I", "我"], ["go home", "回家"], ["now", "现在"]]),
    sentence("We learn English at school.", "我们在学校学英语。", ["school", "English"], [["We", "我们"], ["learn", "学习"], ["English", "英语"], ["at school", "在学校"]]),
    sentence("Today is good.", "今天很好。", ["today", "good"], [["Today", "今天"], ["is", "是"], ["good", "好的"]]),
    sentence("I have time.", "我有时间。", ["have", "time"], [["I", "我"], ["have", "有"], ["time", "时间"]]),
    sentence("I need water.", "我需要水。", ["need", "water"], [["I", "我"], ["need", "需要"], ["water", "水"]]),
    sentence("I need help.", "我需要帮助。", ["need", "help"], [["I", "我"], ["need", "需要"], ["help", "帮助"]]),
    sentence("I feel happy.", "我感觉很开心。", ["feel", "happy"], [["I", "我"], ["feel", "感觉"], ["happy", "开心的"]]),
    sentence("I am tired.", "我累了。", ["tired"], [["I am", "我是 / 我感觉"], ["tired", "累的"]]),
    sentence("I am hungry.", "我饿了。", ["hungry"], [["I am", "我是 / 我感觉"], ["hungry", "饿的"]]),
    sentence("Please give me water.", "请给我水。", ["give", "water"], [["Please", "请"], ["give", "给"], ["me", "我"], ["water", "水"]]),
  ];

  function sentence(english, chinese, focus, breakdown) {
    return { english, chinese, focus, breakdown };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return { ...defaultState, ...(saved || {}) };
    } catch (_) {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      showToast("浏览器未能保存进度，本次学习仍可继续");
    }
  }

  function getWords(day = state.currentDay) {
    if (Array.isArray(state.customDays[day])) return state.customDays[day];
    return data.days[day - 1]?.words || [];
  }

  function wordKey(day, index) { return `${day}:${index}`; }
  function getStatus(day, index) { return state.statuses[wordKey(day, index)] || "unlearned"; }
  function getMistakes(day, index) { return Number(state.mistakes[wordKey(day, index)] || 0); }

  function markActivity(day = state.currentDay) {
    const date = localDateKey(new Date());
    state.activityDates[date] = true;
    state.touchedDays[day] = true;
    saveState();
  }

  function localDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function calculateStreak() {
    const dates = state.activityDates;
    let cursor = new Date();
    if (!dates[localDateKey(cursor)]) cursor.setDate(cursor.getDate() - 1);
    let streak = 0;
    while (dates[localDateKey(cursor)]) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function init() {
    populateDaySelect();
    bindNavigation();
    bindPlayer();
    bindDictation();
    bindReview();
    bindEditor();
    setupVoiceControl();
    renderAll();
    const requestedView = location.hash.replace("#", "");
    if (["home", "dictation", "sentences", "review"].includes(requestedView)) switchView(requestedView, false);
  }

  function populateDaySelect() {
    const select = $("#daySelect");
    select.innerHTML = data.days.map(({ day }) => {
      const count = getWords(day).length;
      return `<option value="${day}">Day ${day}${count ? ` · ${count} 词` : " · 待添加"}</option>`;
    }).join("");
    select.value = String(state.currentDay);
  }

  function bindNavigation() {
    $$(".nav-btn").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
    $(".brand").addEventListener("click", (event) => { event.preventDefault(); switchView("home"); });
    $("#daySelect").addEventListener("change", (event) => changeDay(Number(event.target.value)));
    $("#prevDay").addEventListener("click", () => changeDay(Math.max(1, state.currentDay - 1)));
    $("#nextDay").addEventListener("click", () => changeDay(Math.min(365, state.currentDay + 1)));
  }

  function switchView(view, updateHash = true) {
    currentView = view;
    $$(".view").forEach((section) => {
      const active = section.id === `view-${view}`;
      section.hidden = !active;
      section.classList.toggle("active", active);
    });
    $$(".nav-btn").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
    if (updateHash) history.replaceState(null, "", `#${view}`);
    if (view === "dictation") renderDictation();
    if (view === "sentences") renderSentences();
    if (view === "review") renderReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function changeDay(day) {
    if (!Number.isFinite(day) || day < 1 || day > 365) return;
    stopPlayback(false);
    state.currentDay = day;
    currentWordIndex = 0;
    dictationIndex = 0;
    saveState();
    $("#daySelect").value = String(day);
    renderAll();
  }

  function renderAll() {
    renderDayBar();
    renderStats();
    renderWordList();
    renderDictation();
    renderSentences();
    renderReview();
  }

  function renderDayBar() {
    const words = getWords();
    const started = words.filter((_, index) => getStatus(state.currentDay, index) !== "unlearned").length;
    const percent = words.length ? Math.round((started / words.length) * 100) : 0;
    $("#dayWordCount").textContent = `${words.length} / 15 个词`;
    $("#dayPercent").textContent = `${percent}%`;
    $("#dayProgressBar").style.width = `${percent}%`;
    $("#prevDay").disabled = state.currentDay === 1;
    $("#nextDay").disabled = state.currentDay === 365;
  }

  function renderStats() {
    const mastered = Object.values(state.statuses).filter((status) => status === "mastered").length;
    const studiedDays = Object.keys(state.touchedDays).filter((day) => state.touchedDays[day]).length;
    $("#statCurrent").textContent = `Day ${state.currentDay}`;
    $("#statDays").innerHTML = `${studiedDays} <em>天</em>`;
    $("#statMastered").innerHTML = `${mastered} <em>词</em>`;
    $("#statStreak").innerHTML = `${calculateStreak()} <em>天</em>`;
  }

  function renderWordList() {
    const words = getWords();
    const list = $("#wordList");
    const empty = $("#emptyDay");
    list.hidden = words.length === 0;
    empty.hidden = words.length !== 0;
    $(".add-row").hidden = words.length === 0;
    if (!words.length) {
      list.innerHTML = "";
      updatePlayer(null);
      return;
    }

    currentWordIndex = Math.min(currentWordIndex, words.length - 1);
    list.innerHTML = words.map((item, index) => wordCardHTML(item, state.currentDay, index)).join("");
    updateCurrentCard();
    updatePlayer(words[currentWordIndex]);

    $$(".speak-word", list).forEach((button) => button.addEventListener("click", () => {
      currentWordIndex = Number(button.dataset.index);
      playSingleWord(state.currentDay, currentWordIndex);
    }));
    $$(".status-select", list).forEach((select) => select.addEventListener("change", () => {
      setWordStatus(state.currentDay, Number(select.dataset.index), select.value);
    }));
  }

  function wordCardHTML(item, day, index, compact = false) {
    const status = getStatus(day, index);
    const mistakes = getMistakes(day, index);
    return `<article class="word-card${day === state.currentDay && index === currentWordIndex ? " current" : ""}" data-status="${status}" data-day="${day}" data-index="${index}">
      ${mistakes ? `<span class="mistake-badge">易错 ${mistakes}</span>` : ""}
      <div class="word-card-top">
        <div><span class="word-number">${compact ? `Day ${day}` : String(index + 1).padStart(2, "0")}</span><h2 class="word-title">${escapeHTML(item.english)}</h2><span class="word-phonetic">${escapeHTML(item.phonetic || "点击喇叭听发音")}</span></div>
        <button class="speak-word" data-day="${day}" data-index="${index}" aria-label="播放 ${escapeHTML(item.english)}">🔊</button>
      </div>
      <span class="word-meaning">${escapeHTML(item.chinese)}</span>
      <div class="word-actions">
        <span class="word-number">学习状态</span>
        <select class="status-select" data-day="${day}" data-index="${index}" aria-label="${escapeHTML(item.english)} 的学习状态">
          <option value="unlearned"${status === "unlearned" ? " selected" : ""}>未学</option>
          <option value="learning"${status === "learning" ? " selected" : ""}>学习中</option>
          <option value="mastered"${status === "mastered" ? " selected" : ""}>已掌握</option>
        </select>
      </div>
    </article>`;
  }

  function setWordStatus(day, index, status) {
    state.statuses[wordKey(day, index)] = status;
    if (status !== "unlearned") markActivity(day);
    saveState();
    renderDayBar();
    renderStats();
    renderWordList();
    if (currentView === "review") renderReview();
    showToast(status === "mastered" ? "已加入掌握词库，很棒！" : status === "learning" ? "已标记为学习中" : "已改为未学");
  }

  function bindPlayer() {
    $("#playGroup").addEventListener("click", () => {
      if (activePlayback === "group" && !isPaused) pausePlayback();
      else if (activePlayback === "group" && isPaused) resumePlayback();
      else playGroup();
    });
    $("#stopAll").addEventListener("click", () => stopPlayback());
    $("#prevWord").addEventListener("click", () => moveCurrentWord(-1, true));
    $("#nextWord").addEventListener("click", () => moveCurrentWord(1, true));
    $("#continueToday").addEventListener("click", playGroup);
    $("#speechRate").addEventListener("change", () => {
      if (activePlayback) showToast(`播放速度已改为 ${$("#speechRate").value}×`);
    });
  }

  function speechRate() { return Number($("#speechRate").value) || 1; }

  function speechSupported() {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function speak(text, language, token) {
    return new Promise((resolve) => {
      if (!speechSupported() || token !== playbackToken) return resolve();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      utterance.rate = speechRate();
      utterance.pitch = 1;
      utterance.onend = resolve;
      utterance.onerror = resolve;
      window.speechSynthesis.speak(utterance);
    });
  }

  function wait(ms, token) {
    return new Promise((resolve) => {
      const started = Date.now();
      const check = () => {
        if (token !== playbackToken) return resolve();
        if (isPaused) return setTimeout(check, 120);
        const remaining = ms - (Date.now() - started);
        if (remaining <= 0) resolve(); else setTimeout(check, Math.min(remaining, 120));
      };
      check();
    });
  }

  async function speakWordPair(item, token, withChinese = true) {
    await speak(item.english, "en-US", token);
    await wait(260, token);
    if (withChinese && token === playbackToken) await speak(item.chinese, "zh-CN", token);
  }

  function beginPlayback(type) {
    stopPlayback(false);
    activePlayback = type;
    isPaused = false;
    $(".player-card").classList.add("playing");
    updatePlayButton();
    return playbackToken;
  }

  async function playSingleWord(day, index) {
    const words = getWords(day);
    const item = words[index];
    if (!item) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("single");
    if (day === state.currentDay) {
      currentWordIndex = index;
      updateCurrentCard();
      updatePlayer(item);
    }
    markActivity(day);
    if (getStatus(day, index) === "unlearned") state.statuses[wordKey(day, index)] = "learning";
    saveState();
    await speakWordPair(item, token, true);
    if (token === playbackToken) stopPlayback(false);
    renderDayBar(); renderStats(); renderWordList();
  }

  async function playGroup(startIndex = currentWordIndex) {
    const words = getWords();
    if (!words.length) return showToast("请先添加这一天的单词");
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("group");
    currentWordIndex = Math.min(startIndex, words.length - 1);
    markActivity();
    while (token === playbackToken) {
      const item = words[currentWordIndex];
      updatePlayer(item);
      updateCurrentCard();
      if (getStatus(state.currentDay, currentWordIndex) === "unlearned") {
        state.statuses[wordKey(state.currentDay, currentWordIndex)] = "learning";
        saveState();
      }
      await speakWordPair(item, token, true);
      await wait(720 / speechRate(), token);
      if (token !== playbackToken) break;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  }

  function moveCurrentWord(direction, play = false) {
    const words = getWords();
    if (!words.length) return;
    currentWordIndex = (currentWordIndex + direction + words.length) % words.length;
    updatePlayer(words[currentWordIndex]);
    updateCurrentCard();
    if (play) playSingleWord(state.currentDay, currentWordIndex);
  }

  function pausePlayback() {
    isPaused = true;
    if (speechSupported()) window.speechSynthesis.pause();
    updatePlayButton();
    showToast("已暂停");
  }

  function resumePlayback() {
    isPaused = false;
    if (speechSupported()) window.speechSynthesis.resume();
    updatePlayButton();
    showToast("继续播放");
  }

  function stopPlayback(showMessage = true) {
    playbackToken += 1;
    activePlayback = null;
    isPaused = false;
    if (speechSupported()) {
      window.speechSynthesis.resume();
      window.speechSynthesis.cancel();
    }
    $(".player-card")?.classList.remove("playing");
    $$(".sentence-loop").forEach((button) => {
      button.classList.remove("active");
      button.innerHTML = "↻ <span>循环播放</span>";
    });
    $$(".sentence-card").forEach((card) => card.classList.remove("current"));
    const sentenceNowPlaying = $("#sentenceNowPlaying");
    if (sentenceNowPlaying) sentenceNowPlaying.hidden = true;
    const allSentencesButton = $("#playAllSentences");
    if (allSentencesButton) {
      allSentencesButton.classList.remove("active");
      allSentencesButton.textContent = "▶ 循环播放本组";
    }
    updatePlayButton();
    if (showMessage) showToast("播放已停止");
  }

  function updatePlayButton() {
    const button = $("#playGroup");
    if (!button) return;
    if (activePlayback === "group" && !isPaused) button.innerHTML = "Ⅱ <span>暂停播放</span>";
    else if (activePlayback === "group" && isPaused) button.innerHTML = "▶ <span>继续播放</span>";
    else button.innerHTML = "▶ <span>整组循环</span>";
  }

  function updatePlayer(item) {
    $("#playerWord").textContent = item?.english || "这一天还没有单词";
    $("#playerMeaning").textContent = item?.chinese || "点击下方按钮添加";
  }

  function updateCurrentCard() {
    $$("#wordList .word-card").forEach((card) => card.classList.toggle("current", Number(card.dataset.index) === currentWordIndex));
  }

  function bindDictation() {
    $("#dictationSpeak").addEventListener("click", playDictationWord);
    $("#showAnswer").addEventListener("click", revealDictationAnswer);
    $("#checkAnswer").addEventListener("click", checkDictationAnswer);
    $("#dictationInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        checkDictationAnswer();
      }
    });
    $("#dictPrev").addEventListener("click", () => moveDictation(-1));
    $("#dictNext").addEventListener("click", () => moveDictation(1));
    $("#dictRepeat").addEventListener("click", playDictationWord);
    $("#dictPause").addEventListener("click", () => {
      if (isPaused) resumePlayback(); else pausePlayback();
      $("#dictPause").textContent = isPaused ? "▶ 继续" : "Ⅱ 暂停";
    });
  }

  function renderDictation() {
    const words = getWords();
    const hasWords = words.length > 0;
    dictationIndex = hasWords ? Math.min(dictationIndex, words.length - 1) : 0;
    const item = words[dictationIndex];
    dictationScored = false;
    $("#dictationIndex").textContent = hasWords ? String(dictationIndex + 1) : "0";
    $("#dictationTotal").textContent = String(words.length);
    $("#dictationProgress").style.width = hasWords ? `${((dictationIndex + 1) / words.length) * 100}%` : "0%";
    $("#dictationMeaning").textContent = item?.chinese || "这一天还没有单词";
    $("#dictationEnglish").textContent = item?.english || "—";
    $("#dictationPhonetic").textContent = item?.phonetic || "";
    $("#dictationAnswer").hidden = true;
    $("#showAnswer").hidden = !hasWords;
    $("#dictationPrompt").textContent = hasWords ? "先听一遍，再写答案" : "请先添加这一天的单词";
    $("#dictationInput").value = "";
    $("#dictationInput").disabled = !hasWords;
    $("#checkAnswer").disabled = !hasWords;
    $("#checkAnswer").textContent = "检查答案";
    $("#dictationFeedback").className = "dictation-feedback";
    $("#dictationFeedback").textContent = hasWords ? "写好后按回车，也可以点“检查答案”。" : "切换到有单词的一天，或先添加词汇。";
    $("#dictationSpeak").disabled = !hasWords;
    $("#dictPrev").disabled = !hasWords;
    $("#dictNext").disabled = !hasWords;
    const score = state.dictation[state.currentDay] || { correct: 0, total: 0 };
    $("#dictationAccuracy").textContent = score.total ? `${Math.round((score.correct / score.total) * 100)}%` : "—";
  }

  function playDictationWord() {
    const item = getWords()[dictationIndex];
    if (!item) return showToast("请先添加这一天的单词");
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("dictation");
    markActivity();
    speakWordPair(item, token, false).then(() => {
      if (token === playbackToken) {
        activePlayback = null;
        $(".player-card")?.classList.remove("playing");
        updatePlayButton();
      }
    });
  }

  function showDictationAnswer() {
    $("#dictationAnswer").hidden = false;
  }

  function normalizeAnswer(value) {
    return String(value || "").trim().toLocaleLowerCase("en-US").replace(/[.?!,，。！？]/g, "");
  }

  function checkDictationAnswer() {
    const item = getWords()[dictationIndex];
    if (!item) return;
    const input = $("#dictationInput");
    if (dictationScored) return moveDictation(1);
    if (!input.value.trim()) {
      input.focus();
      return showToast("先输入你听到的英文");
    }
    const correct = normalizeAnswer(input.value) === normalizeAnswer(item.english);
    scoreDictation(correct);
  }

  function revealDictationAnswer() {
    if (!getWords().length) return;
    if (!dictationScored) scoreDictation(false, true);
    else showDictationAnswer();
  }

  function scoreDictation(correct, revealed = false) {
    const words = getWords();
    if (!words.length || dictationScored) return;
    dictationScored = true;
    const score = state.dictation[state.currentDay] || { correct: 0, total: 0 };
    score.total += 1;
    if (correct) {
      score.correct += 1;
      state.statuses[wordKey(state.currentDay, dictationIndex)] = "mastered";
      delete state.mistakes[wordKey(state.currentDay, dictationIndex)];
    } else {
      state.mistakes[wordKey(state.currentDay, dictationIndex)] = getMistakes(state.currentDay, dictationIndex) + 1;
      if (getStatus(state.currentDay, dictationIndex) === "unlearned") state.statuses[wordKey(state.currentDay, dictationIndex)] = "learning";
    }
    state.dictation[state.currentDay] = score;
    markActivity();
    saveState();
    showDictationAnswer();
    $("#dictationInput").disabled = true;
    $("#checkAnswer").textContent = "下一词 →";
    const feedback = $("#dictationFeedback");
    feedback.className = `dictation-feedback ${correct ? "success" : "error"}`;
    feedback.textContent = correct
      ? "✓ 拼对了！已标记为掌握，原有易错标记也已清除。"
      : revealed ? "答案在上面。这个词已加入易错词，之后再来一次。" : "还差一点，看看上面的正确答案，再听一遍。";
    $("#dictationPrompt").textContent = correct ? "答对啦，很棒！" : "记住这一次，下次就会了";
    if (!correct) setTimeout(playDictationWord, 180);
    renderDayBar(); renderStats();
  }

  function moveDictation(direction) {
    const words = getWords();
    if (!words.length) return;
    stopPlayback(false);
    dictationIndex = (dictationIndex + direction + words.length) % words.length;
    renderDictation();
    setTimeout(() => {
      playDictationWord();
      $("#dictationInput").focus();
    }, 120);
  }

  function setupVoiceControl() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const status = $("#voiceStatus");
    const toggle = $("#voiceToggle");
    if (!Recognition) {
      status.textContent = "当前浏览器不支持语音指令，请使用下方按钮控制。";
      toggle.disabled = true;
      toggle.textContent = "浏览器不支持语音控制";
      return;
    }

    status.textContent = "支持语音指令，点击下方按钮开启。";
    recognition = new Recognition();
    recognition.lang = "zh-CN";
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).slice(event.resultIndex).map((result) => result[0].transcript).join("").replaceAll(" ", "");
      handleVoiceCommand(transcript);
    };
    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        voiceActive = false;
        updateVoiceUI("麦克风权限未开启，请允许后再试。", false);
      }
    };
    recognition.onend = () => {
      if (voiceActive) setTimeout(() => { try { recognition.start(); } catch (_) {} }, 300);
      else updateVoiceUI("语音控制已关闭，按钮仍可使用。", false);
    };
    toggle.addEventListener("click", toggleVoiceControl);
  }

  function toggleVoiceControl() {
    if (!recognition) return;
    voiceActive = !voiceActive;
    if (voiceActive) {
      try {
        recognition.start();
        updateVoiceUI("正在听：可以说“下一个”或“重复”。", true);
      } catch (_) {}
    } else {
      recognition.stop();
      updateVoiceUI("语音控制已关闭，按钮仍可使用。", false);
    }
  }

  function updateVoiceUI(message, listening) {
    $("#voiceStatus").textContent = message;
    $("#micState").classList.toggle("listening", listening);
    $("#voiceToggle").textContent = listening ? "关闭语音控制" : "开启语音控制";
  }

  function handleVoiceCommand(transcript) {
    let action = "";
    if (/下一个|下一词|下一個/.test(transcript)) { moveDictation(1); action = "下一个"; }
    else if (/上一个|上一词|上一個/.test(transcript)) { moveDictation(-1); action = "上一个"; }
    else if (/重复|再读|重播|重複/.test(transcript)) { playDictationWord(); action = "重复"; }
    else if (/暂停|暫停/.test(transcript)) { pausePlayback(); action = "暂停"; }
    else if (/继续|繼續/.test(transcript)) { resumePlayback(); action = "继续"; }
    else if (/停止|结束|結束/.test(transcript)) { stopPlayback(); action = "停止"; }
    if (action) updateVoiceUI(`已听到“${action}”，继续等待指令。`, true);
    else updateVoiceUI(`听到“${transcript}”，请说下一个、重复或停止。`, true);
  }

  function renderSentences() {
    const currentWords = getWords();
    const list = $("#sentenceList");
    const empty = $("#sentenceEmpty");
    if (!currentWords.length) {
      list.innerHTML = "";
      list.hidden = true;
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    list.hidden = false;

    const available = new Set(currentWords.map((item) => item.english.toLowerCase()));
    eachStoredWord((item, day, index) => {
      if (getStatus(day, index) === "mastered") available.add(item.english.toLowerCase());
    });
    let candidates = sentenceTemplates.filter((item) => item.focus.every((focus) => available.has(focus.toLowerCase())));
    if (candidates.length < 3) {
      sentenceTemplates.forEach((item) => {
        if (!candidates.includes(item) && item.focus.some((focus) => available.has(focus.toLowerCase()))) candidates.push(item);
      });
    }
    if (!candidates.length) candidates = currentWords.slice(0, 6).map((item) => sentence(
      `I am learning the word “${item.english}”.`,
      `我正在学习“${item.chinese}”这个词。`,
      [item.english],
      [["I am learning", "我正在学习"], [item.english, item.chinese]],
    ));
    const amount = Math.min(5, candidates.length);
    const selected = Array.from({ length: amount }, (_, index) => candidates[(state.sentenceOffset + index) % candidates.length]);
    list.innerHTML = selected.map((item, index) => `<article class="sentence-card">
      <div class="sentence-top">
        <div><span class="sentence-number">句子 ${String(index + 1).padStart(2, "0")}</span><h2>${escapeHTML(item.english)}</h2><p class="sentence-zh">${escapeHTML(item.chinese)}</p></div>
        <div class="sentence-controls">
          <button class="sentence-speak" data-index="${index}" aria-label="播放一次句子">🔊 <span>播放一次</span></button>
          <button class="sentence-loop" data-index="${index}" aria-label="循环播放句子">↻ <span>循环播放</span></button>
        </div>
      </div>
      <div class="breakdown">${item.breakdown.map(([en, zh]) => `<span><b>${escapeHTML(en)}</b> · ${escapeHTML(zh)}</span>`).join("")}</div>
    </article>`).join("");
    $$(".sentence-speak", list).forEach((button) => button.addEventListener("click", () => playSentence(selected[Number(button.dataset.index)], false, button)));
    $$(".sentence-loop", list).forEach((button) => button.addEventListener("click", () => {
      if (button.classList.contains("active")) stopPlayback();
      else playSentence(selected[Number(button.dataset.index)], true, button);
    }));
    $("#playAllSentences").onclick = () => {
      const button = $("#playAllSentences");
      if (button.classList.contains("active")) stopPlayback();
      else playSentenceGroup(selected, button);
    };
    $("#refreshSentences").onclick = () => {
      state.sentenceOffset = (state.sentenceOffset + Math.max(1, amount)) % candidates.length;
      saveState();
      renderSentences();
    };
  }

  async function playSentence(item, loop, button) {
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback(loop ? "sentence-loop" : "sentence");
    markActivity();
    if (loop) button.classList.add("active");
    if (loop) button.innerHTML = "■ <span>停止循环</span>";
    if (loop) showPlayingSentence(item, button.closest(".sentence-card"), "正在循环播放这句话");
    do {
      await speak(item.english, "en-US", token);
      await wait(300, token);
      await speak(item.chinese, "zh-CN", token);
      if (loop) await wait(900 / speechRate(), token);
    } while (loop && token === playbackToken);
    if (token === playbackToken) stopPlayback(false);
  }

  async function playSentenceGroup(items, button) {
    if (!items.length) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("sentence-group");
    markActivity();
    button.classList.add("active");
    button.textContent = "■ 停止循环";
    while (token === playbackToken) {
      for (const [index, item] of items.entries()) {
        if (token !== playbackToken) break;
        showPlayingSentence(item, $$("#sentenceList .sentence-card")[index], "正在循环播放本组");
        await speak(item.english, "en-US", token);
        await wait(280, token);
        await speak(item.chinese, "zh-CN", token);
        await wait(650 / speechRate(), token);
      }
      if (token === playbackToken) await wait(950 / speechRate(), token);
    }
  }

  function showPlayingSentence(item, card, label) {
    const panel = $("#sentenceNowPlaying");
    if (!panel) return;
    panel.hidden = false;
    $("#sentenceNowLabel").textContent = label;
    $("#sentenceNowEnglish").textContent = item.english;
    $("#sentenceNowChinese").textContent = item.chinese;
    $$(".sentence-card").forEach((candidate) => candidate.classList.toggle("current", candidate === card));
  }

  function bindReview() {
    $$(".filter-btn").forEach((button) => button.addEventListener("click", () => {
      reviewFilter = button.dataset.filter;
      $$(".filter-btn").forEach((item) => item.classList.toggle("active", item === button));
      renderReview();
    }));
    $("#playReview").addEventListener("click", playReviewWords);
  }

  function reviewWords() {
    const result = [];
    eachStoredWord((item, day, index) => {
      const status = getStatus(day, index);
      const mistakes = getMistakes(day, index);
      const matches = reviewFilter === "mastered" ? status === "mastered"
        : reviewFilter === "mistakes" ? mistakes > 0
        : status !== "unlearned" || mistakes > 0;
      if (matches) result.push({ ...item, day, index });
    });
    return result;
  }

  function renderReview() {
    const words = reviewWords();
    const list = $("#reviewList");
    $("#reviewSummary").textContent = `找到 ${words.length} 个词 · ${reviewFilter === "mastered" ? "已掌握" : reviewFilter === "mistakes" ? "易错词" : "全部已学"}`;
    list.hidden = words.length === 0;
    $("#reviewEmpty").hidden = words.length !== 0;
    $("#playReview").disabled = words.length === 0;
    list.innerHTML = words.map((item) => wordCardHTML(item, item.day, item.index, true)).join("");
    $$(".speak-word", list).forEach((button) => button.addEventListener("click", () => playSingleWord(Number(button.dataset.day), Number(button.dataset.index))));
    $$(".status-select", list).forEach((select) => select.addEventListener("change", () => {
      setWordStatus(Number(select.dataset.day), Number(select.dataset.index), select.value);
    }));
  }

  async function playReviewWords() {
    const words = reviewWords();
    if (!words.length) return showToast("当前筛选下没有复习词");
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("review");
    let index = 0;
    while (token === playbackToken) {
      const item = words[index];
      await speakWordPair(item, token, true);
      await wait(720 / speechRate(), token);
      index = (index + 1) % words.length;
    }
  }

  function eachStoredWord(callback) {
    for (let day = 1; day <= 365; day += 1) {
      getWords(day).forEach((item, index) => callback(item, day, index));
    }
  }

  function bindEditor() {
    $$(".open-editor").forEach((button) => button.addEventListener("click", openEditor));
    $("#saveWords").addEventListener("click", (event) => {
      event.preventDefault();
      saveEditorWords();
    });
  }

  function openEditor() {
    const words = getWords();
    $("#editorTitle").textContent = `Day ${state.currentDay} · 添加 15 个词`;
    $("#editorRows").innerHTML = Array.from({ length: 15 }, (_, index) => {
      const item = words[index] || {};
      return `<div class="editor-row">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <input class="edit-en" value="${escapeHTML(item.english || "")}" placeholder="英文" aria-label="第 ${index + 1} 个词的英文" autocomplete="off" />
        <input class="edit-zh" value="${escapeHTML(item.chinese || "")}" placeholder="中文意思" aria-label="第 ${index + 1} 个词的中文" autocomplete="off" />
        <input class="edit-ph" value="${escapeHTML(item.phonetic || "")}" placeholder="如 /wɔːtər/" aria-label="第 ${index + 1} 个词的音标" autocomplete="off" />
      </div>`;
    }).join("");
    $("#wordEditor").showModal();
  }

  function saveEditorWords() {
    const rows = $$(".editor-row", $("#editorRows"));
    const words = [];
    let invalid = false;
    rows.forEach((row) => {
      const english = $(".edit-en", row).value.trim();
      const chinese = $(".edit-zh", row).value.trim();
      const phonetic = $(".edit-ph", row).value.trim();
      if ((english && !chinese) || (!english && chinese)) invalid = true;
      if (english && chinese) words.push({ english, chinese, phonetic });
    });
    if (invalid) return showToast("每一行请同时填写英文和中文");
    if (!words.length) return showToast("请至少添加 1 个单词");
    if (words.length > 15) return showToast("每天最多保存 15 个单词");
    state.customDays[state.currentDay] = words;
    Object.keys(state.statuses).filter((key) => key.startsWith(`${state.currentDay}:`)).forEach((key) => delete state.statuses[key]);
    Object.keys(state.mistakes).filter((key) => key.startsWith(`${state.currentDay}:`)).forEach((key) => delete state.mistakes[key]);
    state.dictation[state.currentDay] = { correct: 0, total: 0 };
    currentWordIndex = 0;
    dictationIndex = 0;
    saveState();
    $("#wordEditor").close();
    populateDaySelect();
    renderAll();
    showToast(`Day ${state.currentDay} 已保存 ${words.length} 个词`);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  window.addEventListener("beforeunload", () => {
    stopPlayback(false);
    if (recognition && voiceActive) recognition.stop();
  });

  init();
})();
