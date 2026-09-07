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
    reviewSentenceOffset: 0,
    listeningSentenceOffset: 0,
    listeningRate: 0.78,
    englishTone: "natural",
    englishVoice: "auto",
    chineseTone: "clear",
    chineseVoice: "auto",
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
  let reviewWeek = Math.ceil((state.currentDay || 1) / 7);
  let reviewMode = "words";
  let listeningWeek = reviewWeek;
  let sentenceScope = "day";
  let playbackToken = 0;
  let activePlayback = null;
  let isPaused = false;
  let toastTimer = null;
  let recognition = null;
  let voiceActive = false;
  let speechVoices = [];
  let activeUtterances = [];

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

  const weeklySentenceLibrary = {
    1: [
      sentence("I want to learn English today.", "我今天想学英语。", ["I", "want", "learn", "English", "today"], []),
      sentence("We go to school in the morning.", "我们早上去学校。", ["we", "go", "school", "in", "morning"], []),
      sentence("She is happy with her family.", "她和家人在一起很开心。", ["she", "is", "happy", "with", "family"], []),
      sentence("They eat food and drink water.", "他们吃东西、喝水。", ["they", "eat", "food", "drink", "water"], []),
      sentence("You can read and write English.", "你可以读写英语。", ["you", "can", "read", "write", "English"], []),
      sentence("He may need help with his phone.", "他的手机可能需要别人帮忙。", ["he", "may", "need", "help", "phone"], []),
      sentence("My friend may come home at night.", "我的朋友晚上可能回家。", ["my", "friend", "may", "come", "home"], []),
      sentence("I like to listen and speak.", "我喜欢听和说。", ["I", "like", "listen", "speak"], []),
    ],
    2: [
      sentence("These two men went out first.", "这两个男人先出去了。", ["these", "two", "men", "went", "out"], []),
      sentence("Some people came here after the war.", "战争结束后，一些人来到了这里。", ["some", "people", "came", "here", "war"], []),
      sentence("He looked down and felt something.", "他向下看，感觉到了什么。", ["looked", "down", "felt", "something"], []),
      sentence("This old house has one room.", "这座老房子有一个房间。", ["old", "house", "has", "room"], []),
      sentence("She asked why he left.", "她问他为什么离开。", ["asked", "why", "left"], []),
      sentence("Some people thought about life.", "一些人思考了人生。", ["some", "people", "thought", "about", "life"], []),
      sentence("Another state made the same choice.", "另一个州做出了同样的选择。", ["another", "state", "made", "same"], []),
      sentence("How could he know without us?", "没有我们，他怎么会知道？", ["how", "could", "without", "us"], []),
    ],
    3: [
      sentence("The young patient felt less pain.", "这位年轻病人感觉疼痛减轻了。", ["young", "patient", "less"], []),
      sentence("The officer told the soldiers to wait.", "军官让士兵们等待。", ["officer", "told", "soldiers"], []),
      sentence("We found blood on both hands.", "我们发现两只手上都有血。", ["found", "blood", "both", "hands"], []),
      sentence("She gave a small smile.", "她露出了一个浅浅的微笑。", ["gave", "small", "smile"], []),
      sentence("The treatment may cause less pain.", "这种治疗可能会减轻疼痛。", ["treatment", "cause", "less"], []),
      sentence("Several women sat behind the door.", "几位女士坐在门后。", ["several", "women", "sat", "behind", "door"], []),
      sentence("This case is known in the country.", "这个案例在全国都很有名。", ["case", "known", "country"], []),
      sentence("The president passed the new law.", "总统通过了这项新法律。", ["president", "passed", "law"], []),
    ],
    4: [
      sentence("The woman felt pain in her body.", "这位女士感到身体疼痛。", ["woman", "pain", "body"], []),
      sentence("The commander sent four officers south.", "指挥官派了四名军官去南方。", ["commander", "sent", "four", "officers", "south"], []),
      sentence("The public project became important.", "这个公共项目变得很重要。", ["public", "project", "became", "important"], []),
      sentence("The enemy entered the land.", "敌人进入了这片土地。", ["enemy", "entered", "land"], []),
      sentence("The red light is above the table.", "红灯在桌子上方。", ["red", "light", "above", "table"], []),
      sentence("The letter gave a clear example.", "这封信给出了一个清楚的例子。", ["letter", "example"], []),
      sentence("The wound caused nerve pain.", "伤口引起了神经疼痛。", ["wound", "nerve", "pain"], []),
      sentence("We cannot find a different way.", "我们找不到另一种方法。", ["cannot", "find", "different"], []),
    ],
    5: [
      sentence("The children sat together by the fire.", "孩子们一起坐在火边。", ["children", "together", "fire"], []),
      sentence("The road goes north across the field.", "这条路穿过田野向北延伸。", ["road", "north", "across"], []),
      sentence("The crowd heard the news and shouted.", "人群听到消息后喊了起来。", ["crowd", "news", "shouted"], []),
      sentence("The wounded soldier rested in bed.", "受伤的士兵在床上休息。", ["wounded", "bed"], []),
      sentence("The air pressure rose quickly.", "气压迅速上升。", ["air", "pressure", "rose"], []),
      sentence("The king gave military orders.", "国王下达了军事命令。", ["king", "military", "orders"], []),
      sentence("I understood his strange opinion.", "我听懂了他奇怪的观点。", ["understood", "strange", "opinion"], []),
      sentence("Everyone moved forward in peace.", "大家平静地向前走。", ["everyone", "moved", "forward", "peace"], []),
    ],
    6: [
      sentence("The doctor opened the window quickly.", "医生很快打开了窗户。", ["doctor", "opened", "window", "quickly"], []),
      sentence("A soldier returned to the city.", "一名士兵回到了城市。", ["soldier", "returned", "city"], []),
      sentence("The local company began an operation.", "这家本地公司开始了一项行动。", ["local", "company", "operation"], []),
      sentence("She asked hard questions during dinner.", "她在晚餐时问了一些难题。", ["hard", "questions", "dinner"], []),
      sentence("The muscles in his neck felt soft.", "他颈部的肌肉摸起来很柔软。", ["muscles", "neck", "soft"], []),
      sentence("Please turn left at the next street.", "请在下一条街左转。", ["turn", "street"], []),
      sentence("They stopped talking and waited.", "他们停止交谈并等待。", ["stopped", "talking"], []),
      sentence("The daughter had a conversation with the doctor.", "女儿和医生进行了一次交谈。", ["daughter", "conversation", "doctor"], []),
    ],
    7: [
      sentence("The child sat on the ground and cried.", "孩子坐在地上哭了。", ["child", "ground"], []),
      sentence("Her friends listened and smiled.", "她的朋友们听着并笑了。", ["friends", "listened", "smiled"], []),
      sentence("The doctor noticed severe symptoms.", "医生注意到了严重的症状。", ["severe", "symptoms"], []),
      sentence("The boy and girl crossed the bridge.", "男孩和女孩走过了桥。", ["boy", "girl", "bridge"], []),
      sentence("The strong man showed no fear.", "那个强壮的男人没有表现出恐惧。", ["strong", "fear"], []),
      sentence("The court protected civil rights.", "法院保护了公民权利。", ["court", "civil", "rights"], []),
      sentence("The woman wore a thin coat.", "这位女士穿着一件薄外套。", ["thin", "coat"], []),
      sentence("Someone brought fresh food to the village.", "有人给村庄带来了新鲜食物。", ["someone", "fresh", "village"], []),
    ],
    8: [
      sentence("John decided to change the plan.", "约翰决定改变计划。", ["John", "decided", "change"], []),
      sentence("The doctor described the primary causes.", "医生描述了主要原因。", ["described", "primary", "causes"], []),
      sentence("They decided to change the command.", "他们决定更改命令。", ["decided", "change", "command"], []),
      sentence("Independence takes time and hope.", "独立需要时间和希望。", ["independence", "takes", "hope"], []),
      sentence("I am glad the muscle pain can change.", "我很高兴肌肉疼痛能够改变。", ["glad", "muscle", "change"], []),
      sentence("John will appear without doubt.", "毫无疑问，约翰会出现。", ["John", "appear", "doubt"], []),
      sentence("The convention decided on a change.", "大会决定做出改变。", ["convention", "decided", "change"], []),
      sentence("The primary command causes doubt.", "这条主要命令引起了怀疑。", ["primary", "command", "causes", "doubt"], []),
    ],
  };

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
    populateReviewWeekSelect();
    bindNavigation();
    bindPlayer();
    bindDictation();
    bindReview();
    bindListening();
    bindEditor();
    setupSpeechVoices();
    setupVoiceControl();
    renderAll();
    const requestedView = location.hash.replace("#", "");
    if (["home", "dictation", "sentences", "review", "listening"].includes(requestedView)) switchView(requestedView, false);
  }

  function populateDaySelect() {
    const select = $("#daySelect");
    select.innerHTML = data.days.map(({ day }) => {
      const count = getWords(day).length;
      return `<option value="${day}">Day ${day}${count ? ` · ${count} 词` : " · 待添加"}</option>`;
    }).join("");
    select.value = String(state.currentDay);
  }

  function weekRange(week = reviewWeek) {
    const start = (week - 1) * 7 + 1;
    return { start, end: Math.min(start + 6, 365) };
  }

  function wordsForWeek(week = reviewWeek) {
    const { start, end } = weekRange(week);
    const result = [];
    for (let day = start; day <= end; day += 1) {
      getWords(day).forEach((item, index) => result.push({ ...item, day, index }));
    }
    return result;
  }

  function populateReviewWeekSelect() {
    const weeks = Array.from({ length: 53 }, (_, index) => {
      const week = index + 1;
      const { start, end } = weekRange(week);
      const count = wordsForWeek(week).length;
      return { week, start, end, count };
    });
    const reviewOptions = weeks.map(({ week, start, end, count }) => `<option value="${week}">第 ${week} 周 · Day ${start}–${end} · ${count}/105 词</option>`).join("");
    const listeningOptions = weeks.map(({ week, start, end, count }) => `<option value="${week}">Week ${week} · Day ${start}–${end} · ${count}/105 words</option>`).join("");
    const reviewSelect = $("#reviewWeekSelect");
    const listeningSelect = $("#listeningWeekSelect");
    if (reviewSelect) {
      reviewSelect.innerHTML = reviewOptions;
      reviewSelect.value = String(reviewWeek);
    }
    if (listeningSelect) {
      listeningSelect.innerHTML = listeningOptions;
      listeningSelect.value = String(listeningWeek);
    }
  }

  function bindNavigation() {
    $$(".nav-btn").forEach((button) => button.addEventListener("click", () => {
      if (button.dataset.view === "sentences") sentenceScope = "day";
      if (button.dataset.view === "listening") listeningWeek = reviewWeek;
      switchView(button.dataset.view);
    }));
    $(".brand").addEventListener("click", (event) => { event.preventDefault(); switchView("home"); });
    $("#daySelect").addEventListener("change", (event) => changeDay(Number(event.target.value)));
    $("#prevDay").addEventListener("click", () => changeDay(Math.max(1, state.currentDay - 1)));
    $("#nextDay").addEventListener("click", () => changeDay(Math.min(365, state.currentDay + 1)));
  }

  function switchView(view, updateHash = true) {
    if (view !== currentView && activePlayback) stopPlayback(false);
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
    if (view === "listening") renderListening();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function changeDay(day) {
    if (!Number.isFinite(day) || day < 1 || day > 365) return;
    stopPlayback(false);
    state.currentDay = day;
    reviewWeek = Math.ceil(day / 7);
    listeningWeek = reviewWeek;
    currentWordIndex = 0;
    dictationIndex = 0;
    saveState();
    $("#daySelect").value = String(day);
    if ($("#reviewWeekSelect")) $("#reviewWeekSelect").value = String(reviewWeek);
    if ($("#listeningWeekSelect")) $("#listeningWeekSelect").value = String(listeningWeek);
    renderAll();
  }

  function renderAll() {
    renderDayBar();
    renderStats();
    renderWordList();
    renderDictation();
    renderSentences();
    renderReview();
    renderListening();
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
    $$(".loop-word", list).forEach((button) => button.addEventListener("click", () => {
      if (button.classList.contains("active")) stopPlayback();
      else playWordLoop(state.currentDay, Number(button.dataset.index), button);
    }));
    $$(".status-select", list).forEach((select) => select.addEventListener("change", () => {
      setWordStatus(state.currentDay, Number(select.dataset.index), select.value);
    }));
  }

  function wordCardHTML(item, day, index, compact = false) {
    const status = getStatus(day, index);
    const mistakes = getMistakes(day, index);
    return `<article class="word-card${!compact && day === state.currentDay && index === currentWordIndex ? " current" : ""}" data-status="${status}" data-day="${day}" data-index="${index}">
      ${mistakes ? `<span class="mistake-badge">易错 ${mistakes}</span>` : ""}
      <div class="word-card-top">
        <div><span class="word-number">${compact ? `Day ${day}` : String(index + 1).padStart(2, "0")}</span><h2 class="word-title">${escapeHTML(item.english)}</h2><span class="word-phonetic">${escapeHTML(item.phonetic || "点击喇叭听发音")}</span></div>
        <div class="word-audio-actions">
          <button class="speak-word" data-day="${day}" data-index="${index}" aria-label="播放一次 ${escapeHTML(item.english)}">🔊</button>
          <button class="loop-word" data-day="${day}" data-index="${index}" aria-label="循环播放 ${escapeHTML(item.english)}">↻ <span>循环</span></button>
        </div>
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
    $("#englishTone").value = state.englishTone || "natural";
    $("#englishTone").addEventListener("change", (event) => {
      state.englishTone = event.target.value;
      saveState();
      previewEnglishVoice();
    });
    $("#englishVoice").addEventListener("change", (event) => {
      state.englishVoice = event.target.value;
      saveState();
      previewEnglishVoice();
    });
    $("#chineseTone").value = state.chineseTone || "clear";
    $("#chineseTone").addEventListener("change", (event) => {
      state.chineseTone = event.target.value;
      saveState();
      previewChineseVoice("中文语调已更换");
    });
    $("#chineseVoice").addEventListener("change", (event) => {
      state.chineseVoice = event.target.value;
      saveState();
      previewChineseVoice("中文声音已更换");
    });
  }

  function speechRate() { return Number($("#speechRate").value) || 1; }
  function listeningRate() { return Math.min(1, Math.max(.6, Number(state.listeningRate) || .78)); }

  function speechSupported() {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function setupSpeechVoices() {
    if (!speechSupported()) return;
    const refresh = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) {
        speechVoices = voices;
        renderEnglishVoiceOptions();
        renderChineseVoiceOptions();
      }
    };
    refresh();
    window.speechSynthesis.addEventListener?.("voiceschanged", refresh);
    setTimeout(refresh, 250);
    setTimeout(refresh, 1000);
  }

  function voiceId(voice) {
    return voice.voiceURI || `${voice.name}::${voice.lang}`;
  }

  function mandarinVoices() {
    return speechVoices.filter((voice) => {
      const language = String(voice.lang || "").toLowerCase();
      const name = String(voice.name || "").toLowerCase();
      return language.startsWith("zh-") && !language.startsWith("zh-hk") && !/cantonese|yue|香港|粤|粵/.test(name);
    });
  }

  function englishVoices() {
    return speechVoices.filter((voice) => String(voice.lang || "").toLowerCase().startsWith("en-"));
  }

  function renderEnglishVoiceOptions() {
    const select = $("#englishVoice");
    if (!select) return;
    const voices = englishVoices();
    select.innerHTML = [
      '<option value="auto">美式英语（自动）</option>',
      ...voices.map((voice) => `<option value="${escapeHTML(voiceId(voice))}">${escapeHTML(voice.name)} · ${escapeHTML(voice.lang)}</option>`),
    ].join("");
    const available = voices.some((voice) => voiceId(voice) === state.englishVoice);
    if (state.englishVoice !== "auto" && !available) state.englishVoice = "auto";
    select.value = state.englishVoice || "auto";
  }

  function renderChineseVoiceOptions() {
    const select = $("#chineseVoice");
    if (!select) return;
    const voices = mandarinVoices();
    select.innerHTML = [
      '<option value="auto">标准普通话（自动）</option>',
      ...voices.map((voice) => `<option value="${escapeHTML(voiceId(voice))}">${escapeHTML(voice.name)} · ${escapeHTML(voice.lang)}</option>`),
    ].join("");
    const available = voices.some((voice) => voiceId(voice) === state.chineseVoice);
    if (state.chineseVoice !== "auto" && !available) state.chineseVoice = "auto";
    select.value = state.chineseVoice || "auto";
  }

  function voiceFor(language) {
    const requested = language.toLowerCase();
    const base = requested.split("-")[0];
    if (base === "en" && state.englishVoice && state.englishVoice !== "auto") {
      const selected = speechVoices.find((voice) => voiceId(voice) === state.englishVoice);
      if (selected) return selected;
    }
    if (base === "zh" && state.chineseVoice && state.chineseVoice !== "auto") {
      const selected = speechVoices.find((voice) => voiceId(voice) === state.chineseVoice);
      if (selected) return selected;
    }
    const related = speechVoices.filter((voice) => {
      const voiceLanguage = String(voice.lang || "").toLowerCase();
      return voiceLanguage === base || voiceLanguage.startsWith(`${base}-`);
    });
    const scored = related.map((voice) => {
      const voiceLanguage = String(voice.lang || "").toLowerCase();
      const voiceName = String(voice.name || "").toLowerCase();
      let score = voiceLanguage === requested ? 100 : 30;
      if (voice.localService) score += 6;
      if (voice.default) score += 3;
      if (base === "zh") {
        if (/^zh(?:-hans)?-cn\b/.test(voiceLanguage)) score += 130;
        else if (voiceLanguage.startsWith("zh-sg")) score += 90;
        else if (voiceLanguage.startsWith("zh-tw")) score += 35;
        else if (voiceLanguage.startsWith("zh-hk")) score -= 90;
        if (/xiaoxiao|xiaoyi|xiaohan|xiaomeng|yunxi|yunyang|tingting|ting-ting|mandarin|普通话|普通話|中文.*中国|chinese.*china/.test(voiceName)) score += 85;
        if (/cantonese|yue|hong kong|香港|粤|粵/.test(voiceName)) score -= 260;
      } else if (base === "en") {
        if (voiceLanguage === "en-us") score += 45;
        if (/samantha|ava|aria|jenny|google.*us english/.test(voiceName)) score += 25;
      }
      return { voice, score };
    });
    scored.sort((left, right) => right.score - left.score);
    return scored[0]?.voice || null;
  }

  function speechText(text, language) {
    const original = String(text || "").trim();
    if (!language.startsWith("zh")) return original;
    const cleaned = original
      .replace(/（[^）]*）|\([^)]*\)/g, "")
      .replace(/\b(?:pl|abbr|adv|adj|prep|pron|n|v)\.\s*/gi, "")
      .replace(/[…\.]{2,}/g, "，")
      .replace(/[|｜/]/g, "；")
      .replace(/\s+/g, "")
      .replace(/^[；，、]+|[；，、]+$/g, "");
    const meanings = cleaned.split(/[；;]/).map((part) => part.trim()).filter(Boolean);
    return meanings.slice(0, 2).join("，") || original;
  }

  function createUtterance(text, language) {
    const utterance = new SpeechSynthesisUtterance(speechText(text, language));
    const voice = voiceFor(language);
    utterance.lang = voice?.lang || language;
    const tone = {
      clear: { rate: .72, pitch: 1 },
      soft: { rate: .78, pitch: 1.06 },
      low: { rate: .68, pitch: .92 },
    }[state.chineseTone] || { rate: .72, pitch: 1 };
    const englishTone = {
      natural: { rate: .94, pitch: 1 },
      clear: { rate: .82, pitch: 1.03 },
      slow: { rate: .7, pitch: .98 },
    }[state.englishTone] || { rate: .94, pitch: 1 };
    utterance.rate = language.startsWith("zh") ? Math.max(.62, speechRate() * tone.rate) : Math.max(.62, speechRate() * englishTone.rate);
    utterance.pitch = language.startsWith("zh") ? tone.pitch : englishTone.pitch;
    utterance.volume = 1;
    if (voice) utterance.voice = voice;
    return utterance;
  }

  async function previewEnglishVoice() {
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("voice-preview");
    showToast("英语语调已更换");
    await speak("Hello. I like English.", "en-US", token);
    if (token === playbackToken) stopPlayback(false);
  }

  async function previewChineseVoice(message) {
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("voice-preview");
    showToast(message);
    await speak("你好，这是新的普通话声音。", "zh-CN", token);
    if (token === playbackToken) stopPlayback(false);
  }

  function speak(text, language, token, rateMultiplier = 1) {
    return new Promise((resolve) => {
      if (!speechSupported() || token !== playbackToken) return resolve();
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) speechVoices = voices;
      const utterance = createUtterance(text, language);
      utterance.rate = Math.max(.5, utterance.rate * rateMultiplier);
      activeUtterances.push(utterance);
      const finish = () => {
        activeUtterances = activeUtterances.filter((item) => item !== utterance);
        resolve();
      };
      utterance.onend = finish;
      utterance.onerror = finish;
      window.speechSynthesis.speak(utterance);
    });
  }

  function speakQueuedPair(english, chinese, token) {
    return new Promise((resolve) => {
      if (!speechSupported() || token !== playbackToken) return resolve();
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) speechVoices = voices;
      const utterances = [createUtterance(english, "en-US"), createUtterance(chinese, "zh-CN")];
      activeUtterances.push(...utterances);
      let remaining = utterances.length;
      let finished = false;
      const timeout = setTimeout(() => finish(true), 15000);
      function finish(force = false) {
        if (finished) return;
        if (!force) remaining -= 1;
        if (!force && remaining > 0) return;
        finished = true;
        clearTimeout(timeout);
        activeUtterances = activeUtterances.filter((item) => !utterances.includes(item));
        resolve();
      }
      utterances.forEach((utterance) => {
        utterance.onend = () => finish();
        utterance.onerror = () => finish();
        window.speechSynthesis.speak(utterance);
      });
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
    if (withChinese) await speakQueuedPair(item.english, item.chinese, token);
    else await speak(item.english, "en-US", token);
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
    updatePlayer(item);
    if (day === state.currentDay) {
      currentWordIndex = index;
      updateCurrentCard(currentView === "home");
    }
    if (currentView === "review") highlightReviewCard(day, index, true);
    markActivity(day);
    if (getStatus(day, index) === "unlearned") state.statuses[wordKey(day, index)] = "learning";
    saveState();
    await speakWordPair(item, token, true);
    if (token === playbackToken) stopPlayback(false);
    renderDayBar(); renderStats(); renderWordList();
    if (currentView === "review") renderReview();
  }

  async function playWordLoop(day, index, button) {
    const words = getWords(day);
    const item = words[index];
    if (!item) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("word-loop");
    button.classList.add("active");
    button.innerHTML = "■ <span>停止</span>";
    const card = button.closest(".word-card");
    $$(".word-card").forEach((candidate) => candidate.classList.toggle("current", candidate === card));
    scrollCardIntoView(card);
    if (day === state.currentDay) {
      currentWordIndex = index;
      updatePlayer(item);
    }
    markActivity(day);
    if (getStatus(day, index) === "unlearned") {
      state.statuses[wordKey(day, index)] = "learning";
      if (card) {
        card.dataset.status = "learning";
        const select = $(".status-select", card);
        if (select) select.value = "learning";
      }
    }
    saveState();
    renderDayBar();
    renderStats();
    while (token === playbackToken) {
      await speakWordPair(item, token, true);
      if (token === playbackToken) await wait(900 / speechRate(), token);
    }
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
      updateCurrentCard(true);
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
    updateCurrentCard(currentView === "home");
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
    activeUtterances = [];
    $(".player-card")?.classList.remove("playing");
    $$(".sentence-loop").forEach((button) => {
      button.classList.remove("active");
      button.innerHTML = "↻ <span>循环播放</span>";
    });
    $$(".weekly-sentence-loop").forEach((button) => {
      button.classList.remove("active");
      button.innerHTML = button.closest("#view-listening") ? "↻ <span>Loop</span>" : "↻ <span>循环播放</span>";
    });
    $$(".loop-word").forEach((button) => {
      button.classList.remove("active");
      button.innerHTML = "↻ <span>循环</span>";
    });
    $$(".sentence-card").forEach((card) => card.classList.remove("current"));
    $$(".week-focus-word").forEach((word) => word.classList.remove("is-speaking"));
    $$("#reviewList .word-card").forEach((card) => card.classList.remove("current"));
    const sentenceNowPlaying = $("#sentenceNowPlaying");
    if (sentenceNowPlaying) sentenceNowPlaying.hidden = true;
    const allSentencesButton = $("#playAllSentences");
    if (allSentencesButton) {
      allSentencesButton.classList.remove("active");
      allSentencesButton.textContent = "▶ 循环播放本组";
    }
    const reviewButton = $("#playReview");
    if (reviewButton) {
      reviewButton.classList.remove("active");
      reviewButton.textContent = "▶ 连续播放本周";
    }
    const reviewSentencesButton = $("#playReviewSentences");
    if (reviewSentencesButton) {
      reviewSentencesButton.classList.remove("active");
      reviewSentencesButton.textContent = "▶ 连续播放句子";
    }
    const listeningSentencesButton = $("#playListeningSentences");
    if (listeningSentencesButton) {
      listeningSentencesButton.classList.remove("active");
      listeningSentencesButton.textContent = "▶ Play all";
    }
    ["#reviewSentenceNowPlaying", "#listeningNowPlaying"].forEach((selector) => {
      const panel = $(selector);
      if (panel) panel.hidden = true;
    });
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

  function scrollCardIntoView(card) {
    if (!card || !card.isConnected) return;
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    requestAnimationFrame(() => card.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center", inline: "nearest" }));
  }

  function updateCurrentCard(scroll = false) {
    let activeCard = null;
    $$("#wordList .word-card").forEach((card) => {
      const active = Number(card.dataset.index) === currentWordIndex;
      card.classList.toggle("current", active);
      if (active) activeCard = card;
    });
    if (scroll && currentView === "home") scrollCardIntoView(activeCard);
  }

  function highlightReviewCard(day, index, scroll = false) {
    let activeCard = null;
    $$("#reviewList .word-card").forEach((card) => {
      const active = Number(card.dataset.day) === day && Number(card.dataset.index) === index;
      card.classList.toggle("current", active);
      if (active) activeCard = card;
    });
    if (scroll && currentView === "review") scrollCardIntoView(activeCard);
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

  function shortMeaning(chinese) {
    return String(chinese || "")
      .replace(/（[^）]*）|\([^)]*\)/g, "")
      .replace(/\b(?:pl|abbr|adv|adj|prep|pron|n|v)\.\s*/gi, "")
      .split(/[；;]/)[0]
      .trim();
  }

  function renderSentences() {
    const currentWords = sentenceScope === "week" ? wordsForWeek(reviewWeek) : getWords();
    const list = $("#sentenceList");
    const empty = $("#sentenceEmpty");
    const range = weekRange(reviewWeek);
    const weekly = sentenceScope === "week";
    $("#sentenceEyebrow").textContent = weekly ? `第 ${reviewWeek} 周 · ${currentWords.length}/105 词` : "组句练习";
    $("#sentenceHeading").textContent = weekly ? `Day ${range.start}–${range.end} 本周组句` : "把会的词连起来";
    $("#sentenceHelp").textContent = weekly
      ? "用本周词汇生成简单句；每句都能播放，也能整组循环。"
      : "每句都能单独播放，也可以把本组句子一直循环播放。";
    if (!currentWords.length) {
      list.innerHTML = "";
      list.hidden = true;
      empty.hidden = false;
      $("#sentenceEmpty h2").textContent = weekly ? "这一周还没有单词" : "先添加今天的单词";
      $("#sentenceEmpty p").textContent = weekly ? "选择有词汇的学习周，再开始组句练习。" : "有了单词，就可以开始组句练习。";
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
    if (weekly) {
      const weeklyExamples = currentWords.map((item) => sentence(
        `I am learning the word “${item.english}”.`,
        `我正在学习“${shortMeaning(item.chinese) || item.chinese}”这个词。`,
        [item.english],
        [["I am learning", "我正在学习"], [item.english, shortMeaning(item.chinese) || item.chinese]],
      ));
      candidates = [...candidates.slice(0, 4), ...weeklyExamples, ...candidates.slice(4)];
    }
    if (!candidates.length) candidates = currentWords.slice(0, 6).map((item) => sentence(
      `I am learning the word “${item.english}”.`,
      `我正在学习“${item.chinese}”这个词。`,
      [item.english],
      [["I am learning", "我正在学习"], [item.english, item.chinese]],
    ));
    const amount = Math.min(weekly ? 8 : 5, candidates.length);
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
    showPlayingSentence(item, button.closest(".sentence-card"), loop ? "正在循环播放这句话" : "正在播放这句话");
    do {
      await speakQueuedPair(item.english, item.chinese, token);
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
        showPlayingSentence(item, $$("#sentenceList .sentence-card")[index], sentenceScope === "week" ? "正在循环播放本周句子" : "正在循环播放本组");
        await speakQueuedPair(item.english, item.chinese, token);
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
    scrollCardIntoView(card);
  }

  function weeklyFocusWords(item, week) {
    const available = new Map(wordsForWeek(week).map((word) => [word.english.toLowerCase(), word]));
    return item.focus
      .map((word) => available.get(word.toLowerCase()))
      .filter(Boolean)
      .slice(0, 5);
  }

  function weeklySentenceEnglishHTML(item, week) {
    const focus = new Set(weeklyFocusWords(item, week).map((word) => word.english.toLowerCase()));
    const parts = String(item.english).match(/[A-Za-z]+(?:['’][A-Za-z]+)?|[^A-Za-z]+/g) || [item.english];
    return parts.map((part) => {
      const escaped = escapeHTML(part);
      return focus.has(part.toLowerCase()) ? `<mark class="week-focus-word">${escaped}</mark>` : escaped;
    }).join("");
  }

  function weeklyFocusListHTML(item, week) {
    return weeklyFocusWords(item, week).map((word) => `<span><b>${escapeHTML(word.english)}</b><small>${escapeHTML(shortMeaning(word.chinese) || word.chinese)}</small></span>`).join("");
  }

  function weeklySentencesForWeek(week, offset = 0) {
    const words = wordsForWeek(week);
    if (words.length < 2) return [];
    const available = new Set(words.map((word) => word.english.toLowerCase()));
    const curated = (weeklySentenceLibrary[week] || []).filter((item) => {
      const focus = item.focus.filter((word) => available.has(word.toLowerCase()));
      return focus.length >= 2 && focus.length === item.focus.length;
    });
    const fallback = [];
    const usedPairs = new Set();
    for (let index = 0; index < words.length && fallback.length < 8; index += 2) {
      const first = words[index % words.length];
      const second = words[(index + 1) % words.length];
      if (!first || !second || first.english.toLowerCase() === second.english.toLowerCase()) continue;
      const key = `${first.english.toLowerCase()}:${second.english.toLowerCase()}`;
      if (usedPairs.has(key)) continue;
      usedPairs.add(key);
      fallback.push(sentence(
        `Today I am learning “${first.english}” and “${second.english}”.`,
        `我今天在学习“${shortMeaning(first.chinese) || first.chinese}”和“${shortMeaning(second.chinese) || second.chinese}”这两个词。`,
        [first.english, second.english],
        [],
      ));
    }
    const candidates = curated.length >= 4 ? curated : [...curated, ...fallback];
    const amount = Math.min(8, candidates.length);
    const start = candidates.length ? Number(offset || 0) % candidates.length : 0;
    return Array.from({ length: amount }, (_, index) => candidates[(start + index) % candidates.length]);
  }

  function weeklySentenceCardHTML(item, index, week, englishOnly = false) {
    const controls = englishOnly
      ? `<button class="weekly-sentence-speak" data-index="${index}" aria-label="Play sentence once">🔊 <span>Play once</span></button><button class="weekly-sentence-loop" data-index="${index}" aria-label="Loop this sentence">↻ <span>Loop</span></button>`
      : `<button class="weekly-sentence-speak" data-index="${index}" aria-label="播放一次句子">🔊 <span>播放一次</span></button><button class="weekly-sentence-loop" data-index="${index}" aria-label="循环播放句子">↻ <span>循环播放</span></button>`;
    return `<article class="sentence-card weekly-sentence-card" data-sentence-index="${index}">
      <div class="sentence-top">
        <div><span class="sentence-number">${englishOnly ? `Sentence ${String(index + 1).padStart(2, "0")}` : `句子 ${String(index + 1).padStart(2, "0")}`}</span><h2>${weeklySentenceEnglishHTML(item, week)}</h2>${englishOnly ? "" : `<p class="sentence-zh">${escapeHTML(item.chinese)}</p>`}</div>
        <div class="sentence-controls">${controls}</div>
      </div>
      ${englishOnly ? "" : `<div class="weekly-focus-list"><strong>本周重点单词</strong><div>${weeklyFocusListHTML(item, week)}</div></div>`}
    </article>`;
  }

  function renderWeeklySentenceList({ context, week, offset, englishOnly }) {
    const items = weeklySentencesForWeek(week, offset);
    const list = context === "review" ? $("#reviewSentenceList") : $("#listeningSentenceList");
    const empty = context === "review" ? $("#reviewSentenceEmpty") : $("#listeningSentenceEmpty");
    list.hidden = items.length === 0;
    empty.hidden = items.length !== 0;
    list.innerHTML = items.map((item, index) => weeklySentenceCardHTML(item, index, week, englishOnly)).join("");
    $$(".weekly-sentence-speak", list).forEach((button) => button.addEventListener("click", () => {
      playWeeklySentence(items[Number(button.dataset.index)], false, button, context, week, englishOnly);
    }));
    $$(".weekly-sentence-loop", list).forEach((button) => button.addEventListener("click", () => {
      if (button.classList.contains("active")) stopPlayback();
      else playWeeklySentence(items[Number(button.dataset.index)], true, button, context, week, englishOnly);
    }));
    return items;
  }

  function showWeeklySentencePlaying(item, card, context, week, englishOnly, label) {
    const list = context === "review" ? $("#reviewSentenceList") : $("#listeningSentenceList");
    const panel = context === "review" ? $("#reviewSentenceNowPlaying") : $("#listeningNowPlaying");
    const labelElement = context === "review" ? $("#reviewSentenceNowLabel") : $("#listeningNowLabel");
    const englishElement = context === "review" ? $("#reviewSentenceNowEnglish") : $("#listeningNowEnglish");
    panel.hidden = false;
    labelElement.textContent = label;
    englishElement.innerHTML = weeklySentenceEnglishHTML(item, week);
    if (!englishOnly) $("#reviewSentenceNowChinese").textContent = item.chinese;
    $$(".week-focus-word", panel).forEach((word) => word.classList.add("is-speaking"));
    $$(".sentence-card", list).forEach((candidate) => {
      const current = candidate === card;
      candidate.classList.toggle("current", current);
      $$(".week-focus-word", candidate).forEach((word) => word.classList.toggle("is-speaking", current));
    });
    scrollCardIntoView(card);
  }

  async function speakWeeklySentence(item, token, englishOnly) {
    if (englishOnly) await speak(item.english, "en-US", token, listeningRate());
    else await speakQueuedPair(item.english, item.chinese, token);
  }

  async function playWeeklySentence(item, loop, button, context, week, englishOnly) {
    if (!item) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback(`${context}-sentence${loop ? "-loop" : ""}`);
    const card = button.closest(".sentence-card");
    markActivity(weekRange(week).start);
    if (loop) {
      button.classList.add("active");
      button.innerHTML = englishOnly ? "■ <span>Stop</span>" : "■ <span>停止循环</span>";
    }
    showWeeklySentencePlaying(item, card, context, week, englishOnly, englishOnly ? "Now playing" : loop ? "正在循环播放这句话" : "正在播放这句话");
    do {
      await speakWeeklySentence(item, token, englishOnly);
      if (loop) await wait(850 / speechRate(), token);
    } while (loop && token === playbackToken);
    if (token === playbackToken) stopPlayback(false);
  }

  async function playWeeklySentenceGroup(items, button, context, week, englishOnly) {
    if (!items.length) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback(`${context}-sentence-group`);
    const list = context === "review" ? $("#reviewSentenceList") : $("#listeningSentenceList");
    button.classList.add("active");
    button.textContent = englishOnly ? "■ Stop" : "■ 停止播放";
    markActivity(weekRange(week).start);
    while (token === playbackToken) {
      for (const [index, item] of items.entries()) {
        if (token !== playbackToken) break;
        showWeeklySentencePlaying(item, $$(".sentence-card", list)[index], context, week, englishOnly, englishOnly ? "Now playing" : "正在连续播放本周句子");
        await speakWeeklySentence(item, token, englishOnly);
        await wait(650 / speechRate(), token);
      }
      if (token === playbackToken) await wait(950 / speechRate(), token);
    }
  }

  function setReviewMode(mode) {
    if (!["words", "sentences"].includes(mode)) return;
    stopPlayback(false);
    reviewMode = mode;
    $$(".review-mode-btn").forEach((button) => {
      const active = button.dataset.reviewMode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    $("#reviewWordsPanel").hidden = mode !== "words";
    $("#reviewSentencesPanel").hidden = mode !== "sentences";
    renderReview();
  }

  function bindReview() {
    $("#reviewWeekSelect").addEventListener("change", (event) => {
      stopPlayback(false);
      reviewWeek = Number(event.target.value) || 1;
      state.reviewSentenceOffset = 0;
      saveState();
      renderReview();
    });
    $$(".review-mode-btn").forEach((button) => button.addEventListener("click", () => setReviewMode(button.dataset.reviewMode)));
    $("#makeWeekSentences").addEventListener("click", () => {
      setReviewMode("sentences");
    });
    $("#openEnglishListening").addEventListener("click", () => {
      stopPlayback(false);
      listeningWeek = reviewWeek;
      $("#listeningWeekSelect").value = String(listeningWeek);
      switchView("listening");
    });
    $$(".filter-btn").forEach((button) => button.addEventListener("click", () => {
      stopPlayback(false);
      reviewFilter = button.dataset.filter;
      $$(".filter-btn").forEach((item) => item.classList.toggle("active", item === button));
      renderReview();
    }));
    $("#playReview").addEventListener("click", () => {
      if (activePlayback === "review") stopPlayback();
      else playReviewWords();
    });
    $("#playReviewSentences").addEventListener("click", () => {
      if (activePlayback === "review-sentence-group") stopPlayback();
      else playWeeklySentenceGroup(weeklySentencesForWeek(reviewWeek, state.reviewSentenceOffset), $("#playReviewSentences"), "review", reviewWeek, false);
    });
    $("#refreshReviewSentences").addEventListener("click", () => {
      stopPlayback(false);
      state.reviewSentenceOffset = Number(state.reviewSentenceOffset || 0) + 1;
      saveState();
      renderReviewSentences();
    });
  }

  function bindListening() {
    $("#listeningRate").value = String(listeningRate());
    $("#listeningRate").addEventListener("change", (event) => {
      stopPlayback(false);
      state.listeningRate = Number(event.target.value) || .78;
      saveState();
    });
    $("#listeningWeekSelect").addEventListener("change", (event) => {
      stopPlayback(false);
      listeningWeek = Number(event.target.value) || 1;
      state.listeningSentenceOffset = 0;
      saveState();
      renderListening();
    });
    $("#playListeningSentences").addEventListener("click", () => {
      if (activePlayback === "listening-sentence-group") stopPlayback();
      else playWeeklySentenceGroup(weeklySentencesForWeek(listeningWeek, state.listeningSentenceOffset), $("#playListeningSentences"), "listening", listeningWeek, true);
    });
    $("#refreshListeningSentences").addEventListener("click", () => {
      stopPlayback(false);
      state.listeningSentenceOffset = Number(state.listeningSentenceOffset || 0) + 1;
      saveState();
      renderListening();
    });
  }

  function reviewWords() {
    return wordsForWeek(reviewWeek).filter((item) => {
      const { day, index } = item;
      const status = getStatus(day, index);
      const mistakes = getMistakes(day, index);
      const matches = reviewFilter === "mastered" ? status === "mastered"
        : reviewFilter === "mistakes" ? mistakes > 0
        : true;
      return matches;
    });
  }

  function renderReview() {
    $("#reviewWeekSelect").value = String(reviewWeek);
    $$(".review-mode-btn").forEach((button) => {
      const active = button.dataset.reviewMode === reviewMode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    $("#reviewWordsPanel").hidden = reviewMode !== "words";
    $("#reviewSentencesPanel").hidden = reviewMode !== "sentences";
    if (reviewMode === "sentences") {
      renderReviewSentences();
      return;
    }
    const words = reviewWords();
    const list = $("#reviewList");
    const range = weekRange(reviewWeek);
    const weeklyTotal = wordsForWeek(reviewWeek).length;
    const label = reviewFilter === "mastered" ? "已掌握" : reviewFilter === "mistakes" ? "易错词" : "本周全部";
    $("#reviewSummary").textContent = `第 ${reviewWeek} 周 · Day ${range.start}–${range.end} · 显示 ${words.length}/${weeklyTotal || 0} 个词 · ${label}`;
    list.hidden = words.length === 0;
    $("#reviewEmpty").hidden = words.length !== 0;
    $("#playReview").disabled = words.length === 0;
    list.innerHTML = words.map((item) => wordCardHTML(item, item.day, item.index, true)).join("");
    $$(".speak-word", list).forEach((button) => button.addEventListener("click", () => playSingleWord(Number(button.dataset.day), Number(button.dataset.index))));
    $$(".loop-word", list).forEach((button) => button.addEventListener("click", () => {
      if (button.classList.contains("active")) stopPlayback();
      else playWordLoop(Number(button.dataset.day), Number(button.dataset.index), button);
    }));
    $$(".status-select", list).forEach((select) => select.addEventListener("change", () => {
      setWordStatus(Number(select.dataset.day), Number(select.dataset.index), select.value);
    }));
  }

  function renderReviewSentences() {
    const range = weekRange(reviewWeek);
    const weeklyTotal = wordsForWeek(reviewWeek).length;
    const items = renderWeeklySentenceList({
      context: "review",
      week: reviewWeek,
      offset: state.reviewSentenceOffset,
      englishOnly: false,
    });
    $("#reviewSentenceSummary").textContent = `第 ${reviewWeek} 周 · Day ${range.start}–${range.end} · ${weeklyTotal}/105 个词 · 每句自然使用 2～5 个本周重点单词`;
    $("#playReviewSentences").disabled = items.length === 0;
    $("#refreshReviewSentences").disabled = items.length < 2;
  }

  function renderListening() {
    const select = $("#listeningWeekSelect");
    if (select) select.value = String(listeningWeek);
    $("#listeningRate").value = String(listeningRate());
    const items = renderWeeklySentenceList({
      context: "listening",
      week: listeningWeek,
      offset: state.listeningSentenceOffset,
      englishOnly: true,
    });
    $("#playListeningSentences").disabled = items.length === 0;
    $("#refreshListeningSentences").disabled = items.length < 2;
  }

  async function playReviewWords() {
    const words = reviewWords();
    if (!words.length) return showToast("当前筛选下没有复习词");
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("review");
    const button = $("#playReview");
    button.classList.add("active");
    button.textContent = "■ 停止循环";
    let index = 0;
    const markedDays = new Set();
    while (token === playbackToken) {
      const item = words[index];
      updatePlayer(item);
      highlightReviewCard(item.day, item.index, true);
      if (!markedDays.has(item.day)) {
        markActivity(item.day);
        markedDays.add(item.day);
      }
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
    populateReviewWeekSelect();
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
