/* Day 4-50: imported from the user's latest desktop English 365 workbook. */
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
      "english": "being",
      "chinese": "存在；性质；生命",
      "phonetic": "/'bi:iŋ/"
    },
    {
      "english": "hear",
      "chinese": "听到；倾听；听说",
      "phonetic": "/hiә/"
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
      "english": "again",
      "chinese": "再一次；又",
      "phonetic": "/ә'gein/"
    },
    {
      "english": "way",
      "chinese": "方式；道路；方向",
      "phonetic": "/wei/"
    },
    {
      "english": "another",
      "chinese": "另一个；又一个",
      "phonetic": "/ә'nʌðә/"
    },
    {
      "english": "away",
      "chinese": "离去",
      "phonetic": "/ә'wei/"
    },
    {
      "english": "general",
      "chinese": "一般；将军；大体",
      "phonetic": "/'dʒenәrәl/"
    },
    {
      "english": "hand",
      "chinese": "手；爪；指针",
      "phonetic": "/hænd/"
    },
    {
      "english": "left",
      "chinese": "左边的；左倾的；左侧的",
      "phonetic": "/left/"
    },
    {
      "english": "through",
      "chinese": "穿过；通过；从头到尾",
      "phonetic": "/θru:/"
    },
    {
      "english": "began",
      "chinese": "开始（begin 的过去式）",
      "phonetic": "/bi'gæn/"
    },
    {
      "english": "great",
      "chinese": "大的；非常的；主要的",
      "phonetic": "/greit/"
    },
    {
      "english": "old",
      "chinese": "老的；旧的；从前的",
      "phonetic": "/әuld/"
    },
    {
      "english": "cold",
      "chinese": "感冒；寒冷；寒冷的",
      "phonetic": "/kәuld/"
    },
    {
      "english": "hold",
      "chinese": "拿住；保持",
      "phonetic": "/hoʊld/"
    },
    {
      "english": "told",
      "chinese": "告诉（tell 的过去式）",
      "phonetic": "/tәuld/"
    },
    {
      "english": "gold",
      "chinese": "金；金色",
      "phonetic": "/ɡoʊld/"
    }
  ],
  [
    {
      "english": "army",
      "chinese": "军队；陆军",
      "phonetic": "/'ɑ:mi/"
    },
    {
      "english": "looked",
      "chinese": "看；看起来（look 的过去式）",
      "phonetic": "/lʊkt/"
    },
    {
      "english": "count",
      "chinese": "计算；视为；计数",
      "phonetic": "/kaunt/"
    },
    {
      "english": "back",
      "chinese": "后面；返回；背部",
      "phonetic": "/bæk/"
    },
    {
      "english": "whole",
      "chinese": "全部；全体；整体",
      "phonetic": "/hәul/"
    },
    {
      "english": "shall",
      "chinese": "将",
      "phonetic": "/ʃæl/"
    },
    {
      "english": "head",
      "chinese": "头；头脑；领袖",
      "phonetic": "/hed/"
    },
    {
      "english": "right",
      "chinese": "正确的；右边；权利",
      "phonetic": "/rait/"
    },
    {
      "english": "part",
      "chinese": "部分；角色；离开",
      "phonetic": "/pɑ:t/"
    },
    {
      "english": "government",
      "chinese": "政府；内阁",
      "phonetic": "/'gʌvәnmәnt/"
    },
    {
      "english": "sound",
      "chinese": "声音；语音；吵闹",
      "phonetic": "/saund/"
    },
    {
      "english": "round",
      "chinese": "圆；圆形物；巡回",
      "phonetic": "/raund/"
    },
    {
      "english": "found",
      "chinese": "建立；创立；铸造",
      "phonetic": "/faund/"
    },
    {
      "english": "around",
      "chinese": "在周围；大约；到处",
      "phonetic": "/ә'raund/"
    },
    {
      "english": "ground",
      "chinese": "土地；战场；场地",
      "phonetic": "/graund/"
    }
  ],
  [
    {
      "english": "something",
      "chinese": "某事；某物",
      "phonetic": "/'sʌmθiŋ/"
    },
    {
      "english": "why",
      "chinese": "为什么；……的原因",
      "phonetic": "/hwai/"
    },
    {
      "english": "having",
      "chinese": "有；拥有（have 的现在分词）",
      "phonetic": "/'hæviŋ/"
    },
    {
      "english": "place",
      "chinese": "地方；放置；名次",
      "phonetic": "/pleis/"
    },
    {
      "english": "much",
      "chinese": "许多；非常",
      "phonetic": "/mʌtʃ/"
    },
    {
      "english": "state",
      "chinese": "状态；州；陈述",
      "phonetic": "/steit/"
    },
    {
      "english": "house",
      "chinese": "房屋；住宅；议院",
      "phonetic": "/haus/"
    },
    {
      "english": "against",
      "chinese": "反对；靠着；与……比赛",
      "phonetic": "/ә'geinst/"
    },
    {
      "english": "between",
      "chinese": "在...之间",
      "phonetic": "/bi'twi:n/"
    },
    {
      "english": "every",
      "chinese": "每一；所有的",
      "phonetic": "/'evri/"
    },
    {
      "english": "down",
      "chinese": "向下；情绪低落的",
      "phonetic": "/daun/"
    },
    {
      "english": "town",
      "chinese": "城镇；市；镇",
      "phonetic": "/taun/"
    },
    {
      "english": "brown",
      "chinese": "棕色的；棕色",
      "phonetic": "/braʊn/"
    },
    {
      "english": "crown",
      "chinese": "王冠",
      "phonetic": "/kraʊn/"
    },
    {
      "english": "clown",
      "chinese": "小丑",
      "phonetic": "/klaʊn/"
    }
  ],
  [
    {
      "english": "young",
      "chinese": "年轻的；无经验的；朝气蓬勃的",
      "phonetic": "/jʌŋ/"
    },
    {
      "english": "bone",
      "chinese": "骨头；骨；骨制品",
      "phonetic": "/bәun/"
    },
    {
      "english": "disease",
      "chinese": "疾病；弊病",
      "phonetic": "/di'zi:z/"
    },
    {
      "english": "many",
      "chinese": "许多的；许多人",
      "phonetic": "/'meni/"
    },
    {
      "english": "always",
      "chinese": "总是；始终",
      "phonetic": "/'ɒ:lweiz/"
    },
    {
      "english": "saw",
      "chinese": "看见（see 的过去式）",
      "phonetic": "/sɒ:/"
    },
    {
      "english": "never",
      "chinese": "从不；决不；不曾",
      "phonetic": "/'nevә/"
    },
    {
      "english": "three",
      "chinese": "三；三个",
      "phonetic": "/θri:/"
    },
    {
      "english": "don",
      "chinese": "西班牙贵族(或绅士)；先生；阁下",
      "phonetic": "/dɒn/"
    },
    {
      "english": "skin",
      "chinese": "皮肤；皮；剥皮",
      "phonetic": "/skin/"
    },
    {
      "english": "air",
      "chinese": "空气；旋律；态度",
      "phonetic": "/єә/"
    },
    {
      "english": "fair",
      "chinese": "公平的；晴朗的",
      "phonetic": "/fer/"
    },
    {
      "english": "hair",
      "chinese": "头发；毛发；些微",
      "phonetic": "/hєә/"
    },
    {
      "english": "pair",
      "chinese": "一对",
      "phonetic": "/per/"
    },
    {
      "english": "chair",
      "chinese": "椅子",
      "phonetic": "/tʃer/"
    }
  ],
  [
    {
      "english": "united",
      "chinese": "联合的；团结的；一致的",
      "phonetic": "/ju:'naitid/"
    },
    {
      "english": "round",
      "chinese": "圆；圆形物；巡回",
      "phonetic": "/raund/"
    },
    {
      "english": "found",
      "chinese": "建立；创立；铸造",
      "phonetic": "/faund/"
    },
    {
      "english": "blood",
      "chinese": "血；血统；流血",
      "phonetic": "/blʌd/"
    },
    {
      "english": "power",
      "chinese": "力；体力；力量",
      "phonetic": "/'pauә/"
    },
    {
      "english": "too",
      "chinese": "也；非常；太",
      "phonetic": "/tu:/"
    },
    {
      "english": "met",
      "chinese": "遇见；见面（meet 的过去式）",
      "phonetic": "/met/"
    },
    {
      "english": "might",
      "chinese": "可能；力量",
      "phonetic": "/mait/"
    },
    {
      "english": "father",
      "chinese": "父亲；祖先；长辈",
      "phonetic": "/'fɑ:ðә/"
    },
    {
      "english": "both",
      "chinese": "两者的；两者都；两者",
      "phonetic": "/bәuθ/"
    },
    {
      "english": "late",
      "chinese": "迟的；晚的；已故的",
      "phonetic": "/leit/"
    },
    {
      "english": "date",
      "chinese": "日期；约会",
      "phonetic": "/deɪt/"
    },
    {
      "english": "hate",
      "chinese": "讨厌",
      "phonetic": "/heɪt/"
    },
    {
      "english": "rate",
      "chinese": "比率；评价",
      "phonetic": "/reɪt/"
    },
    {
      "english": "state",
      "chinese": "状态；州；陈述",
      "phonetic": "/steit/"
    }
  ],
  [
    {
      "english": "during",
      "chinese": "在……期间",
      "phonetic": "/'djuәriŋ/"
    },
    {
      "english": "quite",
      "chinese": "相当；完全；十分",
      "phonetic": "/kwait/"
    },
    {
      "english": "turned",
      "chinese": "转动；变成（turn 的过去式）",
      "phonetic": ""
    },
    {
      "english": "door",
      "chinese": "门",
      "phonetic": "/dɒ:/"
    },
    {
      "english": "knew",
      "chinese": "知道；认识（know 的过去式）",
      "phonetic": "/nju:/"
    },
    {
      "english": "suddenly",
      "chinese": "突然；意外；忽然",
      "phonetic": "/'sʌdәnli/"
    },
    {
      "english": "tell",
      "chinese": "告诉；说；吩咐",
      "phonetic": "/tel/"
    },
    {
      "english": "told",
      "chinese": "告诉（tell 的过去式）",
      "phonetic": "/tәuld/"
    },
    {
      "english": "looking",
      "chinese": "看；寻找（look 的现在分词）",
      "phonetic": "/'lukiŋ/"
    },
    {
      "english": "whom",
      "chinese": "谁",
      "phonetic": "/hu:m/"
    },
    {
      "english": "same",
      "chinese": "相同的；同样",
      "phonetic": "/seim/"
    },
    {
      "english": "name",
      "chinese": "名字；名称；姓名",
      "phonetic": "/neim/"
    },
    {
      "english": "game",
      "chinese": "游戏；比赛",
      "phonetic": "/ɡeɪm/"
    },
    {
      "english": "came",
      "chinese": "来（come 的过去式）",
      "phonetic": "/keim/"
    },
    {
      "english": "blame",
      "chinese": "责怪；责任",
      "phonetic": "/bleɪm/"
    }
  ],
  [
    {
      "english": "chapter",
      "chinese": "章；篇；重要章节",
      "phonetic": "/'tʃæptә/"
    },
    {
      "english": "treatment",
      "chinese": "治疗；待遇；处理",
      "phonetic": "/'tri:tmәnt/"
    },
    {
      "english": "officer",
      "chinese": "军官；主管；官员",
      "phonetic": "/'ɒfisә/"
    },
    {
      "english": "voice",
      "chinese": "声音；嗓音；嗓子",
      "phonetic": "/vɒis/"
    },
    {
      "english": "words",
      "chinese": "单词；话语",
      "phonetic": ""
    },
    {
      "english": "few",
      "chinese": "很少的；不多的；少数的",
      "phonetic": "/fju:/"
    },
    {
      "english": "hands",
      "chinese": "手（hand 的复数）",
      "phonetic": ""
    },
    {
      "english": "cases",
      "chinese": "情况；病例",
      "phonetic": ""
    },
    {
      "english": "days",
      "chinese": "天；日子",
      "phonetic": "/deiz/"
    },
    {
      "english": "among",
      "chinese": "在...之中",
      "phonetic": "/ә'mʌŋ/"
    },
    {
      "english": "end",
      "chinese": "结束；终点；目标",
      "phonetic": "/end/"
    },
    {
      "english": "send",
      "chinese": "发送；寄",
      "phonetic": "/send/"
    },
    {
      "english": "spend",
      "chinese": "花费；度过",
      "phonetic": "/spend/"
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/"
    },
    {
      "english": "weekend",
      "chinese": "周末",
      "phonetic": "/ˈwiːkend/"
    }
  ],
  [
    {
      "english": "often",
      "chinese": "时常；常常",
      "phonetic": "/'ɒ:fn/"
    },
    {
      "english": "gave",
      "chinese": "给（give 的过去式）",
      "phonetic": "/geiv/"
    },
    {
      "english": "battle",
      "chinese": "战役；战斗",
      "phonetic": "/'bætl/"
    },
    {
      "english": "history",
      "chinese": "历史；过去；经历",
      "phonetic": "/'histәri/"
    },
    {
      "english": "case",
      "chinese": "情况；案例；盒；案件",
      "phonetic": "/keis/"
    },
    {
      "english": "taken",
      "chinese": "拿；带（take 的过去分词）",
      "phonetic": "/'teikәn/"
    },
    {
      "english": "put",
      "chinese": "放；摆；安置",
      "phonetic": "/put/"
    },
    {
      "english": "law",
      "chinese": "法律；法则；定律",
      "phonetic": "/lɒ:/"
    },
    {
      "english": "position",
      "chinese": "位置；地位；身分",
      "phonetic": "/pә'ziʃәn/"
    },
    {
      "english": "however",
      "chinese": "然而；无论如何；究竟怎样",
      "phonetic": "/hau'evә/"
    },
    {
      "english": "and",
      "chinese": "和；而且",
      "phonetic": "/ænd/"
    },
    {
      "english": "hand",
      "chinese": "手；爪；指针",
      "phonetic": "/hænd/"
    },
    {
      "english": "land",
      "chinese": "陆地；地面；地界",
      "phonetic": "/lænd/"
    },
    {
      "english": "stand",
      "chinese": "站立",
      "phonetic": "/stænd/"
    },
    {
      "english": "understand",
      "chinese": "理解；了解；领会",
      "phonetic": "/.ʌndә'stænd/"
    }
  ],
  [
    {
      "english": "soon",
      "chinese": "不久；早；快",
      "phonetic": "/su:n/"
    },
    {
      "english": "understand",
      "chinese": "理解；了解；领会",
      "phonetic": "/.ʌndә'stænd/"
    },
    {
      "english": "each",
      "chinese": "每个；每一；个人",
      "phonetic": "/i:tʃ/"
    },
    {
      "english": "known",
      "chinese": "已知的；有名的；know的过去分词",
      "phonetic": "/nәun/"
    },
    {
      "english": "soldiers",
      "chinese": "士兵们",
      "phonetic": ""
    },
    {
      "english": "oh",
      "chinese": "(表示惊讶、恐怖、赞叹)哦",
      "phonetic": "/әu/"
    },
    {
      "english": "others",
      "chinese": "其他人",
      "phonetic": ""
    },
    {
      "english": "become",
      "chinese": "变成；变得；适合",
      "phonetic": "/bi'kʌm/"
    },
    {
      "english": "far",
      "chinese": "远的；久远的；遥远的",
      "phonetic": "/fɑ:/"
    },
    {
      "english": "brought",
      "chinese": "带来（bring 的过去式）",
      "phonetic": "/brɒ:t/"
    },
    {
      "english": "in",
      "chinese": "在……里面；在……期间",
      "phonetic": "/in/"
    },
    {
      "english": "win",
      "chinese": "赢",
      "phonetic": "/wɪn/"
    },
    {
      "english": "begin",
      "chinese": "开始",
      "phonetic": "/bɪˈɡɪn/"
    },
    {
      "english": "skin",
      "chinese": "皮肤；皮；剥皮",
      "phonetic": "/skin/"
    },
    {
      "english": "thin",
      "chinese": "薄的；细的；瘦的",
      "phonetic": "/θin/"
    }
  ],
  [
    {
      "english": "women",
      "chinese": "女人们；妇女们",
      "phonetic": "/'wimin/"
    },
    {
      "english": "course",
      "chinese": "课程；路线；过程",
      "phonetic": "/kɒ:s/"
    },
    {
      "english": "result",
      "chinese": "结果；成绩；答案",
      "phonetic": "/ri'zʌlt/"
    },
    {
      "english": "patient",
      "chinese": "病人；承受者；忍耐的",
      "phonetic": "/'peiʃәnt/"
    },
    {
      "english": "stood",
      "chinese": "站立（stand 的过去式）",
      "phonetic": "/stud/"
    },
    {
      "english": "joint",
      "chinese": "连接处；接合；关节",
      "phonetic": "/dʒɒint/"
    },
    {
      "english": "anything",
      "chinese": "任何事",
      "phonetic": "/'eniθiŋ/"
    },
    {
      "english": "cause",
      "chinese": "原因；目标；引起",
      "phonetic": "/kɒ:z/"
    },
    {
      "english": "going",
      "chinese": "去；正在进行",
      "phonetic": "/'gәuiŋ/"
    },
    {
      "english": "evidently",
      "chinese": "明显地；根据现有证据来看",
      "phonetic": "/'evidәntli/"
    },
    {
      "english": "it",
      "chinese": "它；这件事",
      "phonetic": "/it/"
    },
    {
      "english": "sit",
      "chinese": "坐",
      "phonetic": "/sɪt/"
    },
    {
      "english": "fit",
      "chinese": "合适；健康的",
      "phonetic": "/fɪt/"
    },
    {
      "english": "hit",
      "chinese": "打；击中",
      "phonetic": "/hɪt/"
    },
    {
      "english": "bit",
      "chinese": "一点；小块",
      "phonetic": "/bɪt/"
    }
  ],
  [
    {
      "english": "infection",
      "chinese": "传染；影响；传染病",
      "phonetic": "/in'fekʃәn/"
    },
    {
      "english": "matter",
      "chinese": "事件；物质；原因",
      "phonetic": "/'mætә/"
    },
    {
      "english": "given",
      "chinese": "赠予的；沉溺的；约定的",
      "phonetic": "/'givәn/"
    },
    {
      "english": "god",
      "chinese": "上帝；神",
      "phonetic": "/^ɔd/"
    },
    {
      "english": "feeling",
      "chinese": "摸；触觉；知觉",
      "phonetic": "/'fi:liŋ/"
    },
    {
      "english": "world",
      "chinese": "世界；地球；宇宙",
      "phonetic": "/wә:ld/"
    },
    {
      "english": "certain",
      "chinese": "确定的；某一个的；必然的",
      "phonetic": "/'sә:tәn/"
    },
    {
      "english": "chief",
      "chinese": "领袖；酋长；长官",
      "phonetic": "/tʃi:f/"
    },
    {
      "english": "front",
      "chinese": "前面；开头；前线",
      "phonetic": "/frʌnt/"
    },
    {
      "english": "does",
      "chinese": "做（do 的第三人称单数）",
      "phonetic": "/dʌz; dәz/"
    },
    {
      "english": "top",
      "chinese": "顶部",
      "phonetic": "/tɑːp/"
    },
    {
      "english": "stop",
      "chinese": "停止",
      "phonetic": "/stɑːp/"
    },
    {
      "english": "shop",
      "chinese": "商店；购物",
      "phonetic": "/ʃɑːp/"
    },
    {
      "english": "drop",
      "chinese": "掉下；滴",
      "phonetic": "/drɑːp/"
    },
    {
      "english": "pop",
      "chinese": "突然出现；砰的一声",
      "phonetic": "/pɑːp/"
    }
  ],
  [
    {
      "english": "condition",
      "chinese": "情况；条件；使健康",
      "phonetic": "/kәn'diʃәn/"
    },
    {
      "english": "son",
      "chinese": "儿子；女婿；子孙",
      "phonetic": "/sʌn/"
    },
    {
      "english": "herself",
      "chinese": "她自己；她亲自",
      "phonetic": "/hә:'self/"
    },
    {
      "english": "mind",
      "chinese": "思想；愿望；智力",
      "phonetic": "/maind/"
    },
    {
      "english": "possible",
      "chinese": "可能的；潜在的；合适的",
      "phonetic": "/'pɒsәbl/"
    },
    {
      "english": "alone",
      "chinese": "孤独的；单独的；独自的",
      "phonetic": "/ә'lәun/"
    },
    {
      "english": "body",
      "chinese": "身体；人；尸体",
      "phonetic": "/'bɒdi/"
    },
    {
      "english": "horse",
      "chinese": "马；骑兵；脚架",
      "phonetic": "/hɒ:s/"
    },
    {
      "english": "later",
      "chinese": "以后；随后",
      "phonetic": "/'leitә/"
    },
    {
      "english": "toward",
      "chinese": "向；对于；为了",
      "phonetic": "/tә'wɒ:d/"
    },
    {
      "english": "see",
      "chinese": "看见",
      "phonetic": "/siː/"
    },
    {
      "english": "free",
      "chinese": "自由的；享受政治权力的；允许的",
      "phonetic": "/fri:/"
    },
    {
      "english": "three",
      "chinese": "三；三个",
      "phonetic": "/θri:/"
    },
    {
      "english": "tree",
      "chinese": "树",
      "phonetic": "/triː/"
    },
    {
      "english": "agree",
      "chinese": "同意",
      "phonetic": "/əˈɡriː/"
    }
  ],
  [
    {
      "english": "almost",
      "chinese": "几乎；差不多",
      "phonetic": "/'ɒ:lmәust/"
    },
    {
      "english": "open",
      "chinese": "公开；户外；空旷",
      "phonetic": "/'әupәn/"
    },
    {
      "english": "set",
      "chinese": "日落；同伙；组合",
      "phonetic": "/set/"
    },
    {
      "english": "until",
      "chinese": "直到；在...以前；直到...时",
      "phonetic": "/әn'til/"
    },
    {
      "english": "woman",
      "chinese": "女人；妇女；女仆",
      "phonetic": "/'wumәn/"
    },
    {
      "english": "nerve",
      "chinese": "精神；勇气；叶脉",
      "phonetic": "/nә:v/"
    },
    {
      "english": "ran",
      "chinese": "跑（run 的过去式）",
      "phonetic": "/ræn/"
    },
    {
      "english": "act",
      "chinese": "行动；行为；幕",
      "phonetic": "/ækt/"
    },
    {
      "english": "expression",
      "chinese": "表达；表现；词语",
      "phonetic": "/ik'spreʃәn/"
    },
    {
      "english": "things",
      "chinese": "事情；东西",
      "phonetic": ""
    },
    {
      "english": "train",
      "chinese": "火车；训练",
      "phonetic": "/treɪn/"
    },
    {
      "english": "rain",
      "chinese": "雨；下雨",
      "phonetic": "/reɪn/"
    },
    {
      "english": "pain",
      "chinese": "痛苦；疼痛；辛苦",
      "phonetic": "/pein/"
    },
    {
      "english": "main",
      "chinese": "主要的",
      "phonetic": "/meɪn/"
    },
    {
      "english": "brain",
      "chinese": "大脑",
      "phonetic": "/breɪn/"
    }
  ],
  [
    {
      "english": "business",
      "chinese": "生意；事情；业务",
      "phonetic": "/'biznis/"
    },
    {
      "english": "officers",
      "chinese": "军官；官员",
      "phonetic": ""
    },
    {
      "english": "became",
      "chinese": "变成（become 的过去式）",
      "phonetic": "/bi'keim/"
    },
    {
      "english": "within",
      "chinese": "内部；里头；在内部",
      "phonetic": "/wi'ðin/"
    },
    {
      "english": "mother",
      "chinese": "母亲；修女院长；产生",
      "phonetic": "/'mʌðә/"
    },
    {
      "english": "commander",
      "chinese": "司令官；指挥官",
      "phonetic": "/kә'mɑ:ndә/"
    },
    {
      "english": "year",
      "chinese": "年；年度",
      "phonetic": "/jiә/"
    },
    {
      "english": "taking",
      "chinese": "拿；带（take 的现在分词）",
      "phonetic": "/'teikiŋ/"
    },
    {
      "english": "themselves",
      "chinese": "他们自己；她们自己；它们自己",
      "phonetic": "/ðәm'selvz/"
    },
    {
      "english": "wound",
      "chinese": "创伤；伤口；伤疤",
      "phonetic": "/wu:nd/"
    },
    {
      "english": "thing",
      "chinese": "事物；东西；物",
      "phonetic": "/θiŋ/"
    },
    {
      "english": "bring",
      "chinese": "带来；产生；促使",
      "phonetic": "/briŋ/"
    },
    {
      "english": "sing",
      "chinese": "唱歌",
      "phonetic": "/sɪŋ/"
    },
    {
      "english": "ring",
      "chinese": "戒指；铃声",
      "phonetic": "/rɪŋ/"
    },
    {
      "english": "spring",
      "chinese": "春天；弹簧",
      "phonetic": "/sprɪŋ/"
    }
  ],
  [
    {
      "english": "added",
      "chinese": "额外的；更多的",
      "phonetic": "/'ædid/"
    },
    {
      "english": "party",
      "chinese": "宴会；党；政党",
      "phonetic": "/'pɑ:ti/"
    },
    {
      "english": "word",
      "chinese": "话；消息；词",
      "phonetic": "/wә:d/"
    },
    {
      "english": "parts",
      "chinese": "部分；零件",
      "phonetic": "/pɑ:ts/"
    },
    {
      "english": "table",
      "chinese": "桌子；餐桌；工作台",
      "phonetic": "/'teibl/"
    },
    {
      "english": "lay",
      "chinese": "放置；产；铺设",
      "phonetic": "/lei/"
    },
    {
      "english": "find",
      "chinese": "找到；发现；认为",
      "phonetic": "/faind/"
    },
    {
      "english": "either",
      "chinese": "(两者之中)任一的；(两者之中)各一的；(两者之中)任一",
      "phonetic": "/'i:ðә/"
    },
    {
      "english": "near",
      "chinese": "近的；近亲的；近似的",
      "phonetic": "/niә/"
    },
    {
      "english": "tissues",
      "chinese": "组织；纸巾",
      "phonetic": ""
    },
    {
      "english": "think",
      "chinese": "想；认为",
      "phonetic": "/θɪŋk/"
    },
    {
      "english": "drink",
      "chinese": "喝；饮料",
      "phonetic": "/drɪŋk/"
    },
    {
      "english": "link",
      "chinese": "连接；链接",
      "phonetic": "/lɪŋk/"
    },
    {
      "english": "pink",
      "chinese": "粉红色的；粉红色",
      "phonetic": "/pɪŋk/"
    },
    {
      "english": "sink",
      "chinese": "下沉；水槽",
      "phonetic": "/sɪŋk/"
    }
  ],
  [
    {
      "english": "letter",
      "chinese": "信；字母；证书",
      "phonetic": "/'letә/"
    },
    {
      "english": "four",
      "chinese": "四；四个；四冲程循环",
      "phonetic": "/fɒ:/"
    },
    {
      "english": "project",
      "chinese": "计划；设计；事业",
      "phonetic": "/'prɒdʒekt/"
    },
    {
      "english": "public",
      "chinese": "公众；民众；公众的",
      "phonetic": "/'pʌblik/"
    },
    {
      "english": "red",
      "chinese": "红的；红色的；红肿的",
      "phonetic": "/red/"
    },
    {
      "english": "common",
      "chinese": "通常的；共同的；通俗的",
      "phonetic": "/'kɒmәn/"
    },
    {
      "english": "held",
      "chinese": "拿着；举行（hold 的过去式）",
      "phonetic": "/held/"
    },
    {
      "english": "talk",
      "chinese": "谈话；交谈；会谈",
      "phonetic": "/tɒ:k/"
    },
    {
      "english": "example",
      "chinese": "例子；样本；实例",
      "phonetic": "/ig'zæmpl/"
    },
    {
      "english": "west",
      "chinese": "西方；西部；西方的",
      "phonetic": "/west/"
    },
    {
      "english": "back",
      "chinese": "后面；返回；背部",
      "phonetic": "/bæk/"
    },
    {
      "english": "black",
      "chinese": "黑色；黑颜料；黑色的",
      "phonetic": "/blæk/"
    },
    {
      "english": "track",
      "chinese": "轨道；追踪",
      "phonetic": "/træk/"
    },
    {
      "english": "pack",
      "chinese": "打包；一包",
      "phonetic": "/pæk/"
    },
    {
      "english": "lack",
      "chinese": "缺少；缺乏",
      "phonetic": "/læk/"
    }
  ],
  [
    {
      "english": "entered",
      "chinese": "进入（enter 的过去式）",
      "phonetic": ""
    },
    {
      "english": "got",
      "chinese": "得到；变得（get 的过去式）",
      "phonetic": "/gɒt/"
    },
    {
      "english": "nor",
      "chinese": "也不；也没有",
      "phonetic": "/nɒ:/"
    },
    {
      "english": "received",
      "chinese": "收到；接收（receive 的过去式）",
      "phonetic": "/ri'si:vd/"
    },
    {
      "english": "second",
      "chinese": "秒；瞬间；第二名",
      "phonetic": "/'sekәnd/"
    },
    {
      "english": "five",
      "chinese": "五；五个",
      "phonetic": "/faiv/"
    },
    {
      "english": "land",
      "chinese": "陆地；地面；地界",
      "phonetic": "/lænd/"
    },
    {
      "english": "surface",
      "chinese": "面；表面；水面",
      "phonetic": "/'sә:fis/"
    },
    {
      "english": "light",
      "chinese": "光；光亮；灯",
      "phonetic": "/lait/"
    },
    {
      "english": "cannot",
      "chinese": "不能",
      "phonetic": "/'kænɒt/"
    },
    {
      "english": "pick",
      "chinese": "选择；摘",
      "phonetic": "/pɪk/"
    },
    {
      "english": "quick",
      "chinese": "快的",
      "phonetic": "/kwɪk/"
    },
    {
      "english": "sick",
      "chinese": "生病的",
      "phonetic": "/sɪk/"
    },
    {
      "english": "stick",
      "chinese": "棍；粘贴",
      "phonetic": "/stɪk/"
    },
    {
      "english": "kick",
      "chinese": "踢",
      "phonetic": "/kɪk/"
    }
  ],
  [
    {
      "english": "fire",
      "chinese": "火；炉火；电炉",
      "phonetic": "/'faiә/"
    },
    {
      "english": "itself",
      "chinese": "它本身；它自己",
      "phonetic": "/it'self/"
    },
    {
      "english": "union",
      "chinese": "联盟；联合；结合",
      "phonetic": "/'ju:njәn/"
    },
    {
      "english": "really",
      "chinese": "实际上；真实地；实在",
      "phonetic": "/'riәli/"
    },
    {
      "english": "twenty",
      "chinese": "二十；二十个",
      "phonetic": "/'twenti/"
    },
    {
      "english": "around",
      "chinese": "在周围；大约；到处",
      "phonetic": "/ә'raund/"
    },
    {
      "english": "early",
      "chinese": "早的；早熟的；很早",
      "phonetic": "/'ә:li/"
    },
    {
      "english": "saying",
      "chinese": "叙述；话；说",
      "phonetic": "/'seiiŋ/"
    },
    {
      "english": "sitting",
      "chinese": "坐；坐着",
      "phonetic": "/'sitiŋ/"
    },
    {
      "english": "best",
      "chinese": "最好的；最好地；最好的人",
      "phonetic": "/best/"
    },
    {
      "english": "nice",
      "chinese": "好的；友好的",
      "phonetic": "/naɪs/"
    },
    {
      "english": "price",
      "chinese": "价格",
      "phonetic": "/praɪs/"
    },
    {
      "english": "rice",
      "chinese": "米饭；大米",
      "phonetic": "/raɪs/"
    },
    {
      "english": "twice",
      "chinese": "两次",
      "phonetic": "/twaɪs/"
    },
    {
      "english": "ice",
      "chinese": "冰",
      "phonetic": "/aɪs/"
    }
  ],
  [
    {
      "english": "bones",
      "chinese": "骨头",
      "phonetic": "/bәunz/"
    },
    {
      "english": "horses",
      "chinese": "马",
      "phonetic": ""
    },
    {
      "english": "name",
      "chinese": "名字；名称；姓名",
      "phonetic": "/neim/"
    },
    {
      "english": "political",
      "chinese": "政治的；政治上的；政党的",
      "phonetic": "/pә'litikl/"
    },
    {
      "english": "road",
      "chinese": "路；道路；公路",
      "phonetic": "/rәud/"
    },
    {
      "english": "since",
      "chinese": "自...以后；自...以来；自那时以后",
      "phonetic": "/sins/"
    },
    {
      "english": "together",
      "chinese": "一起；共同；彼此",
      "phonetic": "/tә'geðә/"
    },
    {
      "english": "thousand",
      "chinese": "千；成千的；许多的",
      "phonetic": "/'θauznd/"
    },
    {
      "english": "cold",
      "chinese": "感冒；寒冷；寒冷的",
      "phonetic": "/kәuld/"
    },
    {
      "english": "heart",
      "chinese": "心；心脏；中心",
      "phonetic": "/hɑ:t/"
    },
    {
      "english": "side",
      "chinese": "旁边；侧；方面",
      "phonetic": "/said/"
    },
    {
      "english": "ride",
      "chinese": "骑；乘坐",
      "phonetic": "/raɪd/"
    },
    {
      "english": "hide",
      "chinese": "躲藏；隐藏",
      "phonetic": "/haɪd/"
    },
    {
      "english": "wide",
      "chinese": "宽的",
      "phonetic": "/waɪd/"
    },
    {
      "english": "inside",
      "chinese": "在里面；内部",
      "phonetic": "/ˌɪnˈsaɪd/"
    }
  ],
  [
    {
      "english": "impossible",
      "chinese": "不可能的；难以置信的；令人无法忍受的",
      "phonetic": "/im'pɒsәbl/"
    },
    {
      "english": "arms",
      "chinese": "手臂；武器",
      "phonetic": "/ɑ:mz/"
    },
    {
      "english": "due",
      "chinese": "应得的东西；应付款；到期的",
      "phonetic": "/dju:/"
    },
    {
      "english": "vessels",
      "chinese": "船只；血管；容器",
      "phonetic": ""
    },
    {
      "english": "line",
      "chinese": "列；线；绳",
      "phonetic": "/lain/"
    },
    {
      "english": "moved",
      "chinese": "移动；搬家（move 的过去式）",
      "phonetic": ""
    },
    {
      "english": "becomes",
      "chinese": "变成（become 的第三人称单数）",
      "phonetic": "/biˈkʌmz/"
    },
    {
      "english": "rose",
      "chinese": "玫瑰；上升（rise 的过去式）",
      "phonetic": "/rәuz/"
    },
    {
      "english": "wish",
      "chinese": "希望；愿望；祝愿",
      "phonetic": "/wiʃ/"
    },
    {
      "english": "conditions",
      "chinese": "情况；条件",
      "phonetic": ""
    },
    {
      "english": "more",
      "chinese": "更多；更",
      "phonetic": "/mɒ:/"
    },
    {
      "english": "store",
      "chinese": "商店；储存",
      "phonetic": "/stɔːr/"
    },
    {
      "english": "before",
      "chinese": "在……之前；以前",
      "phonetic": "/bi'fɒ:/"
    },
    {
      "english": "floor",
      "chinese": "地板；楼层",
      "phonetic": "/flɔːr/"
    },
    {
      "english": "four",
      "chinese": "四；四个；四冲程循环",
      "phonetic": "/fɒ:/"
    }
  ],
  [
    {
      "english": "third",
      "chinese": "第三；三分之一；第三的",
      "phonetic": "/θә:d/"
    },
    {
      "english": "king",
      "chinese": "国王；君主；使...成为君主",
      "phonetic": "/kiŋ/"
    },
    {
      "english": "de",
      "chinese": "德；人名或外来词中的前缀",
      "phonetic": "/di:/"
    },
    {
      "english": "everyone",
      "chinese": "每个人；人人",
      "phonetic": "/'evriwʌn/"
    },
    {
      "english": "short",
      "chinese": "短的；近的；矮的",
      "phonetic": "/ʃɒ:t/"
    },
    {
      "english": "times",
      "chinese": "次数；时代",
      "phonetic": "/taimz/"
    },
    {
      "english": "black",
      "chinese": "黑色；黑颜料；黑色的",
      "phonetic": "/blæk/"
    },
    {
      "english": "formed",
      "chinese": "形成（form 的过去式）",
      "phonetic": ""
    },
    {
      "english": "pressure",
      "chinese": "压；榨；按",
      "phonetic": "/'preʃә/"
    },
    {
      "english": "hair",
      "chinese": "头发；毛发；些微",
      "phonetic": "/hєә/"
    },
    {
      "english": "know",
      "chinese": "知道；认识",
      "phonetic": "/noʊ/"
    },
    {
      "english": "show",
      "chinese": "显示；表现；展览",
      "phonetic": "/ʃәu/"
    },
    {
      "english": "grow",
      "chinese": "生长；成长",
      "phonetic": "/ɡroʊ/"
    },
    {
      "english": "slow",
      "chinese": "慢的；慢慢地",
      "phonetic": "/sloʊ/"
    },
    {
      "english": "low",
      "chinese": "低的；低声",
      "phonetic": "/loʊ/"
    }
  ],
  [
    {
      "english": "remained",
      "chinese": "保持；留下（remain 的过去式）",
      "phonetic": "/riˈmeind/"
    },
    {
      "english": "ready",
      "chinese": "预备好的状态；现款；准备好的",
      "phonetic": "/'redi/"
    },
    {
      "english": "forward",
      "chinese": "向前的；早的；迅速的",
      "phonetic": "/'fɒ:wәd/"
    },
    {
      "english": "hundred",
      "chinese": "百；百个东西；百个",
      "phonetic": "/'hʌndrәd/"
    },
    {
      "english": "results",
      "chinese": "结果",
      "phonetic": ""
    },
    {
      "english": "air",
      "chinese": "空气；旋律；态度",
      "phonetic": "/єә/"
    },
    {
      "english": "military",
      "chinese": "军队；军事的；军人的",
      "phonetic": "/'militәri/"
    },
    {
      "english": "myself",
      "chinese": "我自己；我亲自；我独自",
      "phonetic": "/mai'self/"
    },
    {
      "english": "north",
      "chinese": "北方；北部",
      "phonetic": "/nɒ:θ/"
    },
    {
      "english": "peace",
      "chinese": "和平；和约；治安",
      "phonetic": "/pi:s/"
    },
    {
      "english": "part",
      "chinese": "部分；角色；离开",
      "phonetic": "/pɑ:t/"
    },
    {
      "english": "start",
      "chinese": "开始",
      "phonetic": "/stɑːrt/"
    },
    {
      "english": "heart",
      "chinese": "心；心脏；中心",
      "phonetic": "/hɑ:t/"
    },
    {
      "english": "smart",
      "chinese": "聪明的；时髦的",
      "phonetic": "/smɑːrt/"
    },
    {
      "english": "art",
      "chinese": "艺术",
      "phonetic": "/ɑːrt/"
    }
  ],
  [
    {
      "english": "growth",
      "chinese": "生长；栽培；增长",
      "phonetic": "/grәuθ/"
    },
    {
      "english": "tried",
      "chinese": "尝试（try 的过去式）",
      "phonetic": "/traid/"
    },
    {
      "english": "lost",
      "chinese": "失去的；遗失的；迷惑的",
      "phonetic": "/lɒst/"
    },
    {
      "english": "news",
      "chinese": "新闻；消息；报导",
      "phonetic": "/nju:z/"
    },
    {
      "english": "anyone",
      "chinese": "任何人",
      "phonetic": "/'eniwʌn/"
    },
    {
      "english": "orders",
      "chinese": "命令；订单",
      "phonetic": ""
    },
    {
      "english": "past",
      "chinese": "过去；昔时；往事",
      "phonetic": "/pɑ:st/"
    },
    {
      "english": "point",
      "chinese": "点；要点；指出；得分",
      "phonetic": "/pɒint/"
    },
    {
      "english": "service",
      "chinese": "服务；贡献；雇佣",
      "phonetic": "/'sә:vis/"
    },
    {
      "english": "across",
      "chinese": "越过；穿过；与...相交叉",
      "phonetic": "/ә'krɒs/"
    },
    {
      "english": "phone",
      "chinese": "电话；手机",
      "phonetic": "/fәun/"
    },
    {
      "english": "alone",
      "chinese": "孤独的；单独的；独自的",
      "phonetic": "/ә'lәun/"
    },
    {
      "english": "tone",
      "chinese": "音调；音质；语调",
      "phonetic": "/tәun/"
    },
    {
      "english": "stone",
      "chinese": "石头",
      "phonetic": "/stoʊn/"
    },
    {
      "english": "zone",
      "chinese": "区域",
      "phonetic": "/zoʊn/"
    }
  ],
  [
    {
      "english": "strange",
      "chinese": "奇怪的；陌生的；生疏的",
      "phonetic": "/streindʒ/"
    },
    {
      "english": "close",
      "chinese": "结束；完结；靠近的",
      "phonetic": "/klәuz/"
    },
    {
      "english": "process",
      "chinese": "程序；进行；过程",
      "phonetic": "/'prɒses/"
    },
    {
      "english": "rather",
      "chinese": "宁可；稍微；相当",
      "phonetic": "/'ræðә/"
    },
    {
      "english": "sound",
      "chinese": "声音；语音；吵闹",
      "phonetic": "/saund/"
    },
    {
      "english": "ten",
      "chinese": "十；十个",
      "phonetic": "/ten/"
    },
    {
      "english": "beside",
      "chinese": "在旁边",
      "phonetic": "/bi'said/"
    },
    {
      "english": "frequently",
      "chinese": "频繁；经常地",
      "phonetic": "/'fri:kwәntli/"
    },
    {
      "english": "opinion",
      "chinese": "意见；评价；主张",
      "phonetic": "/ә'pinjәn/"
    },
    {
      "english": "self",
      "chinese": "自己；自我；本性",
      "phonetic": "/self/"
    },
    {
      "english": "night",
      "chinese": "夜晚；晚上",
      "phonetic": "/nait/"
    },
    {
      "english": "light",
      "chinese": "光；光亮；灯",
      "phonetic": "/lait/"
    },
    {
      "english": "right",
      "chinese": "正确的；右边；权利",
      "phonetic": "/rait/"
    },
    {
      "english": "might",
      "chinese": "可能；力量",
      "phonetic": "/mait/"
    },
    {
      "english": "fight",
      "chinese": "打架；战斗",
      "phonetic": "/faɪt/"
    }
  ],
  [
    {
      "english": "opened",
      "chinese": "打开（open 的过去式）",
      "phonetic": ""
    },
    {
      "english": "presence",
      "chinese": "出席；面前；存在",
      "phonetic": "/'prezns/"
    },
    {
      "english": "trade",
      "chinese": "贸易；商业；交易",
      "phonetic": "/treid/"
    },
    {
      "english": "till",
      "chinese": "直到；在...以前；迄",
      "phonetic": "/til/"
    },
    {
      "english": "deep",
      "chinese": "深的；深入地；深渊",
      "phonetic": "/di:p/"
    },
    {
      "english": "formation",
      "chinese": "形成；构造；编队",
      "phonetic": "/fɒ:'meiʃәn/"
    },
    {
      "english": "soldier",
      "chinese": "军人；士兵；兵蚁",
      "phonetic": "/'sәuldʒә/"
    },
    {
      "english": "affairs",
      "chinese": "事务；事情",
      "phonetic": ""
    },
    {
      "english": "operation",
      "chinese": "操作；动作；手术",
      "phonetic": "/.ɒpә'reiʃәn/"
    },
    {
      "english": "show",
      "chinese": "显示；表现；展览",
      "phonetic": "/ʃәu/"
    },
    {
      "english": "day",
      "chinese": "一天；白天",
      "phonetic": "/dei/"
    },
    {
      "english": "way",
      "chinese": "方式；道路；方向",
      "phonetic": "/wei/"
    },
    {
      "english": "say",
      "chinese": "说",
      "phonetic": "/seɪ/"
    },
    {
      "english": "may",
      "chinese": "可能；可以；五月",
      "phonetic": "/mei/"
    },
    {
      "english": "pay",
      "chinese": "付款；工资",
      "phonetic": "/peɪ/"
    }
  ],
  [
    {
      "english": "repeated",
      "chinese": "重复的；再三的",
      "phonetic": "/ri'pi:tid/"
    },
    {
      "english": "stopped",
      "chinese": "停止（stop 的过去式）",
      "phonetic": "/stɔpt/"
    },
    {
      "english": "rest",
      "chinese": "休息；睡眠；安息",
      "phonetic": "/rest/"
    },
    {
      "english": "wished",
      "chinese": "希望（wish 的过去式）",
      "phonetic": "/wiʃt/"
    },
    {
      "english": "following",
      "chinese": "下列各项；部下；追随者",
      "phonetic": "/'fɒlәuiŋ/"
    },
    {
      "english": "happened",
      "chinese": "发生（happen 的过去式）",
      "phonetic": ""
    },
    {
      "english": "perhaps",
      "chinese": "也许；大概",
      "phonetic": "/pә'hæps/"
    },
    {
      "english": "turning",
      "chinese": "旋转；转弯处；车削工作",
      "phonetic": "/'tә:niŋ/"
    },
    {
      "english": "colonies",
      "chinese": "殖民地；群体",
      "phonetic": "/ˈkɔləniz/"
    },
    {
      "english": "seeing",
      "chinese": "看见；会见",
      "phonetic": "/'si:iŋ/"
    },
    {
      "english": "all",
      "chinese": "全部；所有的",
      "phonetic": "/ɒ:l/"
    },
    {
      "english": "call",
      "chinese": "呼叫；访问；打电话",
      "phonetic": "/kɒ:l/"
    },
    {
      "english": "fall",
      "chinese": "落下；秋天",
      "phonetic": "/fɔːl/"
    },
    {
      "english": "wall",
      "chinese": "墙；墙壁；垣",
      "phonetic": "/wɒ:l/"
    },
    {
      "english": "small",
      "chinese": "小的；少的；小型的",
      "phonetic": "/smɒ:l/"
    }
  ],
  [
    {
      "english": "events",
      "chinese": "事件；活动",
      "phonetic": ""
    },
    {
      "english": "neck",
      "chinese": "脖子；衣领；颈",
      "phonetic": "/nek/"
    },
    {
      "english": "occur",
      "chinese": "发生；被想到；存在",
      "phonetic": "/ә'kә:/"
    },
    {
      "english": "period",
      "chinese": "时期；节段；节",
      "phonetic": "/'piәriәd/"
    },
    {
      "english": "talking",
      "chinese": "说话；交谈",
      "phonetic": "/'tɒ:kiŋ/"
    },
    {
      "english": "kind",
      "chinese": "种类；友善的",
      "phonetic": "/kaind/"
    },
    {
      "english": "revolution",
      "chinese": "革命；大变革；旋转",
      "phonetic": "/.revә'lu:ʃәn/"
    },
    {
      "english": "able",
      "chinese": "能干的；能够的",
      "phonetic": "/'eibl/"
    },
    {
      "english": "else",
      "chinese": "别的；其他的；另外",
      "phonetic": "/els/"
    },
    {
      "english": "won",
      "chinese": "赢；获胜（win 的过去式）",
      "phonetic": "/wʌn/"
    },
    {
      "english": "make",
      "chinese": "做；制作",
      "phonetic": "/meɪk/"
    },
    {
      "english": "take",
      "chinese": "拿；带",
      "phonetic": "/teɪk/"
    },
    {
      "english": "wake",
      "chinese": "醒来；叫醒",
      "phonetic": "/weɪk/"
    },
    {
      "english": "cake",
      "chinese": "蛋糕",
      "phonetic": "/keɪk/"
    },
    {
      "english": "shake",
      "chinese": "摇动",
      "phonetic": "/ʃeɪk/"
    }
  ],
  [
    {
      "english": "associated",
      "chinese": "联合的",
      "phonetic": ""
    },
    {
      "english": "german",
      "chinese": "德国的；德语",
      "phonetic": "/'dʒә:mәn/"
    },
    {
      "english": "husband",
      "chinese": "丈夫；管理人；节俭的人",
      "phonetic": "/'hʌzbәnd/"
    },
    {
      "english": "led",
      "chinese": "带领；导致（lead 的过去式）",
      "phonetic": "/led/"
    },
    {
      "english": "lower",
      "chinese": "低的；下级的；下层的",
      "phonetic": "/'lәuә/"
    },
    {
      "english": "southern",
      "chinese": "南方人；男风；向南方的",
      "phonetic": "/'sʌðәn/"
    },
    {
      "english": "abscess",
      "chinese": "脓肿",
      "phonetic": "/'æbsis/"
    },
    {
      "english": "terrible",
      "chinese": "可怕的；令人恐惧的；极坏的",
      "phonetic": "/'terәbl/"
    },
    {
      "english": "least",
      "chinese": "最少；最小；最小限度",
      "phonetic": "/li:st/"
    },
    {
      "english": "lymph",
      "chinese": "淋巴液",
      "phonetic": "/limf/"
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
      "english": "attention",
      "chinese": "注意；注意力",
      "phonetic": "/ә'tenʃәn/"
    },
    {
      "english": "features",
      "chinese": "特征；特点",
      "phonetic": ""
    },
    {
      "english": "noticed",
      "chinese": "注意到（notice 的过去式）",
      "phonetic": "/'nəʊtɪst/"
    },
    {
      "english": "reason",
      "chinese": "理由；原因；理智",
      "phonetic": "/'ri:zn/"
    },
    {
      "english": "campaign",
      "chinese": "战役；运动；竞选运动",
      "phonetic": "/kæm'pein/"
    },
    {
      "english": "return",
      "chinese": "回来；返回；来回票",
      "phonetic": "/ri'tә:n/"
    },
    {
      "english": "wall",
      "chinese": "墙；墙壁；垣",
      "phonetic": "/wɒ:l/"
    },
    {
      "english": "merely",
      "chinese": "只",
      "phonetic": "/'miәli/"
    },
    {
      "english": "tumours",
      "chinese": "肿瘤",
      "phonetic": "/ˈtju:məz/"
    },
    {
      "english": "silent",
      "chinese": "沉默的；安静的；无声的",
      "phonetic": "/'sailәnt/"
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
      "english": "laid",
      "chinese": "放置；铺设（lay 的过去式）",
      "phonetic": "/leid/"
    },
    {
      "english": "therefore",
      "chinese": "因此；所以",
      "phonetic": "/'ðєәfɒ:/"
    },
    {
      "english": "window",
      "chinese": "窗户；窗子；窗口",
      "phonetic": "/'windәu/"
    },
    {
      "english": "wounds",
      "chinese": "伤口",
      "phonetic": ""
    },
    {
      "english": "federal",
      "chinese": "联邦的；联合的；同盟的",
      "phonetic": "/'fedәrәl/"
    },
    {
      "english": "person",
      "chinese": "人；人身；人称",
      "phonetic": "/'pә:sn/"
    },
    {
      "english": "soft",
      "chinese": "软的；温和的；柔和的",
      "phonetic": "/sɒft/"
    },
    {
      "english": "speaking",
      "chinese": "说话；演讲",
      "phonetic": "/'spi:kiŋ/"
    },
    {
      "english": "subject",
      "chinese": "科目；主题；臣民",
      "phonetic": "/'sʌbdʒekt/"
    },
    {
      "english": "dinner",
      "chinese": "晚餐；正餐；宴会",
      "phonetic": "/'dinә/"
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
      "english": "honor",
      "chinese": "荣誉；头衔；信用",
      "phonetic": "/'ɒnә/"
    },
    {
      "english": "strength",
      "chinese": "力量；实力；强度",
      "phonetic": "/streŋθ/"
    },
    {
      "english": "waiting",
      "chinese": "等候；等候的；服侍的",
      "phonetic": "/'weitiŋ/"
    },
    {
      "english": "colonial",
      "chinese": "殖民的；殖民地的",
      "phonetic": "/kә'lәunjәl/"
    },
    {
      "english": "immediately",
      "chinese": "直接地；立刻；立即",
      "phonetic": "/i'mi:diәtli/"
    },
    {
      "english": "placed",
      "chinese": "放置（place 的过去式）",
      "phonetic": "/'pleist/"
    },
    {
      "english": "quickly",
      "chinese": "很快地",
      "phonetic": "/'kwikli/"
    },
    {
      "english": "conversation",
      "chinese": "会话；说话；交谈",
      "phonetic": "/.kɒnvә'seiʃәn/"
    },
    {
      "english": "dark",
      "chinese": "黑暗；夜；黄昏",
      "phonetic": "/dɑ:k/"
    },
    {
      "english": "questions",
      "chinese": "问题",
      "phonetic": ""
    },
    {
      "english": "hear",
      "chinese": "听到；倾听；听说",
      "phonetic": "/hiә/"
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
      "english": "measures",
      "chinese": "措施；测量",
      "phonetic": ""
    },
    {
      "english": "view",
      "chinese": "视野；风景；见解",
      "phonetic": "/vju:/"
    },
    {
      "english": "doing",
      "chinese": "做；进行",
      "phonetic": "/'du:iŋ/"
    },
    {
      "english": "removed",
      "chinese": "移除；脱下（remove 的过去式）",
      "phonetic": "/ri'mu:vd/"
    },
    {
      "english": "usual",
      "chinese": "平常的；通常的",
      "phonetic": "/'ju:ʒuәl/"
    },
    {
      "english": "account",
      "chinese": "报告；解释；估价",
      "phonetic": "/ә'kaunt/"
    },
    {
      "english": "brother",
      "chinese": "兄弟",
      "phonetic": "/'brʌðә/"
    },
    {
      "english": "civil",
      "chinese": "市民的；公民的；有礼貌的",
      "phonetic": "/'sivәl/"
    },
    {
      "english": "fell",
      "chinese": "落下；跌倒（fall 的过去式）",
      "phonetic": "/fel/"
    },
    {
      "english": "foreign",
      "chinese": "外国的；外交的；外省的",
      "phonetic": "/'fɒ:rin/"
    },
    {
      "english": "old",
      "chinese": "老的；旧的；从前的",
      "phonetic": "/әuld/"
    },
    {
      "english": "cold",
      "chinese": "感冒；寒冷；寒冷的",
      "phonetic": "/kәuld/"
    },
    {
      "english": "hold",
      "chinese": "拿住；保持",
      "phonetic": "/hoʊld/"
    },
    {
      "english": "told",
      "chinese": "告诉（tell 的过去式）",
      "phonetic": "/tәuld/"
    },
    {
      "english": "gold",
      "chinese": "金；金色",
      "phonetic": "/ɡoʊld/"
    }
  ],
  [
    {
      "english": "forces",
      "chinese": "力量；部队",
      "phonetic": ""
    },
    {
      "english": "glanced",
      "chinese": "瞥了一眼（glance 的过去式）",
      "phonetic": "/ɡlɑ:nst/"
    },
    {
      "english": "nearly",
      "chinese": "几乎；密切地",
      "phonetic": "/'niәli/"
    },
    {
      "english": "republican",
      "chinese": "共和主义者；共和党员；共和政体的",
      "phonetic": "/ri'pʌblikәn/"
    },
    {
      "english": "six",
      "chinese": "六；六个",
      "phonetic": "/siks/"
    },
    {
      "english": "enough",
      "chinese": "充足；够；很多",
      "phonetic": "/i'nʌf/"
    },
    {
      "english": "fine",
      "chinese": "罚款；罚金；晴天",
      "phonetic": "/fain/"
    },
    {
      "english": "character",
      "chinese": "个性；字符；人物",
      "phonetic": "/'kærәktә/"
    },
    {
      "english": "closed",
      "chinese": "关闭的；限于少数人的",
      "phonetic": "/klәuzd/"
    },
    {
      "english": "particularly",
      "chinese": "特别；格外；尤其",
      "phonetic": "/pә'tikjjlәli/"
    },
    {
      "english": "sound",
      "chinese": "声音；语音；吵闹",
      "phonetic": "/saund/"
    },
    {
      "english": "round",
      "chinese": "圆；圆形物；巡回",
      "phonetic": "/raund/"
    },
    {
      "english": "found",
      "chinese": "建立；创立；铸造",
      "phonetic": "/faund/"
    },
    {
      "english": "around",
      "chinese": "在周围；大约；到处",
      "phonetic": "/ә'raund/"
    },
    {
      "english": "ground",
      "chinese": "土地；战场；场地",
      "phonetic": "/graund/"
    }
  ],
  [
    {
      "english": "severe",
      "chinese": "严格的；尖锐的；严肃的",
      "phonetic": "/si'viә/"
    },
    {
      "english": "single",
      "chinese": "单身的；单程的；单一的",
      "phonetic": "/'siŋgl/"
    },
    {
      "english": "coat",
      "chinese": "外套；外面覆盖；给...穿外套",
      "phonetic": "/kәut/"
    },
    {
      "english": "freedom",
      "chinese": "自由；坦率；特权",
      "phonetic": "/'fri:dәm/"
    },
    {
      "english": "please",
      "chinese": "请；使高兴；合...的心意",
      "phonetic": "/pli:z/"
    },
    {
      "english": "sides",
      "chinese": "侧面；方面",
      "phonetic": "/saidz/"
    },
    {
      "english": "tears",
      "chinese": "眼泪；撕裂",
      "phonetic": "/tiәz/"
    },
    {
      "english": "joints",
      "chinese": "关节；接合处",
      "phonetic": ""
    },
    {
      "english": "knee",
      "chinese": "膝；膝盖；膝行",
      "phonetic": "/ni:/"
    },
    {
      "english": "symptoms",
      "chinese": "症状",
      "phonetic": ""
    },
    {
      "english": "down",
      "chinese": "向下；情绪低落的",
      "phonetic": "/daun/"
    },
    {
      "english": "town",
      "chinese": "城镇；市；镇",
      "phonetic": "/taun/"
    },
    {
      "english": "brown",
      "chinese": "棕色的；棕色",
      "phonetic": "/braʊn/"
    },
    {
      "english": "crown",
      "chinese": "王冠",
      "phonetic": "/kraʊn/"
    },
    {
      "english": "clown",
      "chinese": "小丑",
      "phonetic": "/klaʊn/"
    }
  ],
  [
    {
      "english": "seat",
      "chinese": "座；座位；位子",
      "phonetic": "/si:t/"
    },
    {
      "english": "acute",
      "chinese": "尖锐的；敏锐的；激烈的",
      "phonetic": "/ә'kju:t/"
    },
    {
      "english": "boy",
      "chinese": "男孩",
      "phonetic": "/bɒi/"
    },
    {
      "english": "covered",
      "chinese": "覆盖；包括（cover 的过去式）",
      "phonetic": "/'kʌvәd/"
    },
    {
      "english": "nation",
      "chinese": "国家；民族",
      "phonetic": "/'neiʃәn/"
    },
    {
      "english": "remarked",
      "chinese": "评论；说（remark 的过去式）",
      "phonetic": "/riˈmɑ:kt/"
    },
    {
      "english": "society",
      "chinese": "社会；社交界；交往",
      "phonetic": "/sә'saiәti/"
    },
    {
      "english": "although",
      "chinese": "虽然；尽管",
      "phonetic": "/ɒ:l'ðou/"
    },
    {
      "english": "artery",
      "chinese": "动脉；干道；要道",
      "phonetic": "/'ɑ:tәri/"
    },
    {
      "english": "changes",
      "chinese": "变化；改变",
      "phonetic": ""
    },
    {
      "english": "air",
      "chinese": "空气；旋律；态度",
      "phonetic": "/єә/"
    },
    {
      "english": "fair",
      "chinese": "公平的；晴朗的",
      "phonetic": "/fer/"
    },
    {
      "english": "hair",
      "chinese": "头发；毛发；些微",
      "phonetic": "/hєә/"
    },
    {
      "english": "pair",
      "chinese": "一对",
      "phonetic": "/per/"
    },
    {
      "english": "chair",
      "chinese": "椅子",
      "phonetic": "/tʃer/"
    }
  ],
  [
    {
      "english": "swelling",
      "chinese": "肿胀",
      "phonetic": "/'sweliŋ/"
    },
    {
      "english": "fear",
      "chinese": "恐怖；害怕；担心",
      "phonetic": "/fiә/"
    },
    {
      "english": "girl",
      "chinese": "女孩；少女；女佣",
      "phonetic": "/gә:l/"
    },
    {
      "english": "grew",
      "chinese": "生长；变得（grow 的过去式）",
      "phonetic": "/gru:/"
    },
    {
      "english": "hours",
      "chinese": "小时",
      "phonetic": ""
    },
    {
      "english": "reply",
      "chinese": "答复；回答；答辩",
      "phonetic": "/ri'plai/"
    },
    {
      "english": "thin",
      "chinese": "薄的；细的；瘦的",
      "phonetic": "/θin/"
    },
    {
      "english": "tone",
      "chinese": "音调；音质；语调",
      "phonetic": "/tәun/"
    },
    {
      "english": "bring",
      "chinese": "带来；产生；促使",
      "phonetic": "/briŋ/"
    },
    {
      "english": "late",
      "chinese": "迟的；晚的；已故的",
      "phonetic": "/leit/"
    },
    {
      "english": "same",
      "chinese": "相同的；同样",
      "phonetic": "/seim/"
    },
    {
      "english": "name",
      "chinese": "名字；名称；姓名",
      "phonetic": "/neim/"
    },
    {
      "english": "game",
      "chinese": "游戏；比赛",
      "phonetic": "/ɡeɪm/"
    },
    {
      "english": "came",
      "chinese": "来（come 的过去式）",
      "phonetic": "/keim/"
    },
    {
      "english": "blame",
      "chinese": "责怪；责任",
      "phonetic": "/bleɪm/"
    }
  ],
  [
    {
      "english": "mouth",
      "chinese": "嘴；口；口腔",
      "phonetic": "/mauθ/"
    },
    {
      "english": "area",
      "chinese": "区域；面积；范围",
      "phonetic": "/'єәriә/"
    },
    {
      "english": "faces",
      "chinese": "脸；表面",
      "phonetic": ""
    },
    {
      "english": "yourself",
      "chinese": "你自己",
      "phonetic": "/juә'self/"
    },
    {
      "english": "remember",
      "chinese": "记得；回忆起；记住",
      "phonetic": "/ri'membә/"
    },
    {
      "english": "smiling",
      "chinese": "微笑；面带微笑的",
      "phonetic": "/'smailiŋ/"
    },
    {
      "english": "clinical",
      "chinese": "临床的；门诊部的",
      "phonetic": "/'klinikәl/"
    },
    {
      "english": "fresh",
      "chinese": "新鲜的；新奇的；另外的",
      "phonetic": "/freʃ/"
    },
    {
      "english": "someone",
      "chinese": "有人；某人",
      "phonetic": "/'sʌmwʌn/"
    },
    {
      "english": "village",
      "chinese": "村庄；乡村的；村庄的",
      "phonetic": "/'vilidʒ/"
    },
    {
      "english": "end",
      "chinese": "结束；终点；目标",
      "phonetic": "/end/"
    },
    {
      "english": "send",
      "chinese": "发送；寄",
      "phonetic": "/send/"
    },
    {
      "english": "spend",
      "chinese": "花费；度过",
      "phonetic": "/spend/"
    },
    {
      "english": "friend",
      "chinese": "朋友",
      "phonetic": "/frend/"
    },
    {
      "english": "weekend",
      "chinese": "周末",
      "phonetic": "/ˈwiːkend/"
    }
  ],
  [
    {
      "english": "ulcer",
      "chinese": "溃疡",
      "phonetic": "/'ʌlsә/"
    },
    {
      "english": "attack",
      "chinese": "攻击；抨击；动手干",
      "phonetic": "/ә'tæk/"
    },
    {
      "english": "hour",
      "chinese": "小时；钟头；时间",
      "phonetic": "/auә/"
    },
    {
      "english": "members",
      "chinese": "成员；会员",
      "phonetic": ""
    },
    {
      "english": "bridge",
      "chinese": "桥；舰桥；桥梁",
      "phonetic": "/bridʒ/"
    },
    {
      "english": "employed",
      "chinese": "雇用；使用（employ 的过去式）",
      "phonetic": ""
    },
    {
      "english": "finally",
      "chinese": "最后；终于",
      "phonetic": "/'fainәli/"
    },
    {
      "english": "friends",
      "chinese": "朋友们",
      "phonetic": ""
    },
    {
      "english": "listened",
      "chinese": "听（listen 的过去式）",
      "phonetic": "/ˈlisnd/"
    },
    {
      "english": "various",
      "chinese": "不同的；各种的；多方面的",
      "phonetic": "/'vєәriәs/"
    },
    {
      "english": "and",
      "chinese": "和；而且",
      "phonetic": "/ænd/"
    },
    {
      "english": "hand",
      "chinese": "手；爪；指针",
      "phonetic": "/hænd/"
    },
    {
      "english": "land",
      "chinese": "陆地；地面；地界",
      "phonetic": "/lænd/"
    },
    {
      "english": "stand",
      "chinese": "站立",
      "phonetic": "/stænd/"
    },
    {
      "english": "understand",
      "chinese": "理解；了解；领会",
      "phonetic": "/.ʌndә'stænd/"
    }
  ],
  [
    {
      "english": "takes",
      "chinese": "拿；花费（take 的第三人称单数）",
      "phonetic": ""
    },
    {
      "english": "doubt",
      "chinese": "怀疑；疑惑；不信",
      "phonetic": "/daut/"
    },
    {
      "english": "muscle",
      "chinese": "肌肉；臂力",
      "phonetic": "/'mʌsl/"
    },
    {
      "english": "primary",
      "chinese": "最主要者；原色；主要的",
      "phonetic": "/'praimәri/"
    },
    {
      "english": "command",
      "chinese": "命令；指挥；控制",
      "phonetic": "/kә'mɑ:nd/"
    },
    {
      "english": "convention",
      "chinese": "大会；协定；惯例",
      "phonetic": "/kәn'venʃәn/"
    },
    {
      "english": "described",
      "chinese": "描述（describe 的过去式）",
      "phonetic": ""
    },
    {
      "english": "independence",
      "chinese": "独立；自立；自主",
      "phonetic": "/.indi'pendәns/"
    },
    {
      "english": "appear",
      "chinese": "出现；显得；来到",
      "phonetic": "/ә'piә/"
    },
    {
      "english": "change",
      "chinese": "变化；找回的零钱；找头",
      "phonetic": "/tʃeindʒ/"
    },
    {
      "english": "in",
      "chinese": "在……里面；在……期间",
      "phonetic": "/in/"
    },
    {
      "english": "win",
      "chinese": "赢",
      "phonetic": "/wɪn/"
    },
    {
      "english": "begin",
      "chinese": "开始",
      "phonetic": "/bɪˈɡɪn/"
    },
    {
      "english": "skin",
      "chinese": "皮肤；皮；剥皮",
      "phonetic": "/skin/"
    },
    {
      "english": "thin",
      "chinese": "薄的；细的；瘦的",
      "phonetic": "/θin/"
    }
  ]
];
  if (!window.ENGLISH_365_DATA) return;
  groups.forEach((words, index) => {
    window.ENGLISH_365_DATA.days[index + 3].words = words;
  });
})();
