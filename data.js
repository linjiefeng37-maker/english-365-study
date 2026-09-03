/*
 * 英语 365 词库
 * 每天都是一个独立对象，方便今后继续添加。
 * Day 1–3 在本文件中；Day 4–50 由独立词库文件载入；Day 51–365 保持空白。
 */
(function () {
  const word = (english, chinese, phonetic) => ({ english, chinese, phonetic });

  const days = Array.from({ length: 365 }, (_, index) => ({
    day: index + 1,
    title: `Day ${index + 1}`,
    words: [],
  }));

  days[0].words = [
    word("I", "我", "/aɪ/"),
    word("you", "你；你们", "/juː/"),
    word("he", "他", "/hiː/"),
    word("she", "她", "/ʃiː/"),
    word("we", "我们", "/wiː/"),
    word("they", "他们；她们；它们", "/ðeɪ/"),
    word("am", "是（用于 I）", "/æm/"),
    word("is", "是（用于 he / she / it）", "/ɪz/"),
    word("are", "是（用于 you / we / they）", "/ɑːr/"),
    word("want", "想要", "/wɑːnt/"),
    word("like", "喜欢", "/laɪk/"),
    word("learn", "学习", "/lɜːrn/"),
    word("go", "去", "/ɡoʊ/"),
    word("come", "来", "/kʌm/"),
    word("eat", "吃", "/iːt/"),
  ];

  days[1].words = [
    word("drink", "喝；饮料", "/drɪŋk/"),
    word("see", "看见", "/siː/"),
    word("know", "知道；认识", "/noʊ/"),
    word("do", "做", "/duː/"),
    word("have", "有；拥有", "/hæv/"),
    word("home", "家；在家", "/hoʊm/"),
    word("work", "工作", "/wɜːrk/"),
    word("school", "学校", "/skuːl/"),
    word("today", "今天", "/təˈdeɪ/"),
    word("tomorrow", "明天", "/təˈmɑːroʊ/"),
    word("now", "现在", "/naʊ/"),
    word("good", "好的", "/ɡʊd/"),
    word("bad", "坏的；不好的", "/bæd/"),
    word("English", "英语；英文", "/ˈɪŋɡlɪʃ/"),
    word("time", "时间；次数", "/taɪm/"),
  ];

  days[2].words = [
    word("make", "做；制作", "/meɪk/"),
    word("get", "得到；获得", "/ɡet/"),
    word("take", "拿；带", "/teɪk/"),
    word("give", "给", "/ɡɪv/"),
    word("look", "看", "/lʊk/"),
    word("say", "说", "/seɪ/"),
    word("think", "想；认为", "/θɪŋk/"),
    word("feel", "感觉", "/fiːl/"),
    word("need", "需要", "/niːd/"),
    word("help", "帮助", "/help/"),
    word("water", "水", "/ˈwɔːtər/"),
    word("food", "食物", "/fuːd/"),
    word("happy", "开心的", "/ˈhæpi/"),
    word("tired", "累的", "/ˈtaɪərd/"),
    word("hungry", "饿的", "/ˈhʌŋɡri/"),
  ];

  window.ENGLISH_365_DATA = { version: 1, days };
})();
