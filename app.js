(function () {
  "use strict";

  const STORAGE_KEY = "english365-progress-v1";
  const LEARNED_THROUGH_DAY = 11;
  const data = window.ENGLISH_365_DATA;
  const defaultState = {
    currentDay: LEARNED_THROUGH_DAY,
    studyDay: LEARNED_THROUGH_DAY,
    customDays: {},
    statuses: {},
    mistakes: {},
    dictation: {},
    touchedDays: {},
    activityDates: {},
    sentenceOffset: 0,
    reviewSentenceOffset: 0,
    listeningSentenceOffset: 0,
    reviewEndDays: {},
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
  let playbackToken = 0;
  let activePlayback = null;
  let isPaused = false;
  let toastTimer = null;
  let recognition = null;
  let voiceActive = false;
  let speechVoices = [];
  let activeUtterances = [];
  let deferredInstallPrompt = null;

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

  function recordedStudyDay(saved) {
    const learnedDays = [LEARNED_THROUGH_DAY];
    Object.entries(saved?.statuses || {}).forEach(([key, status]) => {
      if (status === "learning" || status === "mastered") learnedDays.push(Number(key.split(":")[0]));
    });
    Object.entries(saved?.dictation || {}).forEach(([day, result]) => {
      if (Number(result?.total) > 0) learnedDays.push(Number(day));
    });
    const latest = Math.max(...learnedDays.filter(Number.isFinite));
    return Math.max(1, Math.min(365, latest));
  }

  function applyLearnedThroughBaseline(merged, previousBaseline = 0) {
    if (Number(previousBaseline || 0) >= LEARNED_THROUGH_DAY) return merged;
    merged.statuses = { ...(merged.statuses || {}) };
    merged.touchedDays = { ...(merged.touchedDays || {}) };
    for (let day = 1; day <= LEARNED_THROUGH_DAY; day += 1) {
      merged.touchedDays[day] = true;
      (data.days[day - 1]?.words || []).forEach((_, index) => {
        const key = `${day}:${index}`;
        if (merged.statuses[key] !== "mastered") merged.statuses[key] = "learning";
      });
    }
    merged.learnedThroughBaseline = LEARNED_THROUGH_DAY;
    return merged;
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      const merged = { ...defaultState, ...(saved || {}) };
      const studyDay = Number.isFinite(Number(saved?.studyDay))
        ? Number(saved.studyDay)
        : recordedStudyDay(saved);
      merged.studyDay = Math.max(LEARNED_THROUGH_DAY, Math.min(365, studyDay));
      merged.currentDay = merged.studyDay;
      return applyLearnedThroughBaseline(merged, saved?.learnedThroughBaseline);
    } catch (_) {
      return applyLearnedThroughBaseline({
        ...defaultState,
        statuses: {},
        touchedDays: {},
      });
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

  function isStandaloneApp() {
    return Boolean(window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true);
  }

  function showInstallHelp() {
    const dialog = $("#installHelp");
    const title = $("#installHelpTitle");
    const steps = $("#installHelpSteps");
    const isiPhone = /iPhone|iPad|iPod/i.test(window.navigator.userAgent || "");
    const isLocalFile = window.location.protocol === "file:";
    if (isLocalFile) {
      title.textContent = "请先打开正式线上网站";
      steps.innerHTML = "<li>在手机浏览器打开英语 365 的正式网址。</li><li>再点页面上方的“安装 App”。</li>";
    } else if (isiPhone) {
      title.textContent = "在 iPhone 上安装";
      steps.innerHTML = "<li>使用 Safari 打开这个网站。</li><li>点击底部的“分享”按钮。</li><li>向下找到“添加到主屏幕”，再点“添加”。</li>";
    } else {
      title.textContent = "安装到手机桌面";
      steps.innerHTML = "<li>打开浏览器菜单。</li><li>选择“安装应用”或“添加到主屏幕”。</li><li>确认安装，之后从桌面图标打开。</li>";
    }
    dialog.showModal();
  }

  function setupAppInstall() {
    const button = $("#installApp");
    if (!button) return;
    button.hidden = isStandaloneApp();
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      button.hidden = false;
    });
    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      button.hidden = true;
      showToast("英语 365 已安装到桌面");
    });
    button.addEventListener("click", async () => {
      if (isStandaloneApp()) {
        button.hidden = true;
        return showToast("你已经在使用英语 365 App");
      }
      if (!deferredInstallPrompt) return showInstallHelp();
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice.catch(() => null);
      deferredInstallPrompt = null;
      if (choice?.outcome !== "accepted") showInstallHelp();
    });
    if ("serviceWorker" in window.navigator && window.location.protocol === "https:") {
      window.addEventListener("load", () => {
        window.navigator.serviceWorker
          .register("./sw.js?v=no-redundant-info-42", { updateViaCache: "none" })
          .then((registration) => registration.update())
          .catch(() => {});
      });
    }
  }

  function init() {
    saveState();
    populateDaySelect();
    populateReviewWeekSelect();
    bindNavigation();
    bindPlayer();
    bindDictation();
    bindSentences();
    bindReview();
    bindListening();
    bindEditor();
    setupAppInstall();
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

  function learnedThroughDay() {
    return Math.max(1, Math.min(365, Number(state.studyDay) || 1));
  }

  function maxLearnedDayForWeek(week) {
    const { start, end } = weekRange(week);
    const learnedEnd = Math.min(end, learnedThroughDay());
    return learnedEnd >= start ? learnedEnd : 0;
  }

  function selectedReviewEndDay(week) {
    const { start } = weekRange(week);
    const maxEnd = maxLearnedDayForWeek(week);
    if (!maxEnd) return 0;
    const stored = Number(state.reviewEndDays?.[week]);
    return stored >= start && stored <= maxEnd ? stored : maxEnd;
  }

  function wordsThroughDay(week, endDay) {
    const { start } = weekRange(week);
    if (!endDay || endDay < start) return [];
    const result = [];
    for (let day = start; day <= endDay; day += 1) {
      getWords(day).forEach((item, index) => result.push({ ...item, day, index }));
    }
    return result;
  }

  function learnedWordsForWeek(week) {
    return wordsThroughDay(week, maxLearnedDayForWeek(week));
  }

  function reviewRangeWords(week = reviewWeek) {
    return wordsThroughDay(week, selectedReviewEndDay(week));
  }

  function populateDayRangeSelect(selector, week, englishOnly = false) {
    const select = $(selector);
    if (!select) return;
    const { start } = weekRange(week);
    const maxEnd = maxLearnedDayForWeek(week);
    if (!maxEnd) {
      select.innerHTML = `<option value="">${englishOnly ? `Week ${week} not learned yet` : `第 ${week} 周还没有学到`}</option>`;
      select.disabled = true;
      return;
    }
    select.disabled = false;
    select.innerHTML = Array.from({ length: maxEnd - start + 1 }, (_, index) => {
      const end = start + index;
      const count = wordsThroughDay(week, end).length;
      const label = englishOnly
        ? end === start ? `Day ${start} only · ${count} words` : `Day ${start}–Day ${end} · ${count} words`
        : end === start ? `只复习 Day ${start} · ${count} 词` : `Day ${start}–Day ${end} · ${count} 词`;
      return `<option value="${end}">${label}</option>`;
    }).join("");
    select.value = String(selectedReviewEndDay(week));
  }

  function setReviewEndDay(week, endDay) {
    if (!state.reviewEndDays || typeof state.reviewEndDays !== "object") state.reviewEndDays = {};
    const { start } = weekRange(week);
    const maxEnd = maxLearnedDayForWeek(week);
    const value = Number(endDay);
    if (value >= start && value <= maxEnd) state.reviewEndDays[week] = value;
  }

  function populateReviewWeekSelect() {
    const weeks = Array.from({ length: 53 }, (_, index) => {
      const week = index + 1;
      const { start, end } = weekRange(week);
      const count = learnedWordsForWeek(week).length;
      return { week, start, end, count };
    });
    const reviewOptions = weeks.map(({ week, start, end, count }) => `<option value="${week}">第 ${week} 周 · Day ${start}–${end} · 已学 ${count}/105 词</option>`).join("");
    const listeningOptions = weeks.map(({ week, start, end, count }) => `<option value="${week}">Week ${week} · Day ${start}–${end} · ${count}/105 learned words</option>`).join("");
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
    populateDayRangeSelect("#reviewDayRangeSelect", reviewWeek, false);
    populateDayRangeSelect("#listeningDayRangeSelect", listeningWeek, true);
  }

  function bindNavigation() {
    $$(".nav-btn").forEach((button) => button.addEventListener("click", () => {
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
    state.studyDay = day;
    reviewWeek = Math.ceil(day / 7);
    listeningWeek = reviewWeek;
    currentWordIndex = 0;
    dictationIndex = 0;
    state.sentenceOffset = 0;
    saveState();
    $("#daySelect").value = String(day);
    populateReviewWeekSelect();
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
    const hasLearningGroups = words.length === 15 && words.every((item) => item.category);
    list.classList.toggle("word-grid--grouped", hasLearningGroups);
    list.innerHTML = hasLearningGroups
      ? learningGroupHTML(words, state.currentDay)
      : words.map((item, index) => wordCardHTML(item, state.currentDay, index)).join("");
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

  function learningGroupHTML(words, day) {
    const theme = String(words[0]?.theme || "生活场景").trim();
    const hasCoreWordGroup = Boolean(words[0]?.coreWord);
    const groups = [
      {
        number: "1",
        title: hasCoreWordGroup ? "核心词学习" : "场景词",
        count: "5 个",
        description: hasCoreWordGroup ? "3 个同核心词＋2 个同场景词" : `同一个生活场景：${theme}`,
        memoryTitle: hasCoreWordGroup ? `核心词：${words[0].coreWord}` : `场景：${theme}`,
        memoryDescription: hasCoreWordGroup ? "先理解核心，再联系同场景词" : "这些词都在同一个场景中，帮助你整体记忆",
        icon: "⌂",
        words: words.slice(0, 5),
        explanation: hasCoreWordGroup ? coreWordExplanationHTML(words.slice(0, 5)) : ""
      },
      {
        number: "2",
        title: "成对关系词",
        count: "4 个",
        description: "两对一一对应的反义词或强关系词",
        memoryTitle: "成对记忆",
        memoryDescription: "对比学习，关系更清楚，也更容易记住",
        icon: "↔",
        words: words.slice(5, 9)
      },
      {
        number: "3",
        title: "词族学习",
        count: "6 个",
        description: "1 个引导词＋5 个同词族词",
        memoryTitle: "词族记忆",
        memoryDescription: "由一个核心词，拓展出同词族或同韵单词",
        icon: "▤",
        words: words.slice(9, 15)
      }
    ];

    let startIndex = 0;
    return groups.map((group, groupIndex) => {
      const cards = group.words.map((item, index) => wordCardHTML(item, day, startIndex + index)).join("");
      startIndex += group.words.length;
      return `<section class="word-group word-group-${groupIndex + 1}" aria-labelledby="wordGroup${groupIndex + 1}">
        <div class="word-group-heading">
          <div class="word-group-summary">
            <span class="word-group-number" aria-hidden="true">${escapeHTML(group.number)}</span>
            <h2 id="wordGroup${groupIndex + 1}">${escapeHTML(group.title)}</h2>
            <span class="word-group-count">${escapeHTML(group.count)}</span>
            <p>${escapeHTML(group.description)}</p>
          </div>
          <div class="word-group-memory">
            <span class="word-group-icon" aria-hidden="true">${escapeHTML(group.icon)}</span>
            <div><strong>${escapeHTML(group.memoryTitle)}</strong><small>${escapeHTML(group.memoryDescription)}</small></div>
          </div>
        </div>
        ${group.explanation || ""}
        <div class="word-group-grid">${cards}</div>
      </section>`;
    }).join("");
  }

  function coreWordExplanationHTML(words) {
    const meta = words[0] || {};
    const coreWord = String(meta.coreWord || meta.english || "").trim();
    const coreMeaning = String(meta.coreMeaning || meta.chinese || "").trim();
    const explanationParts = String(meta.coreExplanation || "")
      .split("｜")
      .map((part) => part.trim())
      .filter(Boolean);
    const familyWords = words.slice(0, 3);
    const sceneWords = words.slice(3, 5);

    const derivations = coreWord.toLowerCase() === "work"
      ? `<div class="core-derivation">
          <strong>worker = work + er</strong>
          <span>work = 工作</span>
          <span>-er = 做这件事的人</span>
          <b>→ 做工作的人</b>
          <b>→ 工作人员</b>
        </div>
        <div class="core-derivation">
          <strong>working = work + ing</strong>
          <span>work = 工作</span>
          <span>-ing = 正在做 / 这个动作</span>
          <b>→ 正在工作 / 工作中的</b>
        </div>`
      : familyWords.slice(1).map((item, index) => {
          const sourceExplanation = explanationParts[index + 1] || `${item.english}：${item.chinese}`;
          return `<div class="core-derivation">
            <strong>${escapeHTML(coreBuildFormula(coreWord, item.english))}</strong>
            <span>${escapeHTML(`${coreWord} = ${coreMeaning}`)}</span>
            <b>${escapeHTML(sourceExplanation)}</b>
          </div>`;
        }).join("");

    return `<div class="core-explanation-panel">
      <div class="core-explanation-summary">
        <span><small>核心词</small><strong>${escapeHTML(coreWord)}</strong></span>
        <span><small>基础意思</small><strong>${escapeHTML(coreMeaning)}</strong></span>
      </div>
      <div class="core-explanation-body">
        <h3>怎么理解</h3>
        <div class="core-derivation-grid">${derivations}</div>
      </div>
      <div class="core-scene-words">
        <strong>同场景词</strong>
        ${sceneWords.map((item) => `<span>${escapeHTML(item.english)} = ${escapeHTML(shortMeaning(item.chinese) || item.chinese)}</span>`).join("")}
      </div>
    </div>`;
  }

  function coreBuildFormula(coreWord, derivedWord) {
    const core = String(coreWord || "").toLowerCase();
    const derived = String(derivedWord || "").toLowerCase();
    if (!core || !derived || core === derived) return `${derivedWord} = ${coreWord}`;

    const finalLetter = core.slice(-1);
    if (derived.startsWith(`${core}${finalLetter}`)) {
      return `${derivedWord} = ${coreWord} + ${derived.slice(core.length + 1)}`;
    }
    if (derived.startsWith(core)) return `${derivedWord} = ${coreWord} + ${derived.slice(core.length)}`;
    if (derived.endsWith(core)) return `${derivedWord} = ${derived.slice(0, -core.length)} + ${coreWord}`;
    if (core.endsWith("e") && derived.startsWith(core.slice(0, -1))) {
      return `${derivedWord} = ${coreWord} + ${derived.slice(core.length - 1)}`;
    }
    if (core.endsWith("y") && derived.startsWith(`${core.slice(0, -1)}i`)) {
      return `${derivedWord} = ${coreWord} + ${derived.slice(core.length)}`;
    }
    return `${derivedWord} ← ${coreWord}`;
  }

  function wordCategoryLabel(item) {
    if (item.isGuide || item.category === "引导词") return "引导词";
    if (item.category === "同核心词") return "同核心词";
    if (item.category === "同词族/同韵") return "同词族";
    if (item.category === "成对词") return "成对关系词";
    if (item.category === "场景词") return "场景词";
    return "";
  }

  function wordCardHTML(item, day, index, compact = false) {
    const status = getStatus(day, index);
    const mistakes = getMistakes(day, index);
    const categoryLabel = compact ? "" : wordCategoryLabel(item);
    const meaning = shortMeaning(item.chinese) || item.chinese;
    return `<article class="word-card${!compact && day === state.currentDay && index === currentWordIndex ? " current" : ""}" data-status="${status}" data-day="${day}" data-index="${index}">
      ${mistakes ? `<span class="mistake-badge">易错 ${mistakes}</span>` : ""}
      <div class="word-card-top">
        <div>
          <div class="word-card-meta">
            <span class="word-number">${compact ? `Day ${day}` : String(index + 1).padStart(2, "0")}</span>
            ${categoryLabel ? `<span class="word-category">${escapeHTML(categoryLabel)}</span>` : ""}
          </div>
          <h2 class="word-title">${escapeHTML(item.english)}</h2>
          <span class="word-phonetic">${escapeHTML(item.phonetic || "点击喇叭听发音")}</span>
        </div>
        <div class="word-audio-actions">
          <button class="speak-word" data-day="${day}" data-index="${index}" aria-label="播放一次 ${escapeHTML(item.english)}">🔊</button>
          <button class="loop-word" data-day="${day}" data-index="${index}" aria-label="循环播放 ${escapeHTML(item.english)}">↻ <span>循环</span></button>
        </div>
      </div>
      <span class="word-meaning">${compact ? "" : '<span class="word-meaning-label">中文</span>'}<strong>${escapeHTML(meaning)}</strong></span>
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

  function speakQueuedPair(english, chinese, token, rateMultiplier = 1) {
    return new Promise((resolve) => {
      if (!speechSupported() || token !== playbackToken) return resolve();
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) speechVoices = voices;
      const utterances = [createUtterance(english, "en-US"), createUtterance(chinese, "zh-CN")];
      utterances.forEach((utterance) => {
        utterance.rate = Math.max(.5, utterance.rate * rateMultiplier);
      });
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
    if (withChinese) await speakQueuedPair(item.english, shortMeaning(item.chinese) || item.chinese, token);
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
    $$(".daily-sentence-loop").forEach((button) => {
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
      allSentencesButton.textContent = "▶ 播放本日句子一遍";
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
    const shadowReviewButton = $("#shadowReviewSentences");
    if (shadowReviewButton) {
      shadowReviewButton.classList.remove("active");
      shadowReviewButton.textContent = "🎙 循环跟读";
      shadowReviewButton.setAttribute("aria-label", "循环跟读本周句子");
      shadowReviewButton.setAttribute("aria-pressed", "false");
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
    $("#playerMeaning").textContent = item ? (shortMeaning(item.chinese) || item.chinese) : "点击下方按钮添加";
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
    $("#dictationMeaning").textContent = item ? (shortMeaning(item.chinese) || item.chinese) : "这一天还没有单词";
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
      .split(/[；;\/／]/)[0]
      .trim();
  }

  const sentenceOrderTerms = Object.freeze({
    i: "我", me: "我", my: "我的", mine: "我的", we: "我们", us: "我们", our: "我们的",
    you: "你", your: "你的", he: "他", him: "他", his: "他的", she: "她", her: "她的",
    they: "他们", them: "他们", their: "他们的", it: "它", its: "它的",
    the: "这个", a: "一个", an: "一个", this: "这个", these: "这些", another: "另一个",
    some: "一些", several: "几个", one: "一个", two: "两个", four: "四个", both: "两个都",
    am: "是", is: "是", are: "是", was: "是", were: "是", be: "是", been: "曾经是", being: "正在",
    can: "能", cannot: "不能", could: "能够", may: "可能", might: "可能", will: "将会", would: "会", must: "必须",
    to: "向", of: "……的", in: "在", on: "在……上", at: "在", by: "在……旁",
    with: "和", without: "没有", for: "为了", behind: "在……后面", above: "在……上方",
    across: "穿过", during: "在……期间", after: "在……之后", about: "关于", from: "从", into: "进入",
    and: "和", or: "或者", but: "但是", if: "如果", because: "因为", why: "为什么", how: "怎样", no: "没有",
    please: "请", today: "今天", now: "现在", here: "这里", out: "出去", down: "向下", first: "首先",
    together: "一起", quickly: "快速地", forward: "向前", learning: "学习着", words: "单词",
    went: "去了", people: "人们", war: "战争", felt: "感觉到", asked: "问了", thought: "思考了",
    life: "人生", made: "做了", choice: "选择", less: "更少的", wait: "等待", smile: "微笑",
    country: "国家", president: "总统", passed: "通过了", sent: "派出了", south: "南方", important: "重要的",
    enemy: "敌人", clear: "清楚的", caused: "引起了", different: "不同的", children: "孩子们",
    goes: "延伸", field: "田野", crowd: "人群", heard: "听到了", shouted: "喊叫了", wounded: "受伤的",
    rested: "休息了", bed: "床", understood: "理解了", doctor: "医生", returned: "返回了", city: "城市",
    local: "本地的", company: "公司", hard: "困难的", muscles: "肌肉", turn: "转", next: "下一个", street: "街道",
    waited: "等待了", daughter: "女儿", child: "孩子", cried: "哭了", smiled: "微笑了", crossed: "穿过了",
    strong: "强壮的", showed: "表现出", court: "法院", protected: "保护了", rights: "权利", wore: "穿着",
    john: "约翰", decided: "决定了", plan: "计划", causes: "引起", hope: "希望", glad: "高兴的",
  });

  let sentenceVocabularyMeanings = null;

  function getSentenceVocabularyMeanings() {
    if (sentenceVocabularyMeanings) return new Map(sentenceVocabularyMeanings);
    sentenceVocabularyMeanings = new Map();
    (data.days || []).forEach((day) => (day.words || []).forEach((word) => {
      const key = String(word.english || "").trim().toLowerCase();
      const meaning = shortMeaning(word.chinese) || String(word.chinese || "").trim();
      if (key && meaning && !sentenceVocabularyMeanings.has(key)) sentenceVocabularyMeanings.set(key, meaning);
    }));
    return new Map(sentenceVocabularyMeanings);
  }

  function sentenceMeaningMap(scopeWords = []) {
    const meanings = getSentenceVocabularyMeanings();
    scopeWords.forEach((word) => {
      const key = String(word.english || "").trim().toLowerCase();
      const meaning = shortMeaning(word.chinese) || String(word.chinese || "").trim();
      if (key && meaning) meanings.set(key, meaning);
    });
    return meanings;
  }

  const sentenceContextPhrases = Object.freeze({
    "all day": "一整天",
    "all year": "整年",
    "at home": "在家",
    "at night": "在晚上",
    "by email": "用邮件",
    "by hand": "用手",
    "by phone": "用电话",
    "by the wall": "在墙边",
    "can help": "可以帮忙",
    "can hear": "能听见",
    "call me": "给我打电话",
    "come home": "回家",
    "come in": "进来",
    "come near": "靠近",
    "feel fear": "感到害怕",
    "for free": "免费",
    "got a shot": "打了一针",
    "go out": "出去",
    "go home": "回家",
    "in class": "在上课",
    "in the book": "在书里",
    "in the day": "在白天",
    "is over": "结束了",
    "like to play": "喜欢玩",
    "look around": "四处看看",
    "look at": "看",
    "look down": "向下看",
    "look up": "向上看",
    "near the kitchen": "在厨房附近",
    "new year": "新年",
    "not bad": "不差",
    "on the beach": "在海滩上",
    "on the ground": "在地上",
    "on time": "准时",
    "pay now": "现在付款",
    "sat down": "坐下",
    "sit down": "坐下",
    "take your time": "慢慢来",
    "the bathroom floor": "浴室地板",
    "the day": "这一天",
    "the same": "一样",
    "the work": "这项工作",
    "this way": "这样",
    "this year": "今年",
    "very well": "很好地",
    "with fear": "因为害怕",
    "with my eyes": "用我的眼睛",
  });

  const sentenceInfinitiveVerbs = new Set([
    "buy", "come", "drink", "eat", "enter", "finish", "go", "help", "learn", "leave", "listen", "pay", "play",
    "read", "rest", "sell", "sleep", "speak", "start", "wait", "wake", "work", "write",
  ]);

  const sentencePermissionActions = new Set([
    "call", "close", "come", "enter", "go", "leave", "open", "sit", "start", "take", "use",
  ]);

  const sentenceStateAdjectives = new Set([
    "bad", "cold", "cool", "fair", "far", "free", "full", "good", "happy", "hot", "hungry", "near",
    "new", "old", "ready", "right", "same", "slow", "soft", "strong", "thin", "tight", "tired", "warm",
  ]);

  function sentenceTokenMeaning(token, index, tokens, meanings) {
    const key = String(token || "").toLowerCase();
    const previous = String(tokens[index - 1] || "").toLowerCase();
    const next = String(tokens[index + 1] || "").toLowerCase();
    const following = String(tokens[index + 2] || "").toLowerCase();
    if (key === "may") return sentencePermissionActions.has(next) ? "可以" : "可能";
    if (key === "can") {
      return ["you", "we"].includes(previous) && sentencePermissionActions.has(next) ? "可以" : "能";
    }
    if (["do", "does", "did"].includes(key) && index === 0 && ["i", "you", "he", "she", "we", "they"].includes(next)) return "是否";
    if (key === "could" && index === 0 && next === "you") return "能否";
    if (key === "would" && next === "you") return "愿意";
    if (["am", "are", "is"].includes(key) && sentenceStateAdjectives.has(next)) return "很";
    if (key === "only") return "只";
    if (key === "did") return "做了";
    if (key === "sat") return "坐着";
    if (key === "out" && ["come", "go"].includes(previous)) return "出去";
    if (key === "in" && ["come", "go"].includes(previous)) return "进来";
    if (key === "all" && ["am", "are", "is"].includes(previous)) return "都";
    if (key === "well" && previous === "very") return "好地";
    if (key === "left") {
      if (["go", "turn"].includes(previous)) return "向左";
      if (previous === "the") return "左边";
      return "离开了";
    }
    if (key === "right") {
      if (tokens.includes("write")) return "正确地";
      if (tokens.includes("go") || previous === "turn") return "向右";
      return "正确的";
    }
    if (key === "on" && ["is", "are", "was", "were"].includes(previous) && next !== "the") return "开着";
    if (key === "off" && ["is", "are", "was", "were"].includes(previous)) return "关着";
    if (key === "light" && tokens.includes("off")) return "灯";
    if (key === "fair" && tokens.includes("hair")) return "浅色的";
    if (key === "french" && ["read", "speak"].includes(previous)) return "法语";
    if (key === "cook" && ["a", "the", "our", "my", "your", "his", "her", "their"].includes(previous)) return "厨师";
    if (key === "over" && ["is", "was"].includes(previous)) return "结束了";
    if (key === "way" && previous === "this") return "这样";
    if (key === "same" && previous === "the") return "一样";
    if (key === "year" && previous === "this") return "今年";
    if (key === "free" && previous === "for") return "免费";
    if (key === "near" && previous === "come") return "靠近";
    if (key === "time" && previous === "your" && tokens.includes("take")) return "慢慢来";
    if (key === "full" && previous === "me") return "饱";
    if (key === "shook" && tokens.includes("fear")) return "发抖";
    if (key === "cool" && tokens.includes("pool")) return "凉快的";
    if (key === "land" && previous === "will") return "降落";
    if (key === "mean" && tokens.includes("what")) return "意思是";
    if (key === "for" && previous === "good") return "对";
    if (key === "with" && ["eyes", "hand"].includes(following)) return "用";
    if (key === "to") {
      if (sentenceInfinitiveVerbs.has(next)) return ["want", "like", "need"].includes(previous) ? "去" : "为了";
      if (["me", "him", "her", "them", "you"].includes(next)) return "给";
      if (["school", "city", "village", "the"].includes(next) || ["go", "returned"].includes(previous)) return "到";
    }
    if (key === "with" && previous === "help") return "关于";
    if (sentenceStateAdjectives.has(key) && ["am", "are", "is"].includes(previous)) {
      return String(sentenceOrderTerms[key] || meanings.get(key) || token).replace(/的$/, "");
    }
    return sentenceOrderTerms[key] || meanings.get(key) || token;
  }

  function sentenceOrderSegments(item, scopeWords = []) {
    const tokens = String(item.english || "").match(/[A-Za-z]+(?:[-'’][A-Za-z]+)*|\d+(?:\.\d+)?/g) || [];
    const meanings = sentenceMeaningMap(scopeWords);
    const segments = [];
    for (let index = 0; index < tokens.length;) {
      const lower = tokens.map((token) => token.toLowerCase());
      const threeWord = lower.slice(index, index + 3).join(" ");
      const twoWord = lower.slice(index, index + 2).join(" ");
      const phrase = sentenceContextPhrases[threeWord] ? threeWord : sentenceContextPhrases[twoWord] ? twoWord : "";
      if (phrase) {
        const size = phrase.split(" ").length;
        segments.push({ english: tokens.slice(index, index + size).join(" "), chinese: sentenceContextPhrases[phrase] });
        index += size;
        continue;
      }
      if (lower[index] === "how" && lower[index + 1] === "to" && sentenceInfinitiveVerbs.has(lower[index + 2])) {
        const verb = lower[index + 2];
        segments.push({ english: tokens.slice(index, index + 3).join(" "), chinese: `如何${sentenceTokenMeaning(verb, index + 2, lower, meanings)}` });
        index += 3;
        continue;
      }
      if (lower[index] === "to" && sentenceInfinitiveVerbs.has(lower[index + 1])) {
        const verb = lower[index + 1];
        const prefix = ["want", "like", "need"].includes(lower[index - 1]) ? "去" : "为了";
        segments.push({ english: tokens.slice(index, index + 2).join(" "), chinese: `${prefix}${sentenceTokenMeaning(verb, index + 1, lower, meanings)}` });
        index += 2;
        continue;
      }
      segments.push({
        english: tokens[index],
        chinese: sentenceTokenMeaning(tokens[index], index, lower, meanings),
      });
      index += 1;
    }
    return segments;
  }

  function sentenceWordMeaning(item, word, scopeWords = []) {
    const tokens = String(item.english || "").match(/[A-Za-z]+(?:[-'’][A-Za-z]+)*|\d+(?:\.\d+)?/g) || [];
    const lower = tokens.map((token) => token.toLowerCase());
    const key = String(word.english || word || "").toLowerCase();
    const index = lower.indexOf(key);
    if (index < 0) return shortMeaning(word.chinese) || String(word.chinese || "");
    return sentenceTokenMeaning(tokens[index], index, lower, sentenceMeaningMap(scopeWords));
  }

  function sentenceSpeechSegments(item, displaySegments) {
    return displaySegments;
  }

  function sentenceFocusSet(focusWords = []) {
    return new Set(focusWords.map((word) => String(word.english || word).toLowerCase()));
  }

  function highlightSentenceOrderPart(part, focus) {
    const pieces = String(part).match(/[A-Za-z]+(?:[-'’][A-Za-z]+)*|[^A-Za-z]+/g) || [part];
    return pieces.map((piece) => focus.has(piece.toLowerCase())
      ? `<mark class="week-focus-word">${escapeHTML(piece)}</mark>`
      : escapeHTML(piece)).join("");
  }

  function sentenceOrderPresentation(item, scopeWords, focusWords) {
    const segments = sentenceOrderSegments(item, scopeWords);
    const speechSegments = sentenceSpeechSegments(item, segments);
    const focus = sentenceFocusSet(focusWords);
    const englishHTML = segments
      .map((part) => highlightSentenceOrderPart(part.english, focus))
      .join('<span aria-hidden="true">｜</span>');
    const chineseText = segments.map((part) => part.chinese).join("｜");
    const alignmentLabel = segments.map((part) => `${part.english}对应${part.chinese}`).join("，");
    const pairs = segments.map((part, index) => {
      const divider = index < segments.length - 1 ? '<span class="sentence-order-divider" aria-hidden="true">｜</span>' : "";
      return `<span class="sentence-order-pair"><b class="sentence-order-en">${highlightSentenceOrderPart(part.english, focus)}${divider}</b><span class="sentence-order-zh" lang="zh-CN">${escapeHTML(part.chinese)}${divider}</span></span>`;
    }).join("");
    const alignedHTML = `<span class="sentence-order-grid" aria-label="${escapeHTML(alignmentLabel)}">${pairs}</span>`;
    const alignedChinese = speechSegments.map((part) => part.chinese.replace(/\s*\/.*$/, "")).join("");
    const speechChinese = alignedChinese
      .replace(/[，、；：｜]/g, "")
      .replace(/\s+/g, "")
      .trim();
    return { englishHTML, chineseText, alignedHTML, speechChinese };
  }

  function renderSentences() {
    const day = learnedThroughDay();
    const dayTotal = getWords(day).length;
    $("#sentenceRate").value = String(listeningRate());
    $("#sentenceEyebrow").textContent = `Day ${day} · ${dayTotal}/15 词`;
    $("#sentenceHeading").textContent = `Day ${day} 本日组句`;
    $("#sentenceDayLabel").textContent = `Day ${day} · 本日 ${dayTotal} 个词`;
    const items = renderDailySentenceList({
      context: "sentences",
      day,
      offset: state.sentenceOffset,
      englishOnly: false,
    });
    $("#sentenceSummary").textContent = `Day ${day} · 自然优先 · 每句 1～3 个重点词 · 只用已学词`;
    $("#playAllSentences").disabled = items.length === 0;
    $("#refreshSentences").disabled = items.length < 2;
  }

  function dailyWords(day = state.currentDay) {
    return getWords(day).map((item, index) => ({ ...item, day, index }));
  }

  function rotateDailyItems(items, offset = 0) {
    if (!items.length) return [];
    const start = ((Number(offset) || 0) % items.length + items.length) % items.length;
    return [...items.slice(start), ...items.slice(0, start)];
  }

  function dailyLine(english, focus) {
    return { ...sentence(english, "", focus, []), reviewedNatural: true };
  }

  const dailyNaturalSentenceLibrary = {
    1: [
      dailyLine("I am.", ["I", "am"]),
      dailyLine("Are you?", ["you", "are"]),
      dailyLine("He is.", ["he", "is"]),
      dailyLine("She?", ["she"]),
      dailyLine("We want.", ["we", "want"]),
      dailyLine("They like.", ["they", "like"]),
      dailyLine("Learn.", ["learn"]),
      dailyLine("Go.", ["go"]),
      dailyLine("Come.", ["come"]),
      dailyLine("Eat.", ["eat"]),
    ],
    2: [
      dailyLine("We drink.", ["drink"]),
      dailyLine("I see you.", ["see"]),
      dailyLine("They know.", ["know"]),
      dailyLine("You do.", ["do"]),
      dailyLine("I have time.", ["have", "time"]),
      dailyLine("Go home.", ["home"]),
      dailyLine("We work.", ["work"]),
      dailyLine("They like school.", ["school"]),
      dailyLine("They come today.", ["today"]),
      dailyLine("We go tomorrow.", ["tomorrow"]),
      dailyLine("Go now.", ["now"]),
      dailyLine("You are good.", ["good"]),
      dailyLine("I am bad.", ["bad"]),
      dailyLine("We learn English.", ["English"]),
    ],
    3: [
      dailyLine("We make food.", ["make", "food"]),
      dailyLine("I get water.", ["get", "water"]),
      dailyLine("Take time.", ["take"]),
      dailyLine("Give time.", ["give"]),
      dailyLine("I look.", ["look"]),
      dailyLine("Say you like English.", ["say"]),
      dailyLine("We think.", ["think"]),
      dailyLine("I feel good.", ["feel"]),
      dailyLine("We need help.", ["need", "help"]),
      dailyLine("I am happy.", ["happy"]),
      dailyLine("You are tired.", ["tired"]),
      dailyLine("They are hungry.", ["hungry"]),
    ],
    4: [
      dailyLine("I can read.", ["can", "read"]),
      dailyLine("We write.", ["write"]),
      dailyLine("They speak English.", ["speak"]),
      dailyLine("We listen.", ["listen"]),
      dailyLine("I use water.", ["use"]),
      dailyLine("We buy food.", ["buy"]),
      dailyLine("Phone home.", ["phone"]),
      dailyLine("I need money.", ["money"]),
      dailyLine("Friend, come.", ["friend"]),
      dailyLine("We love family.", ["love", "family"]),
      dailyLine("Good day.", ["day"]),
      dailyLine("Good morning.", ["morning"]),
      dailyLine("Good night.", ["night"]),
    ],
    5: [
      dailyLine("The day is good.", ["the"]),
      dailyLine("I think of you.", ["of"]),
      dailyLine("You and I learn.", ["and"]),
      dailyLine("I want to go.", ["to"]),
      dailyLine("Come in.", ["in"]),
      dailyLine("I come as a friend.", ["as", "a"]),
      dailyLine("I know that.", ["that"]),
      dailyLine("He was tired.", ["was"]),
      dailyLine("I like it.", ["it"]),
      dailyLine("I like his English.", ["his"]),
      dailyLine("I go with you.", ["with"]),
      dailyLine("I had time.", ["had"]),
      dailyLine("I work for you.", ["for"]),
      dailyLine("I am at home.", ["at"]),
    ],
    6: [
      dailyLine("I am by her.", ["by", "her"]),
      dailyLine("It is on.", ["on"]),
      dailyLine("I am not tired.", ["not"]),
      dailyLine("I want to be good.", ["be"]),
      dailyLine("I work from home.", ["from"]),
      dailyLine("I am tired but happy.", ["but"]),
      dailyLine("You or I can go.", ["or"]),
      dailyLine("I see him.", ["him"]),
      dailyLine("Which day?", ["which"]),
      dailyLine("They were happy.", ["were"]),
      dailyLine("We all learn.", ["all"]),
      dailyLine("I like this.", ["this"]),
      dailyLine("He said that.", ["said"]),
      dailyLine("An English friend is at home.", ["an"]),
    ],
    7: [
      dailyLine("I want one.", ["one"]),
      dailyLine("Who is he?", ["who"]),
      dailyLine("I have been there.", ["been", "there"]),
      dailyLine("I am tired, so I go home.", ["so"]),
      dailyLine("What is that?", ["what"]),
      dailyLine("I like their English.", ["their"]),
      dailyLine("When do we go?", ["when"]),
      dailyLine("It may be good.", ["may"]),
      dailyLine("If I go, you go.", ["if"]),
      dailyLine("I have no time.", ["no"]),
      dailyLine("Look up.", ["up"]),
      dailyLine("My friend is at home.", ["my"]),
      dailyLine("I see them.", ["them"]),
      dailyLine("Come into the school.", ["into"]),
    ],
    8: [
      dailyLine("I want more.", ["more"]),
      dailyLine("Go out.", ["out"]),
      dailyLine("I would like water.", ["would"]),
      dailyLine("Give me water.", ["me"]),
      dailyLine("I did it.", ["did"]),
      dailyLine("I only eat food.", ["only"]),
      dailyLine("We could go.", ["could"]),
      dailyLine("The man sat.", ["man", "sat"]),
      dailyLine("The fat cat has its food.", ["fat", "cat", "has", "its"]),
      dailyLine("I like the hat.", ["hat"]),
      dailyLine("I see a bat.", ["bat"]),
    ],
    9: [
      dailyLine("Tell me.", ["tell"]),
      dailyLine("I think about you.", ["about"]),
      dailyLine("It was such a bad day.", ["such"]),
      dailyLine("Eat before work.", ["before"]),
      dailyLine("I am very happy.", ["very"]),
      dailyLine("How are you?", ["how"]),
      dailyLine("We should go.", ["should"]),
      dailyLine("It is over.", ["over"]),
      dailyLine("I like these.", ["these"]),
      dailyLine("It is new.", ["new"]),
      dailyLine("I am well.", ["well"]),
      dailyLine("They sell food.", ["sell"]),
      dailyLine("Spell English.", ["spell"]),
      dailyLine("I like your English.", ["your"]),
      dailyLine("I smell food.", ["smell"]),
    ],
    10: [
      sentence("The two men arrived first.", "这两个男人最先到达。", ["two", "men", "first"], [["The two men", "这两个男人"], ["arrived", "到达"], ["first", "最先"]]),
      sentence("He cooked dinner himself.", "他亲自做了晚餐。", ["himself"], [["He", "他"], ["cooked dinner", "做了晚餐"], ["himself", "亲自"]]),
      sentence("Please look down.", "请向下看。", ["look", "down"], [["Please", "请"], ["look", "看"], ["down", "向下"]]),
      sentence("She held the book near her face.", "她把书拿在脸旁。", ["book", "face"], [["She", "她"], ["held", "拿着"], ["the book", "这本书"], ["near her face", "靠近她的脸"]]),
      sentence("Our French teacher read the same story.", "我们的法语老师读了同一个故事。", ["our", "french", "same"], [["Our", "我们的"], ["French teacher", "法语老师"], ["read", "读了"], ["the same story", "同一个故事"]]),
      sentence("I put the bag upon the table.", "我把包放在桌上。", ["upon"], [["I", "我"], ["put the bag", "放这个包"], ["upon the table", "在桌子上"]]),
      sentence("The hook fell, so I took it.", "钩子掉了，所以我把它拿起来。", ["hook", "took"], [["The hook", "这个钩子"], ["fell", "掉了"], ["so I", "所以我"], ["took it", "拿起它"]]),
      sentence("The cook is here.", "厨师在这里。", ["cook"], [["The cook", "这个厨师"], ["is here", "在这里"]]),
    ],
    11: [
      sentence("The United States has many cities.", "美国有很多城市。", ["states"], [["The United States", "美国"], ["has", "有"], ["many cities", "很多城市"]]),
      sentence("My friend came last year.", "我的朋友去年来了。", ["came", "year"], [["My friend", "我的朋友"], ["came", "来了"], ["last year", "去年"]]),
      sentence("Where is my room?", "哪里是我的房间？", ["where", "room"], [["Where", "哪里"], ["is", "是"], ["my room", "我的房间"]]),
      sentence("The cat is under the chair.", "这只猫在椅子下面。", ["under"], [["The cat", "这只猫"], ["is", "在"], ["under the chair", "椅子下面"]]),
      sentence("You must close your eyes.", "你必须闭上眼睛。", ["must", "eyes"], [["You", "你"], ["must close", "必须闭上"], ["your eyes", "你的眼睛"]]),
      sentence("I can still hear the music.", "我仍然能听到音乐。", ["still", "hear"], [["I", "我"], ["can still hear", "仍然能听到"], ["the music", "音乐"]]),
      sentence("Even small steps help.", "即使小步前进也有帮助。", ["even"], [["Even small steps", "即使小步前进"], ["help", "也有帮助"]]),
      sentence("Being kind is important.", "保持善良很重要。", ["being"], [["Being kind", "保持善良"], ["is important", "很重要"]]),
      sentence("The store is near my home.", "这家商店在我家附近。", ["near"], [["The store", "这家商店"], ["is near", "在附近"], ["my home", "我的家"]]),
      sentence("Dear Mom, I miss you.", "亲爱的妈妈，我想你。", ["dear"], [["Dear Mom", "亲爱的妈妈"], ["I", "我"], ["miss you", "想你"]]),
      sentence("The child has no fear.", "这个孩子没有恐惧。", ["fear"], [["The child", "这个孩子"], ["has no fear", "没有恐惧"]]),
    ],
    12: [
      sentence("Please say that again.", "请再说一次。", ["again"], [["Please say that", "请说那个"], ["again", "再一次"]]),
      sentence("This way is faster.", "这条路更快。", ["way"], [["This way", "这条路"], ["is faster", "更快"]]),
      sentence("Can I have another cup?", "我可以再要一杯吗？", ["another"], [["Can I have", "我可以要吗"], ["another cup", "另一杯"]]),
      sentence("The dog ran away.", "这只狗跑走了。", ["away"], [["The dog ran", "这只狗跑了"], ["away", "离开"]]),
      sentence("The general raised his hand.", "这位将军举起了手。", ["general", "hand"], [["The general", "这位将军"], ["raised", "举起"], ["his hand", "他的手"]]),
      sentence("She left through the back door.", "她穿过后门离开了。", ["left", "through"], [["She left", "她离开"], ["through the back door", "穿过后门"]]),
      sentence("The movie began at eight.", "电影八点开始。", ["began"], [["The movie", "这部电影"], ["began", "开始"], ["at eight", "在八点"]]),
      sentence("We had a great day.", "我们度过了很棒的一天。", ["great"], [["We had", "我们度过"], ["a great day", "很棒的一天"]]),
      sentence("The old house feels cold.", "这栋老房子感觉很冷。", ["old", "cold"], [["The old house", "这栋老房子"], ["feels cold", "感觉很冷"]]),
      sentence("Hold this box.", "拿住这个盒子。", ["hold"], [["Hold", "拿住"], ["this box", "这个盒子"]]),
      sentence("He told me the truth.", "他告诉我真相。", ["told"], [["He told me", "他告诉我"], ["the truth", "真相"]]),
      sentence("The ring is made of gold.", "这枚戒指由黄金制成。", ["gold"], [["The ring", "这枚戒指"], ["is made of", "由……制成"], ["gold", "黄金"]]),
    ],
    13: [
      sentence("The army returned home.", "军队回家了。", ["army"], [["The army", "这支军队"], ["returned home", "回家了"]]),
      sentence("She looked back.", "她回头看。", ["looked", "back"], [["She looked", "她看"], ["back", "向后"]]),
      sentence("Count the chairs.", "数一数这些椅子。", ["count"], [["Count", "数一数"], ["the chairs", "这些椅子"]]),
      sentence("I ate the whole apple.", "我吃了整个苹果。", ["whole"], [["I ate", "我吃了"], ["the whole apple", "整个苹果"]]),
      sentence("Shall we begin?", "我们开始好吗？", ["shall"], [["Shall we", "我们好吗"], ["begin", "开始"]]),
      sentence("Turn your head to the right.", "把你的头转向右边。", ["head", "right"], [["Turn", "转动"], ["your head", "你的头"], ["to the right", "向右边"]]),
      sentence("This is part of the plan.", "这是计划的一部分。", ["part"], [["This", "这个"], ["is part of", "是一部分"], ["the plan", "这个计划"]]),
      sentence("The government announced a new law.", "政府宣布了一项新法律。", ["government"], [["The government", "政府"], ["announced", "宣布"], ["a new law", "一项新法律"]]),
      sentence("That round bell made a loud sound.", "那口圆钟发出了响亮的声音。", ["sound", "round"], [["That round bell", "那口圆钟"], ["made", "发出了"], ["a loud sound", "响亮的声音"]]),
      sentence("We found the keys.", "我们找到了钥匙。", ["found"], [["We found", "我们找到"], ["the keys", "这些钥匙"]]),
      sentence("Children ran around the yard.", "孩子们绕着院子跑。", ["around"], [["Children ran", "孩子们跑"], ["around the yard", "绕着院子"]]),
      sentence("The ball fell to the ground.", "球落到了地面。", ["ground"], [["The ball fell", "这个球落下"], ["to the ground", "到地面"]]),
    ],
    14: [
      sentence("Something smells good.", "某样东西闻起来很好。", ["something"], [["Something", "某样东西"], ["smells good", "闻起来很好"]]),
      sentence("Why are you smiling?", "为什么你在微笑？", ["why"], [["Why", "为什么"], ["are you smiling", "你在微笑"]]),
      sentence("We are having dinner.", "我们正在吃晚餐。", ["having"], [["We are having", "我们正在吃"], ["dinner", "晚餐"]]),
      sentence("This place is quiet.", "这个地方很安静。", ["place"], [["This place", "这个地方"], ["is quiet", "很安静"]]),
      sentence("I do not have much time.", "我没有很多时间。", ["much"], [["I do not have", "我没有"], ["much time", "很多时间"]]),
      sentence("The house is in another state.", "这栋房子在另一个州。", ["state", "house"], [["The house", "这栋房子"], ["is in", "在"], ["another state", "另一个州"]]),
      sentence("Put the chair against the wall.", "把椅子靠墙放。", ["against"], [["Put the chair", "放这个椅子"], ["against the wall", "靠着墙"]]),
      sentence("The shop is between two banks.", "商店在两家银行之间。", ["between"], [["The shop", "这家商店"], ["is between", "在之间"], ["two banks", "两家银行"]]),
      sentence("I walk every morning.", "我每天早晨走路。", ["every"], [["I walk", "我走路"], ["every morning", "每天早晨"]]),
      sentence("Please sit down.", "请坐下。", ["down"], [["Please sit", "请坐"], ["down", "下来"]]),
      sentence("Our town has a brown bridge.", "我们的小镇有一座棕色的桥。", ["town", "brown"], [["Our town", "我们的小镇"], ["has", "有"], ["a brown bridge", "一座棕色的桥"]]),
      sentence("The clown wore a gold crown.", "小丑戴着一顶金色的王冠。", ["clown", "crown"], [["The clown", "这个小丑"], ["wore", "戴着"], ["a gold crown", "一顶金色的王冠"]]),
    ],
    15: [
      dailyLine("The young doctor treats bone disease.", ["young", "bone", "disease"]),
      dailyLine("Many shops are always busy.", ["many", "always"]),
      dailyLine("I saw three birds.", ["saw", "three"]),
      dailyLine("She never drinks coffee.", ["never"]),
      dailyLine("Don is a common name.", ["don"]),
      dailyLine("Clean air is good for your skin.", ["air", "skin"]),
      dailyLine("That price is fair.", ["fair"]),
      dailyLine("Her hair looks lovely.", ["hair"]),
      dailyLine("I bought a pair of shoes.", ["pair"]),
      dailyLine("Please sit in this chair.", ["chair"]),
    ],
    16: [
      dailyLine("The United States is a large country.", ["united"]),
      dailyLine("The table is round.", ["round"]),
      dailyLine("We found blood on the floor.", ["found", "blood"]),
      dailyLine("This machine needs more power.", ["power"]),
      dailyLine("I ate too much.", ["too"]),
      dailyLine("She met my father.", ["met", "father"]),
      dailyLine("Both roads might be closed.", ["both", "might"]),
      dailyLine("Do not be late for our date.", ["late", "date"]),
      dailyLine("I hate the high tax rate.", ["hate", "rate"]),
      dailyLine("Each state has a capital.", ["state"]),
    ],
    17: [
      dailyLine("We talked during lunch.", ["during"]),
      dailyLine("The room is quite warm.", ["quite"]),
      dailyLine("She turned the door handle.", ["turned", "door"]),
      dailyLine("I knew the answer.", ["knew"]),
      dailyLine("The lights suddenly went out.", ["suddenly"]),
      dailyLine("Please tell me your name.", ["tell", "name"]),
      dailyLine("He told us the same story.", ["told", "same"]),
      dailyLine("The game ended early.", ["game"]),
      dailyLine("She came home smiling.", ["came"]),
      dailyLine("Whom are you looking for?", ["whom", "looking"]),
      dailyLine("Do not blame yourself.", ["blame"]),
    ],
    18: [
      dailyLine("This chapter explains the treatment.", ["chapter", "treatment"]),
      dailyLine("The officer has a calm voice.", ["officer", "voice"]),
      dailyLine("Write a few words.", ["few", "words"]),
      dailyLine("Wash your hands.", ["hands"]),
      dailyLine("These cases took two days.", ["cases", "days"]),
      dailyLine("She sat among her friends.", ["among"]),
      dailyLine("Please end the meeting now.", ["end"]),
      dailyLine("Send this letter today.", ["send"]),
      dailyLine("I spend time with my friend.", ["spend", "friend"]),
      dailyLine("We rest on the weekend.", ["weekend"]),
    ],
    19: [
      dailyLine("I often read about history.", ["often", "history"]),
      dailyLine("She gave me a gift.", ["gave"]),
      dailyLine("The battle ended at noon.", ["battle"]),
      dailyLine("This case was taken to court.", ["case", "taken"]),
      dailyLine("Put the cup here.", ["put"]),
      dailyLine("The new law changed his position.", ["law", "position"]),
      dailyLine("However, we stayed calm.", ["however"]),
      dailyLine("Raise your hand and smile.", ["and", "hand"]),
      dailyLine("The plane will land soon.", ["land"]),
      dailyLine("Please stand up.", ["stand"]),
      dailyLine("I understand the question.", ["understand"]),
    ],
    20: [
      dailyLine("We will leave soon.", ["soon"]),
      dailyLine("I understand each question.", ["understand", "each"]),
      dailyLine("She is known around town.", ["known"]),
      dailyLine("The soldiers helped others.", ["soldiers", "others"]),
      dailyLine("Oh, I forgot my bag.", ["oh"]),
      dailyLine("Children become stronger with practice.", ["become"]),
      dailyLine("The school is not far.", ["far"]),
      dailyLine("He brought flowers in a box.", ["brought", "in"]),
      dailyLine("Our team can win.", ["win"]),
      dailyLine("Please begin now.", ["begin"]),
      dailyLine("This cream protects your skin.", ["skin"]),
      dailyLine("The ice is thin.", ["thin"]),
    ],
    21: [
      dailyLine("Two women joined the course.", ["women", "course"]),
      dailyLine("The patient saw the result.", ["patient", "result"]),
      dailyLine("He stood near the door.", ["stood"]),
      dailyLine("My knee joint hurts.", ["joint"]),
      dailyLine("Do you need anything?", ["anything"]),
      dailyLine("Smoke can cause a cough.", ["cause"]),
      dailyLine("We are going home.", ["going"]),
      dailyLine("Evidently, it will rain.", ["evidently", "it"]),
      dailyLine("Please sit here.", ["sit"]),
      dailyLine("These shoes fit well.", ["fit"]),
      dailyLine("The ball hit the wall.", ["hit"]),
      dailyLine("I ate a bit of cake.", ["bit"]),
    ],
    22: [
      dailyLine("The doctor treated the infection.", ["infection"]),
      dailyLine("This matter needs attention.", ["matter"]),
      dailyLine("We were given more time.", ["given"]),
      dailyLine("He prayed to God.", ["god"]),
      dailyLine("I have a strange feeling.", ["feeling"]),
      dailyLine("People around the world need peace.", ["world"]),
      dailyLine("I am certain about the answer.", ["certain"]),
      dailyLine("The chief stood at the front.", ["chief", "front"]),
      dailyLine("What does this button do?", ["does"]),
      dailyLine("Put the box on top.", ["top"]),
      dailyLine("Please stop at the shop.", ["stop", "shop"]),
      dailyLine("Do not drop the glass.", ["drop"]),
      dailyLine("The balloon may pop.", ["pop"]),
    ],
    23: [
      dailyLine("Her condition is improving.", ["condition"]),
      dailyLine("My son made breakfast himself.", ["son"]),
      dailyLine("She fixed the bike herself.", ["herself"]),
      dailyLine("Keep an open mind.", ["mind"]),
      dailyLine("Is it possible to come later?", ["possible", "later"]),
      dailyLine("He lives alone.", ["alone"]),
      dailyLine("Exercise helps the body.", ["body"]),
      dailyLine("The horse walked toward the river.", ["horse", "toward"]),
      dailyLine("I can see a free seat.", ["see", "free"]),
      dailyLine("Three birds sat in the tree.", ["three", "tree"]),
      dailyLine("We agree on the plan.", ["agree"]),
    ],
    24: [
      dailyLine("The shop is almost open.", ["almost", "open"]),
      dailyLine("Set the alarm for seven.", ["set"]),
      dailyLine("Wait until tomorrow.", ["until"]),
      dailyLine("The woman had nerve pain.", ["woman", "nerve", "pain"]),
      dailyLine("The boy ran home.", ["ran"]),
      dailyLine("Please act now.", ["act"]),
      dailyLine("Her expression changed.", ["expression"]),
      dailyLine("Put these things away.", ["things"]),
      dailyLine("The train stopped because of rain.", ["train", "rain"]),
      dailyLine("This is the main road.", ["main"]),
      dailyLine("Sleep helps your brain.", ["brain"]),
    ],
    25: [
      dailyLine("Her business became successful.", ["business", "became"]),
      dailyLine("The officers waited within the building.", ["officers", "within"]),
      dailyLine("My mother called the commander.", ["mother", "commander"]),
      dailyLine("This year is passing quickly.", ["year"]),
      dailyLine("They are taking care of themselves.", ["taking", "themselves"]),
      dailyLine("Clean the wound gently.", ["wound"]),
      dailyLine("One thing can bring joy.", ["thing", "bring"]),
      dailyLine("We sing after dinner.", ["sing"]),
      dailyLine("She wears a gold ring.", ["ring"]),
      dailyLine("Flowers bloom in spring.", ["spring"]),
    ],
    26: [
      dailyLine("She added one word.", ["added", "word"]),
      dailyLine("The party ended early.", ["party"]),
      dailyLine("Put the parts on the table.", ["parts", "table"]),
      dailyLine("The cat lay by the fire.", ["lay"]),
      dailyLine("You can find either answer online.", ["find", "either"]),
      dailyLine("The chair is near the window.", ["near"]),
      dailyLine("Soft tissues protect the body.", ["tissues"]),
      dailyLine("I think before I speak.", ["think"]),
      dailyLine("Please drink more water.", ["drink"]),
      dailyLine("Open the link.", ["link"]),
      dailyLine("The pink cup is in the sink.", ["pink", "sink"]),
    ],
    27: [
      dailyLine("I wrote a letter about the project.", ["letter", "project"]),
      dailyLine("Four people attended the public meeting.", ["four", "public"]),
      dailyLine("A red car is common here.", ["red", "common"]),
      dailyLine("She held my hand.", ["held"]),
      dailyLine("We talk about this example.", ["talk", "example"]),
      dailyLine("The sun sets in the west.", ["west"]),
      dailyLine("Please come back.", ["back"]),
      dailyLine("The black dog ran around the track.", ["black", "track"]),
      dailyLine("Pack a warm coat.", ["pack"]),
      dailyLine("We lack enough time.", ["lack"]),
    ],
    28: [
      dailyLine("She entered the room and got a seat.", ["entered", "got"]),
      dailyLine("Neither tea nor coffee is ready.", ["nor"]),
      dailyLine("I received a second letter.", ["received", "second"]),
      dailyLine("I saw five birds land on the roof.", ["five", "land"]),
      dailyLine("The surface reflects light.", ["surface", "light"]),
      dailyLine("I cannot stay long.", ["cannot"]),
      dailyLine("Pick a card.", ["pick"]),
      dailyLine("We ate a quick meal.", ["quick"]),
      dailyLine("The sick child needs rest.", ["sick"]),
      dailyLine("Use this stick.", ["stick"]),
      dailyLine("Do not kick the ball.", ["kick"]),
    ],
    29: [
      dailyLine("The fire went out by itself.", ["fire", "itself"]),
      dailyLine("The workers formed a union.", ["union"]),
      dailyLine("I really need twenty minutes.", ["really", "twenty"]),
      dailyLine("We walked around the park early.", ["around", "early"]),
      dailyLine("She kept saying hello.", ["saying"]),
      dailyLine("The cat is sitting by the door.", ["sitting"]),
      dailyLine("This is the best choice.", ["best"]),
      dailyLine("This nice shirt is a good price.", ["nice", "price"]),
      dailyLine("We ate rice twice today.", ["rice", "twice"]),
      dailyLine("Put ice in my drink.", ["ice"]),
    ],
    30: [
      dailyLine("Horses have strong bones.", ["bones", "horses"]),
      dailyLine("Write your name here.", ["name"]),
      dailyLine("A political march blocked the road.", ["political", "road"]),
      dailyLine("We have been friends since school.", ["since"]),
      dailyLine("We worked together.", ["together"]),
      dailyLine("A thousand people came.", ["thousand"]),
      dailyLine("Cold weather can hurt the heart.", ["cold", "heart"]),
      dailyLine("Stand by my side.", ["side"]),
      dailyLine("We ride bikes after work.", ["ride"]),
      dailyLine("Hide the key inside this box.", ["hide", "inside"]),
      dailyLine("The river is wide.", ["wide"]),
    ],
    31: [
      dailyLine("It is impossible to lift this with both arms.", ["impossible", "arms"]),
      dailyLine("The payment is due tomorrow.", ["due"]),
      dailyLine("Blood flows through these vessels.", ["vessels"]),
      dailyLine("Please stand in a line.", ["line"]),
      dailyLine("She moved the chair.", ["moved"]),
      dailyLine("Water becomes ice when it freezes.", ["becomes"]),
      dailyLine("A rose can mean love.", ["rose"]),
      dailyLine("Make a wish.", ["wish"]),
      dailyLine("These conditions need more care.", ["conditions", "more"]),
      dailyLine("The store closes before nine.", ["store", "before"]),
      dailyLine("Four bags are on the floor.", ["four", "floor"]),
    ],
    32: [
      dailyLine("She finished third.", ["third"]),
      dailyLine("The king met de Gaulle.", ["king", "de"]),
      dailyLine("Everyone took a short break.", ["everyone", "short"]),
      dailyLine("I called three times.", ["times"]),
      dailyLine("The black clouds formed quickly.", ["black", "formed"]),
      dailyLine("Check the tire pressure.", ["pressure"]),
      dailyLine("Her hair is long.", ["hair"]),
      dailyLine("I know a good place.", ["know"]),
      dailyLine("Please show me the way.", ["show"]),
      dailyLine("Plants grow slowly.", ["grow"]),
      dailyLine("Please slow down near the school.", ["slow"]),
      dailyLine("Keep your voice low.", ["low"]),
    ],
    33: [
      dailyLine("The door remained open.", ["remained"]),
      dailyLine("We are ready to move forward.", ["ready", "forward"]),
      dailyLine("A hundred students saw the results.", ["hundred", "results"]),
      dailyLine("Fresh air filled the room.", ["air"]),
      dailyLine("The military team traveled north.", ["military", "north"]),
      dailyLine("I made it myself.", ["myself"]),
      dailyLine("They worked for peace.", ["peace"]),
      dailyLine("This part is a good start.", ["part", "start"]),
      dailyLine("Walking helps your heart.", ["heart"]),
      dailyLine("She is smart and loves art.", ["smart", "art"]),
    ],
    34: [
      dailyLine("Plant growth slowed in winter.", ["growth"]),
      dailyLine("I tried but got lost.", ["tried", "lost"]),
      dailyLine("The news surprised everyone.", ["news"]),
      dailyLine("Can anyone follow these orders?", ["anyone", "orders"]),
      dailyLine("We walked past the meeting point.", ["past", "point"]),
      dailyLine("The service runs across town.", ["service", "across"]),
      dailyLine("My phone played a soft tone.", ["phone", "tone"]),
      dailyLine("She sat alone.", ["alone"]),
      dailyLine("I found a smooth stone.", ["stone"]),
      dailyLine("This is a quiet zone.", ["zone"]),
    ],
    35: [
      dailyLine("Please close the strange box.", ["close", "strange"]),
      dailyLine("This process takes time.", ["process"]),
      dailyLine("I would rather stay home.", ["rather"]),
      dailyLine("That sound lasted ten seconds.", ["sound", "ten"]),
      dailyLine("Sit beside me.", ["beside"]),
      dailyLine("We frequently share the same opinion.", ["frequently", "opinion"]),
      dailyLine("Know your true self.", ["self"]),
      dailyLine("There is little light at night.", ["night", "light"]),
      dailyLine("Turn right at the bank.", ["right"]),
      dailyLine("They might fight again.", ["might", "fight"]),
    ],
    36: [
      dailyLine("Her presence opened new doors.", ["presence", "opened"]),
      dailyLine("The trade talks continued till noon.", ["trade", "till"]),
      dailyLine("The lake is deep.", ["deep"]),
      dailyLine("Cloud formation takes time.", ["formation"]),
      dailyLine("The soldier discussed public affairs.", ["soldier", "affairs"]),
      dailyLine("The operation ended safely.", ["operation"]),
      dailyLine("Show me the way.", ["show", "way"]),
      dailyLine("Have a good day.", ["day"]),
      dailyLine("Please say what you think.", ["say"]),
      dailyLine("You may pay later.", ["may", "pay"]),
    ],
    37: [
      dailyLine("She repeated the question and stopped.", ["repeated", "stopped"]),
      dailyLine("You need rest.", ["rest"]),
      dailyLine("He wished for good news.", ["wished"]),
      dailyLine("Read the following sentence.", ["following"]),
      dailyLine("What happened?", ["happened"]),
      dailyLine("Perhaps the bus is turning now.", ["perhaps", "turning"]),
      dailyLine("The colonies grew quickly.", ["colonies"]),
      dailyLine("Seeing friends made us all happy.", ["seeing", "all"]),
      dailyLine("Please call me.", ["call"]),
      dailyLine("Leaves fall near the wall.", ["fall", "wall"]),
      dailyLine("I have a small bag.", ["small"]),
    ],
    38: [
      dailyLine("These events occur over a short period.", ["events", "occur", "period"]),
      dailyLine("My neck hurts.", ["neck"]),
      dailyLine("They were talking quietly.", ["talking"]),
      dailyLine("Be kind to others.", ["kind"]),
      dailyLine("The revolution changed history.", ["revolution"]),
      dailyLine("She is able to help.", ["able"]),
      dailyLine("What else do you need?", ["else"]),
      dailyLine("Our team won the game.", ["won"]),
      dailyLine("Make a plan and take notes.", ["make", "take"]),
      dailyLine("Wake up and eat cake.", ["wake", "cake"]),
      dailyLine("Shake the bottle.", ["shake"]),
    ],
    39: [
      dailyLine("This pain is associated with an abscess.", ["associated", "abscess"]),
      dailyLine("Her German husband led the group.", ["german", "husband", "led"]),
      dailyLine("Lower prices helped southern towns.", ["lower", "southern"]),
      dailyLine("The weather was terrible.", ["terrible"]),
      dailyLine("Drink at least two cups of water.", ["least"]),
      dailyLine("Lymph moves through the body.", ["lymph"]),
      dailyLine("The fat cat sat on the bed.", ["fat", "cat", "sat"]),
      dailyLine("My hat is on the chair.", ["hat"]),
      dailyLine("A bat flew outside.", ["bat"]),
    ],
    40: [
      dailyLine("The new features caught my attention.", ["features", "attention"]),
      dailyLine("She noticed the reason.", ["noticed", "reason"]),
      dailyLine("The campaign asked people to return home.", ["campaign", "return"]),
      dailyLine("A picture hung on the wall.", ["wall"]),
      dailyLine("It was merely a guess.", ["merely"]),
      dailyLine("The tumours remained small.", ["tumours"]),
      dailyLine("The room was silent.", ["silent"]),
      dailyLine("Tell me when you feel well.", ["tell", "well"]),
      dailyLine("They sell fresh bread.", ["sell"]),
      dailyLine("Please spell this word.", ["spell"]),
      dailyLine("I smell coffee.", ["smell"]),
    ],
    41: [
      dailyLine("She laid the keys by the window.", ["laid", "window"]),
      dailyLine("It rained; therefore, we stayed home.", ["therefore"]),
      dailyLine("The nurse cleaned the wounds.", ["wounds"]),
      dailyLine("A federal officer met each person.", ["federal", "person"]),
      dailyLine("This pillow feels soft.", ["soft"]),
      dailyLine("She is speaking about the subject.", ["speaking", "subject"]),
      dailyLine("We had dinner early.", ["dinner"]),
      dailyLine("Look at this book.", ["look", "book"]),
      dailyLine("The cook hung his coat on a hook.", ["cook", "hook"]),
      dailyLine("He took the bus.", ["took"]),
    ],
    42: [
      dailyLine("It is an honor to meet you.", ["honor"]),
      dailyLine("Exercise builds strength.", ["strength"]),
      dailyLine("She is waiting outside.", ["waiting"]),
      dailyLine("The colonial house is old.", ["colonial"]),
      dailyLine("He placed the bag down immediately.", ["immediately", "placed"]),
      dailyLine("The child quickly answered the questions.", ["quickly", "questions"]),
      dailyLine("We had a conversation in the dark.", ["conversation", "dark"]),
      dailyLine("I can hear music near the door.", ["hear", "near"]),
      dailyLine("Dear friends, this year brings hope.", ["dear", "year"]),
      dailyLine("Courage can overcome fear.", ["fear"]),
    ],
    43: [
      dailyLine("The doctor took several measures.", ["measures"]),
      dailyLine("The mountain view is beautiful.", ["view"]),
      dailyLine("What are you doing?", ["doing"]),
      dailyLine("She removed her usual coat.", ["removed", "usual"]),
      dailyLine("Check your bank account.", ["account"]),
      dailyLine("My brother studies civil law.", ["brother", "civil"]),
      dailyLine("A foreign visitor fell down.", ["foreign", "fell"]),
      dailyLine("The old room felt cold.", ["old", "cold"]),
      dailyLine("Hold the box.", ["hold"]),
      dailyLine("He told us where to buy gold.", ["told", "gold"]),
    ],
    44: [
      dailyLine("The two forces met at dawn.", ["forces"]),
      dailyLine("She glanced at the clock.", ["glanced"]),
      dailyLine("We are nearly ready.", ["nearly"]),
      dailyLine("The Republican won six seats.", ["republican", "six"]),
      dailyLine("That is enough.", ["enough"]),
      dailyLine("I feel fine today.", ["fine"]),
      dailyLine("This character is particularly kind.", ["character", "particularly"]),
      dailyLine("He closed the door.", ["closed"]),
      dailyLine("A round drum makes a deep sound.", ["round", "sound"]),
      dailyLine("We found flowers around the house.", ["found", "around"]),
      dailyLine("The ball hit the ground.", ["ground"]),
    ],
    45: [
      dailyLine("The patient had severe symptoms.", ["severe", "symptoms"]),
      dailyLine("I bought a single coat.", ["single", "coat"]),
      dailyLine("Freedom matters to everyone.", ["freedom"]),
      dailyLine("Please check both sides.", ["please", "sides"]),
      dailyLine("Tears filled her eyes.", ["tears"]),
      dailyLine("Exercise keeps your knee joints strong.", ["joints", "knee"]),
      dailyLine("The child sat down.", ["down"]),
      dailyLine("Our town has a brown bridge.", ["town", "brown"]),
      dailyLine("The clown wore a crown.", ["clown", "crown"]),
    ],
    46: [
      dailyLine("Take a seat.", ["seat"]),
      dailyLine("The boy felt acute pain.", ["boy", "acute"]),
      dailyLine("Snow covered the whole nation.", ["covered", "nation"]),
      dailyLine("She remarked on changes in society.", ["remarked", "changes", "society"]),
      dailyLine("Although it rained, we walked.", ["although"]),
      dailyLine("The artery carries blood.", ["artery"]),
      dailyLine("Fresh air is good.", ["air"]),
      dailyLine("The price is fair.", ["fair"]),
      dailyLine("Her hair looks lovely.", ["hair"]),
      dailyLine("I bought a pair of shoes.", ["pair"]),
      dailyLine("Please sit in the chair.", ["chair"]),
    ],
    47: [
      dailyLine("The swelling went down.", ["swelling"]),
      dailyLine("He faced his fear.", ["fear"]),
      dailyLine("The girl grew taller.", ["girl", "grew"]),
      dailyLine("We waited for two hours.", ["hours"]),
      dailyLine("Please reply in a calm tone.", ["reply", "tone"]),
      dailyLine("Bring a thin coat.", ["bring", "thin"]),
      dailyLine("Do not be late.", ["late"]),
      dailyLine("They chose the same name.", ["same", "name"]),
      dailyLine("The game came to an end.", ["game", "came"]),
      dailyLine("Do not blame yourself.", ["blame"]),
    ],
    48: [
      dailyLine("Open your mouth.", ["mouth"]),
      dailyLine("This area has many friendly faces.", ["area", "faces"]),
      dailyLine("Be yourself.", ["yourself"]),
      dailyLine("Remember to keep smiling.", ["remember", "smiling"]),
      dailyLine("This is a clinical study.", ["clinical"]),
      dailyLine("Open the window for fresh air.", ["fresh"]),
      dailyLine("Someone visited the village.", ["someone", "village"]),
      dailyLine("Please end the meeting.", ["end"]),
      dailyLine("Send this letter.", ["send"]),
      dailyLine("I spend time with my friend.", ["spend", "friend"]),
      dailyLine("We rest on the weekend.", ["weekend"]),
    ],
    49: [
      dailyLine("The ulcer caused a sudden attack.", ["ulcer", "attack"]),
      dailyLine("The meeting lasted one hour.", ["hour"]),
      dailyLine("Team members repaired the bridge.", ["members", "bridge"]),
      dailyLine("The company employed my friends.", ["employed", "friends"]),
      dailyLine("She finally listened carefully.", ["finally", "listened"]),
      dailyLine("We tried various foods.", ["various"]),
      dailyLine("Raise your hand and smile.", ["and", "hand"]),
      dailyLine("The plane will land soon.", ["land"]),
      dailyLine("Please stand here.", ["stand"]),
      dailyLine("I understand the question.", ["understand"]),
    ],
    50: [
      dailyLine("Exercise takes time.", ["takes"]),
      dailyLine("I have no doubt.", ["doubt"]),
      dailyLine("This muscle feels sore.", ["muscle"]),
      dailyLine("Safety is our primary goal.", ["primary"]),
      dailyLine("Follow the command.", ["command"]),
      dailyLine("The convention begins tomorrow.", ["convention"]),
      dailyLine("She described the plan.", ["described"]),
      dailyLine("Independence brings freedom.", ["independence"]),
      dailyLine("Stars appear at night.", ["appear"]),
      dailyLine("People can change.", ["change"]),
      dailyLine("The keys are in my bag.", ["in"]),
      dailyLine("Our team can win.", ["win"]),
      dailyLine("Please begin now.", ["begin"]),
      dailyLine("This cream protects your skin.", ["skin"]),
      dailyLine("The ice is thin.", ["thin"]),
    ],
  };

  const dailyCombinedSentenceLibrary = {
    8: [
      dailyLine("The man and I could go out.", ["man", "could", "out"]),
      dailyLine("Would you help me?", ["would", "me"]),
      dailyLine("I only did the work.", ["only", "did"]),
      dailyLine("The cat is fat.", ["cat", "fat"]),
      dailyLine("It has its food.", ["has", "its"]),
      dailyLine("I see a bat.", ["bat"]),
      dailyLine("He sat at home.", ["sat"]),
      dailyLine("This hat is good.", ["hat"]),
      dailyLine("I want more food.", ["more"]),
    ],
    9: [
      dailyLine("Tell me about your phone.", ["tell", "about", "your"]),
      dailyLine("How should I spell it?", ["how", "should", "spell"]),
      dailyLine("These are new.", ["these", "new"]),
      dailyLine("I can smell it.", ["smell"]),
      dailyLine("Sell it before work.", ["sell", "before"]),
      dailyLine("The day is over.", ["over"]),
    ],
    10: [
      dailyLine("Two men sat down.", ["two", "men", "down"]),
      dailyLine("Look at his face.", ["look", "face"]),
      dailyLine("He did it himself.", ["himself"]),
      dailyLine("You go first.", ["first"]),
      dailyLine("I read French.", ["french"]),
      dailyLine("Our cook took it.", ["our", "cook", "took"]),
      dailyLine("Read the book.", ["book"]),
      dailyLine("It is the same.", ["same"]),
      dailyLine("The hat is on the hook.", ["hook"]),
    ],
    11: [
      dailyLine("The bear came into the room.", ["bear", "came", "room"]),
      dailyLine("Come near me.", ["near"]),
      dailyLine("My dear friend can help.", ["dear"]),
      dailyLine("My eyes are tired.", ["eyes"]),
      dailyLine("This is my ear.", ["ear"]),
      dailyLine("Where is home?", ["where"]),
      dailyLine("You must look under it.", ["must", "under"]),
      dailyLine("This year is good.", ["year"]),
      dailyLine("I still want more.", ["still"]),
      dailyLine("Even I feel fear.", ["even", "fear"]),
    ],
    12: [
      dailyLine("Open the bedroom door.", ["open", "bedroom", "door"]),
      dailyLine("You can close it.", ["close"]),
      dailyLine("Look at the bathroom floor.", ["bathroom", "floor"]),
      dailyLine("I like this room.", ["room"]),
      dailyLine("You may enter this way.", ["may", "enter", "way"]),
      dailyLine("Say it before you leave.", ["say", "leave"]),
      dailyLine("I play all day.", ["play", "day"]),
      dailyLine("I pay now.", ["pay"]),
    ],
    13: [
      dailyLine("The lamp is on the table.", ["lamp", "on", "table"]),
      dailyLine("The chair is by the wall.", ["chair", "wall"]),
      dailyLine("I like the sofa.", ["sofa"]),
      dailyLine("The light is off at night.", ["light", "off", "night"]),
      dailyLine("Write in the book.", ["write", "in"]),
      dailyLine("Go out now.", ["out"]),
      dailyLine("You might be right.", ["might", "right"]),
      dailyLine("Do not fight.", ["fight"]),
    ],
    14: [
      dailyLine("The key is near the kitchen.", ["key", "near", "kitchen"]),
      dailyLine("The window is open.", ["window"]),
      dailyLine("The bed is clean.", ["bed", "clean"]),
      dailyLine("The house was dirty.", ["house", "dirty"]),
      dailyLine("Look up and down.", ["up", "down"]),
      dailyLine("I can hear you.", ["hear"]),
      dailyLine("Come here now.", ["here"]),
      dailyLine("I can help a dear friend.", ["dear"]),
      dailyLine("I feel fear.", ["fear"]),
      dailyLine("This year is good.", ["year"]),
    ],
    15: [
      dailyLine("I eat rice with meat.", ["rice", "meat"]),
      dailyLine("The ice is cold.", ["ice", "cold"]),
      dailyLine("I feel the heat.", ["heat"]),
      dailyLine("Hot food can make me full.", ["hot", "food", "full"]),
      dailyLine("The room is empty.", ["empty"]),
      dailyLine("The bee is by the tree.", ["bee", "tree"]),
      dailyLine("I can see the sea.", ["see", "sea"]),
      dailyLine("I want three.", ["three"]),
      dailyLine("It is free.", ["free"]),
    ],
    16: [
      dailyLine("I drink water by the lake.", ["water", "lake"]),
      dailyLine("I eat bread, egg and fish.", ["bread", "egg", "fish"]),
      dailyLine("I eat more before work.", ["more", "before"]),
      dailyLine("I eat less after work.", ["less", "after"]),
      dailyLine("Wake up now.", ["wake"]),
      dailyLine("I can make a cake.", ["make", "cake"]),
      dailyLine("Take the milk and shake it.", ["take", "milk", "shake"]),
    ],
    17: [
      dailyLine("I eat chicken and fruit.", ["eat", "chicken", "fruit"]),
      dailyLine("This vegetable is good.", ["vegetable"]),
      dailyLine("I drink water from a clean cup.", ["drink", "clean", "cup"]),
      dailyLine("The dirty plate may fall.", ["dirty", "plate", "fall"]),
      dailyLine("You can call me.", ["call"]),
      dailyLine("We are all at home.", ["all"]),
      dailyLine("The small ball is by the wall.", ["small", "ball", "wall"]),
    ],
    18: [
      dailyLine("The shower and toilet are clean.", ["shower", "toilet", "clean"]),
      dailyLine("The sink is dirty but dry.", ["sink", "dirty", "dry"]),
      dailyLine("The mirror is old.", ["mirror", "old"]),
      dailyLine("The water is cold.", ["cold"]),
      dailyLine("Hold the wet towel.", ["hold", "wet", "towel"]),
      dailyLine("He told me about the gold.", ["told", "gold"]),
      dailyLine("They sold it.", ["sold"]),
    ],
    19: [
      dailyLine("I use soap, a toothbrush and toothpaste.", ["soap", "toothbrush", "toothpaste"]),
      dailyLine("Hot water is good for my face.", ["hot", "face"]),
      dailyLine("The light is on.", ["on"]),
      dailyLine("The light is off.", ["off"]),
      dailyLine("I feel the cold rain.", ["rain", "cold"]),
      dailyLine("The train is here.", ["train"]),
      dailyLine("I feel pain.", ["pain"]),
      dailyLine("The chain is gold.", ["chain"]),
      dailyLine("I like her hair.", ["hair"]),
    ],
    20: [
      dailyLine("The clothes are clean.", ["clothes"]),
      dailyLine("The trash is here.", ["trash"]),
      dailyLine("Open the basket.", ["open", "basket"]),
      dailyLine("Give me your hand.", ["hand"]),
      dailyLine("Take the brush.", ["brush"]),
      dailyLine("Close the book.", ["close", "book"]),
      dailyLine("I work after school.", ["after"]),
      dailyLine("Look at it.", ["look"]),
      dailyLine("The cook is at work.", ["cook"]),
      dailyLine("I took it.", ["took"]),
      dailyLine("The hook is on the wall.", ["hook"]),
      dailyLine("She shook with fear.", ["shook"]),
      dailyLine("I eat before work.", ["before"]),
    ],
    21: [
      dailyLine("The teacher is in class.", ["teacher", "class"]),
      dailyLine("The student can learn.", ["student"]),
      dailyLine("Read and write in the book.", ["read", "write", "book"]),
      dailyLine("You can ask me.", ["ask"]),
      dailyLine("I can answer.", ["answer"]),
      dailyLine("Tell me how to spell it.", ["tell", "spell"]),
      dailyLine("I am well.", ["well"]),
      dailyLine("They sell food at school.", ["sell", "school"]),
      dailyLine("I hear the bell.", ["bell"]),
      dailyLine("I smell the food.", ["smell"]),
    ],
    22: [
      dailyLine("The pen is on the desk.", ["pen", "desk"]),
      dailyLine("Use a pencil.", ["pencil"]),
      dailyLine("Write on the paper.", ["paper"]),
      dailyLine("Write in your notebook.", ["notebook"]),
      dailyLine("Speak and listen.", ["speak", "listen"]),
      dailyLine("I am hungry, so I eat.", ["so"]),
      dailyLine("We can grow.", ["grow"]),
      dailyLine("We can start.", ["start"]),
      dailyLine("No, finish now.", ["no", "finish"]),
      dailyLine("I can go.", ["go"]),
      dailyLine("Show what you know.", ["show", "know"]),
    ],
    23: [
      dailyLine("This word is in the lesson.", ["lesson", "word"]),
      dailyLine("Read the sentence.", ["sentence"]),
      dailyLine("This is the right answer.", ["right", "answer"]),
      dailyLine("It is easy to be wrong.", ["easy", "wrong"]),
      dailyLine("Look down now.", ["down"]),
      dailyLine("This question is hard.", ["question", "hard"]),
      dailyLine("I see a clown.", ["clown"]),
      dailyLine("The crown is gold.", ["crown"]),
      dailyLine("I like the brown gown.", ["brown", "gown"]),
      dailyLine("I work in town.", ["town"]),
    ],
    24: [
      dailyLine("I have a job.", ["job"]),
      dailyLine("I work in an office.", ["work", "office"]),
      dailyLine("The computer is on the desk.", ["computer", "desk"]),
      dailyLine("Start now and finish on time.", ["start", "finish"]),
      dailyLine("Send it now.", ["send"]),
      dailyLine("I can receive it.", ["receive"]),
      dailyLine("She has fair hair.", ["hair", "fair"]),
      dailyLine("I have a pair.", ["pair"]),
      dailyLine("I like this chair.", ["chair"]),
      dailyLine("The air is cold.", ["air"]),
      dailyLine("This stair is bad.", ["stair"]),
    ],
    25: [
      dailyLine("The boss did not blame the team.", ["boss", "blame", "team"]),
      dailyLine("Ask by phone.", ["ask", "phone"]),
      dailyLine("Answer by email.", ["answer", "email"]),
      dailyLine("The meeting is early, not late.", ["meeting", "early", "late"]),
      dailyLine("They came to the same game.", ["came", "same", "game"]),
      dailyLine("The name is on the frame.", ["name", "frame"]),
    ],
    26: [
      dailyLine("The file is for the project.", ["file", "project"]),
      dailyLine("Read the document.", ["document"]),
      dailyLine("Work fast and rest.", ["work", "fast", "rest"]),
      dailyLine("Take your time.", ["time"]),
      dailyLine("Take a break.", ["break"]),
      dailyLine("Do not blame me.", ["blame"]),
      dailyLine("The game is slow.", ["game", "slow"]),
      dailyLine("Say the name.", ["name"]),
      dailyLine("They came with me.", ["came"]),
      dailyLine("Use the same frame.", ["same", "frame"]),
    ],
    27: [
      dailyLine("The bus is on the road.", ["bus", "road"]),
      dailyLine("The car is here.", ["car"]),
      dailyLine("Come by train and arrive on time.", ["come", "train", "arrive"]),
      dailyLine("Go home when you leave.", ["go", "leave"]),
      dailyLine("Send it to a friend.", ["send", "friend"]),
      dailyLine("Spend the weekend at home.", ["spend", "weekend"]),
      dailyLine("The street has a bend.", ["street", "bend"]),
      dailyLine("This is the end.", ["end"]),
    ],
    28: [
      dailyLine("Take a taxi to the station.", ["taxi", "station"]),
      dailyLine("Go to the airport.", ["airport"]),
      dailyLine("The ticket is on the seat.", ["ticket", "seat"]),
      dailyLine("Go left or right.", ["left", "right"]),
      dailyLine("It is near, not far.", ["near", "far"]),
      dailyLine("Give me your hand.", ["hand"]),
      dailyLine("You can stand.", ["stand"]),
      dailyLine("I like this band.", ["band"]),
      dailyLine("The sand is hot.", ["sand"]),
      dailyLine("This is our land.", ["land"]),
    ],
    29: [
      dailyLine("Take the map and the bag.", ["map", "bag"]),
      dailyLine("Stop at the hotel on your trip.", ["stop", "hotel", "trip"]),
      dailyLine("Go fast, not slow.", ["fast", "slow"]),
      dailyLine("Come in and go out.", ["in", "out"]),
      dailyLine("Sit a bit.", ["sit", "bit"]),
      dailyLine("It can fit.", ["it", "fit"]),
      dailyLine("I can hit the ball.", ["hit"]),
      dailyLine("I can quit now.", ["quit"]),
    ],
    30: [
      dailyLine("The shop is by the market.", ["shop", "market"]),
      dailyLine("This store is open.", ["store"]),
      dailyLine("I need money to pay the price.", ["money", "price"]),
      dailyLine("Buy and sell food.", ["buy", "sell"]),
      dailyLine("Give it to me.", ["give", "it"]),
      dailyLine("The hat can fit.", ["fit"]),
      dailyLine("You can take this.", ["take"]),
      dailyLine("Sit for a bit.", ["sit", "bit"]),
      dailyLine("I can hit the ball.", ["hit"]),
      dailyLine("I can quit now.", ["quit"]),
    ],
    31: [
      dailyLine("Pay with cash or card.", ["cash", "card"]),
      dailyLine("The bag is a good size.", ["bag", "size"]),
      dailyLine("I like this color.", ["color"]),
      dailyLine("This is cheap; that is expensive.", ["cheap", "expensive"]),
      dailyLine("I want more, not less.", ["more", "less"]),
      dailyLine("Stop at the shop.", ["stop", "shop"]),
      dailyLine("The ball can drop.", ["drop"]),
      dailyLine("It can pop.", ["pop"]),
      dailyLine("I can hop.", ["hop"]),
      dailyLine("Go to the top.", ["top"]),
    ],
    32: [
      dailyLine("The customer can buy clothes and shoes.", ["customer", "clothes", "shoes"]),
      dailyLine("The sale price is on the receipt.", ["sale", "receipt"]),
      dailyLine("This bag is big.", ["big"]),
      dailyLine("That bag is small.", ["small"]),
      dailyLine("They are not the same.", ["same"]),
      dailyLine("They are different.", ["different"]),
      dailyLine("The track is black.", ["track", "black"]),
      dailyLine("Go to the back.", ["back"]),
      dailyLine("Pack a snack.", ["pack", "snack"]),
      dailyLine("I lack time.", ["lack"]),
    ],
    33: [
      dailyLine("The restaurant is here.", ["restaurant"]),
      dailyLine("The waiter has the menu.", ["waiter", "menu"]),
      dailyLine("The food is on the table.", ["food", "table"]),
      dailyLine("Eat and drink.", ["eat", "drink"]),
      dailyLine("Bring one thing.", ["bring", "thing"]),
      dailyLine("The plate is full, not empty.", ["full", "empty"]),
      dailyLine("The king has a ring.", ["king", "ring"]),
      dailyLine("They sing in spring.", ["sing", "spring"]),
    ],
    34: [
      dailyLine("Drink water or tea.", ["drink", "water", "tea"]),
      dailyLine("I like coffee.", ["coffee"]),
      dailyLine("The rice is hot, not cold.", ["rice", "hot", "cold"]),
      dailyLine("Ask one thing and get an answer.", ["ask", "thing", "answer"]),
      dailyLine("Bring the ring.", ["bring", "ring"]),
      dailyLine("The king is here.", ["king"]),
      dailyLine("They sing in spring.", ["sing", "spring"]),
    ],
    35: [
      dailyLine("I eat noodles with chicken and beef.", ["noodles", "chicken", "beef"]),
      dailyLine("Pay the bill and a tip.", ["tip", "bill"]),
      dailyLine("I want more, not less.", ["more", "less"]),
      dailyLine("Sit and rest.", ["sit", "rest"]),
      dailyLine("The nest is near the tree.", ["nest"]),
      dailyLine("Go to the west.", ["west"]),
      dailyLine("Stand with your hand on your chest.", ["stand", "chest"]),
    ],
    36: [
      dailyLine("The city has a street.", ["city", "street"]),
      dailyLine("The town has a road.", ["town", "road"]),
      dailyLine("The building is on the left.", ["building", "left"]),
      dailyLine("The store is near.", ["near"]),
      dailyLine("Go right; it is not far.", ["right", "far"]),
      dailyLine("I know the price.", ["price"]),
      dailyLine("The ice is cold.", ["ice"]),
      dailyLine("I eat rice twice a day.", ["rice", "twice"]),
      dailyLine("Take a nice slice.", ["nice", "slice"]),
    ],
    37: [
      dailyLine("The bank is near the hospital.", ["bank", "hospital"]),
      dailyLine("The pharmacy is inside the store.", ["pharmacy", "inside", "store"]),
      dailyLine("Go outside and look up and down.", ["outside", "up", "down"]),
      dailyLine("I found a round thing.", ["found", "round"]),
      dailyLine("Look around the park.", ["around", "park"]),
      dailyLine("The bag is on the ground.", ["ground"]),
      dailyLine("I hear a sound.", ["sound"]),
    ],
    38: [
      dailyLine("The school is near the station.", ["school", "station"]),
      dailyLine("The police are at the corner.", ["police", "corner"]),
      dailyLine("Come to this place.", ["place"]),
      dailyLine("You can come here.", ["here"]),
      dailyLine("Do not go there.", ["there"]),
      dailyLine("The store has one more door.", ["store", "more", "door"]),
      dailyLine("The floor is clean.", ["floor"]),
      dailyLine("The game is over.", ["over"]),
      dailyLine("Look under the table.", ["under"]),
      dailyLine("The shore is near.", ["shore"]),
      dailyLine("I eat before work.", ["before"]),
    ],
    39: [
      dailyLine("The tree is by the sea.", ["tree", "sea"]),
      dailyLine("A bee is on the beach.", ["bee", "beach"]),
      dailyLine("The light is on.", ["light"]),
      dailyLine("I work in the day.", ["day"]),
      dailyLine("The night is dark.", ["night", "dark"]),
      dailyLine("I found it on the ground.", ["found", "ground"]),
      dailyLine("The ball is round.", ["round"]),
      dailyLine("I hear a sound.", ["sound"]),
      dailyLine("Look around the park.", ["around", "park"]),
    ],
    40: [
      dailyLine("The grass is by the river.", ["grass", "river"]),
      dailyLine("The flower is here.", ["flower"]),
      dailyLine("The lake is under the mountain.", ["lake", "mountain"]),
      dailyLine("It is hot down here.", ["hot"]),
      dailyLine("It is cold up high.", ["cold", "high"]),
      dailyLine("The school has a rule.", ["school", "rule"]),
      dailyLine("The pool is cool.", ["pool", "cool"]),
      dailyLine("The water is low.", ["low"]),
      dailyLine("I feel like a fool.", ["fool"]),
      dailyLine("I can use this tool.", ["tool"]),
    ],
    41: [
      dailyLine("The sun is in the sky.", ["sun", "sky"]),
      dailyLine("I see a cloud.", ["cloud"]),
      dailyLine("The bird is on the bench.", ["bird", "bench"]),
      dailyLine("The seat is near, not far.", ["seat", "near", "far"]),
      dailyLine("My clothes are wet.", ["wet"]),
      dailyLine("My hair is dry.", ["dry"]),
      dailyLine("Heat the meat and eat.", ["heat", "meat", "eat"]),
      dailyLine("This food is sweet.", ["sweet"]),
      dailyLine("I hear the beat.", ["beat"]),
    ],
    42: [
      dailyLine("Today is a good day.", ["today", "day"]),
      dailyLine("Yesterday morning was cold.", ["yesterday", "morning"]),
      dailyLine("Come early, not late.", ["early", "late"]),
      dailyLine("I eat before work and rest after.", ["before", "after"]),
      dailyLine("The sky is blue.", ["blue"]),
      dailyLine("That is true.", ["true"]),
      dailyLine("This shoe is good too.", ["shoe", "too"]),
      dailyLine("You two go through the door.", ["two", "through"]),
      dailyLine("I go at night.", ["night"]),
    ],
    43: [
      dailyLine("Tomorrow is a work day.", ["tomorrow"]),
      dailyLine("This week is good.", ["week"]),
      dailyLine("Yesterday was good.", ["yesterday"]),
      dailyLine("This month is good.", ["month"]),
      dailyLine("It is a new year.", ["year"]),
      dailyLine("Start before work.", ["start", "before"]),
      dailyLine("Finish after work.", ["finish", "after"]),
      dailyLine("The screen is clean.", ["screen", "clean"]),
      dailyLine("The teen has seen it.", ["teen", "seen"]),
      dailyLine("What do you mean by green?", ["mean", "green"]),
    ],
    44: [
      dailyLine("I see the sun.", ["sun"]),
      dailyLine("A cloud is in the sky.", ["cloud"]),
      dailyLine("The weather is good.", ["weather"]),
      dailyLine("Rain and wind can make me wet.", ["rain", "wind", "wet"]),
      dailyLine("It is cold.", ["cold"]),
      dailyLine("Hot air can make clothes dry.", ["hot", "dry"]),
      dailyLine("Look at my face.", ["face"]),
      dailyLine("This is a good place.", ["place"]),
      dailyLine("I can see the race.", ["race"]),
      dailyLine("I need more space.", ["space"]),
      dailyLine("This case is good.", ["case"]),
      dailyLine("This is the base.", ["base"]),
    ],
    45: [
      dailyLine("My mother and father are home.", ["mother", "father"]),
      dailyLine("My brother and sister are here.", ["brother", "sister"]),
      dailyLine("My parents are not old.", ["parents", "old"]),
      dailyLine("They are young.", ["young"]),
      dailyLine("The man and woman are fine.", ["man", "woman", "fine"]),
      dailyLine("This line is mine.", ["line", "mine"]),
      dailyLine("I see nine.", ["nine"]),
      dailyLine("The name is on the sign.", ["sign"]),
      dailyLine("It can shine.", ["shine"]),
    ],
    46: [
      dailyLine("My sister is happy.", ["sister", "happy"]),
      dailyLine("My friend is not sad.", ["friend", "sad"]),
      dailyLine("The man and woman are here.", ["man", "woman"]),
      dailyLine("They have one boy.", ["one", "boy"]),
      dailyLine("A parent can help a child.", ["parent", "child"]),
      dailyLine("None of the work is done.", ["done", "none"]),
      dailyLine("Run in the sun.", ["run", "sun"]),
      dailyLine("I do it for fun.", ["fun"]),
    ],
    47: [
      dailyLine("The girl and child are home.", ["girl", "child", "home"]),
      dailyLine("They are happy.", ["happy"]),
      dailyLine("A lot of people are here.", ["people", "lot"]),
      dailyLine("You know my name.", ["name"]),
      dailyLine("Love is good; hate is bad.", ["love", "hate"]),
      dailyLine("I feel sad.", ["sad"]),
      dailyLine("It is hot, not cold.", ["hot", "not"]),
      dailyLine("I got a shot.", ["got", "shot"]),
      dailyLine("This is the spot.", ["spot"]),
    ],
    48: [
      dailyLine("My head and face feel good.", ["head", "face"]),
      dailyLine("My eye and ear are fine.", ["eye", "ear"]),
      dailyLine("My nose is clean.", ["nose"]),
      dailyLine("A healthy man is strong, not weak.", ["healthy", "strong", "weak"]),
      dailyLine("He is sick.", ["sick"]),
      dailyLine("The day may be bad.", ["day", "may"]),
      dailyLine("Say which way to go.", ["say", "way"]),
      dailyLine("I pay now.", ["pay"]),
      dailyLine("I like to play.", ["play"]),
    ],
    49: [
      dailyLine("My mouth and tooth hurt.", ["mouth", "tooth", "hurt"]),
      dailyLine("My neck and arm can heal.", ["neck", "arm", "heal"]),
      dailyLine("Give me your hand.", ["hand"]),
      dailyLine("Sleep at night.", ["sleep", "night"]),
      dailyLine("Wake when there is light.", ["wake", "light"]),
      dailyLine("Write it right.", ["write", "right"]),
      dailyLine("They might fight.", ["might", "fight"]),
    ],
    50: [
      dailyLine("I have pain in my leg.", ["pain", "leg"]),
      dailyLine("My foot is weak.", ["foot"]),
      dailyLine("Look back now.", ["back"]),
      dailyLine("My body is strong.", ["body"]),
      dailyLine("I feel good, not bad.", ["good", "bad"]),
      dailyLine("You can sit.", ["sit"]),
      dailyLine("Stand near me.", ["stand", "near"]),
      dailyLine("I can hear you.", ["hear"]),
      dailyLine("My dear friend is here.", ["dear", "here"]),
      dailyLine("It is a new year.", ["year"]),
      dailyLine("I feel fear.", ["fear"]),
    ],
  };

  const dailyAdjectiveWords = new Set([
    "acute", "associated", "bad", "black", "brown", "certain", "civil", "clear", "clinical", "cold", "common", "dark", "deep", "different",
    "due", "early", "enough", "fair", "fat", "federal", "fine", "foreign", "fresh", "general", "german",
    "glad", "good", "great", "hard", "important", "impossible", "kind", "late", "local", "low", "lower", "main", "military",
    "new", "nice", "old", "pink", "political", "possible", "primary", "public", "quick", "ready", "red", "republican", "round",
    "same", "severe", "short", "sick", "silent", "single", "small", "smart", "soft", "southern", "strange", "strong", "terrible", "thin",
    "united", "usual", "various", "whole", "wide", "wounded", "young",
  ]);
  const dailyAdverbWords = new Set([
    "again", "almost", "alone", "always", "around", "away", "back", "down", "early", "else", "evidently", "far", "finally", "forward", "frequently", "however",
    "immediately", "later", "merely", "more", "nearly", "never", "not", "often", "only", "out", "particularly",
    "perhaps", "quickly", "quite", "rather", "really", "soon", "still", "suddenly", "there", "therefore", "together", "too", "twice",
    "up", "very", "well",
  ]);
  const dailyBaseVerbWords = new Set([
    "act", "appear", "be", "become", "begin", "blame", "bring", "buy", "call", "cause", "change", "close", "come", "cook", "count", "do", "drink",
    "eat", "end", "feel", "fight", "find", "fit", "give", "go", "grow", "hate", "have", "hear", "help", "hide", "hit", "hold", "kick", "know", "lack", "learn",
    "listen", "look", "love", "make", "occur", "open", "pack", "pay", "pick", "put", "read", "remember", "reply", "rest",
    "return", "ride", "say", "see", "sell", "send", "set", "shake", "show", "sing", "sit", "speak", "spell", "spend",
    "stand", "stop", "take", "talk", "tell", "think", "turn", "understand", "use", "wait", "wake", "win", "wish",
    "work", "write",
  ]);
  const dailyPastVerbWords = new Set([
    "added", "asked", "became", "began", "brought", "came", "closed", "covered", "crossed", "decided", "described",
    "did", "employed", "entered", "fell", "formed", "found", "gave", "glanced", "got", "grew", "had", "happened", "held",
    "knew", "laid", "lay", "led", "left", "listened", "looked", "lost", "made", "met", "moved", "noticed", "opened",
    "passed", "placed", "ran", "received", "remained", "removed", "repeated", "returned", "rose", "said", "sat", "saw", "sent",
    "showed", "smiled", "stood", "stopped", "told", "took", "tried", "turned", "understood", "went", "wished", "won", "wore",
  ]);
  const dailyPluralNouns = new Set([
    "arms", "bones", "cases", "changes", "children", "colonies", "conditions", "events", "eyes", "faces", "features",
    "forces", "friends", "hands", "hours", "joints", "measures", "members", "men", "muscles", "officers", "orders",
    "parts", "people", "questions", "results", "sides", "soldiers", "states", "symptoms", "things", "times", "tissues",
    "tumours", "vessels", "women", "words", "wounds",
  ]);

  const dailySpecialSentenceFactories = Object.freeze({
    and: (word) => sentence("Tea and coffee are ready.", "茶和咖啡准备好了。", [word.english], [["Tea", "茶"], ["and", "和"], ["coffee", "咖啡"], ["are ready", "准备好了"]]),
    in: (word) => sentence("The keys are in my bag.", "钥匙在我的包里。", [word.english], [["The keys", "这些钥匙"], ["are in", "在里面"], ["my bag", "我的包"]]),
    it: (word) => sentence("It feels warm.", "它感觉温暖。", [word.english], [["It", "它"], ["feels", "感觉"], ["warm", "温暖"]]),
    before: (word) => sentence("We arrived before noon.", "我们在中午之前到达。", [word.english], [["We arrived", "我们到达"], ["before noon", "在中午之前"]]),
    four: (word) => sentence("I need four chairs.", "我需要四把椅子。", [word.english], [["I need", "我需要"], ["four chairs", "四把椅子"]]),
    part: (word) => sentence("This part needs repair.", "这个部分需要修理。", [word.english], [["This part", "这个部分"], ["needs repair", "需要修理"]]),
    phone: (word) => sentence("My phone is on the table.", "我的手机在桌子上。", [word.english], [["My phone", "我的手机"], ["is on", "在上面"], ["the table", "桌子"]]),
    all: (word) => sentence("We are all ready.", "我们都准备好了。", [word.english], [["We are", "我们是"], ["all", "都"], ["ready", "准备好的"]]),
    day: (word) => sentence("The day begins early.", "这一天很早开始。", [word.english], [["The day", "这一天"], ["begins", "开始"], ["early", "很早"]]),
    way: (word) => sentence("This way is shorter.", "这条路更短。", [word.english], [["This way", "这条路"], ["is shorter", "更短"]]),
    may: (word) => sentence("It may rain tonight.", "今晚可能下雨。", [word.english], [["It may rain", "可能下雨"], ["tonight", "今晚"]]),
    near: (word) => sentence("The shop is near my home.", "商店在我家附近。", [word.english], [["The shop", "这家商店"], ["is near", "在附近"], ["my home", "我的家"]]),
    dear: (word) => sentence("Dear Mom, I miss you.", "亲爱的妈妈，我想你。", [word.english], [["Dear Mom", "亲爱的妈妈"], ["I", "我"], ["miss you", "想你"]]),
    fear: (word) => sentence("The child showed no fear.", "这个孩子没有表现出恐惧。", [word.english], [["The child", "这个孩子"], ["showed no fear", "没有表现出恐惧"]]),
    french: (word) => sentence("She speaks French at work.", "她在工作时说法语。", [word.english], [["She speaks", "她说"], ["French", "法语"], ["at work", "在工作时"]]),
    german: (word) => sentence("He reads German well.", "他德语读得很好。", [word.english], [["He reads", "他阅读"], ["German", "德语"], ["well", "很好"]]),
  });

  const allowedDailyLine = (english, word) => sentence(english, "", [word.english], []);
  const dailyAllowedSentenceFactories = Object.freeze({
    first: (word) => allowedDailyLine("You go first.", word),
    french: (word) => allowedDailyLine("I speak French.", word),
    many: (word) => allowedDailyLine("I see many men.", word),
    himself: (word) => allowedDailyLine("He did it himself.", word),
    two: (word) => allowedDailyLine("I want two.", word),
    our: (word) => allowedDailyLine("It is our time.", word),
    same: (word) => allowedDailyLine("It is the same.", word),
    near: (word) => allowedDailyLine("It is near.", word),
    upon: (word) => allowedDailyLine("It is upon him.", word),
    where: (word) => allowedDailyLine("Where are you?", word),
    under: (word) => allowedDailyLine("Go under.", word),
    must: (word) => allowedDailyLine("I must go.", word),
    even: (word) => allowedDailyLine("Even I know.", word),
    being: (word) => allowedDailyLine("Being tired is bad.", word),
    dear: (word) => allowedDailyLine("Dear friend, come.", word),
    another: (word) => allowedDailyLine("I want another.", word),
    became: (word) => allowedDailyLine("I became tired.", word),
    general: (word) => allowedDailyLine("The general is at home.", word),
    through: (word) => allowedDailyLine("I go through it.", word),
    shall: (word) => allowedDailyLine("Shall we go?", word),
    something: (word) => allowedDailyLine("I need something.", word),
    why: (word) => allowedDailyLine("Why?", word),
    having: (word) => allowedDailyLine("We are having food.", word),
    hate: (word) => allowedDailyLine("I hate it.", word),
    much: (word) => allowedDailyLine("I do not have much.", word),
    against: (word) => allowedDailyLine("It is against me.", word),
    between: (word) => allowedDailyLine("It is between them.", word),
    every: (word) => allowedDailyLine("I go every day.", word),
    don: (word) => allowedDailyLine("Don is at home.", word),
    united: (word) => allowedDailyLine("We are united.", word),
    might: (word) => allowedDailyLine("It might be good.", word),
    both: (word) => allowedDailyLine("I like both.", word),
    during: (word) => allowedDailyLine("I eat during work.", word),
    looking: (word) => allowedDailyLine("I am looking.", word),
    whom: (word) => allowedDailyLine("Whom do you know?", word),
    few: (word) => allowedDailyLine("I have a few.", word),
    among: (word) => allowedDailyLine("I am among them.", word),
    and: (word) => allowedDailyLine("You and I learn.", word),
    each: (word) => allowedDailyLine("Each one is good.", word),
    known: (word) => allowedDailyLine("It is known.", word),
    oh: (word) => allowedDailyLine("Oh, no.", word),
    others: (word) => allowedDailyLine("I see others.", word),
    in: (word) => allowedDailyLine("Come in.", word),
    anything: (word) => allowedDailyLine("Do you need anything?", word),
    going: (word) => allowedDailyLine("We are going.", word),
    it: (word) => allowedDailyLine("It is good.", word),
    given: (word) => allowedDailyLine("I was given time.", word),
    god: (word) => allowedDailyLine("God is good.", word),
    chief: (word) => allowedDailyLine("The chief is at home.", word),
    front: (word) => allowedDailyLine("It is in front.", word),
    cause: (word) => allowedDailyLine("This can cause fear.", word),
    does: (word) => allowedDailyLine("He does it.", word),
    top: (word) => allowedDailyLine("It is on top.", word),
    end: (word) => allowedDailyLine("I can end it.", word),
    herself: (word) => allowedDailyLine("She did it herself.", word),
    possible: (word) => allowedDailyLine("It is possible.", word),
    toward: (word) => allowedDailyLine("I go toward him.", word),
    free: (word) => allowedDailyLine("It is free.", word),
    three: (word) => allowedDailyLine("I want three.", word),
    agree: (word) => allowedDailyLine("We agree.", word),
    until: (word) => allowedDailyLine("I work until night.", word),
    taken: (word) => allowedDailyLine("It was taken.", word),
    become: (word) => allowedDailyLine("I can become good.", word),
    within: (word) => allowedDailyLine("It is within me.", word),
    taking: (word) => allowedDailyLine("I am taking it.", word),
    themselves: (word) => allowedDailyLine("They did it themselves.", word),
    either: (word) => allowedDailyLine("I like either.", word),
    four: (word) => allowedDailyLine("I want four.", word),
    public: (word) => allowedDailyLine("It is public.", word),
    main: (word) => allowedDailyLine("It is the main one.", word),
    west: (word) => allowedDailyLine("It is in the west.", word),
    before: (word) => allowedDailyLine("I go before you.", word),
    nor: (word) => allowedDailyLine("He is not tired, nor am I.", word),
    second: (word) => allowedDailyLine("I came second.", word),
    five: (word) => allowedDailyLine("I want five.", word),
    cannot: (word) => allowedDailyLine("I cannot go.", word),
    itself: (word) => allowedDailyLine("It did it by itself.", word),
    saying: (word) => allowedDailyLine("I am saying it.", word),
    sitting: (word) => allowedDailyLine("I am sitting.", word),
    best: (word) => allowedDailyLine("It is the best.", word),
    twenty: (word) => allowedDailyLine("I want twenty.", word),
    twice: (word) => allowedDailyLine("Say it twice.", word),
    since: (word) => allowedDailyLine("I have been at home since morning.", word),
    thousand: (word) => allowedDailyLine("I want a thousand.", word),
    inside: (word) => allowedDailyLine("Come inside.", word),
    lack: (word) => allowedDailyLine("I lack time.", word),
    slow: (word) => allowedDailyLine("Go slow.", word),
    ten: (word) => allowedDailyLine("I want ten.", word),
    impossible: (word) => allowedDailyLine("It is impossible.", word),
    due: (word) => allowedDailyLine("It is due tomorrow.", word),
    becomes: (word) => allowedDailyLine("Water becomes ice.", word),
    third: (word) => allowedDailyLine("I came third.", word),
    de: (word) => allowedDailyLine("De is a name.", word),
    everyone: (word) => allowedDailyLine("Everyone is at home.", word),
    ready: (word) => allowedDailyLine("We are ready.", word),
    hundred: (word) => allowedDailyLine("I want a hundred.", word),
    myself: (word) => allowedDailyLine("I did it myself.", word),
    north: (word) => allowedDailyLine("It is in the north.", word),
    lay: (word) => allowedDailyLine("It lay there.", word),
    right: (word) => allowedDailyLine("Go right.", word),
    anyone: (word) => allowedDailyLine("Does anyone know?", word),
    past: (word) => allowedDailyLine("I go past it.", word),
    across: (word) => allowedDailyLine("I go across.", word),
    self: (word) => allowedDailyLine("I know my self.", word),
    till: (word) => allowedDailyLine("I work till night.", word),
    following: (word) => allowedDailyLine("Read the following.", word),
    talking: (word) => allowedDailyLine("I am talking.", word),
    tell: (word) => allowedDailyLine("I can tell him.", word),
    told: (word) => allowedDailyLine("I told him.", word),
    turning: (word) => allowedDailyLine("I am turning it.", word),
    seeing: (word) => allowedDailyLine("I am seeing him.", word),
    able: (word) => allowedDailyLine("I am able to help.", word),
    least: (word) => allowedDailyLine("I want at least two.", word),
    german: (word) => allowedDailyLine("I know German.", word),
    speaking: (word) => allowedDailyLine("I am speaking.", word),
    waiting: (word) => allowedDailyLine("I am waiting.", word),
    doing: (word) => allowedDailyLine("I am doing it.", word),
    glanced: (word) => allowedDailyLine("I glanced.", word),
    six: (word) => allowedDailyLine("I want six.", word),
    enough: (word) => allowedDailyLine("I have enough.", word),
    please: (word) => allowedDailyLine("Please help me.", word),
    although: (word) => allowedDailyLine("Although I am tired, I can work.", word),
    yourself: (word) => allowedDailyLine("You did it yourself.", word),
    smiling: (word) => allowedDailyLine("I am smiling.", word),
    someone: (word) => allowedDailyLine("Someone is at home.", word),
    various: (word) => allowedDailyLine("I see various things.", word),
    employed: (word) => allowedDailyLine("I employed him.", word),
    led: (word) => allowedDailyLine("I led them.", word),
    takes: (word) => allowedDailyLine("It takes time.", word),
    primary: (word) => allowedDailyLine("It is the primary one.", word),
    appear: (word) => allowedDailyLine("It can appear.", word),
    all: (word) => allowedDailyLine("We all learn.", word),
  });

  const dailyAllowedAdverbLines = Object.freeze({
    again: "Say it again.", almost: "It is almost time.", alone: "I am alone.", always: "I always go.", around: "Look around.",
    away: "Go away.", back: "Go back.", down: "Go down.", early: "Come early.", else: "What else?",
    evidently: "Evidently, I am right.", far: "It is far.", finally: "It is finally over.", forward: "Go forward.", frequently: "I frequently go.",
    however: "I am tired. However, I can go.", immediately: "Come home immediately.", later: "Come later.",
    merely: "It is merely a name.", more: "I want more.", nearly: "It is nearly time.", never: "I never go.",
    not: "I am not tired.", often: "I often go.", only: "I only eat food.", out: "Go out.",
    particularly: "It is particularly good.", perhaps: "Perhaps it is good.", quickly: "I can do it quickly.", quite: "It is quite good.",
    rather: "I would rather go.", really: "I really like it.", soon: "Come soon.", still: "I still like it.",
    suddenly: "I suddenly feel tired.", there: "It is there.", therefore: "I think; therefore, I am.",
    together: "We learn together.", too: "I am tired too.", up: "Look up.", very: "I am very happy.",
    well: "I am well.",
  });

  const dailyIntransitivePastWords = new Set([
    "began", "came", "decided", "entered", "fell", "formed", "glanced", "grew", "happened", "lay", "left", "listened", "looked",
    "met", "moved", "opened", "passed", "remained", "returned", "rose", "ran", "sat", "smiled", "stood",
    "stopped", "tried", "turned", "went", "won",
  ]);

  const dailyThingIntransitivePastWords = new Set([
    "began", "fell", "formed", "grew", "happened", "lay", "moved", "opened", "passed", "remained", "rose", "stopped", "turned",
  ]);

  const dailyTransitiveBaseWords = new Set([
    "blame", "bring", "buy", "call", "cause", "change", "close", "cook", "count", "do", "drink", "eat", "end", "find", "give", "hate", "have", "hear",
    "help", "hide", "hit", "hold", "kick", "know", "lack", "love", "make", "open", "pack", "pay", "pick", "put", "read", "remember", "say", "set",
    "see", "sell", "send", "shake", "show", "spell", "spend", "take", "tell", "understand", "use", "write",
  ]);

  function dailyEnglishTokens(value) {
    return (String(value || "").toLowerCase().match(/[a-z]+(?:[-'’][a-z]+)*/g) || [])
      .map((token) => token.replaceAll("’", "'"));
  }

  function dailyTargetUsage(items, words) {
    const counts = new Map(words.map((word) => [String(word.english || "").trim().toLowerCase(), 0]));
    items.forEach((item) => dailyEnglishTokens(item.english).forEach((token) => {
      if (counts.has(token)) counts.set(token, counts.get(token) + 1);
    }));
    return counts;
  }

  function allowedVocabularyForDay(day) {
    const allowed = new Set();
    for (let learnedDay = 1; learnedDay <= day; learnedDay += 1) {
      getWords(learnedDay).forEach((word) => {
        const key = String(word.english || "").trim().toLowerCase();
        if (key) allowed.add(key);
      });
    }
    return allowed;
  }

  function sentenceUsesAllowedVocabulary(item, allowedVocabulary) {
    return dailyEnglishTokens(item.english).every((token) => allowedVocabulary.has(token));
  }

  const rejectedDailySentencePatterns = [
    /today\s+i\s+am\s+learning/i,
    /today\s+we\s+are\s+learning/i,
    /these\s+are\s+my\s+words/i,
  ];

  const rejectedUnnaturalSentencePatterns = [
    /^(?:i|we|you|they)\s+(?:know|read|think)\s+about\s+the\b/i,
    /^today\s+(?:i\s+am|we\s+are)\s+learning\b/i,
    /\bmy\s+self\b/i,
    /\b(?:word|words)\s+(?:is|are)\s+my\b/i,
    /^i\s+can\s+(?:smell|hear|see)\s+it\s+very\s+well[.!?]?$/i,
    /^i\s+go\s+first[.!?]?$/i,
  ];

  const rejectedRedundantInformationPatterns = [
    /^(?:i|you|he|she|we|they)\s+can\s+see\s+with\s+(?:my|your|his|her|our|their)\s+eyes[.!?]?$/i,
    /^(?:i|you|he|she|we|they)\s+can\s+hear\s+with\s+(?:my|your|his|her|our|their)\s+ears[.!?]?$/i,
    /^(?:i|you|he|she|we|they)\s+can\s+smell\s+with\s+(?:my|your|his|her|our|their)\s+nose[.!?]?$/i,
  ];

  const rejectedGrammarPatterns = [
    /\bi\s+(?:is|are|has|does)\b/i,
    /\b(?:you|we|they)\s+(?:is|am|has|does)\b/i,
    /\b(?:he|she|it)\s+(?:am|are|have|do)\b/i,
    /^(?:i|we|you|they)\s+(?:want|need|like|have)\s*[.!]$/i,
    /^she\s*\?$/i,
  ];

  function validateDailySentenceQuality(items, allowedVocabulary = null) {
    const seen = new Set();
    return items.every((item) => {
      const english = String(item.english || "").trim();
      const tokens = dailyEnglishTokens(english);
      const normalized = tokens.join(" ");
      if (!english || tokens.length < 1 || tokens.length > 12) return false;
      if (!/^[A-Z]/.test(english) || !/[.!?]$/.test(english)) return false;
      if (rejectedDailySentencePatterns.some((pattern) => pattern.test(english))) return false;
      if (allowedVocabulary && !sentenceUsesAllowedVocabulary(item, allowedVocabulary)) return false;
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
  }

  function validateEverydayNaturalness(item, requireHumanReviewed = false) {
    const english = String(item?.english || "").trim();
    if (requireHumanReviewed && item.reviewedNatural !== true) return false;
    if (rejectedUnnaturalSentencePatterns.some((pattern) => pattern.test(english))) return false;
    return true;
  }

  function validateNoRedundantInformation(item) {
    const english = String(item?.english || "").trim();
    return !rejectedRedundantInformationPatterns.some((pattern) => pattern.test(english));
  }

  function validateSentenceGrammarAndNaturalness(item, allowedVocabulary = null, requireHumanReviewed = false) {
    const english = String(item?.english || "").trim();
    const tokens = dailyEnglishTokens(english);

    // 顺序固定为：语法与已学词 → 信息是否多余 → 母语者日常自然度。
    if (!validateDailySentenceQuality([item], allowedVocabulary)) return false;
    if (rejectedGrammarPatterns.some((pattern) => pattern.test(english))) return false;
    if (tokens.some((token, index) => index > 0 && token === tokens[index - 1])) return false;
    if (!validateNoRedundantInformation(item)) return false;
    return validateEverydayNaturalness(item, requireHumanReviewed);
  }

  function validateDailySentenceSet(items, words, day = words[0]?.day || state.currentDay) {
    const expected = words.map((word) => String(word.english || "").trim().toLowerCase()).filter(Boolean);
    const allowedVocabulary = allowedVocabularyForDay(day);
    if (!items.length
      || new Set(expected).size !== expected.length
      || !items.every((item) => validateSentenceGrammarAndNaturalness(item, allowedVocabulary))) return false;
    const counts = dailyTargetUsage(items, words);
    return expected.every((word) => counts.get(word) === 1);
  }

  function validateCombinedDailySentenceSet(items, words, day = words[0]?.day || state.currentDay) {
    if (!items.length) return false;
    const allowedVocabulary = allowedVocabularyForDay(day);
    const seenTargets = new Set();
    return items.every((item) => {
      const tokens = dailyEnglishTokens(item.english);
      const usage = dailyTargetUsage([item], words);
      const targetCount = [...usage.values()].reduce((total, count) => total + count, 0);
      const currentTargets = [...usage.entries()].filter(([, count]) => count === 1).map(([word]) => word);
      const repeatsTarget = [...usage.values()].some((count) => count > 1)
        || currentTargets.some((word) => seenTargets.has(word));
      if (!item.reviewedNatural
        || tokens.length < 3
        || tokens.length > 7
        || targetCount < 1
        || targetCount > 3
        || repeatsTarget
        || !validateSentenceGrammarAndNaturalness(item, allowedVocabulary, true)) return false;
      currentTargets.forEach((word) => seenTargets.add(word));
      return true;
    });
  }

  function dailyFallbackCandidates(word, seed = 0) {
    const english = String(word.english || "").trim();
    const key = english.toLowerCase();
    const meaning = shortMeaning(word.chinese) || word.chinese;
    const special = dailyAllowedSentenceFactories[key]?.(word);

    let candidates;
    if (dailyAdjectiveWords.has(key)) {
      candidates = [
        sentence(`It is ${english}.`, `它是${meaning}的。`, [english], [["It is", "它是"], [english, meaning]]),
        sentence(`This is ${english}.`, `这是${meaning}的。`, [english], [["This is", "这是"], [english, meaning]]),
      ];
    } else if (dailyAdverbWords.has(key)) {
      const line = dailyAllowedAdverbLines[key];
      candidates = line ? [allowedDailyLine(line, word)] : [];
    } else if (dailyPastVerbWords.has(key)) {
      const line = dailyIntransitivePastWords.has(key)
        ? `${dailyThingIntransitivePastWords.has(key) ? "It" : "I"} ${english}.`
        : `I ${english} it.`;
      candidates = [sentence(line, `我${meaning}了。`, [english], [])];
    } else if (dailyBaseVerbWords.has(key)) {
      candidates = dailyTransitiveBaseWords.has(key)
        ? ["it", "them", "this"].map((object) => sentence(`I can ${english} ${object}.`, `我可以${meaning}。`, [english], []))
        : [sentence(`I can ${english}.`, `我可以${meaning}。`, [english], [])];
    } else if (dailyPluralNouns.has(key) || (/s$/.test(key) && !/ss$/.test(key))) {
      candidates = [
        sentence(`I know about the ${english}.`, `我了解这些${meaning}。`, [english], [["I know about", "我了解"], [`the ${english}`, `这些${meaning}`]]),
        sentence(`We read about the ${english}.`, `我们读到这些${meaning}。`, [english], [["We read about", "我们读到"], [`the ${english}`, `这些${meaning}`]]),
        sentence(`They think about the ${english}.`, `他们想到这些${meaning}。`, [english], [["They think about", "他们想到"], [`the ${english}`, `这些${meaning}`]]),
        sentence(`You know about the ${english}.`, `你了解这些${meaning}。`, [english], [["You know about", "你了解"], [`the ${english}`, `这些${meaning}`]]),
        sentence(`I read about the ${english}.`, `我读到这些${meaning}。`, [english], [["I read about", "我读到"], [`the ${english}`, `这些${meaning}`]]),
        sentence(`We think about the ${english}.`, `我们想到这些${meaning}。`, [english], [["We think about", "我们想到"], [`the ${english}`, `这些${meaning}`]]),
      ];
    } else {
      candidates = [
        sentence(`I know about the ${english}.`, `我了解这个${meaning}。`, [english], [["I know about", "我了解"], [`the ${english}`, `这个${meaning}`]]),
        sentence(`We read about the ${english}.`, `我们读到这个${meaning}。`, [english], [["We read about", "我们读到"], [`the ${english}`, `这个${meaning}`]]),
        sentence(`They think about the ${english}.`, `他们想到这个${meaning}。`, [english], [["They think about", "他们想到"], [`the ${english}`, `这个${meaning}`]]),
        sentence(`You know about the ${english}.`, `你了解这个${meaning}。`, [english], [["You know about", "你了解"], [`the ${english}`, `这个${meaning}`]]),
        sentence(`I read about the ${english}.`, `我读到这个${meaning}。`, [english], [["I read about", "我读到"], [`the ${english}`, `这个${meaning}`]]),
        sentence(`We think about the ${english}.`, `我们想到这个${meaning}。`, [english], [["We think about", "我们想到"], [`the ${english}`, `这个${meaning}`]]),
      ];
    }
    return rotateDailyItems(special ? [special, ...candidates] : candidates, seed);
  }

  function dailyNaturalSentence(word, words, allowedVocabulary, seed = 0) {
    const targetKey = String(word.english || "").trim().toLowerCase();
    return dailyFallbackCandidates(word, seed).find((candidate) => {
      const usage = dailyTargetUsage([candidate], words);
      return validateSentenceGrammarAndNaturalness(candidate, allowedVocabulary)
        && usage.get(targetKey) === 1
        && [...usage.entries()].every(([key, count]) => key === targetKey || count === 0);
    }) || null;
  }

  function buildDailySentenceAttempt(day, words, seed = 0) {
    const combined = state.customDays[day] ? [] : (dailyCombinedSentenceLibrary[day] || []);
    if (combined.length) {
      return rotateDailyItems(combined, seed).map((item) => {
        const usage = dailyTargetUsage([item], words);
        const focus = [...usage.entries()].filter(([, count]) => count === 1).map(([key]) => key);
        return { ...item, focus };
      }).filter((item) => {
        const tokens = dailyEnglishTokens(item.english);
        const targetCount = [...dailyTargetUsage([item], words).values()].reduce((total, count) => total + count, 0);
        return item.reviewedNatural
          && tokens.length >= 3
          && tokens.length <= 7
          && targetCount >= 1
          && targetCount <= 3
          && validateSentenceGrammarAndNaturalness(item, allowedVocabularyForDay(day), true);
      });
    }
    const preferred = state.customDays[day] ? [] : (dailyNaturalSentenceLibrary[day] || []);
    const allowedVocabulary = allowedVocabularyForDay(day);
    const selected = [];
    const covered = new Set();
    rotateDailyItems(preferred, seed).forEach((item) => {
      if (!validateSentenceGrammarAndNaturalness(item, allowedVocabulary, item.reviewedNatural === true)) return;
      const usage = dailyTargetUsage([item], words);
      const focus = [...usage.entries()].filter(([, count]) => count === 1).map(([key]) => key);
      const invalid = [...usage.values()].some((count) => count > 1) || focus.some((key) => covered.has(key));
      if (!focus.length || invalid) return;
      selected.push({ ...item, focus });
      focus.forEach((key) => covered.add(key));
    });

    rotateDailyItems(words, seed).forEach((word, index) => {
      const key = String(word.english || "").trim().toLowerCase();
      if (covered.has(key)) return;
      const fallback = dailyNaturalSentence(word, words, allowedVocabulary, seed + index);
      if (!fallback) return;
      selected.push(fallback);
      covered.add(key);
    });
    return rotateDailyItems(selected, seed);
  }

  function dailySentencesForDay(day, offset = 0) {
    const words = dailyWords(day);
    if (words.length < 2) return [];
    const requiresCombinedSentences = Boolean(!state.customDays[day] && dailyCombinedSentenceLibrary[day]?.length);
    for (let attempt = 0; attempt < 24; attempt += 1) {
      const items = buildDailySentenceAttempt(day, words, Number(offset || 0) + attempt);
      const valid = requiresCombinedSentences
        ? validateCombinedDailySentenceSet(items, words, day)
        : validateDailySentenceSet(items, words, day);
      if (valid) return items;
    }
    console.warn(`Day ${day} has no sentence set that passes the natural, short, learned-word checks.`);
    return [];
  }
  function dailyFocusWords(item, day) {
    const available = new Map(dailyWords(day).map((word) => [word.english.toLowerCase(), word]));
    return item.focus.map((word) => available.get(word.toLowerCase())).filter(Boolean).slice(0, 5);
  }

  function dailySentenceEnglishHTML(item, day) {
    return sentenceOrderPresentation(item, dailyWords(day), dailyFocusWords(item, day)).englishHTML;
  }

  function dailyFocusListHTML(item, day, englishOnly) {
    const scopeWords = dailyWords(day);
    return dailyFocusWords(item, day).map((word) => `<span><b>${escapeHTML(word.english)}</b>${englishOnly ? "" : `<small>${escapeHTML(sentenceWordMeaning(item, word, scopeWords))}</small>`}</span>`).join("");
  }

  function dailySentenceCardHTML(item, index, day, englishOnly) {
    const order = sentenceOrderPresentation(item, dailyWords(day), dailyFocusWords(item, day));
    const controls = englishOnly
      ? `<button class="daily-sentence-speak" data-index="${index}" aria-label="Play sentence once">🔊 <span>Play once</span></button><button class="daily-sentence-loop" data-index="${index}" aria-label="Loop this sentence">↻ <span>Loop</span></button>`
      : `<button class="daily-sentence-speak" data-index="${index}" aria-label="播放一次句子">🔊 <span>播放一次</span></button><button class="daily-sentence-loop" data-index="${index}" aria-label="循环播放句子">↻ <span>循环播放</span></button>`;
    return `<article class="sentence-card daily-sentence-card" data-sentence-index="${index}">
      <div class="sentence-top">
        <div><span class="sentence-number">${englishOnly ? `Sentence ${String(index + 1).padStart(2, "0")}` : `句子 ${String(index + 1).padStart(2, "0")}`}</span><h2>${englishOnly ? order.englishHTML : order.alignedHTML}</h2></div>
        <div class="sentence-controls">${controls}</div>
      </div>
      <div class="weekly-focus-list"><strong>${englishOnly ? "DAILY FOCUS WORDS" : "本日重点单词"}</strong><div>${dailyFocusListHTML(item, day, englishOnly)}</div></div>
    </article>`;
  }

  function renderDailySentenceList({ context, day, offset, englishOnly }) {
    const items = dailySentencesForDay(day, offset);
    const { list, empty } = weeklySentenceElements(context);
    list.hidden = items.length === 0;
    empty.hidden = items.length !== 0;
    list.innerHTML = items.map((item, index) => dailySentenceCardHTML(item, index, day, englishOnly)).join("");
    $$(".daily-sentence-speak", list).forEach((button) => button.addEventListener("click", () => {
      playDailySentence(items[Number(button.dataset.index)], false, button, context, day, englishOnly);
    }));
    $$(".daily-sentence-loop", list).forEach((button) => button.addEventListener("click", () => {
      if (button.classList.contains("active")) stopPlayback();
      else playDailySentence(items[Number(button.dataset.index)], true, button, context, day, englishOnly);
    }));
    return items;
  }

  function showDailySentencePlaying(item, card, context, day, englishOnly, label) {
    const { list, panel, label: labelElement, english: englishElement, chinese: chineseElement } = weeklySentenceElements(context);
    const order = sentenceOrderPresentation(item, dailyWords(day), dailyFocusWords(item, day));
    panel.hidden = false;
    labelElement.textContent = label;
    englishElement.innerHTML = englishOnly ? order.englishHTML : order.alignedHTML;
    if (!englishOnly && chineseElement) chineseElement.hidden = true;
    $$(".week-focus-word", panel).forEach((word) => word.classList.add("is-speaking"));
    $$(".sentence-card", list).forEach((candidate) => {
      const current = candidate === card;
      candidate.classList.toggle("current", current);
      $$(".week-focus-word", candidate).forEach((word) => word.classList.toggle("is-speaking", current));
    });
    scrollCardIntoView(card);
  }

  async function speakDailySentence(item, token, englishOnly, day) {
    if (englishOnly) await speak(item.english, "en-US", token, listeningRate());
    else {
      const order = sentenceOrderPresentation(item, dailyWords(day), dailyFocusWords(item, day));
      await speakQueuedPair(item.english, order.speechChinese, token, listeningRate());
    }
  }

  async function playDailySentence(item, loop, button, context, day, englishOnly) {
    if (!item) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback(`${context}-sentence${loop ? "-loop" : ""}`);
    const card = button.closest(".sentence-card");
    markActivity(day);
    if (loop) {
      button.classList.add("active");
      button.innerHTML = englishOnly ? "■ <span>Stop</span>" : "■ <span>停止循环</span>";
    }
    showDailySentencePlaying(item, card, context, day, englishOnly, englishOnly ? "Now playing" : loop ? "正在循环播放这句话" : "正在播放这句话");
    do {
      await speakDailySentence(item, token, englishOnly, day);
      if (loop) await wait(850 / speechRate(), token);
    } while (loop && token === playbackToken);
    if (token === playbackToken) stopPlayback(false);
  }

  async function playDailySentenceGroup(items, button, context, day, englishOnly) {
    if (!items.length) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback(`${context}-sentence-group`);
    const { list } = weeklySentenceElements(context);
    button.classList.add("active");
    button.textContent = englishOnly ? "■ Stop" : "■ 停止播放";
    markActivity(day);
    for (const [index, item] of items.entries()) {
      if (token !== playbackToken) break;
      showDailySentencePlaying(item, $$(".sentence-card", list)[index], context, day, englishOnly, englishOnly ? "Now playing" : "正在播放本日句子");
      await speakDailySentence(item, token, englishOnly, day);
      if (token === playbackToken && index < items.length - 1) await wait(650 / speechRate(), token);
    }
    if (token === playbackToken) {
      stopPlayback(false);
      showToast(englishOnly ? "Finished" : "本日句子已播放一遍");
    }
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

  function weeklyFocusListHTML(item, week, englishOnly = false) {
    const scopeWords = wordsForWeek(week);
    return weeklyFocusWords(item, week).map((word) => `<span><b>${escapeHTML(word.english)}</b>${englishOnly ? "" : `<small>${escapeHTML(sentenceWordMeaning(item, word, scopeWords))}</small>`}</span>`).join("");
  }

  const REVIEW_SENTENCE_MIN = 8;
  const REVIEW_SENTENCE_MAX = 15;

  function weeklySentenceGoal(dayCount, candidateCount) {
    if (!candidateCount) return 0;
    const preferred = Math.min(REVIEW_SENTENCE_MAX, Math.max(REVIEW_SENTENCE_MIN, dayCount * 2 + 4));
    return Math.min(preferred, candidateCount);
  }

  function reviewSentenceIsNatural(item, allowedVocabulary) {
    const tokenCount = dailyEnglishTokens(item.english).length;
    return tokenCount >= 3
      && tokenCount <= 7
      && item.focus.length >= 1
      && item.focus.length <= 5
      && validateSentenceGrammarAndNaturalness(item, allowedVocabulary, true);
  }

  function balancedWeeklySentences(daySets, offset = 0) {
    const candidateCount = daySets.reduce((total, group) => total + group.items.length, 0);
    const amount = weeklySentenceGoal(daySets.length, candidateCount);
    if (!amount) return [];
    const buckets = rotateDailyItems(daySets, offset).map((group, index) => {
      const ranked = [...group.items].sort((left, right) => {
        const focusDifference = Math.min(3, right.focus.length) - Math.min(3, left.focus.length);
        if (focusDifference) return focusDifference;
        return dailyEnglishTokens(left.english).length - dailyEnglishTokens(right.english).length;
      });
      return rotateDailyItems(ranked, Number(offset || 0) + index);
    });
    const selected = [];
    const seen = new Set();
    while (selected.length < amount) {
      let added = false;
      for (const bucket of buckets) {
        while (bucket.length && seen.has(dailyEnglishTokens(bucket[0].english).join(" "))) bucket.shift();
        const item = bucket.shift();
        if (!item) continue;
        seen.add(dailyEnglishTokens(item.english).join(" "));
        selected.push(item);
        added = true;
        if (selected.length >= amount) break;
      }
      if (!added) break;
    }
    return selected;
  }

  function weeklySentencesForWeek(week, offset = 0, scopedWords = wordsForWeek(week)) {
    const words = scopedWords;
    if (words.length < 2) return [];
    const latestDay = Math.max(...words.map((word) => Number(word.day) || 1));
    const allowedVocabulary = allowedVocabularyForDay(latestDay);
    const selectedDays = [...new Set(words.map((word) => Number(word.day)))].sort((a, b) => a - b);
    const canUseCombinedDailySets = selectedDays.length > 0 && selectedDays.every((day) => {
      const selectedDayWords = words.filter((word) => Number(word.day) === day);
      return !state.customDays[day]
        && selectedDayWords.length === getWords(day).length
        && Boolean(dailyCombinedSentenceLibrary[day]?.length);
    });
    if (canUseCombinedDailySets) {
      const daySets = selectedDays.map((day, dayIndex) => {
        const dayWords = dailyWords(day);
        const items = buildDailySentenceAttempt(day, dayWords, Number(offset || 0) + dayIndex);
        return {
          day,
          items: (validateCombinedDailySentenceSet(items, dayWords, day) ? items : [])
            .filter((item) => reviewSentenceIsNatural(item, allowedVocabulary)),
        };
      }).filter((group) => group.items.length);
      return balancedWeeklySentences(daySets, offset);
    }
    const available = new Set(words.map((word) => word.english.toLowerCase()));
    const curated = (weeklySentenceLibrary[week] || []).map((item) => ({
      ...item,
      reviewedNatural: true,
    })).filter((item) => {
      const focus = item.focus.filter((word) => available.has(word.toLowerCase()));
      return focus.length >= 2
        && focus.length === item.focus.length
        && reviewSentenceIsNatural(item, allowedVocabulary);
    });
    const range = weekRange(week);
    const natural = [];
    for (let day = range.start; day <= range.end; day += 1) {
      (dailyNaturalSentenceLibrary[day] || []).forEach((item) => {
        const focus = item.focus.filter((word) => available.has(word.toLowerCase()));
        if (focus.length >= 2
          && focus.length === item.focus.length
          && reviewSentenceIsNatural(item, allowedVocabulary)) natural.push(item);
      });
    }
    const seen = new Set();
    const source = curated.length >= REVIEW_SENTENCE_MIN ? curated : [...curated, ...natural];
    const candidates = source.filter((item) => reviewSentenceIsNatural(item, allowedVocabulary)).map((item) => ({
      ...item,
      breakdown: [],
    })).filter((item) => {
      const key = item.english.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    const amount = weeklySentenceGoal(selectedDays.length, candidates.length);
    const start = candidates.length ? Number(offset || 0) % candidates.length : 0;
    return Array.from({ length: amount }, (_, index) => candidates[(start + index) % candidates.length]);
  }

  function weeklySentenceCardHTML(item, index, week, englishOnly = false) {
    const order = sentenceOrderPresentation(item, wordsForWeek(week), weeklyFocusWords(item, week));
    const controls = englishOnly
      ? `<button class="weekly-sentence-speak" data-index="${index}" aria-label="Play sentence once">🔊 <span>Play once</span></button><button class="weekly-sentence-loop" data-index="${index}" aria-label="Loop this sentence">↻ <span>Loop</span></button>`
      : `<button class="weekly-sentence-speak" data-index="${index}" aria-label="播放一次句子">🔊 <span>播放一次</span></button><button class="weekly-sentence-loop" data-index="${index}" aria-label="循环播放句子">↻ <span>循环播放</span></button>`;
    return `<article class="sentence-card weekly-sentence-card" data-sentence-index="${index}">
      <div class="sentence-top">
        <div><span class="sentence-number">${englishOnly ? `Sentence ${String(index + 1).padStart(2, "0")}` : `句子 ${String(index + 1).padStart(2, "0")}`}</span><h2>${englishOnly ? weeklySentenceEnglishHTML(item, week) : order.alignedHTML}</h2></div>
        <div class="sentence-controls">${controls}</div>
      </div>
      <div class="weekly-focus-list"><strong>${englishOnly ? "WEEKLY FOCUS WORDS" : "本周重点单词"}</strong><div>${weeklyFocusListHTML(item, week, englishOnly)}</div></div>
    </article>`;
  }

  function weeklySentenceElements(context) {
    if (context === "sentences") return {
      list: $("#sentenceList"),
      empty: $("#sentenceEmpty"),
      panel: $("#sentenceNowPlaying"),
      label: $("#sentenceNowLabel"),
      english: $("#sentenceNowEnglish"),
      chinese: $("#sentenceNowChinese"),
    };
    if (context === "review") return {
      list: $("#reviewSentenceList"),
      empty: $("#reviewSentenceEmpty"),
      panel: $("#reviewSentenceNowPlaying"),
      label: $("#reviewSentenceNowLabel"),
      english: $("#reviewSentenceNowEnglish"),
      chinese: $("#reviewSentenceNowChinese"),
    };
    return {
      list: $("#listeningSentenceList"),
      empty: $("#listeningSentenceEmpty"),
      panel: $("#listeningNowPlaying"),
      label: $("#listeningNowLabel"),
      english: $("#listeningNowEnglish"),
      chinese: null,
    };
  }

  function renderWeeklySentenceList({ context, week, offset, englishOnly, scopedWords }) {
    const items = weeklySentencesForWeek(week, offset, scopedWords);
    const { list, empty } = weeklySentenceElements(context);
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
    const { list, panel, label: labelElement, english: englishElement, chinese: chineseElement } = weeklySentenceElements(context);
    const order = sentenceOrderPresentation(item, wordsForWeek(week), weeklyFocusWords(item, week));
    panel.hidden = false;
    labelElement.textContent = label;
    englishElement.innerHTML = englishOnly ? weeklySentenceEnglishHTML(item, week) : order.alignedHTML;
    if (!englishOnly && chineseElement) chineseElement.hidden = true;
    $$(".week-focus-word", panel).forEach((word) => word.classList.add("is-speaking"));
    $$(".sentence-card", list).forEach((candidate) => {
      const current = candidate === card;
      candidate.classList.toggle("current", current);
      $$(".week-focus-word", candidate).forEach((word) => word.classList.toggle("is-speaking", current));
    });
    scrollCardIntoView(card);
  }

  async function speakWeeklySentence(item, token, englishOnly, week) {
    if (englishOnly) await speak(item.english, "en-US", token, listeningRate());
    else {
      const order = sentenceOrderPresentation(item, wordsForWeek(week), weeklyFocusWords(item, week));
      await speakQueuedPair(item.english, order.speechChinese, token);
    }
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
      await speakWeeklySentence(item, token, englishOnly, week);
      if (loop) await wait(850 / speechRate(), token);
    } while (loop && token === playbackToken);
    if (token === playbackToken) stopPlayback(false);
  }

  async function playWeeklySentenceGroup(items, button, context, week, englishOnly) {
    if (!items.length) return;
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback(`${context}-sentence-group`);
    const { list } = weeklySentenceElements(context);
    button.classList.add("active");
    button.textContent = englishOnly ? "■ Stop" : "■ 停止播放";
    markActivity(weekRange(week).start);
    while (token === playbackToken) {
      for (const [index, item] of items.entries()) {
        if (token !== playbackToken) break;
        showWeeklySentencePlaying(item, $$(".sentence-card", list)[index], context, week, englishOnly, englishOnly ? "Now playing" : "正在连续播放本周句子");
        await speakWeeklySentence(item, token, englishOnly, week);
        await wait(650 / speechRate(), token);
      }
      if (token === playbackToken) await wait(950 / speechRate(), token);
    }
  }

  function shadowingPauseMs(english) {
    const wordCount = String(english || "").match(/[A-Za-z]+(?:[-'’][A-Za-z]+)*/g)?.length || 1;
    return Math.min(9000, Math.max(3200, (wordCount * 720) / listeningRate()));
  }

  async function playReviewShadowing(items, button, week) {
    if (!items.length) return showToast("当前范围还没有可跟读的句子");
    if (!speechSupported()) return showToast("当前浏览器不支持语音播放");
    const token = beginPlayback("review-shadowing");
    const { list, label } = weeklySentenceElements("review");
    button.classList.add("active");
    button.textContent = "■ 停止跟读";
    button.setAttribute("aria-label", "停止循环跟读");
    button.setAttribute("aria-pressed", "true");
    markActivity(weekRange(week).start);

    let round = 1;
    while (token === playbackToken) {
      for (const [index, item] of items.entries()) {
        if (token !== playbackToken) break;
        const card = $$(".sentence-card", list)[index];
        showWeeklySentencePlaying(item, card, "review", week, false, `第 ${round} 轮 · 先听英文句子`);
        await speak(item.english, "en-US", token, listeningRate());
        if (token !== playbackToken) break;
        label.textContent = `第 ${round} 轮 · 现在请跟读`;
        await wait(shadowingPauseMs(item.english), token);
      }
      round += 1;
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

  function syncSentenceRate(rate) {
    state.listeningRate = Number(rate) || .78;
    saveState();
    if ($("#sentenceRate")) $("#sentenceRate").value = String(listeningRate());
    if ($("#listeningRate")) $("#listeningRate").value = String(listeningRate());
  }

  function bindSentences() {
    $("#sentenceRate").value = String(listeningRate());
    $("#sentenceRate").addEventListener("change", (event) => {
      stopPlayback(false);
      syncSentenceRate(event.target.value);
    });
    $("#playAllSentences").addEventListener("click", () => {
      if (activePlayback === "sentences-sentence-group") stopPlayback();
      else playDailySentenceGroup(dailySentencesForDay(state.currentDay, state.sentenceOffset), $("#playAllSentences"), "sentences", state.currentDay, false);
    });
    $("#refreshSentences").addEventListener("click", () => {
      stopPlayback(false);
      state.sentenceOffset = Number(state.sentenceOffset || 0) + 1;
      saveState();
      renderSentences();
      renderListening();
    });
  }

  function bindReview() {
    $("#reviewWeekSelect").addEventListener("change", (event) => {
      stopPlayback(false);
      reviewWeek = Number(event.target.value) || 1;
      state.reviewSentenceOffset = 0;
      saveState();
      populateDayRangeSelect("#reviewDayRangeSelect", reviewWeek, false);
      renderReview();
    });
    $("#reviewDayRangeSelect").addEventListener("change", (event) => {
      stopPlayback(false);
      setReviewEndDay(reviewWeek, event.target.value);
      state.reviewSentenceOffset = 0;
      saveState();
      renderReview();
      if (listeningWeek === reviewWeek) {
        populateDayRangeSelect("#listeningDayRangeSelect", listeningWeek, true);
        renderListening();
      }
    });
    $$(".review-mode-btn").forEach((button) => button.addEventListener("click", () => setReviewMode(button.dataset.reviewMode)));
    $("#makeWeekSentences").addEventListener("click", () => {
      setReviewMode("sentences");
    });
    $("#openEnglishListening").addEventListener("click", () => {
      stopPlayback(false);
      listeningWeek = reviewWeek;
      state.listeningSentenceOffset = 0;
      $("#listeningWeekSelect").value = String(listeningWeek);
      populateDayRangeSelect("#listeningDayRangeSelect", listeningWeek, true);
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
      else playWeeklySentenceGroup(weeklySentencesForWeek(reviewWeek, state.reviewSentenceOffset, reviewRangeWords(reviewWeek)), $("#playReviewSentences"), "review", reviewWeek, false);
    });
    $("#shadowReviewSentences").addEventListener("click", () => {
      if (activePlayback === "review-shadowing") stopPlayback();
      else playReviewShadowing(weeklySentencesForWeek(reviewWeek, state.reviewSentenceOffset, reviewRangeWords(reviewWeek)), $("#shadowReviewSentences"), reviewWeek);
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
      syncSentenceRate(event.target.value);
    });
    $("#listeningWeekSelect").addEventListener("change", (event) => {
      stopPlayback(false);
      listeningWeek = Number(event.target.value) || 1;
      state.listeningSentenceOffset = 0;
      saveState();
      populateDayRangeSelect("#listeningDayRangeSelect", listeningWeek, true);
      renderListening();
    });
    $("#listeningDayRangeSelect").addEventListener("change", (event) => {
      stopPlayback(false);
      setReviewEndDay(listeningWeek, event.target.value);
      state.listeningSentenceOffset = 0;
      saveState();
      renderListening();
      if (reviewWeek === listeningWeek) {
        populateDayRangeSelect("#reviewDayRangeSelect", reviewWeek, false);
        renderReview();
      }
    });
    $("#playListeningSentences").addEventListener("click", () => {
      if (activePlayback === "listening-sentence-group") stopPlayback();
      else playWeeklySentenceGroup(weeklySentencesForWeek(listeningWeek, state.listeningSentenceOffset, reviewRangeWords(listeningWeek)), $("#playListeningSentences"), "listening", listeningWeek, true);
    });
    $("#refreshListeningSentences").addEventListener("click", () => {
      stopPlayback(false);
      state.listeningSentenceOffset = Number(state.listeningSentenceOffset || 0) + 1;
      saveState();
      renderListening();
    });
  }

  function reviewWords() {
    return reviewRangeWords(reviewWeek).filter((item) => {
      const { day, index } = item;
      const status = getStatus(day, index);
      const mistakes = getMistakes(day, index);
      const matches = reviewFilter === "mastered" ? status === "mastered"
        : reviewFilter === "mistakes" ? mistakes > 0
        : true;
      return matches;
    }).sort((left, right) => {
      const groupDifference = reviewWordGroup(left).order - reviewWordGroup(right).order;
      return groupDifference || left.day - right.day || left.index - right.index;
    });
  }

  const reviewWordGroupDefinitions = Object.freeze([
    { key: "scene", order: 0, title: "场景词", description: "同一生活场景中的词", icon: "⌂" },
    { key: "pair", order: 1, title: "成对关系词", description: "成对或强关联记忆", icon: "↔" },
    { key: "guide", order: 2, title: "引导词", description: "带出本日同词族的一词", icon: "→" },
    { key: "family", order: 3, title: "同词族", description: "发音或词形相近的一组词", icon: "▤" },
  ]);

  function reviewWordGroup(item) {
    const category = wordCategoryLabel(item);
    if (category === "场景词") return reviewWordGroupDefinitions[0];
    if (category === "成对关系词") return reviewWordGroupDefinitions[1];
    if (category === "引导词") return reviewWordGroupDefinitions[2];
    if (category === "同词族") return reviewWordGroupDefinitions[3];
    const index = Number(item.index) || 0;
    if (index < 5) return reviewWordGroupDefinitions[0];
    if (index < 9) return reviewWordGroupDefinitions[1];
    if (index === 9) return reviewWordGroupDefinitions[2];
    return reviewWordGroupDefinitions[3];
  }

  function reviewWordGroupsHTML(words) {
    const grouped = new Map(reviewWordGroupDefinitions.map((group) => [group.key, []]));
    words.forEach((item) => grouped.get(reviewWordGroup(item).key).push(item));
    return reviewWordGroupDefinitions.map((group, groupIndex) => {
      const groupWords = grouped.get(group.key);
      if (!groupWords.length) return "";
      const cards = groupWords.map((item) => wordCardHTML(item, item.day, item.index, true)).join("");
      const headingId = `reviewWordGroup-${group.key}`;
      return `<section class="word-group review-word-group word-group-${groupIndex + 1}" aria-labelledby="${headingId}">
        <div class="word-group-heading">
          <div class="word-group-summary">
            <span class="word-group-number" aria-hidden="true">${groupIndex + 1}</span>
            <h2 id="${headingId}">${escapeHTML(group.title)}</h2>
            <span class="word-group-count">${groupWords.length} 个</span>
            <p>${escapeHTML(group.description)}</p>
          </div>
          <span class="review-word-group-icon" aria-hidden="true">${escapeHTML(group.icon)}</span>
        </div>
        <div class="word-group-grid">${cards}</div>
      </section>`;
    }).join("");
  }

  function renderReview() {
    $("#reviewWeekSelect").value = String(reviewWeek);
    populateDayRangeSelect("#reviewDayRangeSelect", reviewWeek, false);
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
    const selectedEnd = selectedReviewEndDay(reviewWeek);
    const reviewTotal = reviewRangeWords(reviewWeek).length;
    const label = reviewFilter === "mastered" ? "已掌握" : reviewFilter === "mistakes" ? "易错词" : "本周全部";
    $("#reviewSummary").textContent = selectedEnd
      ? `第 ${reviewWeek} 周 · Day ${range.start}–${selectedEnd} · 显示 ${words.length}/${reviewTotal} 个词 · ${label}`
      : `第 ${reviewWeek} 周尚未学到，不显示后面的单词`;
    list.hidden = words.length === 0;
    list.classList.toggle("word-grid--grouped", words.length > 0);
    $("#reviewEmpty").hidden = words.length !== 0;
    $("#playReview").disabled = words.length === 0;
    list.innerHTML = reviewWordGroupsHTML(words);
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
    const selectedEnd = selectedReviewEndDay(reviewWeek);
    const scopedWords = reviewRangeWords(reviewWeek);
    const items = renderWeeklySentenceList({
      context: "review",
      week: reviewWeek,
      offset: state.reviewSentenceOffset,
      englishOnly: false,
      scopedWords,
    });
    $("#reviewSentenceSummary").textContent = selectedEnd
      ? `第 ${reviewWeek} 周 · Day ${range.start}–${selectedEnd} · ${items.length} 句 · 只用已学词自然组句`
      : `第 ${reviewWeek} 周尚未学到，暂不生成句子`;
    $("#playReviewSentences").disabled = items.length === 0;
    $("#shadowReviewSentences").disabled = items.length === 0;
    $("#refreshReviewSentences").disabled = items.length < 2;
  }

  function renderListening() {
    const range = weekRange(listeningWeek);
    const selectedEnd = selectedReviewEndDay(listeningWeek);
    const scopedWords = reviewRangeWords(listeningWeek);
    $("#listeningWeekSelect").value = String(listeningWeek);
    populateDayRangeSelect("#listeningDayRangeSelect", listeningWeek, true);
    $("#listeningRate").value = String(listeningRate());
    const items = renderWeeklySentenceList({
      context: "listening",
      week: listeningWeek,
      offset: state.listeningSentenceOffset,
      englishOnly: true,
      scopedWords,
    });
    $("#listeningSummary").textContent = selectedEnd
      ? `Week ${listeningWeek} · Day ${range.start}–Day ${selectedEnd} · ${items.length} sentences · English only`
      : `Week ${listeningWeek} has not been learned yet`;
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
        <input class="edit-zh" value="${escapeHTML(shortMeaning(item.chinese) || item.chinese || "")}" placeholder="中文意思" aria-label="第 ${index + 1} 个词的中文" autocomplete="off" />
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
    state.sentenceOffset = 0;
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
