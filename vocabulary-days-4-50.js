/* Day 4–12 preserved; Day 13–50 imported from the user's Day13–365 high-frequency workbook. */
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
      "english": "work",
      "chinese": "工作",
      "phonetic": "/wɜːrk/",
      "category": "同核心词",
      "theme": "核心词：work",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "work",
      "coreMeaning": "工作",
      "coreExplanation": "work = 工作｜worker：做工作的人 → 工作人员｜working：正在工作 / 工作中的",
      "coreSource": "已学核心复用"
    },
    {
      "english": "worker",
      "chinese": "工作人员",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：work",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "working",
      "chinese": "工作中的 / 正在工作",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：work",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "office",
      "chinese": "办公室",
      "phonetic": "",
      "category": "场景词",
      "theme": "work 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "desk",
      "chinese": "办公桌",
      "phonetic": "",
      "category": "场景词",
      "theme": "work 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "start",
      "chinese": "开始",
      "phonetic": "/stɑːrt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "finish",
      "chinese": "结束",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "buy",
      "chinese": "买",
      "phonetic": "/bai/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "天",
      "phonetic": "/dei/",
      "category": "引导词",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": true
    },
    {
      "english": "way",
      "chinese": "路 / 方式",
      "phonetic": "/wei/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "say",
      "chinese": "说",
      "phonetic": "/seɪ/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "may",
      "chinese": "可能 / 可以",
      "phonetic": "/mei/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "pay",
      "chinese": "支付",
      "phonetic": "/peɪ/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "play",
      "chinese": "玩",
      "phonetic": "/pleɪ/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "read",
      "chinese": "读",
      "phonetic": "/ri:d/",
      "category": "同核心词",
      "theme": "核心词：read",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "read",
      "coreMeaning": "读",
      "coreExplanation": "read = 读｜reader：读的人 → 读者｜reading：读这件事 → 阅读",
      "coreSource": "已学核心复用"
    },
    {
      "english": "reader",
      "chinese": "读者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：read",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "reading",
      "chinese": "阅读",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：read",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "book",
      "chinese": "书",
      "phonetic": "/bʊk/",
      "category": "场景词",
      "theme": "read 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "page",
      "chinese": "页",
      "phonetic": "",
      "category": "场景词",
      "theme": "read 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "give",
      "chinese": "给",
      "phonetic": "/ɡɪv/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "take",
      "chinese": "拿",
      "phonetic": "/teɪk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "come",
      "chinese": "来",
      "phonetic": "/kʌm/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "go",
      "chinese": "去",
      "phonetic": "/ɡoʊ/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "引导词",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": true
    },
    {
      "english": "light",
      "chinese": "光 / 灯",
      "phonetic": "/lait/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "正确 / 右边",
      "phonetic": "/rait/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "might",
      "chinese": "可能",
      "phonetic": "/mait/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "fight",
      "chinese": "打架 / 战斗",
      "phonetic": "/faɪt/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "bright",
      "chinese": "明亮的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "write",
      "chinese": "写",
      "phonetic": "/rait/",
      "category": "同核心词",
      "theme": "核心词：write",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "write",
      "coreMeaning": "写",
      "coreExplanation": "write = 写｜writer：写东西的人 → 作者 / 写作者｜writing：写这件事 → 写作",
      "coreSource": "已学核心复用"
    },
    {
      "english": "writer",
      "chinese": "作者 / 写作者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：write",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "writing",
      "chinese": "写作",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：write",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "pen",
      "chinese": "笔",
      "phonetic": "",
      "category": "场景词",
      "theme": "write 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "note",
      "chinese": "笔记",
      "phonetic": "",
      "category": "场景词",
      "theme": "write 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "ask",
      "chinese": "问",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "answer",
      "chinese": "回答",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "push",
      "chinese": "推",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "pull",
      "chinese": "拉",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hear",
      "chinese": "听见",
      "phonetic": "",
      "category": "引导词",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": true
    },
    {
      "english": "here",
      "chinese": "这里",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "附近",
      "phonetic": "/niә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "year",
      "chinese": "年",
      "phonetic": "/jiә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "dear",
      "chinese": "亲爱的",
      "phonetic": "/'diә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "fear",
      "chinese": "害怕",
      "phonetic": "/fiә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "learn",
      "chinese": "学习",
      "phonetic": "/lɜːrn/",
      "category": "同核心词",
      "theme": "核心词：learn",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "learn",
      "coreMeaning": "学习",
      "coreExplanation": "learn = 学习｜learner：学习的人 → 学习者｜learning：学习这件事 → 学习过程",
      "coreSource": "已学核心复用"
    },
    {
      "english": "learner",
      "chinese": "学习者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：learn",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "learning",
      "chinese": "学习过程",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：learn",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "study",
      "chinese": "学习",
      "phonetic": "",
      "category": "场景词",
      "theme": "learn 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "lesson",
      "chinese": "课程",
      "phonetic": "",
      "category": "场景词",
      "theme": "learn 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "stand",
      "chinese": "站",
      "phonetic": "/stænd/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "up",
      "chinese": "上",
      "phonetic": "/ʌp/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "down",
      "chinese": "下",
      "phonetic": "/daun/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "see",
      "chinese": "看见",
      "phonetic": "/siː/",
      "category": "引导词",
      "theme": "see/sea 同音 + 长 e 音",
      "relation": "see/sea 同音 + 长 e 音",
      "isGuide": true
    },
    {
      "english": "sea",
      "chinese": "海",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "see/sea 同音 + 长 e 音",
      "relation": "see/sea 同音 + 长 e 音",
      "isGuide": false
    },
    {
      "english": "free",
      "chinese": "自由的 / 免费的",
      "phonetic": "/fri:/",
      "category": "同词族/同韵",
      "theme": "see/sea 同音 + 长 e 音",
      "relation": "see/sea 同音 + 长 e 音",
      "isGuide": false
    },
    {
      "english": "tree",
      "chinese": "树",
      "phonetic": "/triː/",
      "category": "同词族/同韵",
      "theme": "see/sea 同音 + 长 e 音",
      "relation": "see/sea 同音 + 长 e 音",
      "isGuide": false
    },
    {
      "english": "three",
      "chinese": "三",
      "phonetic": "/θri:/",
      "category": "同词族/同韵",
      "theme": "see/sea 同音 + 长 e 音",
      "relation": "see/sea 同音 + 长 e 音",
      "isGuide": false
    },
    {
      "english": "bee",
      "chinese": "蜜蜂",
      "phonetic": "/biː/",
      "category": "同词族/同韵",
      "theme": "see/sea 同音 + 长 e 音",
      "relation": "see/sea 同音 + 长 e 音",
      "isGuide": false
    }
  ],
  [
    {
      "english": "teach",
      "chinese": "教",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：teach",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "teach",
      "coreMeaning": "教",
      "coreExplanation": "teach = 教｜teacher：教别人的人 → 老师｜teaching：教这件事 → 教学",
      "coreSource": "新核心"
    },
    {
      "english": "teacher",
      "chinese": "老师",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：teach",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "teaching",
      "chinese": "教学",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：teach",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "class",
      "chinese": "课 / 课堂",
      "phonetic": "",
      "category": "场景词",
      "theme": "teach 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "school",
      "chinese": "学校",
      "phonetic": "/skuːl/",
      "category": "场景词",
      "theme": "teach 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "in",
      "chinese": "里面",
      "phonetic": "/in/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "out",
      "chinese": "外面",
      "phonetic": "/aut/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "left",
      "chinese": "左",
      "phonetic": "/left/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "右",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "make",
      "chinese": "做 / 制作",
      "phonetic": "/meɪk/",
      "category": "引导词",
      "theme": "-ake 同韵",
      "relation": "-ake 同韵",
      "isGuide": true
    },
    {
      "english": "take",
      "chinese": "拿 / 带",
      "phonetic": "/teɪk/",
      "category": "同词族/同韵",
      "theme": "-ake 同韵",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "wake",
      "chinese": "醒来",
      "phonetic": "/weɪk/",
      "category": "同词族/同韵",
      "theme": "-ake 同韵",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "cake",
      "chinese": "蛋糕",
      "phonetic": "/keɪk/",
      "category": "同词族/同韵",
      "theme": "-ake 同韵",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "shake",
      "chinese": "摇",
      "phonetic": "/ʃeɪk/",
      "category": "同词族/同韵",
      "theme": "-ake 同韵",
      "relation": "-ake 同韵",
      "isGuide": false
    },
    {
      "english": "lake",
      "chinese": "湖",
      "phonetic": "/leɪk/",
      "category": "同词族/同韵",
      "theme": "-ake 同韵",
      "relation": "-ake 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "play",
      "chinese": "玩 / 播放",
      "phonetic": "/pleɪ/",
      "category": "同核心词",
      "theme": "核心词：play",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "play",
      "coreMeaning": "玩 / 播放",
      "coreExplanation": "play = 玩 / 播放｜player：玩的人或播放工具 → 玩家 / 播放器｜playing：正在玩 / 正在播放",
      "coreSource": "新核心"
    },
    {
      "english": "player",
      "chinese": "玩家 / 播放器",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：play",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "playing",
      "chinese": "正在玩 / 播放",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：play",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "game",
      "chinese": "游戏",
      "phonetic": "/ɡeɪm/",
      "category": "场景词",
      "theme": "play 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "ball",
      "chinese": "球",
      "phonetic": "/bɔːl/",
      "category": "场景词",
      "theme": "play 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "big",
      "chinese": "大的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "small",
      "chinese": "小的",
      "phonetic": "/smɒ:l/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "old",
      "chinese": "老的 / 旧的",
      "phonetic": "/әuld/",
      "category": "引导词",
      "theme": "-old 同韵",
      "relation": "-old 同韵",
      "isGuide": true
    },
    {
      "english": "cold",
      "chinese": "冷的",
      "phonetic": "/kәuld/",
      "category": "同词族/同韵",
      "theme": "-old 同韵",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "hold",
      "chinese": "拿住",
      "phonetic": "/hoʊld/",
      "category": "同词族/同韵",
      "theme": "-old 同韵",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "told",
      "chinese": "告诉了",
      "phonetic": "/tәuld/",
      "category": "同词族/同韵",
      "theme": "-old 同韵",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "gold",
      "chinese": "金子",
      "phonetic": "/ɡoʊld/",
      "category": "同词族/同韵",
      "theme": "-old 同韵",
      "relation": "-old 同韵",
      "isGuide": false
    },
    {
      "english": "sold",
      "chinese": "卖了",
      "phonetic": "/soʊld/",
      "category": "同词族/同韵",
      "theme": "-old 同韵",
      "relation": "-old 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "help",
      "chinese": "帮助",
      "phonetic": "/help/",
      "category": "同核心词",
      "theme": "核心词：help",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "help",
      "coreMeaning": "帮助",
      "coreExplanation": "help = 帮助｜helpful：能提供帮助的 → 有帮助的｜helping：帮助这件事 / 正在帮",
      "coreSource": "已学核心复用"
    },
    {
      "english": "helpful",
      "chinese": "有帮助的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：help",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "helping",
      "chinese": "帮助 / 正在帮",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：help",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/",
      "category": "场景词",
      "theme": "help 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "team",
      "chinese": "团队",
      "phonetic": "",
      "category": "场景词",
      "theme": "help 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "old",
      "chinese": "旧的 / 老的",
      "phonetic": "/әuld/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "new",
      "chinese": "新的",
      "phonetic": "/nju:/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "fast",
      "chinese": "快的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "slow",
      "chinese": "慢的",
      "phonetic": "/sloʊ/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "rain",
      "chinese": "雨",
      "phonetic": "/reɪn/",
      "category": "引导词",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": true
    },
    {
      "english": "train",
      "chinese": "火车",
      "phonetic": "/treɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "pain",
      "chinese": "疼痛",
      "phonetic": "/pein/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "main",
      "chinese": "主要的",
      "phonetic": "/meɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "brain",
      "chinese": "大脑",
      "phonetic": "/breɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "chain",
      "chinese": "链子",
      "phonetic": "/tʃeɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "use",
      "chinese": "使用",
      "phonetic": "/ju:s/",
      "category": "同核心词",
      "theme": "核心词：use",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "use",
      "coreMeaning": "使用",
      "coreExplanation": "use = 使用｜user：使用的人 → 用户｜useful：能被使用、能起作用 → 有用的",
      "coreSource": "已学核心复用"
    },
    {
      "english": "user",
      "chinese": "用户",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：use",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "useful",
      "chinese": "有用的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：use",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "app",
      "chinese": "应用",
      "phonetic": "",
      "category": "场景词",
      "theme": "use 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "tool",
      "chinese": "工具",
      "phonetic": "",
      "category": "场景词",
      "theme": "use 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "good",
      "chinese": "好的",
      "phonetic": "/ɡʊd/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "bad",
      "chinese": "不好的",
      "phonetic": "/bæd/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "happy",
      "chinese": "开心的",
      "phonetic": "/ˈhæpi/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sad",
      "chinese": "难过的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "rain",
      "chinese": "雨",
      "phonetic": "/reɪn/",
      "category": "引导词",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": true
    },
    {
      "english": "train",
      "chinese": "火车",
      "phonetic": "/treɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "pain",
      "chinese": "疼痛",
      "phonetic": "/pein/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "main",
      "chinese": "主要的",
      "phonetic": "/meɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "brain",
      "chinese": "大脑",
      "phonetic": "/breɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    },
    {
      "english": "chain",
      "chinese": "链子",
      "phonetic": "/tʃeɪn/",
      "category": "同词族/同韵",
      "theme": "-ain 同韵",
      "relation": "-ain 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "talk",
      "chinese": "交谈",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：talk",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "talk",
      "coreMeaning": "交谈",
      "coreExplanation": "talk = 交谈｜talking：正在交谈｜talked：已经交谈过 / 说过",
      "coreSource": "新核心"
    },
    {
      "english": "talking",
      "chinese": "交谈 / 正在说",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：talk",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "talked",
      "chinese": "交谈过 / 说过",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：talk",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "voice",
      "chinese": "声音",
      "phonetic": "",
      "category": "场景词",
      "theme": "talk 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/",
      "category": "场景词",
      "theme": "talk 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "easy",
      "chinese": "容易的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hard",
      "chinese": "困难的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "early",
      "chinese": "早",
      "phonetic": "/'ә:li/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "late",
      "chinese": "晚 / 迟",
      "phonetic": "/leit/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "look",
      "chinese": "看",
      "phonetic": "/lʊk/",
      "category": "引导词",
      "theme": "-ook 同韵",
      "relation": "-ook 同韵",
      "isGuide": true
    },
    {
      "english": "book",
      "chinese": "书",
      "phonetic": "/bʊk/",
      "category": "同词族/同韵",
      "theme": "-ook 同韵",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "cook",
      "chinese": "做饭",
      "phonetic": "/kʊk/",
      "category": "同词族/同韵",
      "theme": "-ook 同韵",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "took",
      "chinese": "拿了",
      "phonetic": "/tuk/",
      "category": "同词族/同韵",
      "theme": "-ook 同韵",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "hook",
      "chinese": "钩子",
      "phonetic": "/hʊk/",
      "category": "同词族/同韵",
      "theme": "-ook 同韵",
      "relation": "-ook 同韵",
      "isGuide": false
    },
    {
      "english": "shook",
      "chinese": "摇了",
      "phonetic": "/ʃʊk/",
      "category": "同词族/同韵",
      "theme": "-ook 同韵",
      "relation": "-ook 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "call",
      "chinese": "打电话 / 呼叫",
      "phonetic": "/kɒ:l/",
      "category": "同核心词",
      "theme": "核心词：call",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "call",
      "coreMeaning": "打电话 / 呼叫",
      "coreExplanation": "call = 打电话 / 呼叫｜caller：打来电话的人 → 来电者｜calling：正在呼叫 / 打电话",
      "coreSource": "新核心"
    },
    {
      "english": "caller",
      "chinese": "来电者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：call",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "calling",
      "chinese": "呼叫 / 打电话",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：call",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "phone",
      "chinese": "手机",
      "phonetic": "/fәun/",
      "category": "场景词",
      "theme": "call 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "message",
      "chinese": "消息",
      "phonetic": "",
      "category": "场景词",
      "theme": "call 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "long",
      "chinese": "长的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "short",
      "chinese": "短的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "high",
      "chinese": "高的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "low",
      "chinese": "低的",
      "phonetic": "/loʊ/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "tell",
      "chinese": "告诉",
      "phonetic": "/tel/",
      "category": "引导词",
      "theme": "-ell 同韵",
      "relation": "-ell 同韵",
      "isGuide": true
    },
    {
      "english": "well",
      "chinese": "好 / 健康",
      "phonetic": "/wel/",
      "category": "同词族/同韵",
      "theme": "-ell 同韵",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/",
      "category": "同词族/同韵",
      "theme": "-ell 同韵",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "spell",
      "chinese": "拼写",
      "phonetic": "/spel/",
      "category": "同词族/同韵",
      "theme": "-ell 同韵",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "smell",
      "chinese": "闻 / 气味",
      "phonetic": "/smel/",
      "category": "同词族/同韵",
      "theme": "-ell 同韵",
      "relation": "-ell 同韵",
      "isGuide": false
    },
    {
      "english": "bell",
      "chinese": "铃",
      "phonetic": "/bel/",
      "category": "同词族/同韵",
      "theme": "-ell 同韵",
      "relation": "-ell 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "walk",
      "chinese": "走路",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：walk",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "walk",
      "coreMeaning": "走路",
      "coreExplanation": "walk = 走路｜walking：正在走 / 步行｜walked：已经走过",
      "coreSource": "新核心"
    },
    {
      "english": "walking",
      "chinese": "步行 / 正在走",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：walk",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "walked",
      "chinese": "走过了",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：walk",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "road",
      "chinese": "路",
      "phonetic": "/rәud/",
      "category": "场景词",
      "theme": "walk 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "shoe",
      "chinese": "鞋",
      "phonetic": "",
      "category": "场景词",
      "theme": "walk 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "clean",
      "chinese": "干净的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dirty",
      "chinese": "脏的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "full",
      "chinese": "满的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "empty",
      "chinese": "空的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "go",
      "chinese": "去",
      "phonetic": "/ɡoʊ/",
      "category": "引导词",
      "theme": "长 o 音",
      "relation": "长 o 音",
      "isGuide": true
    },
    {
      "english": "no",
      "chinese": "不 / 不是",
      "phonetic": "/nәu/",
      "category": "同词族/同韵",
      "theme": "长 o 音",
      "relation": "长 o 音",
      "isGuide": false
    },
    {
      "english": "so",
      "chinese": "所以 / 如此",
      "phonetic": "/sәu/",
      "category": "同词族/同韵",
      "theme": "长 o 音",
      "relation": "长 o 音",
      "isGuide": false
    },
    {
      "english": "show",
      "chinese": "展示",
      "phonetic": "/ʃәu/",
      "category": "同词族/同韵",
      "theme": "长 o 音",
      "relation": "长 o 音",
      "isGuide": false
    },
    {
      "english": "know",
      "chinese": "知道",
      "phonetic": "/noʊ/",
      "category": "同词族/同韵",
      "theme": "长 o 音",
      "relation": "长 o 音",
      "isGuide": false
    },
    {
      "english": "grow",
      "chinese": "生长",
      "phonetic": "/ɡroʊ/",
      "category": "同词族/同韵",
      "theme": "长 o 音",
      "relation": "长 o 音",
      "isGuide": false
    }
  ],
  [
    {
      "english": "run",
      "chinese": "跑",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：run",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "run",
      "coreMeaning": "跑",
      "coreExplanation": "run = 跑｜runner：跑步的人｜running：正在跑 / 跑步这件事",
      "coreSource": "新核心"
    },
    {
      "english": "runner",
      "chinese": "跑步的人",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：run",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "running",
      "chinese": "跑步 / 正在跑",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：run",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "race",
      "chinese": "比赛",
      "phonetic": "",
      "category": "场景词",
      "theme": "run 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "shoe",
      "chinese": "鞋",
      "phonetic": "",
      "category": "场景词",
      "theme": "run 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "on",
      "chinese": "开 / 在上面",
      "phonetic": "/ɒn/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "off",
      "chinese": "关 / 离开",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "before",
      "chinese": "之前",
      "phonetic": "/bi'fɒ:/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "after",
      "chinese": "之后",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "air",
      "chinese": "空气",
      "phonetic": "/єә/",
      "category": "引导词",
      "theme": "-air 同韵",
      "relation": "-air 同韵",
      "isGuide": true
    },
    {
      "english": "fair",
      "chinese": "公平的",
      "phonetic": "/fer/",
      "category": "同词族/同韵",
      "theme": "-air 同韵",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "hair",
      "chinese": "头发",
      "phonetic": "/hєә/",
      "category": "同词族/同韵",
      "theme": "-air 同韵",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "pair",
      "chinese": "一对",
      "phonetic": "/per/",
      "category": "同词族/同韵",
      "theme": "-air 同韵",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "chair",
      "chinese": "椅子",
      "phonetic": "/tʃer/",
      "category": "同词族/同韵",
      "theme": "-air 同韵",
      "relation": "-air 同韵",
      "isGuide": false
    },
    {
      "english": "stair",
      "chinese": "楼梯",
      "phonetic": "/ster/",
      "category": "同词族/同韵",
      "theme": "-air 同韵",
      "relation": "-air 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "drive",
      "chinese": "开车",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：drive",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "drive",
      "coreMeaning": "开车",
      "coreExplanation": "drive = 开车｜driver：开车的人 → 司机｜driving：开车这件事 → 驾驶",
      "coreSource": "新核心"
    },
    {
      "english": "driver",
      "chinese": "司机",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：drive",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "driving",
      "chinese": "驾驶 / 正在开车",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：drive",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "car",
      "chinese": "汽车",
      "phonetic": "",
      "category": "场景词",
      "theme": "drive 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "road",
      "chinese": "路",
      "phonetic": "/rәud/",
      "category": "场景词",
      "theme": "drive 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "inside",
      "chinese": "里面",
      "phonetic": "/ˌɪnˈsaɪd/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "outside",
      "chinese": "外面",
      "phonetic": "/ˌaʊtˈsaɪd/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "近",
      "phonetic": "/niә/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "far",
      "chinese": "远",
      "phonetic": "/fɑ:/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "late",
      "chinese": "迟的",
      "phonetic": "/leit/",
      "category": "引导词",
      "theme": "-ate 同韵",
      "relation": "-ate 同韵",
      "isGuide": true
    },
    {
      "english": "date",
      "chinese": "日期 / 约会",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ate 同韵",
      "relation": "-ate 同韵",
      "isGuide": false
    },
    {
      "english": "hate",
      "chinese": "讨厌",
      "phonetic": "/heɪt/",
      "category": "同词族/同韵",
      "theme": "-ate 同韵",
      "relation": "-ate 同韵",
      "isGuide": false
    },
    {
      "english": "rate",
      "chinese": "比率 / 评价",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ate 同韵",
      "relation": "-ate 同韵",
      "isGuide": false
    },
    {
      "english": "state",
      "chinese": "状态 / 州",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ate 同韵",
      "relation": "-ate 同韵",
      "isGuide": false
    },
    {
      "english": "gate",
      "chinese": "大门",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ate 同韵",
      "relation": "-ate 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "ride",
      "chinese": "骑 / 乘坐",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：ride",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "ride",
      "coreMeaning": "骑 / 乘坐",
      "coreExplanation": "ride = 骑 / 乘坐｜rider：骑的人 → 骑手｜riding：骑行 / 乘坐这件事",
      "coreSource": "新核心"
    },
    {
      "english": "rider",
      "chinese": "骑手 / 骑乘者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：ride",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "riding",
      "chinese": "骑行 / 乘坐",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：ride",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "bike",
      "chinese": "自行车",
      "phonetic": "",
      "category": "场景词",
      "theme": "ride 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "road",
      "chinese": "路",
      "phonetic": "/rәud/",
      "category": "场景词",
      "theme": "ride 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "same",
      "chinese": "相同",
      "phonetic": "/seim/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "different",
      "chinese": "不同",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "yes",
      "chinese": "是 / 好",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "no",
      "chinese": "不 / 不是",
      "phonetic": "/nәu/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "same",
      "chinese": "相同的",
      "phonetic": "/seim/",
      "category": "引导词",
      "theme": "-ame 同韵",
      "relation": "-ame 同韵",
      "isGuide": true
    },
    {
      "english": "name",
      "chinese": "名字",
      "phonetic": "/neim/",
      "category": "同词族/同韵",
      "theme": "-ame 同韵",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "game",
      "chinese": "游戏",
      "phonetic": "/ɡeɪm/",
      "category": "同词族/同韵",
      "theme": "-ame 同韵",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "came",
      "chinese": "来了",
      "phonetic": "/keim/",
      "category": "同词族/同韵",
      "theme": "-ame 同韵",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "blame",
      "chinese": "责怪",
      "phonetic": "/bleɪm/",
      "category": "同词族/同韵",
      "theme": "-ame 同韵",
      "relation": "-ame 同韵",
      "isGuide": false
    },
    {
      "english": "frame",
      "chinese": "框架",
      "phonetic": "/freɪm/",
      "category": "同词族/同韵",
      "theme": "-ame 同韵",
      "relation": "-ame 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "swim",
      "chinese": "游泳",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：swim",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "swim",
      "coreMeaning": "游泳",
      "coreExplanation": "swim = 游泳｜swimmer：游泳的人 → 游泳者｜swimming：游泳这件事 / 游泳运动",
      "coreSource": "新核心"
    },
    {
      "english": "swimmer",
      "chinese": "游泳者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：swim",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "swimming",
      "chinese": "游泳运动",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：swim",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "pool",
      "chinese": "泳池",
      "phonetic": "",
      "category": "场景词",
      "theme": "swim 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "water",
      "chinese": "水",
      "phonetic": "/ˈwɔːtər/",
      "category": "场景词",
      "theme": "swim 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "win",
      "chinese": "赢",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "lose",
      "chinese": "输",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "laugh",
      "chinese": "笑",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "cry",
      "chinese": "哭",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "end",
      "chinese": "结束",
      "phonetic": "/end/",
      "category": "引导词",
      "theme": "-end 同韵",
      "relation": "-end 同韵",
      "isGuide": true
    },
    {
      "english": "send",
      "chinese": "发送",
      "phonetic": "/send/",
      "category": "同词族/同韵",
      "theme": "-end 同韵",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "spend",
      "chinese": "花费",
      "phonetic": "/spend/",
      "category": "同词族/同韵",
      "theme": "-end 同韵",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/",
      "category": "同词族/同韵",
      "theme": "-end 同韵",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "bend",
      "chinese": "弯曲",
      "phonetic": "/bend/",
      "category": "同词族/同韵",
      "theme": "-end 同韵",
      "relation": "-end 同韵",
      "isGuide": false
    },
    {
      "english": "weekend",
      "chinese": "周末",
      "phonetic": "/ˈwiːkend/",
      "category": "同词族/同韵",
      "theme": "-end 同韵",
      "relation": "-end 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "cook",
      "chinese": "做饭",
      "phonetic": "/kʊk/",
      "category": "同核心词",
      "theme": "核心词：cook",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "cook",
      "coreMeaning": "做饭",
      "coreExplanation": "cook = 做饭｜cooking：做饭这件事 → 烹饪｜cooked：已经做熟 / 煮熟的",
      "coreSource": "新核心"
    },
    {
      "english": "cooking",
      "chinese": "烹饪",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：cook",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "cooked",
      "chinese": "煮熟的 / 做好了",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：cook",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "food",
      "chinese": "食物",
      "phonetic": "/fuːd/",
      "category": "场景词",
      "theme": "cook 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "pan",
      "chinese": "锅",
      "phonetic": "",
      "category": "场景词",
      "theme": "cook 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "love",
      "chinese": "爱 / 喜欢",
      "phonetic": "/lʌv/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hate",
      "chinese": "讨厌",
      "phonetic": "/heɪt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "白天",
      "phonetic": "/dei/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "时间对应",
      "isGuide": false
    },
    {
      "english": "hand",
      "chinese": "手",
      "phonetic": "/hænd/",
      "category": "引导词",
      "theme": "-and 同韵",
      "relation": "-and 同韵",
      "isGuide": true
    },
    {
      "english": "land",
      "chinese": "土地",
      "phonetic": "/lænd/",
      "category": "同词族/同韵",
      "theme": "-and 同韵",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "stand",
      "chinese": "站",
      "phonetic": "/stænd/",
      "category": "同词族/同韵",
      "theme": "-and 同韵",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "band",
      "chinese": "乐队 / 带子",
      "phonetic": "/bænd/",
      "category": "同词族/同韵",
      "theme": "-and 同韵",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "sand",
      "chinese": "沙子",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-and 同韵",
      "relation": "-and 同韵",
      "isGuide": false
    },
    {
      "english": "brand",
      "chinese": "品牌",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-and 同韵",
      "relation": "-and 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "wash",
      "chinese": "洗",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：wash",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "wash",
      "coreMeaning": "洗",
      "coreExplanation": "wash = 洗｜washing：正在洗 / 清洗｜washed：已经洗过",
      "coreSource": "新核心"
    },
    {
      "english": "washing",
      "chinese": "清洗 / 正在洗",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：wash",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "washed",
      "chinese": "洗过了",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：wash",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "soap",
      "chinese": "肥皂",
      "phonetic": "",
      "category": "场景词",
      "theme": "wash 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "water",
      "chinese": "水",
      "phonetic": "/ˈwɔːtər/",
      "category": "场景词",
      "theme": "wash 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "light",
      "chinese": "亮 / 光",
      "phonetic": "/lait/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dark",
      "chinese": "暗的",
      "phonetic": "/dɑ:k/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wet",
      "chinese": "湿的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "dry",
      "chinese": "干的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "in",
      "chinese": "在里面",
      "phonetic": "/in/",
      "category": "引导词",
      "theme": "-in 同韵",
      "relation": "-in 同韵",
      "isGuide": true
    },
    {
      "english": "win",
      "chinese": "赢",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-in 同韵",
      "relation": "-in 同韵",
      "isGuide": false
    },
    {
      "english": "begin",
      "chinese": "开始",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-in 同韵",
      "relation": "-in 同韵",
      "isGuide": false
    },
    {
      "english": "skin",
      "chinese": "皮肤",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-in 同韵",
      "relation": "-in 同韵",
      "isGuide": false
    },
    {
      "english": "thin",
      "chinese": "瘦的 / 薄的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-in 同韵",
      "relation": "-in 同韵",
      "isGuide": false
    },
    {
      "english": "pin",
      "chinese": "别针",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-in 同韵",
      "relation": "-in 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "clean",
      "chinese": "清洁 / 干净",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：clean",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "clean",
      "coreMeaning": "清洁 / 干净",
      "coreExplanation": "clean = 清洁 / 干净｜cleaner：负责清洁的人或清洁用品｜cleaning：清洁这件事",
      "coreSource": "新核心"
    },
    {
      "english": "cleaner",
      "chinese": "清洁工 / 清洁剂",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：clean",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "cleaning",
      "chinese": "清洁工作",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：clean",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "room",
      "chinese": "房间",
      "phonetic": "/ru:m/",
      "category": "场景词",
      "theme": "clean 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "soap",
      "chinese": "肥皂",
      "phonetic": "",
      "category": "场景词",
      "theme": "clean 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "more",
      "chinese": "更多",
      "phonetic": "/mɒ:/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "less",
      "chinese": "更少",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "strong",
      "chinese": "强壮的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "weak",
      "chinese": "虚弱的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "it",
      "chinese": "它",
      "phonetic": "/it/",
      "category": "引导词",
      "theme": "-it 同韵",
      "relation": "-it 同韵",
      "isGuide": true
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "同词族/同韵",
      "theme": "-it 同韵",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "fit",
      "chinese": "合适",
      "phonetic": "/fɪt/",
      "category": "同词族/同韵",
      "theme": "-it 同韵",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "hit",
      "chinese": "打 / 击中",
      "phonetic": "/hɪt/",
      "category": "同词族/同韵",
      "theme": "-it 同韵",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "bit",
      "chinese": "一点 / 咬了",
      "phonetic": "/bɪt/",
      "category": "同词族/同韵",
      "theme": "-it 同韵",
      "relation": "-it 同韵",
      "isGuide": false
    },
    {
      "english": "quit",
      "chinese": "停止 / 退出",
      "phonetic": "/kwɪt/",
      "category": "同词族/同韵",
      "theme": "-it 同韵",
      "relation": "-it 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sleep",
      "chinese": "睡觉",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sleep",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "sleep",
      "coreMeaning": "睡觉",
      "coreExplanation": "sleep = 睡觉｜sleepy：想睡的 → 困的｜sleeping：正在睡 / 睡眠状态",
      "coreSource": "新核心"
    },
    {
      "english": "sleepy",
      "chinese": "困的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sleep",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "sleeping",
      "chinese": "睡眠 / 正在睡",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sleep",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "bed",
      "chinese": "床",
      "phonetic": "",
      "category": "场景词",
      "theme": "sleep 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "dream",
      "chinese": "梦",
      "phonetic": "",
      "category": "场景词",
      "theme": "sleep 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "healthy",
      "chinese": "健康的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sick",
      "chinese": "生病的",
      "phonetic": "/sɪk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "正确",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wrong",
      "chinese": "错误",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "top",
      "chinese": "顶部",
      "phonetic": "/tɑːp/",
      "category": "引导词",
      "theme": "-op 同韵",
      "relation": "-op 同韵",
      "isGuide": true
    },
    {
      "english": "stop",
      "chinese": "停止",
      "phonetic": "/stɑːp/",
      "category": "同词族/同韵",
      "theme": "-op 同韵",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "shop",
      "chinese": "商店",
      "phonetic": "/ʃɑːp/",
      "category": "同词族/同韵",
      "theme": "-op 同韵",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "drop",
      "chinese": "掉下",
      "phonetic": "/drɑːp/",
      "category": "同词族/同韵",
      "theme": "-op 同韵",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "pop",
      "chinese": "流行 / 砰",
      "phonetic": "/pɑːp/",
      "category": "同词族/同韵",
      "theme": "-op 同韵",
      "relation": "-op 同韵",
      "isGuide": false
    },
    {
      "english": "hop",
      "chinese": "跳",
      "phonetic": "/hɑːp/",
      "category": "同词族/同韵",
      "theme": "-op 同韵",
      "relation": "-op 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "love",
      "chinese": "爱 / 喜欢",
      "phonetic": "/lʌv/",
      "category": "同核心词",
      "theme": "核心词：love",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "love",
      "coreMeaning": "爱 / 喜欢",
      "coreExplanation": "love = 爱 / 喜欢｜lovely：让人喜爱的 → 可爱的 / 美好的｜loving：充满爱的",
      "coreSource": "已学核心复用"
    },
    {
      "english": "lovely",
      "chinese": "可爱的 / 美好的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：love",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "loving",
      "chinese": "充满爱的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：love",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "heart",
      "chinese": "心",
      "phonetic": "",
      "category": "场景词",
      "theme": "love 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "kiss",
      "chinese": "亲吻",
      "phonetic": "",
      "category": "场景词",
      "theme": "love 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "first",
      "chinese": "第一 / 最先",
      "phonetic": "/fә:st/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "last",
      "chinese": "最后",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "here",
      "chinese": "这里",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "位置对应",
      "isGuide": false
    },
    {
      "english": "there",
      "chinese": "那里",
      "phonetic": "/ðєә/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "位置对应",
      "isGuide": false
    },
    {
      "english": "back",
      "chinese": "后面 / 背",
      "phonetic": "/bæk/",
      "category": "引导词",
      "theme": "-ack 同韵",
      "relation": "-ack 同韵",
      "isGuide": true
    },
    {
      "english": "black",
      "chinese": "黑色的",
      "phonetic": "/blæk/",
      "category": "同词族/同韵",
      "theme": "-ack 同韵",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "track",
      "chinese": "轨道 / 跟踪",
      "phonetic": "/træk/",
      "category": "同词族/同韵",
      "theme": "-ack 同韵",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "pack",
      "chinese": "打包",
      "phonetic": "/pæk/",
      "category": "同词族/同韵",
      "theme": "-ack 同韵",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "lack",
      "chinese": "缺少",
      "phonetic": "/læk/",
      "category": "同词族/同韵",
      "theme": "-ack 同韵",
      "relation": "-ack 同韵",
      "isGuide": false
    },
    {
      "english": "snack",
      "chinese": "零食",
      "phonetic": "/snæk/",
      "category": "同词族/同韵",
      "theme": "-ack 同韵",
      "relation": "-ack 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "care",
      "chinese": "关心 / 在意",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：care",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "care",
      "coreMeaning": "关心 / 在意",
      "coreExplanation": "care = 关心 / 在意｜careful：会注意、会在意 → 小心的｜caring：会关心别人的",
      "coreSource": "新核心"
    },
    {
      "english": "careful",
      "chinese": "小心的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：care",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "caring",
      "chinese": "关心人的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：care",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "safe",
      "chinese": "安全的",
      "phonetic": "",
      "category": "场景词",
      "theme": "care 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "help",
      "chinese": "帮助",
      "phonetic": "/help/",
      "category": "场景词",
      "theme": "care 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "this",
      "chinese": "这个",
      "phonetic": "/θis/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "指示对应",
      "isGuide": false
    },
    {
      "english": "that",
      "chinese": "那个",
      "phonetic": "/ðæt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "指示对应",
      "isGuide": false
    },
    {
      "english": "always",
      "chinese": "总是",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "never",
      "chinese": "从不",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "think",
      "chinese": "想",
      "phonetic": "/θɪŋk/",
      "category": "引导词",
      "theme": "-ink 同韵",
      "relation": "-ink 同韵",
      "isGuide": true
    },
    {
      "english": "drink",
      "chinese": "喝",
      "phonetic": "/drɪŋk/",
      "category": "同词族/同韵",
      "theme": "-ink 同韵",
      "relation": "-ink 同韵",
      "isGuide": false
    },
    {
      "english": "link",
      "chinese": "链接",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ink 同韵",
      "relation": "-ink 同韵",
      "isGuide": false
    },
    {
      "english": "pink",
      "chinese": "粉色的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ink 同韵",
      "relation": "-ink 同韵",
      "isGuide": false
    },
    {
      "english": "sink",
      "chinese": "下沉 / 水槽",
      "phonetic": "/sɪŋk/",
      "category": "同词族/同韵",
      "theme": "-ink 同韵",
      "relation": "-ink 同韵",
      "isGuide": false
    },
    {
      "english": "wink",
      "chinese": "眨眼",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ink 同韵",
      "relation": "-ink 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "hope",
      "chinese": "希望",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：hope",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "hope",
      "coreMeaning": "希望",
      "coreExplanation": "hope = 希望｜hopeful：有希望的｜hoping：正在希望 / 期待",
      "coreSource": "新核心"
    },
    {
      "english": "hopeful",
      "chinese": "有希望的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：hope",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "hoping",
      "chinese": "正在希望 / 期待",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：hope",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "dream",
      "chinese": "梦想",
      "phonetic": "",
      "category": "场景词",
      "theme": "hope 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "wish",
      "chinese": "愿望",
      "phonetic": "",
      "category": "场景词",
      "theme": "hope 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "with",
      "chinese": "有 / 和",
      "phonetic": "/wið/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "without",
      "chinese": "没有",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "above",
      "chinese": "上方",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "below",
      "chinese": "下方",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "thing",
      "chinese": "东西",
      "phonetic": "/θiŋ/",
      "category": "引导词",
      "theme": "-ing 同韵",
      "relation": "-ing 同韵",
      "isGuide": true
    },
    {
      "english": "bring",
      "chinese": "带来",
      "phonetic": "/briŋ/",
      "category": "同词族/同韵",
      "theme": "-ing 同韵",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "sing",
      "chinese": "唱歌",
      "phonetic": "/sɪŋ/",
      "category": "同词族/同韵",
      "theme": "-ing 同韵",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "ring",
      "chinese": "戒指 / 响",
      "phonetic": "/rɪŋ/",
      "category": "同词族/同韵",
      "theme": "-ing 同韵",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "king",
      "chinese": "国王",
      "phonetic": "/kiŋ/",
      "category": "同词族/同韵",
      "theme": "-ing 同韵",
      "relation": "-ing 同韵",
      "isGuide": false
    },
    {
      "english": "spring",
      "chinese": "春天",
      "phonetic": "/sprɪŋ/",
      "category": "同词族/同韵",
      "theme": "-ing 同韵",
      "relation": "-ing 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "move",
      "chinese": "移动",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：move",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "move",
      "coreMeaning": "移动",
      "coreExplanation": "move = 移动｜moving：正在移动；也可表示“感人的”｜movement：移动这个动作 → 移动 / 动作",
      "coreSource": "新核心"
    },
    {
      "english": "moving",
      "chinese": "移动中的 / 感人的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：move",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "movement",
      "chinese": "移动 / 动作",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：move",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "body",
      "chinese": "身体",
      "phonetic": "/'bɒdi/",
      "category": "场景词",
      "theme": "move 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "place",
      "chinese": "地方",
      "phonetic": "/pleis/",
      "category": "场景词",
      "theme": "move 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "over",
      "chinese": "上方 / 越过",
      "phonetic": "/'әuvә/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "under",
      "chinese": "下方",
      "phonetic": "/'ʌndә/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "top",
      "chinese": "顶部",
      "phonetic": "/tɑːp/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "bottom",
      "chinese": "底部",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "best",
      "chinese": "最好的",
      "phonetic": "/best/",
      "category": "引导词",
      "theme": "-est 同韵",
      "relation": "-est 同韵",
      "isGuide": true
    },
    {
      "english": "rest",
      "chinese": "休息",
      "phonetic": "/rest/",
      "category": "同词族/同韵",
      "theme": "-est 同韵",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "test",
      "chinese": "测试",
      "phonetic": "/test/",
      "category": "同词族/同韵",
      "theme": "-est 同韵",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "west",
      "chinese": "西边",
      "phonetic": "/west/",
      "category": "同词族/同韵",
      "theme": "-est 同韵",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "chest",
      "chinese": "胸口",
      "phonetic": "/tʃest/",
      "category": "同词族/同韵",
      "theme": "-est 同韵",
      "relation": "-est 同韵",
      "isGuide": false
    },
    {
      "english": "nest",
      "chinese": "鸟巢",
      "phonetic": "/nest/",
      "category": "同词族/同韵",
      "theme": "-est 同韵",
      "relation": "-est 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "shop",
      "chinese": "商店 / 购物",
      "phonetic": "/ʃɑːp/",
      "category": "同核心词",
      "theme": "核心词：shop",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "shop",
      "coreMeaning": "商店 / 购物",
      "coreExplanation": "shop = 商店 / 购物｜shopper：购物的人 → 购物者｜shopping：购物这件事",
      "coreSource": "新核心"
    },
    {
      "english": "shopper",
      "chinese": "购物者",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：shop",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "shopping",
      "chinese": "购物",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：shop",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "store",
      "chinese": "商店",
      "phonetic": "/stɔːr/",
      "category": "场景词",
      "theme": "shop 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "price",
      "chinese": "价格",
      "phonetic": "/praɪs/",
      "category": "场景词",
      "theme": "shop 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "front",
      "chinese": "前面",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "back",
      "chinese": "后面",
      "phonetic": "/bæk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "man",
      "chinese": "男人",
      "phonetic": "/mæn/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "对应",
      "isGuide": false
    },
    {
      "english": "woman",
      "chinese": "女人",
      "phonetic": "/'wumәn/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "对应",
      "isGuide": false
    },
    {
      "english": "side",
      "chinese": "边 / 一侧",
      "phonetic": "",
      "category": "引导词",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": true
    },
    {
      "english": "ride",
      "chinese": "乘坐 / 骑",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "hide",
      "chinese": "藏",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "wide",
      "chinese": "宽的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "inside",
      "chinese": "里面",
      "phonetic": "/ˌɪnˈsaɪd/",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "outside",
      "chinese": "外面",
      "phonetic": "/ˌaʊtˈsaɪd/",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "buy",
      "chinese": "买",
      "phonetic": "/bai/",
      "category": "同核心词",
      "theme": "核心词：buy",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "buy",
      "coreMeaning": "买",
      "coreExplanation": "buy = 买｜buyer：买东西的人 → 买家｜buying：买这件事 → 购买",
      "coreSource": "已学核心复用"
    },
    {
      "english": "buyer",
      "chinese": "买家",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：buy",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "buying",
      "chinese": "购买",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：buy",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "money",
      "chinese": "钱",
      "phonetic": "/'mʌni/",
      "category": "场景词",
      "theme": "buy 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "store",
      "chinese": "商店",
      "phonetic": "/stɔːr/",
      "category": "场景词",
      "theme": "buy 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "parent",
      "chinese": "父母 / 家长",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "关系对应",
      "isGuide": false
    },
    {
      "english": "child",
      "chinese": "孩子",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "关系对应",
      "isGuide": false
    },
    {
      "english": "brother",
      "chinese": "兄弟",
      "phonetic": "/'brʌðә/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "关系对应",
      "isGuide": false
    },
    {
      "english": "sister",
      "chinese": "姐妹",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "关系对应",
      "isGuide": false
    },
    {
      "english": "side",
      "chinese": "边 / 一侧",
      "phonetic": "",
      "category": "引导词",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": true
    },
    {
      "english": "ride",
      "chinese": "乘坐 / 骑",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "hide",
      "chinese": "藏",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "wide",
      "chinese": "宽的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "inside",
      "chinese": "里面",
      "phonetic": "/ˌɪnˈsaɪd/",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    },
    {
      "english": "outside",
      "chinese": "外面",
      "phonetic": "/ˌaʊtˈsaɪd/",
      "category": "同词族/同韵",
      "theme": "-ide 同韵",
      "relation": "-ide 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/",
      "category": "同核心词",
      "theme": "核心词：sell",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "sell",
      "coreMeaning": "卖",
      "coreExplanation": "sell = 卖｜seller：卖东西的人 → 卖家｜selling：卖东西这件事 → 销售",
      "coreSource": "新核心"
    },
    {
      "english": "seller",
      "chinese": "卖家",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sell",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "selling",
      "chinese": "销售 / 卖东西",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sell",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "price",
      "chinese": "价格",
      "phonetic": "/praɪs/",
      "category": "场景词",
      "theme": "sell 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "store",
      "chinese": "商店",
      "phonetic": "/stɔːr/",
      "category": "场景词",
      "theme": "sell 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "send",
      "chinese": "发送",
      "phonetic": "/send/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "receive",
      "chinese": "接收",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "online",
      "chinese": "在线",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "offline",
      "chinese": "离线",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sound",
      "chinese": "声音",
      "phonetic": "/saund/",
      "category": "引导词",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": true
    },
    {
      "english": "round",
      "chinese": "圆的 / 一轮",
      "phonetic": "/raund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "found",
      "chinese": "找到 / 发现了",
      "phonetic": "/faund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "ground",
      "chinese": "地面",
      "phonetic": "/graund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "around",
      "chinese": "周围",
      "phonetic": "/ә'raund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "pound",
      "chinese": "磅 / 英镑",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "pay",
      "chinese": "支付",
      "phonetic": "/peɪ/",
      "category": "同核心词",
      "theme": "核心词：pay",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "pay",
      "coreMeaning": "支付",
      "coreExplanation": "pay = 支付｜paying：正在付钱｜payment：一次付款 / 支付款项",
      "coreSource": "新核心"
    },
    {
      "english": "paying",
      "chinese": "付款 / 正在付钱",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：pay",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "payment",
      "chinese": "付款 / 支付款项",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：pay",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "money",
      "chinese": "钱",
      "phonetic": "/'mʌni/",
      "category": "场景词",
      "theme": "pay 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "bill",
      "chinese": "账单",
      "phonetic": "",
      "category": "场景词",
      "theme": "pay 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "upload",
      "chinese": "上传",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "download",
      "chinese": "下载",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "play",
      "chinese": "播放 / 开始",
      "phonetic": "/pleɪ/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "操作对应",
      "isGuide": false
    },
    {
      "english": "stop",
      "chinese": "停止",
      "phonetic": "/stɑːp/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "操作对应",
      "isGuide": false
    },
    {
      "english": "sound",
      "chinese": "声音",
      "phonetic": "/saund/",
      "category": "引导词",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": true
    },
    {
      "english": "round",
      "chinese": "圆的 / 一轮",
      "phonetic": "/raund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "found",
      "chinese": "找到 / 发现了",
      "phonetic": "/faund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "ground",
      "chinese": "地面",
      "phonetic": "/graund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "around",
      "chinese": "周围",
      "phonetic": "/ә'raund/",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    },
    {
      "english": "pound",
      "chinese": "磅 / 英镑",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ound 同韵",
      "relation": "-ound 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "rain",
      "chinese": "雨",
      "phonetic": "/reɪn/",
      "category": "同核心词",
      "theme": "核心词：rain",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "rain",
      "coreMeaning": "雨",
      "coreExplanation": "rain = 雨｜rainy：有雨的 → 下雨的 / 多雨的｜raining：正在下雨",
      "coreSource": "新核心"
    },
    {
      "english": "rainy",
      "chinese": "下雨的 / 多雨的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：rain",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "raining",
      "chinese": "正在下雨",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：rain",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "cloud",
      "chinese": "云",
      "phonetic": "",
      "category": "场景词",
      "theme": "rain 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "wet",
      "chinese": "湿的",
      "phonetic": "",
      "category": "场景词",
      "theme": "rain 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "loud",
      "chinese": "大声的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "quiet",
      "chinese": "安静的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sleep",
      "chinese": "睡觉",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "wake",
      "chinese": "醒来",
      "phonetic": "/weɪk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "school",
      "chinese": "学校",
      "phonetic": "/skuːl/",
      "category": "引导词",
      "theme": "-ool 同韵",
      "relation": "-ool 同韵",
      "isGuide": true
    },
    {
      "english": "cool",
      "chinese": "酷的 / 凉的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ool 同韵",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "pool",
      "chinese": "泳池",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ool 同韵",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "rule",
      "chinese": "规则",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ool 同韵",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "tool",
      "chinese": "工具",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ool 同韵",
      "relation": "-ool 同韵",
      "isGuide": false
    },
    {
      "english": "fool",
      "chinese": "傻瓜",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ool 同韵",
      "relation": "-ool 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sun",
      "chinese": "太阳",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sun",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "sun",
      "coreMeaning": "太阳",
      "coreExplanation": "sun = 太阳｜sunny：有太阳的 → 晴朗的｜sunlight：sun 太阳 + light 光 → 阳光",
      "coreSource": "新核心"
    },
    {
      "english": "sunny",
      "chinese": "晴朗的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sun",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "sunlight",
      "chinese": "阳光",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sun",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "sky",
      "chinese": "天空",
      "phonetic": "",
      "category": "场景词",
      "theme": "sun 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "白天",
      "phonetic": "/dei/",
      "category": "场景词",
      "theme": "sun 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "hurt",
      "chinese": "受伤 / 疼",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "过程对应",
      "isGuide": false
    },
    {
      "english": "heal",
      "chinese": "康复",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "过程对应",
      "isGuide": false
    },
    {
      "english": "work",
      "chinese": "工作",
      "phonetic": "/wɜːrk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "rest",
      "chinese": "休息",
      "phonetic": "/rest/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "eat",
      "chinese": "吃",
      "phonetic": "/iːt/",
      "category": "引导词",
      "theme": "-eat 同韵",
      "relation": "-eat 同韵",
      "isGuide": true
    },
    {
      "english": "meat",
      "chinese": "肉",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-eat 同韵",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "seat",
      "chinese": "座位",
      "phonetic": "/si:t/",
      "category": "同词族/同韵",
      "theme": "-eat 同韵",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "heat",
      "chinese": "热 / 加热",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-eat 同韵",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "beat",
      "chinese": "打 / 节拍",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-eat 同韵",
      "relation": "-eat 同韵",
      "isGuide": false
    },
    {
      "english": "sweet",
      "chinese": "甜的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-eat 同韵",
      "relation": "-eat 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/",
      "category": "同核心词",
      "theme": "核心词：friend",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "friend",
      "coreMeaning": "朋友",
      "coreExplanation": "friend = 朋友｜friendly：像朋友一样友好 → 友好的｜friendship：朋友之间的关系 → 友谊",
      "coreSource": "已学核心复用"
    },
    {
      "english": "friendly",
      "chinese": "友好的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：friend",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "friendship",
      "chinese": "友谊",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：friend",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "help",
      "chinese": "帮助",
      "phonetic": "/help/",
      "category": "场景词",
      "theme": "friend 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "team",
      "chinese": "团队",
      "phonetic": "",
      "category": "场景词",
      "theme": "friend 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "read",
      "chinese": "读",
      "phonetic": "/ri:d/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "学习对应",
      "isGuide": false
    },
    {
      "english": "write",
      "chinese": "写",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "学习对应",
      "isGuide": false
    },
    {
      "english": "speak",
      "chinese": "说",
      "phonetic": "/spi:k/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "交流对应",
      "isGuide": false
    },
    {
      "english": "listen",
      "chinese": "听",
      "phonetic": "/'lisn/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "交流对应",
      "isGuide": false
    },
    {
      "english": "blue",
      "chinese": "蓝色的",
      "phonetic": "",
      "category": "引导词",
      "theme": "长 u 音",
      "relation": "长 u 音",
      "isGuide": true
    },
    {
      "english": "true",
      "chinese": "真的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "长 u 音",
      "relation": "长 u 音",
      "isGuide": false
    },
    {
      "english": "two",
      "chinese": "二",
      "phonetic": "/tu:/",
      "category": "同词族/同韵",
      "theme": "长 u 音",
      "relation": "长 u 音",
      "isGuide": false
    },
    {
      "english": "too",
      "chinese": "也 / 太",
      "phonetic": "/tu:/",
      "category": "同词族/同韵",
      "theme": "长 u 音",
      "relation": "长 u 音",
      "isGuide": false
    },
    {
      "english": "shoe",
      "chinese": "鞋",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "长 u 音",
      "relation": "长 u 音",
      "isGuide": false
    },
    {
      "english": "through",
      "chinese": "穿过",
      "phonetic": "/θru:/",
      "category": "同词族/同韵",
      "theme": "长 u 音",
      "relation": "长 u 音",
      "isGuide": false
    }
  ],
  [
    {
      "english": "happy",
      "chinese": "开心的",
      "phonetic": "/ˈhæpi/",
      "category": "同核心词",
      "theme": "核心词：happy",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "happy",
      "coreMeaning": "开心的",
      "coreExplanation": "happy = 开心的｜happily：开心地｜unhappy：un- 表示“不” → 不开心的",
      "coreSource": "已学核心复用"
    },
    {
      "english": "happily",
      "chinese": "开心地",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：happy",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "unhappy",
      "chinese": "不开心的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：happy",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "smile",
      "chinese": "微笑",
      "phonetic": "",
      "category": "场景词",
      "theme": "happy 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "fun",
      "chinese": "乐趣",
      "phonetic": "",
      "category": "场景词",
      "theme": "happy 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "eat",
      "chinese": "吃",
      "phonetic": "/iːt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "生活对应",
      "isGuide": false
    },
    {
      "english": "drink",
      "chinese": "喝",
      "phonetic": "/drɪŋk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "生活对应",
      "isGuide": false
    },
    {
      "english": "arrive",
      "chinese": "到达",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "leave",
      "chinese": "离开",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "green",
      "chinese": "绿色的",
      "phonetic": "",
      "category": "引导词",
      "theme": "-een 同韵",
      "relation": "-een 同韵",
      "isGuide": true
    },
    {
      "english": "seen",
      "chinese": "看见过",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-een 同韵",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "clean",
      "chinese": "干净的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-een 同韵",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "mean",
      "chinese": "意思是 / 刻薄的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-een 同韵",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "teen",
      "chinese": "青少年",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-een 同韵",
      "relation": "-een 同韵",
      "isGuide": false
    },
    {
      "english": "screen",
      "chinese": "屏幕",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-een 同韵",
      "relation": "-een 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "sad",
      "chinese": "难过的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sad",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "sad",
      "coreMeaning": "难过的",
      "coreExplanation": "sad = 难过的｜sadly：难过地｜sadness：难过这种状态 → 悲伤",
      "coreSource": "新核心"
    },
    {
      "english": "sadly",
      "chinese": "难过地",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sad",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "sadness",
      "chinese": "悲伤",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：sad",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "cry",
      "chinese": "哭",
      "phonetic": "",
      "category": "场景词",
      "theme": "sad 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "tear",
      "chinese": "眼泪",
      "phonetic": "",
      "category": "场景词",
      "theme": "sad 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "cheap",
      "chinese": "便宜",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "expensive",
      "chinese": "贵",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "open",
      "chinese": "打开",
      "phonetic": "/'әupәn/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "close",
      "chinese": "关闭",
      "phonetic": "/klәuz/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "face",
      "chinese": "脸",
      "phonetic": "/feis/",
      "category": "引导词",
      "theme": "-ace 同韵",
      "relation": "-ace 同韵",
      "isGuide": true
    },
    {
      "english": "place",
      "chinese": "地方",
      "phonetic": "/pleis/",
      "category": "同词族/同韵",
      "theme": "-ace 同韵",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "race",
      "chinese": "比赛",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ace 同韵",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "space",
      "chinese": "空间",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ace 同韵",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "case",
      "chinese": "情况 / 盒子",
      "phonetic": "/keis/",
      "category": "同词族/同韵",
      "theme": "-ace 同韵",
      "relation": "-ace 同韵",
      "isGuide": false
    },
    {
      "english": "base",
      "chinese": "基础",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ace 同韵",
      "relation": "-ace 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "easy",
      "chinese": "容易的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：easy",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "easy",
      "coreMeaning": "容易的",
      "coreExplanation": "easy = 容易的｜easier：更容易的｜easily：容易地",
      "coreSource": "新核心"
    },
    {
      "english": "easier",
      "chinese": "更容易的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：easy",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "easily",
      "chinese": "容易地",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：easy",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "simple",
      "chinese": "简单的",
      "phonetic": "",
      "category": "场景词",
      "theme": "easy 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "test",
      "chinese": "测试",
      "phonetic": "/test/",
      "category": "场景词",
      "theme": "easy 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "enter",
      "chinese": "进入",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "leave",
      "chinese": "离开",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "start",
      "chinese": "开始",
      "phonetic": "/stɑːrt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "finish",
      "chinese": "结束",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "line",
      "chinese": "线 / 排",
      "phonetic": "/lain/",
      "category": "引导词",
      "theme": "-ine 同韵",
      "relation": "-ine 同韵",
      "isGuide": true
    },
    {
      "english": "mine",
      "chinese": "我的 / 矿",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ine 同韵",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "fine",
      "chinese": "好的 / 罚款",
      "phonetic": "/fain/",
      "category": "同词族/同韵",
      "theme": "-ine 同韵",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "nine",
      "chinese": "九",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ine 同韵",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "sign",
      "chinese": "标志",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ine 同韵",
      "relation": "-ine 同韵",
      "isGuide": false
    },
    {
      "english": "shine",
      "chinese": "发光",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ine 同韵",
      "relation": "-ine 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "fast",
      "chinese": "快的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：fast",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "fast",
      "coreMeaning": "快的",
      "coreExplanation": "fast = 快的｜faster：更快｜fastest：最快",
      "coreSource": "新核心"
    },
    {
      "english": "faster",
      "chinese": "更快的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：fast",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "fastest",
      "chinese": "最快的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：fast",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "speed",
      "chinese": "速度",
      "phonetic": "",
      "category": "场景词",
      "theme": "fast 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "run",
      "chinese": "跑",
      "phonetic": "",
      "category": "场景词",
      "theme": "fast 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "buy",
      "chinese": "买",
      "phonetic": "/bai/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sell",
      "chinese": "卖",
      "phonetic": "/sel/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "give",
      "chinese": "给",
      "phonetic": "/ɡɪv/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "take",
      "chinese": "拿",
      "phonetic": "/teɪk/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "引导词",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": true
    },
    {
      "english": "not",
      "chinese": "不",
      "phonetic": "/nɒt/",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "lot",
      "chinese": "许多 / 一块地",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "got",
      "chinese": "得到 / 有了",
      "phonetic": "/gɒt/",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "shot",
      "chinese": "射击 / 一针",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "spot",
      "chinese": "地点 / 斑点",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "slow",
      "chinese": "慢的",
      "phonetic": "/sloʊ/",
      "category": "同核心词",
      "theme": "核心词：slow",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "slow",
      "coreMeaning": "慢的",
      "coreExplanation": "slow = 慢的｜slower：更慢｜slowly：慢慢地",
      "coreSource": "新核心"
    },
    {
      "english": "slower",
      "chinese": "更慢的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：slow",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "slowly",
      "chinese": "慢慢地",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：slow",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "wait",
      "chinese": "等待",
      "phonetic": "",
      "category": "场景词",
      "theme": "slow 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "stop",
      "chinese": "停止",
      "phonetic": "/stɑːp/",
      "category": "场景词",
      "theme": "slow 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "come",
      "chinese": "来",
      "phonetic": "/kʌm/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "go",
      "chinese": "去",
      "phonetic": "/ɡoʊ/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "ask",
      "chinese": "问",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "answer",
      "chinese": "回答",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "问答",
      "isGuide": false
    },
    {
      "english": "hot",
      "chinese": "热的",
      "phonetic": "",
      "category": "引导词",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": true
    },
    {
      "english": "not",
      "chinese": "不",
      "phonetic": "/nɒt/",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "lot",
      "chinese": "许多 / 一块地",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "got",
      "chinese": "得到 / 有了",
      "phonetic": "/gɒt/",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "shot",
      "chinese": "射击 / 一针",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    },
    {
      "english": "spot",
      "chinese": "地点 / 斑点",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ot 同韵",
      "relation": "-ot 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "big",
      "chinese": "大的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：big",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "big",
      "coreMeaning": "大的",
      "coreExplanation": "big = 大的｜bigger：更大的｜biggest：最大的",
      "coreSource": "新核心"
    },
    {
      "english": "bigger",
      "chinese": "更大的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：big",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "biggest",
      "chinese": "最大的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：big",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "size",
      "chinese": "大小",
      "phonetic": "",
      "category": "场景词",
      "theme": "big 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "box",
      "chinese": "盒子",
      "phonetic": "",
      "category": "场景词",
      "theme": "big 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "push",
      "chinese": "推",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "pull",
      "chinese": "拉",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "stand",
      "chinese": "站",
      "phonetic": "/stænd/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "day",
      "chinese": "天",
      "phonetic": "/dei/",
      "category": "引导词",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": true
    },
    {
      "english": "way",
      "chinese": "路 / 方式",
      "phonetic": "/wei/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "say",
      "chinese": "说",
      "phonetic": "/seɪ/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "may",
      "chinese": "可能 / 可以",
      "phonetic": "/mei/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "pay",
      "chinese": "支付",
      "phonetic": "/peɪ/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    },
    {
      "english": "play",
      "chinese": "玩",
      "phonetic": "/pleɪ/",
      "category": "同词族/同韵",
      "theme": "-ay 同韵",
      "relation": "-ay 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "small",
      "chinese": "小的",
      "phonetic": "/smɒ:l/",
      "category": "同核心词",
      "theme": "核心词：small",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "small",
      "coreMeaning": "小的",
      "coreExplanation": "small = 小的｜smaller：更小的｜smallest：最小的",
      "coreSource": "新核心"
    },
    {
      "english": "smaller",
      "chinese": "更小的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：small",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "smallest",
      "chinese": "最小的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：small",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "size",
      "chinese": "大小",
      "phonetic": "",
      "category": "场景词",
      "theme": "small 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "box",
      "chinese": "盒子",
      "phonetic": "",
      "category": "场景词",
      "theme": "small 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "up",
      "chinese": "上",
      "phonetic": "/ʌp/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "down",
      "chinese": "下",
      "phonetic": "/daun/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "in",
      "chinese": "里面",
      "phonetic": "/in/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "out",
      "chinese": "外面",
      "phonetic": "/aut/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "night",
      "chinese": "夜晚",
      "phonetic": "/nait/",
      "category": "引导词",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": true
    },
    {
      "english": "light",
      "chinese": "光 / 灯",
      "phonetic": "/lait/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "正确 / 右边",
      "phonetic": "/rait/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "might",
      "chinese": "可能",
      "phonetic": "/mait/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "fight",
      "chinese": "打架 / 战斗",
      "phonetic": "/faɪt/",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    },
    {
      "english": "bright",
      "chinese": "明亮的",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "-ight 同韵",
      "relation": "-ight 同韵",
      "isGuide": false
    }
  ],
  [
    {
      "english": "high",
      "chinese": "高的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：high",
      "relation": "3个同核心词",
      "isGuide": false,
      "coreWord": "high",
      "coreMeaning": "高的",
      "coreExplanation": "high = 高的｜higher：更高的｜highest：最高的",
      "coreSource": "新核心"
    },
    {
      "english": "higher",
      "chinese": "更高的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：high",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "highest",
      "chinese": "最高的",
      "phonetic": "",
      "category": "同核心词",
      "theme": "核心词：high",
      "relation": "3个同核心词",
      "isGuide": false
    },
    {
      "english": "sky",
      "chinese": "天空",
      "phonetic": "",
      "category": "场景词",
      "theme": "high 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "mountain",
      "chinese": "山",
      "phonetic": "",
      "category": "场景词",
      "theme": "high 相关场景",
      "relation": "同场景",
      "isGuide": false
    },
    {
      "english": "left",
      "chinese": "左",
      "phonetic": "/left/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "right",
      "chinese": "右",
      "phonetic": "/rait/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "方向对应",
      "isGuide": false
    },
    {
      "english": "big",
      "chinese": "大的",
      "phonetic": "",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "small",
      "chinese": "小的",
      "phonetic": "/smɒ:l/",
      "category": "成对词",
      "theme": "成对关系词",
      "relation": "反义",
      "isGuide": false
    },
    {
      "english": "hear",
      "chinese": "听见",
      "phonetic": "",
      "category": "引导词",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": true
    },
    {
      "english": "here",
      "chinese": "这里",
      "phonetic": "",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "near",
      "chinese": "附近",
      "phonetic": "/niә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "year",
      "chinese": "年",
      "phonetic": "/jiә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "dear",
      "chinese": "亲爱的",
      "phonetic": "/'diә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    },
    {
      "english": "fear",
      "chinese": "害怕",
      "phonetic": "/fiә/",
      "category": "同词族/同韵",
      "theme": "hear/here 同音 + -ear 同韵",
      "relation": "hear/here 同音 + -ear 同韵",
      "isGuide": false
    }
  ]
];
  if (!window.ENGLISH_365_DATA) return;
  groups.forEach((words, index) => {
    window.ENGLISH_365_DATA.days[index + 3].words = words;
  });
})();
