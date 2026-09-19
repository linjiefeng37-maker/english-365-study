/* Day 16–50 from the user's Desktop workbook. Two review anchors per day are notes, not counted words. */
(function () {
  const importedDays = {
  "16": {
    "words": [
      {
        "english": "line",
        "chinese": "线",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ine",
        "relation": "共同拼写 -ine，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "fine",
        "chinese": "好的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ine",
        "relation": "共同拼写 -ine，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "mine",
        "chinese": "我的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ine",
        "relation": "共同拼写 -ine，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "nine",
        "chinese": "九",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ine",
        "relation": "共同拼写 -ine，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wine",
        "chinese": "葡萄酒",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ine",
        "relation": "共同拼写 -ine，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "shine",
        "chinese": "发光",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ine",
        "relation": "共同拼写 -ine，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "early",
        "chinese": "早的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "early ↔ late",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "late",
        "chinese": "晚的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "early ↔ late",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "old",
        "chinese": "老的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "old ↔ young",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "young",
        "chinese": "年轻的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "old ↔ young",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "art",
        "chinese": "艺术",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "art",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "artist",
        "chinese": "艺术家",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "art",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "artwork",
        "chinese": "艺术作品",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "art",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "part",
        "chinese": "部分",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "art",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      },
      {
        "english": "smart",
        "chinese": "聪明的",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "art",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      }
    ],
    "reviewAnchors": [
      {
        "english": "time",
        "chinese": "时间",
        "firstDay": 2
      },
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      }
    ]
  },
  "17": {
    "words": [
      {
        "english": "air",
        "chinese": "空气",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-air",
        "relation": "共同拼写 -air，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "hair",
        "chinese": "头发",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-air",
        "relation": "共同拼写 -air，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "fair",
        "chinese": "公平的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-air",
        "relation": "共同拼写 -air，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "chair",
        "chinese": "椅子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-air",
        "relation": "共同拼写 -air，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pair",
        "chinese": "一对",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-air",
        "relation": "共同拼写 -air，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stair",
        "chinese": "楼梯的一阶",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-air",
        "relation": "共同拼写 -air，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "push",
        "chinese": "推",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "push ↔ pull",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pull",
        "chinese": "拉",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "push ↔ pull",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sit",
        "chinese": "坐",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "sit ↔ stand",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stand",
        "chinese": "站",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "sit ↔ stand",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "user",
        "chinese": "用户",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "use",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "useful",
        "chinese": "有用的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "use",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "useless",
        "chinese": "无用的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "use",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "used",
        "chinese": "用过的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "use",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "reuse",
        "chinese": "重复使用",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "use",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "where",
        "chinese": "哪里",
        "firstDay": 4
      },
      {
        "english": "use",
        "chinese": "使用",
        "firstDay": 4
      }
    ]
  },
  "18": {
    "words": [
      {
        "english": "car",
        "chinese": "汽车",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ar",
        "relation": "共同拼写 -ar，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "far",
        "chinese": "远的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ar",
        "relation": "共同拼写 -ar，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "star",
        "chinese": "星星",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ar",
        "relation": "共同拼写 -ar，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bar",
        "chinese": "酒吧",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ar",
        "relation": "共同拼写 -ar，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "jar",
        "chinese": "罐子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ar",
        "relation": "共同拼写 -ar，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "scar",
        "chinese": "疤痕",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ar",
        "relation": "共同拼写 -ar，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "laugh",
        "chinese": "笑",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "laugh ↔ cry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "cry",
        "chinese": "哭",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "laugh ↔ cry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "love",
        "chinese": "爱",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "love ↔ hate",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hate",
        "chinese": "讨厌",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "love ↔ hate",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "player",
        "chinese": "玩家",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "play",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "playing",
        "chinese": "玩",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "play",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "playful",
        "chinese": "爱玩的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "play",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "playground",
        "chinese": "操场",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "play",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "replay",
        "chinese": "重播",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "play",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "are",
        "chinese": "是",
        "firstDay": 1
      },
      {
        "english": "play",
        "chinese": "玩",
        "firstDay": 12
      }
    ]
  },
  "19": {
    "words": [
      {
        "english": "mind",
        "chinese": "想法",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ind",
        "relation": "共同拼写 -ind，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "find",
        "chinese": "找到",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ind",
        "relation": "共同拼写 -ind，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "kind",
        "chinese": "友善的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ind",
        "relation": "共同拼写 -ind，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "blind",
        "chinese": "失明的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ind",
        "relation": "共同拼写 -ind，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "behind",
        "chinese": "在后面",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ind",
        "relation": "共同拼写 -ind，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "remind",
        "chinese": "提醒",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ind",
        "relation": "共同拼写 -ind，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "easy",
        "chinese": "容易的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "easy ↔ hard",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hard",
        "chinese": "困难的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "easy ↔ hard",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "clean",
        "chinese": "干净的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "clean ↔ dirty",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dirty",
        "chinese": "脏的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "clean ↔ dirty",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "working",
        "chinese": "工作",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "work",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "homework",
        "chinese": "家庭作业",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "work",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "teamwork",
        "chinese": "团队合作",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "work",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "workout",
        "chinese": "锻炼",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "work",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "coworker",
        "chinese": "同事",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "work",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "think",
        "chinese": "想",
        "firstDay": 3
      },
      {
        "english": "work",
        "chinese": "工作",
        "firstDay": 4
      }
    ]
  },
  "20": {
    "words": [
      {
        "english": "green",
        "chinese": "绿色的",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-een",
        "relation": "共同拼写 -een，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "seen",
        "chinese": "看见过",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-een",
        "relation": "共同拼写 -een，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "queen",
        "chinese": "女王",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-een",
        "relation": "共同拼写 -een，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "teen",
        "chinese": "青少年",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-een",
        "relation": "共同拼写 -een，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "screen",
        "chinese": "屏幕",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-een",
        "relation": "共同拼写 -een，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "between",
        "chinese": "在……之间",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-een",
        "relation": "共同拼写 -een，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wet",
        "chinese": "湿的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "wet ↔ dry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dry",
        "chinese": "干的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "wet ↔ dry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "inside",
        "chinese": "里面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "inside ↔ outside",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "outside",
        "chinese": "外面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "inside ↔ outside",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bookstore",
        "chinese": "书店",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "book",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "notebook",
        "chinese": "笔记本",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "book",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "textbook",
        "chinese": "教科书",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "book",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "bookshelf",
        "chinese": "书架",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "book",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "booking",
        "chinese": "预订",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "book",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "see",
        "chinese": "看见",
        "firstDay": 3
      },
      {
        "english": "book",
        "chinese": "书",
        "firstDay": 10
      }
    ]
  },
  "21": {
    "words": [
      {
        "english": "end",
        "chinese": "结束",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-end",
        "relation": "共同拼写 -end，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "send",
        "chinese": "发送",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-end",
        "relation": "共同拼写 -end，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "spend",
        "chinese": "花费",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-end",
        "relation": "共同拼写 -end，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lend",
        "chinese": "借出",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-end",
        "relation": "共同拼写 -end，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bend",
        "chinese": "弯曲",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-end",
        "relation": "共同拼写 -end，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "trend",
        "chinese": "趋势",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-end",
        "relation": "共同拼写 -end，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "same",
        "chinese": "相同的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "same ↔ different",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "different",
        "chinese": "不同的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "same ↔ different",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "rich",
        "chinese": "富有的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "rich ↔ poor",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "poor",
        "chinese": "贫穷的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "rich ↔ poor",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hand",
        "chinese": "手",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hand",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "handle",
        "chinese": "处理",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hand",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "handy",
        "chinese": "方便的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hand",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "handbag",
        "chinese": "手提包",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hand",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "handmade",
        "chinese": "手工制作的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hand",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "and",
        "chinese": "和",
        "firstDay": 1
      }
    ]
  },
  "22": {
    "words": [
      {
        "english": "five",
        "chinese": "五",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ive",
        "relation": "共同拼写 -ive，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "drive",
        "chinese": "驾驶",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ive",
        "relation": "共同拼写 -ive，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "alive",
        "chinese": "活着的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ive",
        "relation": "共同拼写 -ive，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "arrive",
        "chinese": "到达",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ive",
        "relation": "共同拼写 -ive，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dive",
        "chinese": "潜水",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ive",
        "relation": "共同拼写 -ive，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "survive",
        "chinese": "生存",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ive",
        "relation": "共同拼写 -ive，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "strong",
        "chinese": "强壮的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "strong ↔ weak",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "weak",
        "chinese": "弱的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "strong ↔ weak",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "front",
        "chinese": "前面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "front ↔ back",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "back",
        "chinese": "后面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "front ↔ back",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "snowy",
        "chinese": "下雪的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "snow",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "snowman",
        "chinese": "雪人",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "snow",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "snowball",
        "chinese": "雪球",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "snow",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "snowboard",
        "chinese": "单板滑雪板",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "snow",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "snowfall",
        "chinese": "降雪量",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "snow",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "make",
        "chinese": "做 / 制作",
        "firstDay": 3
      }
    ]
  },
  "23": {
    "words": [
      {
        "english": "pick",
        "chinese": "挑选",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ick",
        "relation": "共同拼写 -ick，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "sick",
        "chinese": "生病的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ick",
        "relation": "共同拼写 -ick，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "kick",
        "chinese": "踢",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ick",
        "relation": "共同拼写 -ick，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "quick",
        "chinese": "快的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ick",
        "relation": "共同拼写 -ick，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "trick",
        "chinese": "技巧",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ick",
        "relation": "共同拼写 -ick，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stick",
        "chinese": "棍",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ick",
        "relation": "共同拼写 -ick，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "top",
        "chinese": "顶部",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "top ↔ bottom",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bottom",
        "chinese": "底部",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "top ↔ bottom",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "safe",
        "chinese": "安全的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "safe ↔ dangerous",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dangerous",
        "chinese": "危险的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "safe ↔ dangerous",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "airport",
        "chinese": "机场",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "air",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "airline",
        "chinese": "航空公司",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "air",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "airplane",
        "chinese": "飞机",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "air",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "airbag",
        "chinese": "安全气囊",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "air",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "airfare",
        "chinese": "机票价格",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "air",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "feel",
        "chinese": "感觉",
        "firstDay": 3
      },
      {
        "english": "air",
        "chinese": "空气",
        "firstDay": 17
      }
    ]
  },
  "24": {
    "words": [
      {
        "english": "best",
        "chinese": "最好的",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-est",
        "relation": "共同拼写 -est，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "rest",
        "chinese": "休息",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-est",
        "relation": "共同拼写 -est，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "test",
        "chinese": "测试",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-est",
        "relation": "共同拼写 -est，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "west",
        "chinese": "西边",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-est",
        "relation": "共同拼写 -est，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "nest",
        "chinese": "鸟巢",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-est",
        "relation": "共同拼写 -est，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "chest",
        "chinese": "胸部",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-est",
        "relation": "共同拼写 -est，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "boy",
        "chinese": "男孩",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "boy ↔ girl",
        "relation": "成对",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "girl",
        "chinese": "女孩",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "boy ↔ girl",
        "relation": "成对",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "parent",
        "chinese": "父母",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "parent ↔ child",
        "relation": "关系词",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "child",
        "chinese": "孩子",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "parent ↔ child",
        "relation": "关系词",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "writer",
        "chinese": "作者",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "write",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "writing",
        "chinese": "写作",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "write",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "rewrite",
        "chinese": "重写",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "write",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "written",
        "chinese": "写过的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "write",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "writes",
        "chinese": "写",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "write",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "first",
        "chinese": "第一 / 首先",
        "firstDay": 10
      },
      {
        "english": "write",
        "chinese": "写",
        "firstDay": 4
      }
    ]
  },
  "25": {
    "words": [
      {
        "english": "keep",
        "chinese": "保持",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-eep",
        "relation": "共同拼写 -eep，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "sleep",
        "chinese": "睡觉",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eep",
        "relation": "共同拼写 -eep，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "deep",
        "chinese": "深的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eep",
        "relation": "共同拼写 -eep，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sheep",
        "chinese": "羊",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eep",
        "relation": "共同拼写 -eep，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sweep",
        "chinese": "打扫",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eep",
        "relation": "共同拼写 -eep，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "steep",
        "chinese": "陡的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eep",
        "relation": "共同拼写 -eep，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "teacher",
        "chinese": "老师",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "teacher ↔ student",
        "relation": "关系词",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "student",
        "chinese": "学生",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "teacher ↔ student",
        "relation": "关系词",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "question",
        "chinese": "问题",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "question ↔ answer",
        "relation": "关系词",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "answer",
        "chinese": "回答",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "question ↔ answer",
        "relation": "关系词",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "children",
        "chinese": "孩子们",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "child",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "childhood",
        "chinese": "童年",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "child",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "childcare",
        "chinese": "儿童照护",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "child",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "childish",
        "chinese": "孩子气的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "child",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "grandchild",
        "chinese": "孙辈",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "child",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "night",
        "chinese": "夜晚",
        "firstDay": 13
      },
      {
        "english": "child",
        "chinese": "孩子",
        "firstDay": 24
      }
    ]
  },
  "26": {
    "words": [
      {
        "english": "ice",
        "chinese": "冰",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ice",
        "relation": "共同拼写 -ice，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "nice",
        "chinese": "好的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ice",
        "relation": "共同拼写 -ice，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "rice",
        "chinese": "米饭",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ice",
        "relation": "共同拼写 -ice，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "price",
        "chinese": "价格",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ice",
        "relation": "共同拼写 -ice，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "twice",
        "chinese": "两次",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ice",
        "relation": "共同拼写 -ice，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "slice",
        "chinese": "薄片",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ice",
        "relation": "共同拼写 -ice，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pass",
        "chinese": "通过",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "pass ↔ fail",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "fail",
        "chinese": "失败",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "pass ↔ fail",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "remember",
        "chinese": "记得",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "remember ↔ forget",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "forget",
        "chinese": "忘记",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "remember ↔ forget",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "helpful",
        "chinese": "有帮助的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "help",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "helpless",
        "chinese": "无助的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "help",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "helper",
        "chinese": "帮手",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "help",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "helping",
        "chinese": "帮助",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "help",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "helped",
        "chinese": "帮助了",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "help",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "food",
        "chinese": "食物",
        "firstDay": 4
      },
      {
        "english": "help",
        "chinese": "帮助",
        "firstDay": 4
      }
    ]
  },
  "27": {
    "words": [
      {
        "english": "sound",
        "chinese": "声音",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ound",
        "relation": "共同拼写 -ound，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "found",
        "chinese": "找到了",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ound",
        "relation": "共同拼写 -ound，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "round",
        "chinese": "圆的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ound",
        "relation": "共同拼写 -ound，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "ground",
        "chinese": "地面",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ound",
        "relation": "共同拼写 -ound，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "around",
        "chinese": "周围",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ound",
        "relation": "共同拼写 -ound，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pound",
        "chinese": "英镑",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ound",
        "relation": "共同拼写 -ound，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "begin",
        "chinese": "开始",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "begin ↔ end",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "end",
        "chinese": "结束",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "begin ↔ end",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "send",
        "chinese": "发送",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "send ↔ receive",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "receive",
        "chinese": "接收",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "send ↔ receive",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "timing",
        "chinese": "时机",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "time",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "lifetime",
        "chinese": "一生",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "time",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "daytime",
        "chinese": "白天",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "time",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "timeline",
        "chinese": "时间线",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "time",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "bedtime",
        "chinese": "睡觉时间",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "time",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "ear",
        "chinese": "耳朵",
        "firstDay": 11
      },
      {
        "english": "time",
        "chinese": "时间",
        "firstDay": 2
      }
    ]
  },
  "28": {
    "words": [
      {
        "english": "sing",
        "chinese": "唱歌",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ing",
        "relation": "共同拼写 -ing，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "ring",
        "chinese": "戒指",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ing",
        "relation": "共同拼写 -ing，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "king",
        "chinese": "国王",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ing",
        "relation": "共同拼写 -ing，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "thing",
        "chinese": "东西",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ing",
        "relation": "共同拼写 -ing，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wing",
        "chinese": "翅膀",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ing",
        "relation": "共同拼写 -ing，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bring",
        "chinese": "带来",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ing",
        "relation": "共同拼写 -ing，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "borrow",
        "chinese": "借入",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "borrow ↔ lend",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lend",
        "chinese": "借出",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "borrow ↔ lend",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "turn",
        "chinese": "转",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "turn ↔ stop",
        "relation": "动作关系",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stop",
        "chinese": "停止",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "turn ↔ stop",
        "relation": "动作关系",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sunny",
        "chinese": "晴朗的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "sun",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "sunlight",
        "chinese": "阳光",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "sun",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "sunrise",
        "chinese": "日出",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "sun",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "sunset",
        "chinese": "日落",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "sun",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "sunscreen",
        "chinese": "防晒霜",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "sun",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "make",
        "chinese": "做 / 制作",
        "firstDay": 3
      }
    ]
  },
  "29": {
    "words": [
      {
        "english": "park",
        "chinese": "公园",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ark",
        "relation": "共同拼写 -ark，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "dark",
        "chinese": "黑暗的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ark",
        "relation": "共同拼写 -ark，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "mark",
        "chinese": "标记",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ark",
        "relation": "共同拼写 -ark，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bark",
        "chinese": "树皮",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ark",
        "relation": "共同拼写 -ark，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "shark",
        "chinese": "鲨鱼",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ark",
        "relation": "共同拼写 -ark，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "spark",
        "chinese": "火花",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ark",
        "relation": "共同拼写 -ark，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "big",
        "chinese": "大的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "big ↔ small",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "small",
        "chinese": "小的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "big ↔ small",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "fast",
        "chinese": "快的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "fast ↔ slow",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "slow",
        "chinese": "慢的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "fast ↔ slow",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "driver",
        "chinese": "司机",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "drive",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "driving",
        "chinese": "驾驶",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "drive",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "driveway",
        "chinese": "车道",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "drive",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "driven",
        "chinese": "被驱动的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "drive",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "overdrive",
        "chinese": "超负荷运转",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "drive",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "drive",
        "chinese": "驾驶",
        "firstDay": 22
      }
    ]
  },
  "30": {
    "words": [
      {
        "english": "clock",
        "chinese": "时钟",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ock",
        "relation": "共同拼写 -ock，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "rock",
        "chinese": "岩石",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ock",
        "relation": "共同拼写 -ock，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lock",
        "chinese": "锁",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ock",
        "relation": "共同拼写 -ock，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "block",
        "chinese": "街区",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ock",
        "relation": "共同拼写 -ock，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "shock",
        "chinese": "震惊",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ock",
        "relation": "共同拼写 -ock，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sock",
        "chinese": "袜子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ock",
        "relation": "共同拼写 -ock，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "high",
        "chinese": "高的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "high ↔ low",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "low",
        "chinese": "低的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "high ↔ low",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "up",
        "chinese": "向上",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "up ↔ down",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "down",
        "chinese": "向下",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "up ↔ down",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "midnight",
        "chinese": "午夜",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "night",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "overnight",
        "chinese": "一夜之间",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "night",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "nighttime",
        "chinese": "夜间",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "night",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "nightly",
        "chinese": "每晚的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "night",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "tonight",
        "chinese": "今晚",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "night",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "time",
        "chinese": "时间",
        "firstDay": 2
      },
      {
        "english": "night",
        "chinese": "夜晚",
        "firstDay": 13
      }
    ]
  },
  "31": {
    "words": [
      {
        "english": "bank",
        "chinese": "银行",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ank",
        "relation": "共同拼写 -ank，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "thank",
        "chinese": "感谢",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ank",
        "relation": "共同拼写 -ank，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "tank",
        "chinese": "水箱",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ank",
        "relation": "共同拼写 -ank，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "rank",
        "chinese": "等级",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ank",
        "relation": "共同拼写 -ank，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "blank",
        "chinese": "空白的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ank",
        "relation": "共同拼写 -ank，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "drank",
        "chinese": "喝了",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ank",
        "relation": "共同拼写 -ank，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "left",
        "chinese": "左边",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "left ↔ right",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "right",
        "chinese": "右边",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "left ↔ right",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "light",
        "chinese": "亮的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "light ↔ dark",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dark",
        "chinese": "黑暗的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "light ↔ dark",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "waterfall",
        "chinese": "瀑布",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "water",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "waterproof",
        "chinese": "防水的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "water",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "underwater",
        "chinese": "水下的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "water",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "waterway",
        "chinese": "水道",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "water",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "watermelon",
        "chinese": "西瓜",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "water",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "water",
        "chinese": "水",
        "firstDay": 4
      }
    ]
  },
  "32": {
    "words": [
      {
        "english": "cash",
        "chinese": "现金",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ash",
        "relation": "共同拼写 -ash，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "flash",
        "chinese": "闪光",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ash",
        "relation": "共同拼写 -ash，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "crash",
        "chinese": "撞车",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ash",
        "relation": "共同拼写 -ash，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "trash",
        "chinese": "垃圾",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ash",
        "relation": "共同拼写 -ash，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dash",
        "chinese": "冲",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ash",
        "relation": "共同拼写 -ash，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "splash",
        "chinese": "溅起",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ash",
        "relation": "共同拼写 -ash，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "before",
        "chinese": "之前",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "before ↔ after",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "after",
        "chinese": "之后",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "before ↔ after",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "first",
        "chinese": "第一",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "first ↔ last",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "last",
        "chinese": "最后",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "first ↔ last",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "color",
        "chinese": "颜色",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "color / col",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "colorful",
        "chinese": "色彩丰富的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "color / col",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "colorless",
        "chinese": "无色的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "color / col",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "coloring",
        "chinese": "涂色",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "color / col",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "colored",
        "chinese": "有颜色的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "color / col",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "cold",
        "chinese": "冷的",
        "firstDay": 15
      }
    ]
  },
  "33": {
    "words": [
      {
        "english": "trip",
        "chinese": "旅行",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ip",
        "relation": "共同拼写 -ip，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "ship",
        "chinese": "船",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ip",
        "relation": "共同拼写 -ip，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "slip",
        "chinese": "滑倒",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ip",
        "relation": "共同拼写 -ip，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "flip",
        "chinese": "翻转",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ip",
        "relation": "共同拼写 -ip，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "chip",
        "chinese": "芯片",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ip",
        "relation": "共同拼写 -ip，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "skip",
        "chinese": "跳过",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ip",
        "relation": "共同拼写 -ip，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "yes",
        "chinese": "是",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "yes ↔ no",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "no",
        "chinese": "不",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "yes ↔ no",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "here",
        "chinese": "这里",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "here ↔ there",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "there",
        "chinese": "那里",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "here ↔ there",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "health",
        "chinese": "健康",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "health",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "healthy",
        "chinese": "健康的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "health",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "unhealthy",
        "chinese": "不健康的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "health",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "healthcare",
        "chinese": "医疗保健",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "health",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "healthier",
        "chinese": "更健康的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "health",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "well",
        "chinese": "好 / 健康",
        "firstDay": 9
      }
    ]
  },
  "34": {
    "words": [
      {
        "english": "mug",
        "chinese": "杯子",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ug",
        "relation": "共同拼写 -ug，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "bug",
        "chinese": "虫子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ug",
        "relation": "共同拼写 -ug，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hug",
        "chinese": "拥抱",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ug",
        "relation": "共同拼写 -ug，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "rug",
        "chinese": "地毯",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ug",
        "relation": "共同拼写 -ug，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "drug",
        "chinese": "药物",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ug",
        "relation": "共同拼写 -ug，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "plug",
        "chinese": "插头",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ug",
        "relation": "共同拼写 -ug，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "more",
        "chinese": "更多",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "more ↔ less",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "less",
        "chinese": "更少",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "more ↔ less",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "happy",
        "chinese": "开心的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "happy ↔ sad",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sad",
        "chinese": "难过的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "happy ↔ sad",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "photo",
        "chinese": "照片",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "pho",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "photos",
        "chinese": "照片（复数）",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "pho",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "photograph",
        "chinese": "照片",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "pho",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "photographer",
        "chinese": "摄影师",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "pho",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "photography",
        "chinese": "摄影",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "pho",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "drink",
        "chinese": "喝",
        "firstDay": 4
      },
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      }
    ]
  },
  "35": {
    "words": [
      {
        "english": "rain",
        "chinese": "雨",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ain",
        "relation": "共同拼写 -ain，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "train",
        "chinese": "火车",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ain",
        "relation": "共同拼写 -ain，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "brain",
        "chinese": "大脑",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ain",
        "relation": "共同拼写 -ain，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "chain",
        "chinese": "链子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ain",
        "relation": "共同拼写 -ain，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "main",
        "chinese": "主要的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ain",
        "relation": "共同拼写 -ain，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "gain",
        "chinese": "获得",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ain",
        "relation": "共同拼写 -ain，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "on",
        "chinese": "开",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "on ↔ off",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "off",
        "chinese": "关",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "on ↔ off",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "true",
        "chinese": "真的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "true ↔ false",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "false",
        "chinese": "假的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "true ↔ false",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "web",
        "chinese": "网络",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "web",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "website",
        "chinese": "网站",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "web",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "webpage",
        "chinese": "网页",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "web",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "webcam",
        "chinese": "网络摄像头",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "web",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "webinar",
        "chinese": "网络研讨会",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "web",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "we",
        "chinese": "我们",
        "firstDay": 1
      }
    ]
  },
  "36": {
    "words": [
      {
        "english": "down",
        "chinese": "向下",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-own",
        "relation": "共同拼写 -own，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "town",
        "chinese": "城镇",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-own",
        "relation": "共同拼写 -own，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "brown",
        "chinese": "棕色的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-own",
        "relation": "共同拼写 -own，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "crown",
        "chinese": "王冠",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-own",
        "relation": "共同拼写 -own，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "clown",
        "chinese": "小丑",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-own",
        "relation": "共同拼写 -own，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "frown",
        "chinese": "皱眉",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-own",
        "relation": "共同拼写 -own，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "right",
        "chinese": "正确的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "right ↔ wrong",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wrong",
        "chinese": "错误的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "right ↔ wrong",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "man",
        "chinese": "男人",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "man ↔ woman",
        "relation": "成对",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "woman",
        "chinese": "女人",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "man ↔ woman",
        "relation": "成对",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "gamer",
        "chinese": "玩家",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "game",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "gaming",
        "chinese": "游戏活动",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "game",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "gameplay",
        "chinese": "游戏玩法",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "game",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "gamepad",
        "chinese": "游戏手柄",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "game",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "endgame",
        "chinese": "最终阶段",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "game",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "out",
        "chinese": "外面",
        "firstDay": 8
      },
      {
        "english": "make",
        "chinese": "做 / 制作",
        "firstDay": 3
      }
    ]
  },
  "37": {
    "words": [
      {
        "english": "face",
        "chinese": "脸",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ace",
        "relation": "共同拼写 -ace，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "place",
        "chinese": "地方",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ace",
        "relation": "共同拼写 -ace，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "race",
        "chinese": "比赛",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ace",
        "relation": "共同拼写 -ace，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "space",
        "chinese": "空间",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ace",
        "relation": "共同拼写 -ace，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "trace",
        "chinese": "痕迹",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ace",
        "relation": "共同拼写 -ace，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "grace",
        "chinese": "优雅",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ace",
        "relation": "共同拼写 -ace，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "win",
        "chinese": "赢",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "win ↔ lose",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lose",
        "chinese": "输",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "win ↔ lose",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "work",
        "chinese": "工作",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "work ↔ rest",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "rest",
        "chinese": "休息",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "work ↔ rest",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "mail",
        "chinese": "邮件",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mail",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "email",
        "chinese": "电子邮件",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mail",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "mailbox",
        "chinese": "邮箱",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mail",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "voicemail",
        "chinese": "语音邮件",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mail",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "mailman",
        "chinese": "邮递员",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mail",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "go",
        "chinese": "去",
        "firstDay": 1
      },
      {
        "english": "may",
        "chinese": "可能 / 可以",
        "firstDay": 7
      }
    ]
  },
  "38": {
    "words": [
      {
        "english": "eat",
        "chinese": "吃",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-eat",
        "relation": "共同拼写 -eat，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "meat",
        "chinese": "肉",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eat",
        "relation": "共同拼写 -eat，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "seat",
        "chinese": "座位",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eat",
        "relation": "共同拼写 -eat，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "heat",
        "chinese": "热",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eat",
        "relation": "共同拼写 -eat，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "beat",
        "chinese": "打",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eat",
        "relation": "共同拼写 -eat，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "treat",
        "chinese": "对待",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-eat",
        "relation": "共同拼写 -eat，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wake",
        "chinese": "醒来",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "wake ↔ sleep",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sleep",
        "chinese": "睡觉",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "wake ↔ sleep",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "enter",
        "chinese": "进入",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "enter ↔ exit",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "exit",
        "chinese": "出去",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "enter ↔ exit",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "haircut",
        "chinese": "理发",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hair",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "hairstyle",
        "chinese": "发型",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hair",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "hairline",
        "chinese": "发际线",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hair",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "hairdryer",
        "chinese": "吹风机",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hair",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "hairbrush",
        "chinese": "发刷",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "hair",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "food",
        "chinese": "食物",
        "firstDay": 4
      },
      {
        "english": "hair",
        "chinese": "头发",
        "firstDay": 17
      }
    ]
  },
  "39": {
    "words": [
      {
        "english": "old",
        "chinese": "老的",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-old",
        "relation": "共同拼写 -old，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "hold",
        "chinese": "拿着",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-old",
        "relation": "共同拼写 -old，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "told",
        "chinese": "告诉了",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-old",
        "relation": "共同拼写 -old，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sold",
        "chinese": "卖了",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-old",
        "relation": "共同拼写 -old，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "gold",
        "chinese": "黄金",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-old",
        "relation": "共同拼写 -old，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "bold",
        "chinese": "大胆的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-old",
        "relation": "共同拼写 -old，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "ask",
        "chinese": "问",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "ask ↔ answer",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "answer",
        "chinese": "回答",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "ask ↔ answer",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "in",
        "chinese": "里面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "in ↔ out",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "out",
        "chinese": "外面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "in ↔ out",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "tooth",
        "chinese": "牙齿",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "tooth",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "toothbrush",
        "chinese": "牙刷",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "tooth",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "toothpaste",
        "chinese": "牙膏",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "tooth",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "toothache",
        "chinese": "牙痛",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "tooth",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "toothpick",
        "chinese": "牙签",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "tooth",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "cold",
        "chinese": "冷的",
        "firstDay": 15
      },
      {
        "english": "eat",
        "chinese": "吃",
        "firstDay": 4
      }
    ]
  },
  "40": {
    "words": [
      {
        "english": "school",
        "chinese": "学校",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ool",
        "relation": "共同拼写 -ool，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "cool",
        "chinese": "凉的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ool",
        "relation": "共同拼写 -ool，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pool",
        "chinese": "水池",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ool",
        "relation": "共同拼写 -ool，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "tool",
        "chinese": "工具",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ool",
        "relation": "共同拼写 -ool，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "fool",
        "chinese": "傻瓜",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ool",
        "relation": "共同拼写 -ool，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stool",
        "chinese": "凳子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ool",
        "relation": "共同拼写 -ool，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "open",
        "chinese": "打开",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "open ↔ close",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "close",
        "chinese": "关闭",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "open ↔ close",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "start",
        "chinese": "开始",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "start ↔ finish",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "finish",
        "chinese": "结束",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "start ↔ finish",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "friendly",
        "chinese": "友好的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "friend",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "friendship",
        "chinese": "友谊",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "friend",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "boyfriend",
        "chinese": "男朋友",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "friend",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "girlfriend",
        "chinese": "女朋友",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "friend",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "unfriendly",
        "chinese": "不友好的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "friend",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "room",
        "chinese": "房间",
        "firstDay": 11
      },
      {
        "english": "make",
        "chinese": "做 / 制作",
        "firstDay": 3
      }
    ]
  },
  "41": {
    "words": [
      {
        "english": "hot",
        "chinese": "热的",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ot",
        "relation": "共同拼写 -ot，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "spot",
        "chinese": "地点",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ot",
        "relation": "共同拼写 -ot，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lot",
        "chinese": "很多",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ot",
        "relation": "共同拼写 -ot，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "got",
        "chinese": "得到了",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ot",
        "relation": "共同拼写 -ot，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "shot",
        "chinese": "射击",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ot",
        "relation": "共同拼写 -ot，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dot",
        "chinese": "点",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ot",
        "relation": "共同拼写 -ot，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "buy",
        "chinese": "买",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "buy ↔ sell",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sell",
        "chinese": "卖",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "buy ↔ sell",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "give",
        "chinese": "给",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "give ↔ take",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "take",
        "chinese": "拿",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "give ↔ take",
        "relation": "成对动作",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "doorway",
        "chinese": "门口",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "door",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "outdoor",
        "chinese": "户外的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "door",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "indoor",
        "chinese": "室内的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "door",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "doorman",
        "chinese": "门卫",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "door",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "doorbell",
        "chinese": "门铃",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "door",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "not",
        "chinese": "不",
        "firstDay": 4
      },
      {
        "english": "door",
        "chinese": "门",
        "firstDay": 12
      }
    ]
  },
  "42": {
    "words": [
      {
        "english": "back",
        "chinese": "后面",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ack",
        "relation": "共同拼写 -ack，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "black",
        "chinese": "黑色的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ack",
        "relation": "共同拼写 -ack，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pack",
        "chinese": "包",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ack",
        "relation": "共同拼写 -ack，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lack",
        "chinese": "缺少",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ack",
        "relation": "共同拼写 -ack，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "track",
        "chinese": "轨道",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ack",
        "relation": "共同拼写 -ack，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "snack",
        "chinese": "零食",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ack",
        "relation": "共同拼写 -ack，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "come",
        "chinese": "来",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "come ↔ go",
        "relation": "方向相反",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "go",
        "chinese": "去",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "come ↔ go",
        "relation": "方向相反",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "near",
        "chinese": "近的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "near ↔ far",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "far",
        "chinese": "远的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "near ↔ far",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "key",
        "chinese": "钥匙",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "key",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "keyboard",
        "chinese": "键盘",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "key",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "keypad",
        "chinese": "数字键盘",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "key",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "keyword",
        "chinese": "关键词",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "key",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "keychain",
        "chinese": "钥匙链",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "key",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "home",
        "chinese": "家",
        "firstDay": 4
      },
      {
        "english": "see",
        "chinese": "看见",
        "firstDay": 3
      }
    ]
  },
  "43": {
    "words": [
      {
        "english": "name",
        "chinese": "名字",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ame",
        "relation": "共同拼写 -ame，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "same",
        "chinese": "相同的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ame",
        "relation": "共同拼写 -ame，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "game",
        "chinese": "游戏",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ame",
        "relation": "共同拼写 -ame，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "came",
        "chinese": "来了",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ame",
        "relation": "共同拼写 -ame，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "frame",
        "chinese": "框",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ame",
        "relation": "共同拼写 -ame，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "blame",
        "chinese": "责怪",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ame",
        "relation": "共同拼写 -ame，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "new",
        "chinese": "新的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "new ↔ old",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "old",
        "chinese": "旧的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "new ↔ old",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "full",
        "chinese": "满的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "full ↔ empty",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "empty",
        "chinese": "空的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "full ↔ empty",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "screen",
        "chinese": "屏幕",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "screen",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "screenshot",
        "chinese": "截图",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "screen",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "fullscreen",
        "chinese": "全屏",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "screen",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "screensaver",
        "chinese": "屏保",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "screen",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "screening",
        "chinese": "放映",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "screen",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "make",
        "chinese": "做 / 制作",
        "firstDay": 3
      },
      {
        "english": "green",
        "chinese": "绿色的",
        "firstDay": 20
      }
    ]
  },
  "44": {
    "words": [
      {
        "english": "more",
        "chinese": "更多",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ore",
        "relation": "共同拼写 -ore，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "store",
        "chinese": "商店",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ore",
        "relation": "共同拼写 -ore，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "score",
        "chinese": "分数",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ore",
        "relation": "共同拼写 -ore，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "shore",
        "chinese": "岸边",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ore",
        "relation": "共同拼写 -ore，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "core",
        "chinese": "核心",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ore",
        "relation": "共同拼写 -ore，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "before",
        "chinese": "之前",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ore",
        "relation": "共同拼写 -ore，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "day",
        "chinese": "白天",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "day ↔ night",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "night",
        "chinese": "夜晚",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "day ↔ night",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hot",
        "chinese": "热的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "hot ↔ cold",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "cold",
        "chinese": "冷的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "hot ↔ cold",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "mark",
        "chinese": "标记",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mark",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "marker",
        "chinese": "记号笔",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mark",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "bookmark",
        "chinese": "书签",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mark",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "remark",
        "chinese": "评论",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mark",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "trademark",
        "chinese": "商标",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "mark",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "floor",
        "chinese": "地板",
        "firstDay": 12
      },
      {
        "english": "make",
        "chinese": "做 / 制作",
        "firstDay": 3
      }
    ]
  },
  "45": {
    "words": [
      {
        "english": "think",
        "chinese": "想",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ink",
        "relation": "共同拼写 -ink，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "drink",
        "chinese": "喝",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ink",
        "relation": "共同拼写 -ink，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pink",
        "chinese": "粉色的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ink",
        "relation": "共同拼写 -ink，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "link",
        "chinese": "链接",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ink",
        "relation": "共同拼写 -ink，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sink",
        "chinese": "水槽",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ink",
        "relation": "共同拼写 -ink，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "blink",
        "chinese": "眨眼",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ink",
        "relation": "共同拼写 -ink，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "arrive",
        "chinese": "到达",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "arrive ↔ leave",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "leave",
        "chinese": "离开",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "arrive ↔ leave",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "remember",
        "chinese": "记得",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "remember ↔ forget",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "forget",
        "chinese": "忘记",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "remember ↔ forget",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "head",
        "chinese": "头",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "head",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "headache",
        "chinese": "头痛",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "head",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "headline",
        "chinese": "标题",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "head",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "headphones",
        "chinese": "耳机",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "head",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "ahead",
        "chinese": "在前面",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "head",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      }
    ],
    "reviewAnchors": [
      {
        "english": "know",
        "chinese": "知道",
        "firstDay": 3
      },
      {
        "english": "read",
        "chinese": "读",
        "firstDay": 4
      }
    ]
  },
  "46": {
    "words": [
      {
        "english": "in",
        "chinese": "在里面",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-in",
        "relation": "共同拼写 -in，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "win",
        "chinese": "赢",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-in",
        "relation": "共同拼写 -in，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "thin",
        "chinese": "瘦的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-in",
        "relation": "共同拼写 -in，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "skin",
        "chinese": "皮肤",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-in",
        "relation": "共同拼写 -in，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "twin",
        "chinese": "双胞胎",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-in",
        "relation": "共同拼写 -in，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pin",
        "chinese": "针",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-in",
        "relation": "共同拼写 -in，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "early",
        "chinese": "早的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "early ↔ late",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "late",
        "chinese": "晚的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "early ↔ late",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "old",
        "chinese": "老的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "old ↔ young",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "young",
        "chinese": "年轻的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "old ↔ young",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "walk",
        "chinese": "走路",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "walk / alk",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "walking",
        "chinese": "走路",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "walk / alk",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "walker",
        "chinese": "步行者",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "walk / alk",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "walkway",
        "chinese": "人行通道",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "walk / alk",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "talk",
        "chinese": "交谈",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "walk / alk",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      }
    ],
    "reviewAnchors": [
      {
        "english": "out",
        "chinese": "外面",
        "firstDay": 8
      },
      {
        "english": "all",
        "chinese": "全部",
        "firstDay": 6
      }
    ]
  },
  "47": {
    "words": [
      {
        "english": "late",
        "chinese": "晚的",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-ate",
        "relation": "共同拼写 -ate，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "gate",
        "chinese": "大门",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ate",
        "relation": "共同拼写 -ate，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "date",
        "chinese": "日期",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ate",
        "relation": "共同拼写 -ate，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hate",
        "chinese": "讨厌",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ate",
        "relation": "共同拼写 -ate，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "rate",
        "chinese": "比率",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ate",
        "relation": "共同拼写 -ate，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "plate",
        "chinese": "盘子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-ate",
        "relation": "共同拼写 -ate，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "push",
        "chinese": "推",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "push ↔ pull",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pull",
        "chinese": "拉",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "push ↔ pull",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sit",
        "chinese": "坐",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "sit ↔ stand",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stand",
        "chinese": "站",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "sit ↔ stand",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "lovely",
        "chinese": "可爱的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "love",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "lover",
        "chinese": "爱人",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "love",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "loving",
        "chinese": "充满爱的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "love",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "loved",
        "chinese": "被爱的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "love",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "glove",
        "chinese": "手套",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "love",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      }
    ],
    "reviewAnchors": [
      {
        "english": "day",
        "chinese": "天",
        "firstDay": 12
      },
      {
        "english": "love",
        "chinese": "爱 / 喜欢",
        "firstDay": 18
      }
    ]
  },
  "48": {
    "words": [
      {
        "english": "hand",
        "chinese": "手",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-and",
        "relation": "共同拼写 -and，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "land",
        "chinese": "土地",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-and",
        "relation": "共同拼写 -and，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "stand",
        "chinese": "站",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-and",
        "relation": "共同拼写 -and，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "band",
        "chinese": "乐队",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-and",
        "relation": "共同拼写 -and，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "sand",
        "chinese": "沙子",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-and",
        "relation": "共同拼写 -and，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "brand",
        "chinese": "品牌",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-and",
        "relation": "共同拼写 -and，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "laugh",
        "chinese": "笑",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "laugh ↔ cry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "cry",
        "chinese": "哭",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "laugh ↔ cry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "love",
        "chinese": "爱",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "love ↔ hate",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hate",
        "chinese": "讨厌",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "love ↔ hate",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "safety",
        "chinese": "安全",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "safe / sav",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "unsafe",
        "chinese": "不安全的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "safe / sav",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "safer",
        "chinese": "更安全的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "safe / sav",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "safest",
        "chinese": "最安全的",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "safe / sav",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "save",
        "chinese": "保存",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "safe / sav",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      }
    ],
    "reviewAnchors": [
      {
        "english": "and",
        "chinese": "和",
        "firstDay": 1
      },
      {
        "english": "safe",
        "chinese": "安全的",
        "firstDay": 23
      }
    ]
  },
  "49": {
    "words": [
      {
        "english": "get",
        "chinese": "得到",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-et",
        "relation": "共同拼写 -et，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "let",
        "chinese": "让",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-et",
        "relation": "共同拼写 -et，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "set",
        "chinese": "设置",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-et",
        "relation": "共同拼写 -et，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wet",
        "chinese": "湿的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-et",
        "relation": "共同拼写 -et，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pet",
        "chinese": "宠物",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-et",
        "relation": "共同拼写 -et，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "yet",
        "chinese": "还",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-et",
        "relation": "共同拼写 -et，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "easy",
        "chinese": "容易的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "easy ↔ hard",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "hard",
        "chinese": "困难的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "easy ↔ hard",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "clean",
        "chinese": "干净的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "clean ↔ dirty",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dirty",
        "chinese": "脏的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "clean ↔ dirty",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "teach",
        "chinese": "教",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "teach / each",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "teaching",
        "chinese": "教学",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "teach / each",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "taught",
        "chinese": "教过",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "teach / each",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      },
      {
        "english": "reach",
        "chinese": "到达",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "teach / each",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      },
      {
        "english": "beach",
        "chinese": "海滩",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "teach / each",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      }
    ],
    "reviewAnchors": [
      {
        "english": "have",
        "chinese": "有",
        "firstDay": 1
      },
      {
        "english": "teacher",
        "chinese": "老师",
        "firstDay": 25
      }
    ]
  },
  "50": {
    "words": [
      {
        "english": "top",
        "chinese": "顶部",
        "phonetic": "",
        "category": "引导词",
        "learningGroup": "sound",
        "theme": "-op",
        "relation": "共同拼写 -op，本组读音规律一致",
        "isGuide": true,
        "familyRelation": ""
      },
      {
        "english": "stop",
        "chinese": "停止",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-op",
        "relation": "共同拼写 -op，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "shop",
        "chinese": "商店",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-op",
        "relation": "共同拼写 -op，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "drop",
        "chinese": "掉落",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-op",
        "relation": "共同拼写 -op，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "pop",
        "chinese": "流行的",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-op",
        "relation": "共同拼写 -op，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "crop",
        "chinese": "农作物",
        "phonetic": "",
        "category": "同拼读词",
        "learningGroup": "sound",
        "theme": "-op",
        "relation": "共同拼写 -op，本组读音规律一致",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "wet",
        "chinese": "湿的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "wet ↔ dry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "dry",
        "chinese": "干的",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "wet ↔ dry",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "inside",
        "chinese": "里面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "inside ↔ outside",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "outside",
        "chinese": "外面",
        "phonetic": "",
        "category": "成对词",
        "learningGroup": "pair",
        "theme": "inside ↔ outside",
        "relation": "反义",
        "isGuide": false,
        "familyRelation": ""
      },
      {
        "english": "body",
        "chinese": "身体",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "body / body",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "核心词"
      },
      {
        "english": "anybody",
        "chinese": "任何人",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "body / body",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      },
      {
        "english": "somebody",
        "chinese": "某人",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "body / body",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      },
      {
        "english": "nobody",
        "chinese": "没有人",
        "phonetic": "",
        "category": "同拼写词",
        "learningGroup": "family",
        "theme": "body / body",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "拼写关联"
      },
      {
        "english": "bodyguard",
        "chinese": "保镖",
        "phonetic": "",
        "category": "同词族",
        "learningGroup": "family",
        "theme": "body / body",
        "relation": "同拼写框架",
        "isGuide": false,
        "familyRelation": "同词族"
      }
    ],
    "reviewAnchors": [
      {
        "english": "open",
        "chinese": "打开",
        "firstDay": 12
      },
      {
        "english": "boy",
        "chinese": "男孩",
        "firstDay": 24
      }
    ]
  }
};
  if (!window.ENGLISH_365_DATA) return;
  Object.entries(importedDays).forEach(([day, entry]) => {
    Object.assign(window.ENGLISH_365_DATA.days[Number(day) - 1], entry);
  });
})();
