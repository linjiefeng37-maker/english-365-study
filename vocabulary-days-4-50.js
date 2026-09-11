/* Day 4-11 preserved; Day 12-50 imported from the user's final mixed desktop workbook. */
(function () {
  const groups = [
  [
    {
      "english": "can",
      "chinese": "能；可以",
      "phonetic": "/kæn/"
    },
    {
      "english": "read",
      "chinese": "读；阅读",
      "phonetic": "/ri:d/"
    },
    {
      "english": "write",
      "chinese": "写；书写",
      "phonetic": "/rait/"
    },
    {
      "english": "speak",
      "chinese": "说；讲",
      "phonetic": "/spi:k/"
    },
    {
      "english": "listen",
      "chinese": "听；倾听",
      "phonetic": "/'lisn/"
    },
    {
      "english": "use",
      "chinese": "使用；利用",
      "phonetic": "/ju:s/"
    },
    {
      "english": "buy",
      "chinese": "买；购买",
      "phonetic": "/bai/"
    },
    {
      "english": "phone",
      "chinese": "电话；手机",
      "phonetic": "/fәun/"
    },
    {
      "english": "money",
      "chinese": "钱；金钱",
      "phonetic": "/'mʌni/"
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/"
    },
    {
      "english": "family",
      "chinese": "家庭；家人",
      "phonetic": "/'fæmәli/"
    },
    {
      "english": "day",
      "chinese": "一天；白天",
      "phonetic": "/dei/"
    },
    {
      "english": "night",
      "chinese": "夜晚；晚上",
      "phonetic": "/nait/"
    },
    {
      "english": "morning",
      "chinese": "早晨；上午",
      "phonetic": "/'mɒ:niŋ/"
    },
    {
      "english": "love",
      "chinese": "爱；喜欢",
      "phonetic": "/lʌv/"
    }
  ],
  [
    {
      "english": "the",
      "chinese": "这；那；这些；那些（定冠词）",
      "phonetic": "/ðә/"
    },
    {
      "english": "of",
      "chinese": "……的；属于",
      "phonetic": "/ɒv/"
    },
    {
      "english": "and",
      "chinese": "和；而且",
      "phonetic": "/ænd/"
    },
    {
      "english": "to",
      "chinese": "到；向；去；对于",
      "phonetic": "/tu:/"
    },
    {
      "english": "in",
      "chinese": "在……里面；在……期间",
      "phonetic": "/in/"
    },
    {
      "english": "a",
      "chinese": "一个；一（不定冠词）",
      "phonetic": "/ei/"
    },
    {
      "english": "that",
      "chinese": "那个；那；引导从句",
      "phonetic": "/ðæt/"
    },
    {
      "english": "was",
      "chinese": "是；在（be 的过去式）",
      "phonetic": "/wɒz/"
    },
    {
      "english": "it",
      "chinese": "它；这件事",
      "phonetic": "/it/"
    },
    {
      "english": "his",
      "chinese": "他的",
      "phonetic": "/hiz/"
    },
    {
      "english": "with",
      "chinese": "和……一起；带有；用",
      "phonetic": "/wið/"
    },
    {
      "english": "as",
      "chinese": "像；作为；当……时",
      "phonetic": "/æz/"
    },
    {
      "english": "had",
      "chinese": "有；拥有（have 的过去式）",
      "phonetic": "/hæd/"
    },
    {
      "english": "for",
      "chinese": "为了；给；因为",
      "phonetic": "/fɒ:/"
    },
    {
      "english": "at",
      "chinese": "在；向；以",
      "phonetic": "/æt/"
    }
  ],
  [
    {
      "english": "by",
      "chinese": "由；通过；在旁边",
      "phonetic": "/bai/"
    },
    {
      "english": "on",
      "chinese": "在……上；关于；继续",
      "phonetic": "/ɒn/"
    },
    {
      "english": "not",
      "chinese": "不；不是",
      "phonetic": "/nɒt/"
    },
    {
      "english": "be",
      "chinese": "是；成为；存在",
      "phonetic": "/bi:/"
    },
    {
      "english": "from",
      "chinese": "从；来自",
      "phonetic": "/frɒm/"
    },
    {
      "english": "but",
      "chinese": "但是；除了",
      "phonetic": "/bʌt/"
    },
    {
      "english": "or",
      "chinese": "或者；否则",
      "phonetic": "/ɒ:/"
    },
    {
      "english": "her",
      "chinese": "她；她的",
      "phonetic": "/hә:/"
    },
    {
      "english": "him",
      "chinese": "他",
      "phonetic": "/him/"
    },
    {
      "english": "which",
      "chinese": "哪一个；哪个",
      "phonetic": "/hwitʃ/"
    },
    {
      "english": "were",
      "chinese": "是；在（be 的过去式）",
      "phonetic": "/wә:/"
    },
    {
      "english": "all",
      "chinese": "全部；所有的",
      "phonetic": "/ɒ:l/"
    },
    {
      "english": "this",
      "chinese": "这个；这",
      "phonetic": "/θis/"
    },
    {
      "english": "said",
      "chinese": "说；讲（say 的过去式）",
      "phonetic": "/sed/"
    },
    {
      "english": "an",
      "chinese": "一",
      "phonetic": "/æn/"
    }
  ],
  [
    {
      "english": "one",
      "chinese": "一；一个；某个人",
      "phonetic": "/wʌn/"
    },
    {
      "english": "who",
      "chinese": "谁；……的人",
      "phonetic": "/hu:/"
    },
    {
      "english": "so",
      "chinese": "所以；如此；很",
      "phonetic": "/sәu/"
    },
    {
      "english": "what",
      "chinese": "什么；多么",
      "phonetic": "/hwɒt/"
    },
    {
      "english": "there",
      "chinese": "那里；有",
      "phonetic": "/ðєә/"
    },
    {
      "english": "their",
      "chinese": "他们的；她们的；它们的",
      "phonetic": "/ðєә/"
    },
    {
      "english": "when",
      "chinese": "什么时候；当……时",
      "phonetic": "/hwen/"
    },
    {
      "english": "been",
      "chinese": "是；在（be 的过去分词）",
      "phonetic": "/bi:n/"
    },
    {
      "english": "may",
      "chinese": "可能；可以；五月",
      "phonetic": "/mei/"
    },
    {
      "english": "if",
      "chinese": "如果；是否",
      "phonetic": "/if/"
    },
    {
      "english": "no",
      "chinese": "不；没有；不是",
      "phonetic": "/nәu/"
    },
    {
      "english": "up",
      "chinese": "向上；起来；增加",
      "phonetic": "/ʌp/"
    },
    {
      "english": "my",
      "chinese": "我的",
      "phonetic": "/mai/"
    },
    {
      "english": "them",
      "chinese": "他们；她们；它们",
      "phonetic": "/ðem/"
    },
    {
      "english": "into",
      "chinese": "进入...之内；朝...；深入...之中",
      "phonetic": "/'intu:/"
    }
  ],
  [
    {
      "english": "more",
      "chinese": "更多；更",
      "phonetic": "/mɒ:/"
    },
    {
      "english": "out",
      "chinese": "出去；在外；用完",
      "phonetic": "/aut/"
    },
    {
      "english": "would",
      "chinese": "将会；愿意；常常",
      "phonetic": "/wud/"
    },
    {
      "english": "me",
      "chinese": "我（宾格）",
      "phonetic": "/mi:/"
    },
    {
      "english": "did",
      "chinese": "做（do 的过去式）",
      "phonetic": "/did/"
    },
    {
      "english": "only",
      "chinese": "仅仅；唯一的",
      "phonetic": "/'әunli/"
    },
    {
      "english": "could",
      "chinese": "能；可以；可能",
      "phonetic": "/kud/"
    },
    {
      "english": "man",
      "chinese": "男人；人类；人员",
      "phonetic": "/mæn/"
    },
    {
      "english": "its",
      "chinese": "它的",
      "phonetic": "/its/"
    },
    {
      "english": "has",
      "chinese": "有；拥有（have 的第三人称单数）",
      "phonetic": "/hæz/"
    },
    {
      "english": "cat",
      "chinese": "猫",
      "phonetic": "/kæt/"
    },
    {
      "english": "hat",
      "chinese": "帽子",
      "phonetic": "/hæt/"
    },
    {
      "english": "bat",
      "chinese": "蝙蝠；球棒",
      "phonetic": "/bæt/"
    },
    {
      "english": "fat",
      "chinese": "胖的；脂肪",
      "phonetic": "/fæt/"
    },
    {
      "english": "sat",
      "chinese": "坐（sit 的过去式）",
      "phonetic": "/sæt/"
    }
  ],
  [
    {
      "english": "about",
      "chinese": "关于；大约；到处",
      "phonetic": "/ә'baut/"
    },
    {
      "english": "such",
      "chinese": "这样的；如此的",
      "phonetic": "/sʌtʃ/"
    },
    {
      "english": "before",
      "chinese": "在……之前；以前",
      "phonetic": "/bi'fɒ:/"
    },
    {
      "english": "very",
      "chinese": "非常；正是；真正的",
      "phonetic": "/'veri/"
    },
    {
      "english": "how",
      "chinese": "怎样；多么",
      "phonetic": "/hau/"
    },
    {
      "english": "should",
      "chinese": "应该；可能会",
      "phonetic": "/ʃud/"
    },
    {
      "english": "over",
      "chinese": "结束；越过；从头到尾",
      "phonetic": "/'әuvә/"
    },
    {
      "english": "your",
      "chinese": "你的；你们的",
      "phonetic": "/juә/"
    },
    {
      "english": "these",
      "chinese": "这些",
      "phonetic": "/ði:z/"
    },
    {
      "english": "new",
      "chinese": "新的；新出现的",
      "phonetic": "/nju:/"
    },
    {
      "english": "tell",
      "chinese": "告诉；说；吩咐",
      "phonetic": "/tel/"
    },
    {
      "english": "well",
      "chinese": "好；健康的；井",
      "phonetic": "/wel/"
    },
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/"
    },
    {
      "english": "spell",
      "chinese": "拼写",
      "phonetic": "/spel/"
    },
    {
      "english": "smell",
      "chinese": "闻；气味",
      "phonetic": "/smel/"
    }
  ],
  [
    {
      "english": "first",
      "chinese": "第一；首先；最初",
      "phonetic": "/fә:st/"
    },
    {
      "english": "himself",
      "chinese": "他自己；他亲自",
      "phonetic": "/him'self/"
    },
    {
      "english": "men",
      "chinese": "男人们；人们",
      "phonetic": "/men/"
    },
    {
      "english": "two",
      "chinese": "二；两个",
      "phonetic": "/tu:/"
    },
    {
      "english": "down",
      "chinese": "向下；情绪低落的",
      "phonetic": "/daun/"
    },
    {
      "english": "face",
      "chinese": "脸；面容；正面",
      "phonetic": "/feis/"
    },
    {
      "english": "upon",
      "chinese": "在...之上；迫近；紧接着",
      "phonetic": "/ә'pɒn/"
    },
    {
      "english": "french",
      "chinese": "法国的；法语",
      "phonetic": "/frentʃ/"
    },
    {
      "english": "our",
      "chinese": "我们的",
      "phonetic": "/'auә/"
    },
    {
      "english": "same",
      "chinese": "相同的；同样",
      "phonetic": "/seim/"
    },
    {
      "english": "look",
      "chinese": "看",
      "phonetic": "/lʊk/"
    },
    {
      "english": "book",
      "chinese": "书；预订",
      "phonetic": "/bʊk/"
    },
    {
      "english": "cook",
      "chinese": "做饭；厨师",
      "phonetic": "/kʊk/"
    },
    {
      "english": "hook",
      "chinese": "钩子；钩住",
      "phonetic": "/hʊk/"
    },
    {
      "english": "took",
      "chinese": "拿；带（take 的过去式）",
      "phonetic": "/tuk/"
    }
  ],
  [
    {
      "english": "states",
      "chinese": "状态；州（state 的复数）",
      "phonetic": ""
    },
    {
      "english": "came",
      "chinese": "来（come 的过去式）",
      "phonetic": "/keim/"
    },
    {
      "english": "where",
      "chinese": "哪里；在……的地方",
      "phonetic": "/hwєә/"
    },
    {
      "english": "under",
      "chinese": "在……下面；少于；受……控制",
      "phonetic": "/'ʌndә/"
    },
    {
      "english": "room",
      "chinese": "房间；空位；场所",
      "phonetic": "/ru:m/"
    },
    {
      "english": "must",
      "chinese": "必须；一定",
      "phonetic": "/mʌst/"
    },
    {
      "english": "even",
      "chinese": "甚至；平坦的；偶数的",
      "phonetic": "/'i:vәn/"
    },
    {
      "english": "eyes",
      "chinese": "眼睛（eye 的复数）",
      "phonetic": ""
    },
    {
      "english": "still",
      "chinese": "仍然；安静的；静止的",
      "phonetic": "/stil/"
    },
    {
      "english": "ear",
      "chinese": "耳朵",
      "phonetic": "/ɪr/"
    },
    {
      "english": "bear",
      "chinese": "熊；承受",
      "phonetic": "/ber/"
    },
    {
      "english": "near",
      "chinese": "近的；近亲的；近似的",
      "phonetic": "/niә/"
    },
    {
      "english": "year",
      "chinese": "年；年度",
      "phonetic": "/jiә/"
    },
    {
      "english": "dear",
      "chinese": "亲爱的人；亲爱的；昂贵的",
      "phonetic": "/'diә/"
    },
    {
      "english": "fear",
      "chinese": "恐怖；害怕；担心",
      "phonetic": "/fiә/"
    }
  ],
  [
    {
      "english": "room",
      "chinese": "房间",
      "phonetic": "/ru:m/",
      "category": "场景词",
      "theme": "家里",
      "relation": "bathroom / bedroom / room；door / floor",
      "isGuide": false
    },
    {
      "english": "bedroom",
      "chinese": "卧室",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "bathroom / bedroom / room；door / floor",
      "isGuide": false
    },
    {
      "english": "bathroom",
      "chinese": "浴室",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "bathroom / bedroom / room；door / floor",
      "isGuide": false
    },
    {
      "english": "door",
      "chinese": "门",
      "phonetic": "/dɒ:/",
      "category": "场景词",
      "theme": "家里",
      "relation": "bathroom / bedroom / room；door / floor",
      "isGuide": false
    },
    {
      "english": "floor",
      "chinese": "地板",
      "phonetic": "/flɔːr/",
      "category": "场景词",
      "theme": "家里",
      "relation": "bathroom / bedroom / room；door / floor",
      "isGuide": false
    },
    {
      "english": "open",
      "chinese": "打开",
      "phonetic": "/'әupәn/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "close",
      "chinese": "关闭",
      "phonetic": "/klәuz/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "enter",
      "chinese": "进入",
      "phonetic": "",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "leave",
      "chinese": "离开",
      "phonetic": "",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "天",
      "phonetic": "/dei/",
      "category": "引导词",
      "theme": "家里",
      "relation": "-ay 同韵",
      "isGuide": true
    },
    {
      "english": "way",
      "chinese": "路",
      "phonetic": "/wei/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "say",
      "chinese": "说",
      "phonetic": "/seɪ/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "may",
      "chinese": "可能",
      "phonetic": "/mei/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "pay",
      "chinese": "支付",
      "phonetic": "/peɪ/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "play",
      "chinese": "玩",
      "phonetic": "/pleɪ/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ay 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "wall",
      "chinese": "墙",
      "phonetic": "/wɒ:l/",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "chair",
      "chinese": "椅子",
      "phonetic": "/tʃer/",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "table",
      "chinese": "桌子",
      "phonetic": "/'teibl/",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "sofa",
      "chinese": "沙发",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "lamp",
      "chinese": "灯",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "on",
      "chinese": "开",
      "phonetic": "/ɒn/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "off",
      "chinese": "关",
      "phonetic": "",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "in",
      "chinese": "里面",
      "phonetic": "/in/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "out",
      "chinese": "外面",
      "phonetic": "/aut/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "引导词",
      "theme": "家里",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": true
    },
    {
      "english": "light",
      "chinese": "光",
      "phonetic": "/lait/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "正确",
      "phonetic": "/rait/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "write",
      "chinese": "写",
      "phonetic": "/rait/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "might",
      "chinese": "可能",
      "phonetic": "/mait/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "fight",
      "chinese": "打架",
      "phonetic": "/faɪt/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    }
  ],
  [
    {
      "english": "bed",
      "chinese": "床",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "window",
      "chinese": "窗户",
      "phonetic": "/'windәu/",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "key",
      "chinese": "钥匙",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "kitchen",
      "chinese": "厨房",
      "phonetic": "",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "house",
      "chinese": "房子",
      "phonetic": "/haus/",
      "category": "场景词",
      "theme": "家里",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "up",
      "chinese": "上",
      "phonetic": "/ʌp/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "down",
      "chinese": "下",
      "phonetic": "/daun/",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "clean",
      "chinese": "干净",
      "phonetic": "",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dirty",
      "chinese": "脏",
      "phonetic": "",
      "category": "成对词",
      "theme": "家里",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hear",
      "chinese": "听见",
      "phonetic": "",
      "category": "引导词",
      "theme": "家里",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": true
    },
    {
      "english": "here",
      "chinese": "这里",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "附近",
      "phonetic": "/niә/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "year",
      "chinese": "年",
      "phonetic": "/jiә/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "dear",
      "chinese": "亲爱的",
      "phonetic": "/'diә/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "fear",
      "chinese": "害怕",
      "phonetic": "/fiә/",
      "category": "同词族/同韵",
      "theme": "家里",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "rice",
      "chinese": "米饭",
      "phonetic": "/raɪs/",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "ice / rice；heat / meat",
      "isGuide": false
    },
    {
      "english": "ice",
      "chinese": "冰",
      "phonetic": "/aɪs/",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "ice / rice；heat / meat",
      "isGuide": false
    },
    {
      "english": "meat",
      "chinese": "肉",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "ice / rice；heat / meat",
      "isGuide": false
    },
    {
      "english": "heat",
      "chinese": "热",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "ice / rice；heat / meat",
      "isGuide": false
    },
    {
      "english": "food",
      "chinese": "食物",
      "phonetic": "/fuːd/",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "ice / rice；heat / meat",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "full",
      "chinese": "满的",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "empty",
      "chinese": "空的",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "see",
      "chinese": "看见",
      "phonetic": "/siː/",
      "category": "引导词",
      "theme": "厨房和食物",
      "relation": "see/sea同音 + 长e音",
      "isGuide": true
    },
    {
      "english": "sea",
      "chinese": "海",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "see/sea同音 + 长e音",
      "isGuide": false
    },
    {
      "english": "free",
      "chinese": "自由的",
      "phonetic": "/fri:/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "see/sea同音 + 长e音",
      "isGuide": false
    },
    {
      "english": "tree",
      "chinese": "树",
      "phonetic": "/triː/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "see/sea同音 + 长e音",
      "isGuide": false
    },
    {
      "english": "three",
      "chinese": "三",
      "phonetic": "/θri:/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "see/sea同音 + 长e音",
      "isGuide": false
    },
    {
      "english": "bee",
      "chinese": "蜜蜂",
      "phonetic": "/biː/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "see/sea同音 + 长e音",
      "isGuide": false
    }
  ],
  [
    {
      "english": "water",
      "chinese": "水",
      "phonetic": "/ˈwɔːtər/",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bread",
      "chinese": "面包",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "egg",
      "chinese": "鸡蛋",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "milk",
      "chinese": "牛奶",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "fish",
      "chinese": "鱼",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "more",
      "chinese": "更多",
      "phonetic": "/mɒ:/",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "less",
      "chinese": "更少",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "before",
      "chinese": "之前",
      "phonetic": "/bi'fɒ:/",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "after",
      "chinese": "之后",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "make",
      "chinese": "做",
      "phonetic": "/meɪk/",
      "category": "引导词",
      "theme": "厨房和食物",
      "relation": "-ake 同韵",
      "isGuide": true
    },
    {
      "english": "take",
      "chinese": "拿",
      "phonetic": "/teɪk/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "wake",
      "chinese": "醒来",
      "phonetic": "/weɪk/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "cake",
      "chinese": "蛋糕",
      "phonetic": "/keɪk/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "shake",
      "chinese": "摇",
      "phonetic": "/ʃeɪk/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "lake",
      "chinese": "湖",
      "phonetic": "/leɪk/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-ake 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "chicken",
      "chinese": "鸡肉",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "fruit",
      "chinese": "水果",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "vegetable",
      "chinese": "蔬菜",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "cup",
      "chinese": "杯子",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "plate",
      "chinese": "盘子",
      "phonetic": "",
      "category": "场景词",
      "theme": "厨房和食物",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "eat",
      "chinese": "吃",
      "phonetic": "/iːt/",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "生活对应",
      "isGuide": false
    },
    {
      "english": "drink",
      "chinese": "喝",
      "phonetic": "/drɪŋk/",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "生活对应",
      "isGuide": false
    },
    {
      "english": "clean",
      "chinese": "干净",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dirty",
      "chinese": "脏",
      "phonetic": "",
      "category": "成对词",
      "theme": "厨房和食物",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "all",
      "chinese": "全部",
      "phonetic": "/ɒ:l/",
      "category": "引导词",
      "theme": "厨房和食物",
      "relation": "-all 同韵",
      "isGuide": true
    },
    {
      "english": "call",
      "chinese": "打电话",
      "phonetic": "/kɒ:l/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-all 同韵",
      "isGuide": false
    },
    {
      "english": "fall",
      "chinese": "掉落",
      "phonetic": "/fɔːl/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-all 同韵",
      "isGuide": false
    },
    {
      "english": "wall",
      "chinese": "墙",
      "phonetic": "/wɒ:l/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-all 同韵",
      "isGuide": false
    },
    {
      "english": "small",
      "chinese": "小的",
      "phonetic": "/smɒ:l/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-all 同韵",
      "isGuide": false
    },
    {
      "english": "ball",
      "chinese": "球",
      "phonetic": "/bɔːl/",
      "category": "同词族/同韵",
      "theme": "厨房和食物",
      "relation": "-all 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "shower",
      "chinese": "淋浴",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "toilet",
      "chinese": "厕所",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "sink",
      "chinese": "洗手池",
      "phonetic": "/sɪŋk/",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "mirror",
      "chinese": "镜子",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "towel",
      "chinese": "毛巾",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "clean",
      "chinese": "干净",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dirty",
      "chinese": "脏",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wet",
      "chinese": "湿的",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dry",
      "chinese": "干的",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "old",
      "chinese": "老的",
      "phonetic": "/әuld/",
      "category": "引导词",
      "theme": "洗漱和清洁",
      "relation": "-old 同韵",
      "isGuide": true
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "hold",
      "chinese": "拿住",
      "phonetic": "/hoʊld/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "told",
      "chinese": "告诉了",
      "phonetic": "/tәuld/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "gold",
      "chinese": "金子",
      "phonetic": "/ɡoʊld/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "sold",
      "chinese": "卖了",
      "phonetic": "/soʊld/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-old 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "soap",
      "chinese": "肥皂",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "toothbrush",
      "chinese": "牙刷",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "toothpaste",
      "chinese": "牙膏",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hair",
      "chinese": "头发",
      "phonetic": "/hєә/",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "face",
      "chinese": "脸",
      "phonetic": "/feis/",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "on",
      "chinese": "开",
      "phonetic": "/ɒn/",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "off",
      "chinese": "关",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "rain",
      "chinese": "雨",
      "phonetic": "/reɪn/",
      "category": "引导词",
      "theme": "洗漱和清洁",
      "relation": "-ain 同韵",
      "isGuide": true
    },
    {
      "english": "train",
      "chinese": "火车",
      "phonetic": "/treɪn/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "pain",
      "chinese": "疼痛",
      "phonetic": "/pein/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "main",
      "chinese": "主要的",
      "phonetic": "/meɪn/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "brain",
      "chinese": "大脑",
      "phonetic": "/breɪn/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "chain",
      "chinese": "链子",
      "phonetic": "/tʃeɪn/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ain 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "hand",
      "chinese": "手",
      "phonetic": "/hænd/",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "clothes",
      "chinese": "衣服",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "trash",
      "chinese": "垃圾",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "basket",
      "chinese": "篮子",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "brush",
      "chinese": "刷子",
      "phonetic": "",
      "category": "场景词",
      "theme": "洗漱和清洁",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "before",
      "chinese": "之前",
      "phonetic": "/bi'fɒ:/",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "after",
      "chinese": "之后",
      "phonetic": "",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "open",
      "chinese": "打开",
      "phonetic": "/'әupәn/",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "close",
      "chinese": "关闭",
      "phonetic": "/klәuz/",
      "category": "成对词",
      "theme": "洗漱和清洁",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "look",
      "chinese": "看",
      "phonetic": "/lʊk/",
      "category": "引导词",
      "theme": "洗漱和清洁",
      "relation": "-ook 同韵",
      "isGuide": true
    },
    {
      "english": "book",
      "chinese": "书",
      "phonetic": "/bʊk/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "cook",
      "chinese": "做饭",
      "phonetic": "/kʊk/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "took",
      "chinese": "拿了",
      "phonetic": "/tuk/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "hook",
      "chinese": "钩子",
      "phonetic": "/hʊk/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "shook",
      "chinese": "摇了",
      "phonetic": "/ʃʊk/",
      "category": "同词族/同韵",
      "theme": "洗漱和清洁",
      "relation": "-ook 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "school",
      "chinese": "学校",
      "phonetic": "/skuːl/",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "class",
      "chinese": "课",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "teacher",
      "chinese": "老师",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "student",
      "chinese": "学生",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "book",
      "chinese": "书",
      "phonetic": "/bʊk/",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "ask",
      "chinese": "问",
      "phonetic": "",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "answer",
      "chinese": "回答",
      "phonetic": "",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "read",
      "chinese": "读",
      "phonetic": "/ri:d/",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "学习对应",
      "isGuide": false
    },
    {
      "english": "write",
      "chinese": "写",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "学习对应",
      "isGuide": false
    },
    {
      "english": "tell",
      "chinese": "告诉",
      "phonetic": "/tel/",
      "category": "引导词",
      "theme": "学校和学习",
      "relation": "-ell 同韵",
      "isGuide": true
    },
    {
      "english": "well",
      "chinese": "好",
      "phonetic": "/wel/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "spell",
      "chinese": "拼写",
      "phonetic": "/spel/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "smell",
      "chinese": "闻",
      "phonetic": "/smel/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "bell",
      "chinese": "铃",
      "phonetic": "/bel/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-ell 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "notebook",
      "chinese": "笔记本",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "pen",
      "chinese": "笔",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "pencil",
      "chinese": "铅笔",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "paper",
      "chinese": "纸",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "desk",
      "chinese": "课桌",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "speak",
      "chinese": "说",
      "phonetic": "/spi:k/",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "交流对应",
      "isGuide": false
    },
    {
      "english": "listen",
      "chinese": "听",
      "phonetic": "/'lisn/",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "交流对应",
      "isGuide": false
    },
    {
      "english": "start",
      "chinese": "开始",
      "phonetic": "/stɑːrt/",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "finish",
      "chinese": "结束",
      "phonetic": "",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "go",
      "chinese": "去",
      "phonetic": "/ɡoʊ/",
      "category": "引导词",
      "theme": "学校和学习",
      "relation": "长o音同韵",
      "isGuide": true
    },
    {
      "english": "no",
      "chinese": "不",
      "phonetic": "/nәu/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "长o音同韵",
      "isGuide": false
    },
    {
      "english": "so",
      "chinese": "所以",
      "phonetic": "/sәu/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "长o音同韵",
      "isGuide": false
    },
    {
      "english": "show",
      "chinese": "展示",
      "phonetic": "/ʃәu/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "长o音同韵",
      "isGuide": false
    },
    {
      "english": "know",
      "chinese": "知道",
      "phonetic": "/noʊ/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "长o音同韵",
      "isGuide": false
    },
    {
      "english": "grow",
      "chinese": "生长",
      "phonetic": "/ɡroʊ/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "长o音同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "lesson",
      "chinese": "课程",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "word",
      "chinese": "单词",
      "phonetic": "/wә:d/",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "sentence",
      "chinese": "句子",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "question",
      "chinese": "问题",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "answer",
      "chinese": "答案",
      "phonetic": "",
      "category": "场景词",
      "theme": "学校和学习",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "正确",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wrong",
      "chinese": "错误",
      "phonetic": "",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "easy",
      "chinese": "容易",
      "phonetic": "",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hard",
      "chinese": "难",
      "phonetic": "",
      "category": "成对词",
      "theme": "学校和学习",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "down",
      "chinese": "向下",
      "phonetic": "/daun/",
      "category": "引导词",
      "theme": "学校和学习",
      "relation": "-own 同韵",
      "isGuide": true
    },
    {
      "english": "town",
      "chinese": "城镇",
      "phonetic": "/taun/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-own 同韵",
      "isGuide": false
    },
    {
      "english": "brown",
      "chinese": "棕色的",
      "phonetic": "/braʊn/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-own 同韵",
      "isGuide": false
    },
    {
      "english": "crown",
      "chinese": "王冠",
      "phonetic": "/kraʊn/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-own 同韵",
      "isGuide": false
    },
    {
      "english": "clown",
      "chinese": "小丑",
      "phonetic": "/klaʊn/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-own 同韵",
      "isGuide": false
    },
    {
      "english": "gown",
      "chinese": "长袍",
      "phonetic": "/ɡaʊn/",
      "category": "同词族/同韵",
      "theme": "学校和学习",
      "relation": "-own 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "office",
      "chinese": "办公室",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "job",
      "chinese": "工作",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "work",
      "chinese": "工作",
      "phonetic": "/wɜːrk/",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "desk",
      "chinese": "桌子",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "computer",
      "chinese": "电脑",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "start",
      "chinese": "开始",
      "phonetic": "/stɑːrt/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "finish",
      "chinese": "结束",
      "phonetic": "",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "send",
      "chinese": "发送",
      "phonetic": "/send/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "receive",
      "chinese": "接收",
      "phonetic": "",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "air",
      "chinese": "空气",
      "phonetic": "/єә/",
      "category": "引导词",
      "theme": "工作和办公室",
      "relation": "-air 同韵",
      "isGuide": true
    },
    {
      "english": "fair",
      "chinese": "公平的",
      "phonetic": "/fer/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "hair",
      "chinese": "头发",
      "phonetic": "/hєә/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "pair",
      "chinese": "一对",
      "phonetic": "/per/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "chair",
      "chinese": "椅子",
      "phonetic": "/tʃer/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "stair",
      "chinese": "楼梯",
      "phonetic": "/ster/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-air 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "phone",
      "chinese": "手机",
      "phonetic": "/fәun/",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "email",
      "chinese": "邮件",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "meeting",
      "chinese": "会议",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "boss",
      "chinese": "老板",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "team",
      "chinese": "团队",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "ask",
      "chinese": "问",
      "phonetic": "",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "answer",
      "chinese": "回答",
      "phonetic": "",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "early",
      "chinese": "早",
      "phonetic": "/'ә:li/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "late",
      "chinese": "晚",
      "phonetic": "/leit/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "same",
      "chinese": "相同的",
      "phonetic": "/seim/",
      "category": "引导词",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": true
    },
    {
      "english": "name",
      "chinese": "名字",
      "phonetic": "/neim/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "game",
      "chinese": "游戏",
      "phonetic": "/ɡeɪm/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "came",
      "chinese": "来了",
      "phonetic": "/keim/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "blame",
      "chinese": "责怪",
      "phonetic": "/bleɪm/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "frame",
      "chinese": "框架",
      "phonetic": "/freɪm/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "file",
      "chinese": "文件",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "document",
      "chinese": "文档",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "project",
      "chinese": "项目",
      "phonetic": "/'prɒdʒekt/",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "time",
      "chinese": "时间",
      "phonetic": "/taɪm/",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "break",
      "chinese": "休息",
      "phonetic": "",
      "category": "场景词",
      "theme": "工作和办公室",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "work",
      "chinese": "工作",
      "phonetic": "/wɜːrk/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "rest",
      "chinese": "休息",
      "phonetic": "/rest/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "fast",
      "chinese": "快的",
      "phonetic": "",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "slow",
      "chinese": "慢的",
      "phonetic": "/sloʊ/",
      "category": "成对词",
      "theme": "工作和办公室",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "same",
      "chinese": "相同的",
      "phonetic": "/seim/",
      "category": "引导词",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": true
    },
    {
      "english": "name",
      "chinese": "名字",
      "phonetic": "/neim/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "game",
      "chinese": "游戏",
      "phonetic": "/ɡeɪm/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "came",
      "chinese": "来了",
      "phonetic": "/keim/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "blame",
      "chinese": "责怪",
      "phonetic": "/bleɪm/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "frame",
      "chinese": "框架",
      "phonetic": "/freɪm/",
      "category": "同词族/同韵",
      "theme": "工作和办公室",
      "relation": "-ame 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "street",
      "chinese": "街道",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "road",
      "chinese": "路",
      "phonetic": "/rәud/",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bus",
      "chinese": "公交车",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "train",
      "chinese": "火车",
      "phonetic": "/treɪn/",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "car",
      "chinese": "汽车",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "come",
      "chinese": "来",
      "phonetic": "/kʌm/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "go",
      "chinese": "去",
      "phonetic": "/ɡoʊ/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "arrive",
      "chinese": "到达",
      "phonetic": "",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "leave",
      "chinese": "离开",
      "phonetic": "",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "end",
      "chinese": "结束",
      "phonetic": "/end/",
      "category": "引导词",
      "theme": "交通和旅行",
      "relation": "-end 同韵",
      "isGuide": true
    },
    {
      "english": "send",
      "chinese": "发送",
      "phonetic": "/send/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "spend",
      "chinese": "花费",
      "phonetic": "/spend/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "bend",
      "chinese": "弯曲",
      "phonetic": "/bend/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "weekend",
      "chinese": "周末",
      "phonetic": "/ˈwiːkend/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-end 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "taxi",
      "chinese": "出租车",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "station",
      "chinese": "车站",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "airport",
      "chinese": "机场",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "ticket",
      "chinese": "票",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "seat",
      "chinese": "座位",
      "phonetic": "/si:t/",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "left",
      "chinese": "左",
      "phonetic": "/left/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "右",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "近",
      "phonetic": "/niә/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "far",
      "chinese": "远",
      "phonetic": "/fɑ:/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hand",
      "chinese": "手",
      "phonetic": "/hænd/",
      "category": "引导词",
      "theme": "交通和旅行",
      "relation": "-and 同韵",
      "isGuide": true
    },
    {
      "english": "land",
      "chinese": "土地",
      "phonetic": "/lænd/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "stand",
      "chinese": "站",
      "phonetic": "/stænd/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "band",
      "chinese": "乐队",
      "phonetic": "/bænd/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "sand",
      "chinese": "沙子",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "grand",
      "chinese": "宏大的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-and 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "map",
      "chinese": "地图",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "stop",
      "chinese": "站点",
      "phonetic": "/stɑːp/",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "trip",
      "chinese": "旅行",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bag",
      "chinese": "包",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hotel",
      "chinese": "酒店",
      "phonetic": "",
      "category": "场景词",
      "theme": "交通和旅行",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "fast",
      "chinese": "快的",
      "phonetic": "",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "slow",
      "chinese": "慢的",
      "phonetic": "/sloʊ/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "in",
      "chinese": "里面",
      "phonetic": "/in/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "out",
      "chinese": "外面",
      "phonetic": "/aut/",
      "category": "成对词",
      "theme": "交通和旅行",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "it",
      "chinese": "它",
      "phonetic": "/it/",
      "category": "引导词",
      "theme": "交通和旅行",
      "relation": "-it 同韵",
      "isGuide": true
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "fit",
      "chinese": "合适",
      "phonetic": "/fɪt/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "hit",
      "chinese": "打",
      "phonetic": "/hɪt/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "bit",
      "chinese": "一点",
      "phonetic": "/bɪt/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "quit",
      "chinese": "停止",
      "phonetic": "/kwɪt/",
      "category": "同词族/同韵",
      "theme": "交通和旅行",
      "relation": "-it 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "shop",
      "chinese": "商店",
      "phonetic": "/ʃɑːp/",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "store",
      "chinese": "商店",
      "phonetic": "/stɔːr/",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "market",
      "chinese": "市场",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "money",
      "chinese": "钱",
      "phonetic": "/'mʌni/",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "price",
      "chinese": "价格",
      "phonetic": "/praɪs/",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "buy",
      "chinese": "买",
      "phonetic": "/bai/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "give",
      "chinese": "给",
      "phonetic": "/ɡɪv/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "take",
      "chinese": "拿",
      "phonetic": "/teɪk/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "it",
      "chinese": "它",
      "phonetic": "/it/",
      "category": "引导词",
      "theme": "购物和钱",
      "relation": "-it 同韵",
      "isGuide": true
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "fit",
      "chinese": "合适",
      "phonetic": "/fɪt/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "hit",
      "chinese": "打",
      "phonetic": "/hɪt/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "bit",
      "chinese": "一点",
      "phonetic": "/bɪt/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "quit",
      "chinese": "停止",
      "phonetic": "/kwɪt/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-it 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "cash",
      "chinese": "现金",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "card",
      "chinese": "卡",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bag",
      "chinese": "袋子",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "size",
      "chinese": "尺码",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "color",
      "chinese": "颜色",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "cheap",
      "chinese": "便宜",
      "phonetic": "",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "expensive",
      "chinese": "贵",
      "phonetic": "",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "more",
      "chinese": "更多",
      "phonetic": "/mɒ:/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "less",
      "chinese": "更少",
      "phonetic": "",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "top",
      "chinese": "顶部",
      "phonetic": "/tɑːp/",
      "category": "引导词",
      "theme": "购物和钱",
      "relation": "-op 同韵",
      "isGuide": true
    },
    {
      "english": "stop",
      "chinese": "停止",
      "phonetic": "/stɑːp/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "shop",
      "chinese": "商店",
      "phonetic": "/ʃɑːp/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "drop",
      "chinese": "掉下",
      "phonetic": "/drɑːp/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "pop",
      "chinese": "流行",
      "phonetic": "/pɑːp/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "hop",
      "chinese": "跳",
      "phonetic": "/hɑːp/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-op 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "clothes",
      "chinese": "衣服",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "shoes",
      "chinese": "鞋",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "sale",
      "chinese": "促销",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "receipt",
      "chinese": "收据",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "customer",
      "chinese": "顾客",
      "phonetic": "",
      "category": "场景词",
      "theme": "购物和钱",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "big",
      "chinese": "大的",
      "phonetic": "",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "small",
      "chinese": "小的",
      "phonetic": "/smɒ:l/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "same",
      "chinese": "相同",
      "phonetic": "/seim/",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "different",
      "chinese": "不同",
      "phonetic": "",
      "category": "成对词",
      "theme": "购物和钱",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "back",
      "chinese": "后面",
      "phonetic": "/bæk/",
      "category": "引导词",
      "theme": "购物和钱",
      "relation": "-ack 同韵",
      "isGuide": true
    },
    {
      "english": "black",
      "chinese": "黑色的",
      "phonetic": "/blæk/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "track",
      "chinese": "轨道",
      "phonetic": "/træk/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "pack",
      "chinese": "打包",
      "phonetic": "/pæk/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "lack",
      "chinese": "缺少",
      "phonetic": "/læk/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "snack",
      "chinese": "零食",
      "phonetic": "/snæk/",
      "category": "同词族/同韵",
      "theme": "购物和钱",
      "relation": "-ack 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "restaurant",
      "chinese": "餐厅",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "menu",
      "chinese": "菜单",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "table",
      "chinese": "桌子",
      "phonetic": "/'teibl/",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "waiter",
      "chinese": "服务员",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "food",
      "chinese": "食物",
      "phonetic": "/fuːd/",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "eat",
      "chinese": "吃",
      "phonetic": "/iːt/",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "生活对应",
      "isGuide": false
    },
    {
      "english": "drink",
      "chinese": "喝",
      "phonetic": "/drɪŋk/",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "生活对应",
      "isGuide": false
    },
    {
      "english": "full",
      "chinese": "满的",
      "phonetic": "",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "empty",
      "chinese": "空的",
      "phonetic": "",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "thing",
      "chinese": "东西",
      "phonetic": "/θiŋ/",
      "category": "引导词",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": true
    },
    {
      "english": "bring",
      "chinese": "带来",
      "phonetic": "/briŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "sing",
      "chinese": "唱歌",
      "phonetic": "/sɪŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "ring",
      "chinese": "戒指",
      "phonetic": "/rɪŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "king",
      "chinese": "国王",
      "phonetic": "/kiŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "spring",
      "chinese": "春天",
      "phonetic": "/sprɪŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "drink",
      "chinese": "饮料",
      "phonetic": "/drɪŋk/",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "water",
      "chinese": "水",
      "phonetic": "/ˈwɔːtər/",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "coffee",
      "chinese": "咖啡",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "tea",
      "chinese": "茶",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "rice",
      "chinese": "米饭",
      "phonetic": "/raɪs/",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "ask",
      "chinese": "问",
      "phonetic": "",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "answer",
      "chinese": "回答",
      "phonetic": "",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "thing",
      "chinese": "东西",
      "phonetic": "/θiŋ/",
      "category": "引导词",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": true
    },
    {
      "english": "bring",
      "chinese": "带来",
      "phonetic": "/briŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "sing",
      "chinese": "唱歌",
      "phonetic": "/sɪŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "ring",
      "chinese": "戒指",
      "phonetic": "/rɪŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "king",
      "chinese": "国王",
      "phonetic": "/kiŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "spring",
      "chinese": "春天",
      "phonetic": "/sprɪŋ/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-ing 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "noodles",
      "chinese": "面条",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "chicken",
      "chinese": "鸡肉",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "beef",
      "chinese": "牛肉",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bill",
      "chinese": "账单",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "tip",
      "chinese": "小费",
      "phonetic": "",
      "category": "场景词",
      "theme": "餐厅和外食",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "more",
      "chinese": "更多",
      "phonetic": "/mɒ:/",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "less",
      "chinese": "更少",
      "phonetic": "",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "stand",
      "chinese": "站",
      "phonetic": "/stænd/",
      "category": "成对词",
      "theme": "餐厅和外食",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "best",
      "chinese": "最好的",
      "phonetic": "/best/",
      "category": "引导词",
      "theme": "餐厅和外食",
      "relation": "-est 同韵",
      "isGuide": true
    },
    {
      "english": "rest",
      "chinese": "休息",
      "phonetic": "/rest/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "test",
      "chinese": "测试",
      "phonetic": "/test/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "west",
      "chinese": "西边",
      "phonetic": "/west/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "chest",
      "chinese": "胸口",
      "phonetic": "/tʃest/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "nest",
      "chinese": "鸟巢",
      "phonetic": "/nest/",
      "category": "同词族/同韵",
      "theme": "餐厅和外食",
      "relation": "-est 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "city",
      "chinese": "城市",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "town",
      "chinese": "城镇",
      "phonetic": "/taun/",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "street",
      "chinese": "街道",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "road",
      "chinese": "路",
      "phonetic": "/rәud/",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "building",
      "chinese": "建筑",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "left",
      "chinese": "左",
      "phonetic": "/left/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "右",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "近",
      "phonetic": "/niә/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "far",
      "chinese": "远",
      "phonetic": "/fɑ:/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "ice",
      "chinese": "冰",
      "phonetic": "/aɪs/",
      "category": "引导词",
      "theme": "城市和附近",
      "relation": "-ice 同韵",
      "isGuide": true
    },
    {
      "english": "nice",
      "chinese": "好的",
      "phonetic": "/naɪs/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ice 同韵",
      "isGuide": false
    },
    {
      "english": "price",
      "chinese": "价格",
      "phonetic": "/praɪs/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ice 同韵",
      "isGuide": false
    },
    {
      "english": "rice",
      "chinese": "米饭",
      "phonetic": "/raɪs/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ice 同韵",
      "isGuide": false
    },
    {
      "english": "twice",
      "chinese": "两次",
      "phonetic": "/twaɪs/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ice 同韵",
      "isGuide": false
    },
    {
      "english": "slice",
      "chinese": "一片",
      "phonetic": "/slaɪs/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ice 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "park",
      "chinese": "公园",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bank",
      "chinese": "银行",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hospital",
      "chinese": "医院",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "pharmacy",
      "chinese": "药店",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "store",
      "chinese": "商店",
      "phonetic": "/stɔːr/",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "inside",
      "chinese": "里面",
      "phonetic": "/ˌɪnˈsaɪd/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "outside",
      "chinese": "外面",
      "phonetic": "/ˌaʊtˈsaɪd/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "up",
      "chinese": "上",
      "phonetic": "/ʌp/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "down",
      "chinese": "下",
      "phonetic": "/daun/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sound",
      "chinese": "声音",
      "phonetic": "/saund/",
      "category": "引导词",
      "theme": "城市和附近",
      "relation": "-ound 同韵",
      "isGuide": true
    },
    {
      "english": "round",
      "chinese": "圆的",
      "phonetic": "/raund/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "found",
      "chinese": "找到",
      "phonetic": "/faund/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "ground",
      "chinese": "地面",
      "phonetic": "/graund/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "around",
      "chinese": "周围",
      "phonetic": "/ә'raund/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "bound",
      "chinese": "必然的",
      "phonetic": "/baʊnd/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ound 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "school",
      "chinese": "学校",
      "phonetic": "/skuːl/",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "station",
      "chinese": "车站",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "police",
      "chinese": "警察",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "corner",
      "chinese": "街角",
      "phonetic": "",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "place",
      "chinese": "地方",
      "phonetic": "/pleis/",
      "category": "场景词",
      "theme": "城市和附近",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "here",
      "chinese": "这里",
      "phonetic": "",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "位置对应",
      "isGuide": false
    },
    {
      "english": "there",
      "chinese": "那里",
      "phonetic": "/ðєә/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "位置对应",
      "isGuide": false
    },
    {
      "english": "over",
      "chinese": "上方",
      "phonetic": "/'әuvә/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "under",
      "chinese": "下方",
      "phonetic": "/'ʌndә/",
      "category": "成对词",
      "theme": "城市和附近",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "more",
      "chinese": "更多",
      "phonetic": "/mɒ:/",
      "category": "引导词",
      "theme": "城市和附近",
      "relation": "-ore 同韵",
      "isGuide": true
    },
    {
      "english": "store",
      "chinese": "商店",
      "phonetic": "/stɔːr/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ore 同韵",
      "isGuide": false
    },
    {
      "english": "door",
      "chinese": "门",
      "phonetic": "/dɒ:/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ore 同韵",
      "isGuide": false
    },
    {
      "english": "floor",
      "chinese": "地板",
      "phonetic": "/flɔːr/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ore 同韵",
      "isGuide": false
    },
    {
      "english": "shore",
      "chinese": "岸边",
      "phonetic": "/ʃɔːr/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ore 同韵",
      "isGuide": false
    },
    {
      "english": "before",
      "chinese": "以前",
      "phonetic": "/bi'fɒ:/",
      "category": "同词族/同韵",
      "theme": "城市和附近",
      "relation": "-ore 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "park",
      "chinese": "公园",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "bee / sea / tree",
      "isGuide": false
    },
    {
      "english": "tree",
      "chinese": "树",
      "phonetic": "/triː/",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "bee / sea / tree",
      "isGuide": false
    },
    {
      "english": "sea",
      "chinese": "海",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "bee / sea / tree",
      "isGuide": false
    },
    {
      "english": "bee",
      "chinese": "蜜蜂",
      "phonetic": "/biː/",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "bee / sea / tree",
      "isGuide": false
    },
    {
      "english": "beach",
      "chinese": "海滩",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "bee / sea / tree",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "白天",
      "phonetic": "/dei/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "light",
      "chinese": "亮",
      "phonetic": "/lait/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dark",
      "chinese": "暗的",
      "phonetic": "/dɑ:k/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sound",
      "chinese": "声音",
      "phonetic": "/saund/",
      "category": "引导词",
      "theme": "公园和自然",
      "relation": "-ound 同韵",
      "isGuide": true
    },
    {
      "english": "round",
      "chinese": "圆的",
      "phonetic": "/raund/",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "found",
      "chinese": "找到",
      "phonetic": "/faund/",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "ground",
      "chinese": "地面",
      "phonetic": "/graund/",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "around",
      "chinese": "周围",
      "phonetic": "/ә'raund/",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "bound",
      "chinese": "必然的",
      "phonetic": "/baʊnd/",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ound 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "grass",
      "chinese": "草",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "flower",
      "chinese": "花",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "river",
      "chinese": "河",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "lake",
      "chinese": "湖",
      "phonetic": "/leɪk/",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "mountain",
      "chinese": "山",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "high",
      "chinese": "高的",
      "phonetic": "",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "low",
      "chinese": "低的",
      "phonetic": "/loʊ/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "school",
      "chinese": "学校",
      "phonetic": "/skuːl/",
      "category": "引导词",
      "theme": "公园和自然",
      "relation": "-ool 同韵",
      "isGuide": true
    },
    {
      "english": "cool",
      "chinese": "酷的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "pool",
      "chinese": "泳池",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "rule",
      "chinese": "规则",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "tool",
      "chinese": "工具",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "fool",
      "chinese": "傻瓜",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-ool 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sky",
      "chinese": "天空",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "sun",
      "chinese": "太阳",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "cloud",
      "chinese": "云",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bird",
      "chinese": "鸟",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "bench",
      "chinese": "长椅",
      "phonetic": "",
      "category": "场景词",
      "theme": "公园和自然",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "近",
      "phonetic": "/niә/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "far",
      "chinese": "远",
      "phonetic": "/fɑ:/",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wet",
      "chinese": "湿的",
      "phonetic": "",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dry",
      "chinese": "干的",
      "phonetic": "",
      "category": "成对词",
      "theme": "公园和自然",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "eat",
      "chinese": "吃",
      "phonetic": "/iːt/",
      "category": "引导词",
      "theme": "公园和自然",
      "relation": "-eat 同韵",
      "isGuide": true
    },
    {
      "english": "meat",
      "chinese": "肉",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "seat",
      "chinese": "座位",
      "phonetic": "/si:t/",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "heat",
      "chinese": "热",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "beat",
      "chinese": "打",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "sweet",
      "chinese": "甜的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "公园和自然",
      "relation": "-eat 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "today",
      "chinese": "今天",
      "phonetic": "/təˈdeɪ/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "yesterday",
      "chinese": "昨天",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "天",
      "phonetic": "/dei/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "morning",
      "chinese": "早上",
      "phonetic": "/'mɒ:niŋ/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "early",
      "chinese": "早",
      "phonetic": "/'ә:li/",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "late",
      "chinese": "晚",
      "phonetic": "/leit/",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "before",
      "chinese": "之前",
      "phonetic": "/bi'fɒ:/",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "after",
      "chinese": "之后",
      "phonetic": "",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "blue",
      "chinese": "蓝色的",
      "phonetic": "",
      "category": "引导词",
      "theme": "天气和时间",
      "relation": "长u音同韵",
      "isGuide": true
    },
    {
      "english": "true",
      "chinese": "真的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "长u音同韵",
      "isGuide": false
    },
    {
      "english": "two",
      "chinese": "二",
      "phonetic": "/tu:/",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "长u音同韵",
      "isGuide": false
    },
    {
      "english": "too",
      "chinese": "也",
      "phonetic": "/tu:/",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "长u音同韵",
      "isGuide": false
    },
    {
      "english": "shoe",
      "chinese": "鞋",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "长u音同韵",
      "isGuide": false
    },
    {
      "english": "through",
      "chinese": "穿过",
      "phonetic": "/θru:/",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "长u音同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "tomorrow",
      "chinese": "明天",
      "phonetic": "/təˈmɑːroʊ/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "yesterday",
      "chinese": "昨天",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "week",
      "chinese": "星期",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "month",
      "chinese": "月",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "year",
      "chinese": "年",
      "phonetic": "/jiә/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "before",
      "chinese": "之前",
      "phonetic": "/bi'fɒ:/",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "after",
      "chinese": "之后",
      "phonetic": "",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "start",
      "chinese": "开始",
      "phonetic": "/stɑːrt/",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "finish",
      "chinese": "结束",
      "phonetic": "",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "green",
      "chinese": "绿色的",
      "phonetic": "",
      "category": "引导词",
      "theme": "天气和时间",
      "relation": "-een 同韵",
      "isGuide": true
    },
    {
      "english": "seen",
      "chinese": "看见过",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "clean",
      "chinese": "干净的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "mean",
      "chinese": "意思是",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "teen",
      "chinese": "青少年",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "screen",
      "chinese": "屏幕",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-een 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sun",
      "chinese": "太阳",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "rain",
      "chinese": "雨",
      "phonetic": "/reɪn/",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "wind",
      "chinese": "风",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "cloud",
      "chinese": "云",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "weather",
      "chinese": "天气",
      "phonetic": "",
      "category": "场景词",
      "theme": "天气和时间",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wet",
      "chinese": "湿的",
      "phonetic": "",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dry",
      "chinese": "干的",
      "phonetic": "",
      "category": "成对词",
      "theme": "天气和时间",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "face",
      "chinese": "脸",
      "phonetic": "/feis/",
      "category": "引导词",
      "theme": "天气和时间",
      "relation": "-ace 同韵",
      "isGuide": true
    },
    {
      "english": "place",
      "chinese": "地方",
      "phonetic": "/pleis/",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "race",
      "chinese": "比赛",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "space",
      "chinese": "空间",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "case",
      "chinese": "情况",
      "phonetic": "/keis/",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "base",
      "chinese": "基础",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "天气和时间",
      "relation": "-ace 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "mother",
      "chinese": "妈妈",
      "phonetic": "/'mʌðә/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "brother / mother",
      "isGuide": false
    },
    {
      "english": "brother",
      "chinese": "兄弟",
      "phonetic": "/'brʌðә/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "brother / mother",
      "isGuide": false
    },
    {
      "english": "father",
      "chinese": "爸爸",
      "phonetic": "/'fɑ:ðә/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "brother / mother",
      "isGuide": false
    },
    {
      "english": "sister",
      "chinese": "姐妹",
      "phonetic": "",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "brother / mother",
      "isGuide": false
    },
    {
      "english": "parents",
      "chinese": "父母",
      "phonetic": "",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "brother / mother",
      "isGuide": false
    },
    {
      "english": "old",
      "chinese": "老的",
      "phonetic": "/әuld/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "young",
      "chinese": "年轻的",
      "phonetic": "/jʌŋ/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "man",
      "chinese": "男人",
      "phonetic": "/mæn/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "对应",
      "isGuide": false
    },
    {
      "english": "woman",
      "chinese": "女人",
      "phonetic": "/'wumәn/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "对应",
      "isGuide": false
    },
    {
      "english": "line",
      "chinese": "线",
      "phonetic": "/lain/",
      "category": "引导词",
      "theme": "家人和朋友",
      "relation": "-ine 同韵",
      "isGuide": true
    },
    {
      "english": "mine",
      "chinese": "我的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "fine",
      "chinese": "好的",
      "phonetic": "/fain/",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "nine",
      "chinese": "九",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "sign",
      "chinese": "标志",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "shine",
      "chinese": "发光",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ine 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sister",
      "chinese": "姐妹",
      "phonetic": "",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "man",
      "chinese": "男人",
      "phonetic": "/mæn/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "woman",
      "chinese": "女人",
      "phonetic": "/'wumәn/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "boy",
      "chinese": "男孩",
      "phonetic": "/bɒi/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "parent",
      "chinese": "父母",
      "phonetic": "",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "关系对应",
      "isGuide": false
    },
    {
      "english": "child",
      "chinese": "孩子",
      "phonetic": "",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "关系对应",
      "isGuide": false
    },
    {
      "english": "happy",
      "chinese": "开心",
      "phonetic": "/ˈhæpi/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sad",
      "chinese": "难过",
      "phonetic": "",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "one",
      "chinese": "一",
      "phonetic": "/wʌn/",
      "category": "引导词",
      "theme": "家人和朋友",
      "relation": "-un 同韵",
      "isGuide": true
    },
    {
      "english": "done",
      "chinese": "完成的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-un 同韵",
      "isGuide": false
    },
    {
      "english": "none",
      "chinese": "没有一个",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-un 同韵",
      "isGuide": false
    },
    {
      "english": "fun",
      "chinese": "乐趣",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-un 同韵",
      "isGuide": false
    },
    {
      "english": "run",
      "chinese": "跑",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-un 同韵",
      "isGuide": false
    },
    {
      "english": "sun",
      "chinese": "太阳",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-un 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "girl",
      "chinese": "女孩",
      "phonetic": "/gә:l/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "child",
      "chinese": "孩子",
      "phonetic": "",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "people",
      "chinese": "人们",
      "phonetic": "",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "name",
      "chinese": "名字",
      "phonetic": "/neim/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "home",
      "chinese": "家",
      "phonetic": "/hoʊm/",
      "category": "场景词",
      "theme": "家人和朋友",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "happy",
      "chinese": "开心",
      "phonetic": "/ˈhæpi/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sad",
      "chinese": "难过",
      "phonetic": "",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "love",
      "chinese": "爱",
      "phonetic": "/lʌv/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hate",
      "chinese": "讨厌",
      "phonetic": "/heɪt/",
      "category": "成对词",
      "theme": "家人和朋友",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "引导词",
      "theme": "家人和朋友",
      "relation": "-ot 同韵",
      "isGuide": true
    },
    {
      "english": "not",
      "chinese": "不",
      "phonetic": "/nɒt/",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "lot",
      "chinese": "许多",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "got",
      "chinese": "得到",
      "phonetic": "/gɒt/",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "shot",
      "chinese": "射击",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "spot",
      "chinese": "地点",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "家人和朋友",
      "relation": "-ot 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "head",
      "chinese": "头",
      "phonetic": "/hed/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "face",
      "chinese": "脸",
      "phonetic": "/feis/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "eye",
      "chinese": "眼睛",
      "phonetic": "",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "ear",
      "chinese": "耳朵",
      "phonetic": "/ɪr/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "nose",
      "chinese": "鼻子",
      "phonetic": "",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "healthy",
      "chinese": "健康的",
      "phonetic": "",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sick",
      "chinese": "生病的",
      "phonetic": "/sɪk/",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "strong",
      "chinese": "强壮的",
      "phonetic": "",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "weak",
      "chinese": "虚弱的",
      "phonetic": "",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "天",
      "phonetic": "/dei/",
      "category": "引导词",
      "theme": "身体和健康",
      "relation": "-ay 同韵",
      "isGuide": true
    },
    {
      "english": "way",
      "chinese": "路",
      "phonetic": "/wei/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "say",
      "chinese": "说",
      "phonetic": "/seɪ/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "may",
      "chinese": "可能",
      "phonetic": "/mei/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "pay",
      "chinese": "支付",
      "phonetic": "/peɪ/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "play",
      "chinese": "玩",
      "phonetic": "/pleɪ/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ay 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "mouth",
      "chinese": "嘴",
      "phonetic": "/mauθ/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "tooth",
      "chinese": "牙齿",
      "phonetic": "",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "neck",
      "chinese": "脖子",
      "phonetic": "/nek/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hand",
      "chinese": "手",
      "phonetic": "/hænd/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "arm",
      "chinese": "手臂",
      "phonetic": "",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "hurt",
      "chinese": "受伤",
      "phonetic": "",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "过程对应",
      "isGuide": false
    },
    {
      "english": "heal",
      "chinese": "康复",
      "phonetic": "",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "过程对应",
      "isGuide": false
    },
    {
      "english": "sleep",
      "chinese": "睡觉",
      "phonetic": "",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wake",
      "chinese": "醒来",
      "phonetic": "/weɪk/",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "引导词",
      "theme": "身体和健康",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": true
    },
    {
      "english": "light",
      "chinese": "光",
      "phonetic": "/lait/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "正确",
      "phonetic": "/rait/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "write",
      "chinese": "写",
      "phonetic": "/rait/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "might",
      "chinese": "可能",
      "phonetic": "/mait/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    },
    {
      "english": "fight",
      "chinese": "打架",
      "phonetic": "/faɪt/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "-ight 同韵 + right/write同音",
      "isGuide": false
    }
  ],
  [
    {
      "english": "leg",
      "chinese": "腿",
      "phonetic": "",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "foot",
      "chinese": "脚",
      "phonetic": "",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "back",
      "chinese": "背",
      "phonetic": "/bæk/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "body",
      "chinese": "身体",
      "phonetic": "/'bɒdi/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "pain",
      "chinese": "疼痛",
      "phonetic": "/pein/",
      "category": "场景词",
      "theme": "身体和健康",
      "relation": "以场景画面为主",
      "isGuide": false
    },
    {
      "english": "good",
      "chinese": "好的",
      "phonetic": "/ɡʊd/",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "bad",
      "chinese": "不好的",
      "phonetic": "/bæd/",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "stand",
      "chinese": "站",
      "phonetic": "/stænd/",
      "category": "成对词",
      "theme": "身体和健康",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hear",
      "chinese": "听见",
      "phonetic": "",
      "category": "引导词",
      "theme": "身体和健康",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": true
    },
    {
      "english": "here",
      "chinese": "这里",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "附近",
      "phonetic": "/niә/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "year",
      "chinese": "年",
      "phonetic": "/jiә/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "dear",
      "chinese": "亲爱的",
      "phonetic": "/'diә/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    },
    {
      "english": "fear",
      "chinese": "害怕",
      "phonetic": "/fiә/",
      "category": "同词族/同韵",
      "theme": "身体和健康",
      "relation": "hear/here同音 + -ear同韵",
      "isGuide": false
    }
  ]
];
  if (!window.ENGLISH_365_DATA) return;
  groups.forEach((words, index) => {
    window.ENGLISH_365_DATA.days[index + 3].words = words;
  });
})();
