/* Day 15–50 imported from the user's Desktop workbook. Day 1–14 remain unchanged. */
(function () {
  const importedDays = {
    "15": [
      {
        "english": "free",
        "chinese": "自由的",
        "phonetic": "/fri:/",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "three",
        "chinese": "三",
        "phonetic": "/θri:/",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "tree",
        "chinese": "树",
        "phonetic": "/triː/",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "agree",
        "chinese": "同意",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "degree",
        "chinese": "程度",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "hot",
        "chinese": "热的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hot ↔ cold",
        "isGuide": false
      },
      {
        "english": "cold",
        "chinese": "冷的",
        "phonetic": "/kәuld/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hot ↔ cold",
        "isGuide": false
      },
      {
        "english": "full",
        "chinese": "满的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "full ↔ empty",
        "isGuide": false
      },
      {
        "english": "empty",
        "chinese": "空的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "full ↔ empty",
        "isGuide": false
      },
      {
        "english": "rain",
        "chinese": "雨",
        "phonetic": "/reɪn/",
        "category": "引导词",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "rainy",
        "chinese": "下雨的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "raincoat",
        "chinese": "雨衣",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "rainbow",
        "chinese": "彩虹",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "raindrop",
        "chinese": "雨滴",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "rainfall",
        "chinese": "降雨量",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "16": [
      {
        "english": "show",
        "chinese": "展示",
        "phonetic": "/ʃәu/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "slow",
        "chinese": "慢的",
        "phonetic": "/sloʊ/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "grow",
        "chinese": "生长",
        "phonetic": "/ɡroʊ/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "low",
        "chinese": "低的",
        "phonetic": "/loʊ/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "no",
        "chinese": "不",
        "phonetic": "/nәu/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "early",
        "chinese": "早的",
        "phonetic": "/'ә:li/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "early ↔ late",
        "isGuide": false
      },
      {
        "english": "late",
        "chinese": "晚的",
        "phonetic": "/leit/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "early ↔ late",
        "isGuide": false
      },
      {
        "english": "old",
        "chinese": "老的",
        "phonetic": "/әuld/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "old ↔ young",
        "isGuide": false
      },
      {
        "english": "young",
        "chinese": "年轻的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "old ↔ young",
        "isGuide": false
      },
      {
        "english": "sun",
        "chinese": "太阳",
        "phonetic": "",
        "category": "引导词",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "sunny",
        "chinese": "晴朗的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunrise",
        "chinese": "日出",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunset",
        "chinese": "日落",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunlight",
        "chinese": "阳光",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunscreen",
        "chinese": "防晒霜",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "17": [
      {
        "english": "car",
        "chinese": "汽车",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ar /ɑːr/",
        "relation": "同韵：-ar /ɑːr/",
        "isGuide": false
      },
      {
        "english": "far",
        "chinese": "远的",
        "phonetic": "/fɑ:/",
        "category": "同音词",
        "theme": "同韵：-ar /ɑːr/",
        "relation": "同韵：-ar /ɑːr/",
        "isGuide": false
      },
      {
        "english": "bar",
        "chinese": "酒吧",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ar /ɑːr/",
        "relation": "同韵：-ar /ɑːr/",
        "isGuide": false
      },
      {
        "english": "star",
        "chinese": "星星",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ar /ɑːr/",
        "relation": "同韵：-ar /ɑːr/",
        "isGuide": false
      },
      {
        "english": "jar",
        "chinese": "罐子",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ar /ɑːr/",
        "relation": "同韵：-ar /ɑːr/",
        "isGuide": false
      },
      {
        "english": "parent",
        "chinese": "父母",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "parent ↔ child",
        "isGuide": false
      },
      {
        "english": "child",
        "chinese": "孩子",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "parent ↔ child",
        "isGuide": false
      },
      {
        "english": "brother",
        "chinese": "兄弟",
        "phonetic": "/'brʌðә/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "brother ↔ sister",
        "isGuide": false
      },
      {
        "english": "sister",
        "chinese": "姐妹",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "brother ↔ sister",
        "isGuide": false
      },
      {
        "english": "snow",
        "chinese": "雪",
        "phonetic": "",
        "category": "引导词",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "snowy",
        "chinese": "下雪的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowman",
        "chinese": "雪人",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowball",
        "chinese": "雪球",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowflake",
        "chinese": "雪花",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowfall",
        "chinese": "降雪量",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "18": [
      {
        "english": "name",
        "chinese": "名字",
        "phonetic": "/neim/",
        "category": "同音词",
        "theme": "同韵：-ame /eɪm/",
        "relation": "同韵：-ame /eɪm/",
        "isGuide": false
      },
      {
        "english": "same",
        "chinese": "相同的",
        "phonetic": "/seim/",
        "category": "同音词",
        "theme": "同韵：-ame /eɪm/",
        "relation": "同韵：-ame /eɪm/",
        "isGuide": false
      },
      {
        "english": "game",
        "chinese": "游戏",
        "phonetic": "/ɡeɪm/",
        "category": "同音词",
        "theme": "同韵：-ame /eɪm/",
        "relation": "同韵：-ame /eɪm/",
        "isGuide": false
      },
      {
        "english": "frame",
        "chinese": "框",
        "phonetic": "/freɪm/",
        "category": "同音词",
        "theme": "同韵：-ame /eɪm/",
        "relation": "同韵：-ame /eɪm/",
        "isGuide": false
      },
      {
        "english": "flame",
        "chinese": "火焰",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ame /eɪm/",
        "relation": "同韵：-ame /eɪm/",
        "isGuide": false
      },
      {
        "english": "healthy",
        "chinese": "健康的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "healthy ↔ sick",
        "isGuide": false
      },
      {
        "english": "sick",
        "chinese": "生病的",
        "phonetic": "/sɪk/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "healthy ↔ sick",
        "isGuide": false
      },
      {
        "english": "strong",
        "chinese": "强壮的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "strong ↔ weak",
        "isGuide": false
      },
      {
        "english": "weak",
        "chinese": "虚弱的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "strong ↔ weak",
        "isGuide": false
      },
      {
        "english": "air",
        "chinese": "空气",
        "phonetic": "/єә/",
        "category": "引导词",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "airbag",
        "chinese": "安全气囊",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airport",
        "chinese": "机场",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airline",
        "chinese": "航空公司",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airplane",
        "chinese": "飞机",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airfare",
        "chinese": "机票价格",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "19": [
      {
        "english": "wood",
        "chinese": "木头",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ood /ʊd/",
        "relation": "同韵：-ood /ʊd/",
        "isGuide": false
      },
      {
        "english": "stood",
        "chinese": "站着",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ood /ʊd/",
        "relation": "同韵：-ood /ʊd/",
        "isGuide": false
      },
      {
        "english": "hood",
        "chinese": "帽兜",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ood /ʊd/",
        "relation": "同韵：-ood /ʊd/",
        "isGuide": false
      },
      {
        "english": "goodbye",
        "chinese": "再见",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ood /ʊd/",
        "relation": "同韵：-ood /ʊd/",
        "isGuide": false
      },
      {
        "english": "childhood",
        "chinese": "童年",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ood /ʊd/",
        "relation": "同韵：-ood /ʊd/",
        "isGuide": false
      },
      {
        "english": "hurt",
        "chinese": "受伤",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hurt ↔ heal",
        "isGuide": false
      },
      {
        "english": "heal",
        "chinese": "康复",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hurt ↔ heal",
        "isGuide": false
      },
      {
        "english": "push",
        "chinese": "推",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "push ↔ pull",
        "isGuide": false
      },
      {
        "english": "pull",
        "chinese": "拉",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "push ↔ pull",
        "isGuide": false
      },
      {
        "english": "head",
        "chinese": "头",
        "phonetic": "",
        "category": "引导词",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "headset",
        "chinese": "耳机",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headband",
        "chinese": "头带",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headache",
        "chinese": "头痛",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headline",
        "chinese": "标题",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headlight",
        "chinese": "车头灯",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "20": [
      {
        "english": "town",
        "chinese": "城镇",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-own /aʊn/",
        "relation": "同韵：-own /aʊn/",
        "isGuide": false
      },
      {
        "english": "brown",
        "chinese": "棕色的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-own /aʊn/",
        "relation": "同韵：-own /aʊn/",
        "isGuide": false
      },
      {
        "english": "crown",
        "chinese": "王冠",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-own /aʊn/",
        "relation": "同韵：-own /aʊn/",
        "isGuide": false
      },
      {
        "english": "around",
        "chinese": "周围",
        "phonetic": "/ә'raund/",
        "category": "同音词",
        "theme": "同韵：-own /aʊn/",
        "relation": "同韵：-own /aʊn/",
        "isGuide": false
      },
      {
        "english": "frown",
        "chinese": "皱眉",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-own /aʊn/",
        "relation": "同韵：-own /aʊn/",
        "isGuide": false
      },
      {
        "english": "win",
        "chinese": "赢",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "win ↔ lose",
        "isGuide": false
      },
      {
        "english": "lose",
        "chinese": "输",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "win ↔ lose",
        "isGuide": false
      },
      {
        "english": "remember",
        "chinese": "记得",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "remember ↔ forget",
        "isGuide": false
      },
      {
        "english": "forget",
        "chinese": "忘记",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "remember ↔ forget",
        "isGuide": false
      },
      {
        "english": "hand",
        "chinese": "手",
        "phonetic": "/hænd/",
        "category": "引导词",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "handbag",
        "chinese": "手提包",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handful",
        "chinese": "一把",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handbook",
        "chinese": "手册",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handmade",
        "chinese": "手工制作的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handshake",
        "chinese": "握手",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "21": [
      {
        "english": "old",
        "chinese": "老的",
        "phonetic": "/әuld/",
        "category": "同音词",
        "theme": "同韵：-old /oʊld/",
        "relation": "同韵：-old /oʊld/",
        "isGuide": false
      },
      {
        "english": "cold",
        "chinese": "冷的",
        "phonetic": "/kәuld/",
        "category": "同音词",
        "theme": "同韵：-old /oʊld/",
        "relation": "同韵：-old /oʊld/",
        "isGuide": false
      },
      {
        "english": "hold",
        "chinese": "拿着",
        "phonetic": "/hoʊld/",
        "category": "同音词",
        "theme": "同韵：-old /oʊld/",
        "relation": "同韵：-old /oʊld/",
        "isGuide": false
      },
      {
        "english": "told",
        "chinese": "告诉了",
        "phonetic": "/tәuld/",
        "category": "同音词",
        "theme": "同韵：-old /oʊld/",
        "relation": "同韵：-old /oʊld/",
        "isGuide": false
      },
      {
        "english": "gold",
        "chinese": "金",
        "phonetic": "/ɡoʊld/",
        "category": "同音词",
        "theme": "同韵：-old /oʊld/",
        "relation": "同韵：-old /oʊld/",
        "isGuide": false
      },
      {
        "english": "laugh",
        "chinese": "笑",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "laugh ↔ cry",
        "isGuide": false
      },
      {
        "english": "cry",
        "chinese": "哭",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "laugh ↔ cry",
        "isGuide": false
      },
      {
        "english": "love",
        "chinese": "爱",
        "phonetic": "/lʌv/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "love ↔ hate",
        "isGuide": false
      },
      {
        "english": "hate",
        "chinese": "讨厌",
        "phonetic": "/heɪt/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "love ↔ hate",
        "isGuide": false
      },
      {
        "english": "back",
        "chinese": "后面",
        "phonetic": "/bæk/",
        "category": "引导词",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "backpack",
        "chinese": "背包",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backseat",
        "chinese": "后座",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backyard",
        "chinese": "后院",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backward",
        "chinese": "向后的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backdrop",
        "chinese": "背景",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "22": [
      {
        "english": "late",
        "chinese": "迟的",
        "phonetic": "/leit/",
        "category": "同音词",
        "theme": "同韵：长 a 音 /eɪt/",
        "relation": "同韵：长 a 音 /eɪt/",
        "isGuide": false
      },
      {
        "english": "date",
        "chinese": "日期",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 a 音 /eɪt/",
        "relation": "同韵：长 a 音 /eɪt/",
        "isGuide": false
      },
      {
        "english": "wait",
        "chinese": "等待",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 a 音 /eɪt/",
        "relation": "同韵：长 a 音 /eɪt/",
        "isGuide": false
      },
      {
        "english": "great",
        "chinese": "很棒的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 a 音 /eɪt/",
        "relation": "同韵：长 a 音 /eɪt/",
        "isGuide": false
      },
      {
        "english": "eight",
        "chinese": "八",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 a 音 /eɪt/",
        "relation": "同韵：长 a 音 /eɪt/",
        "isGuide": false
      },
      {
        "english": "true",
        "chinese": "真的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "true ↔ false",
        "isGuide": false
      },
      {
        "english": "false",
        "chinese": "假的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "true ↔ false",
        "isGuide": false
      },
      {
        "english": "easy",
        "chinese": "容易的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "easy ↔ hard",
        "isGuide": false
      },
      {
        "english": "hard",
        "chinese": "困难的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "easy ↔ hard",
        "isGuide": false
      },
      {
        "english": "key",
        "chinese": "钥匙",
        "phonetic": "",
        "category": "引导词",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "keypad",
        "chinese": "键盘区",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keyhole",
        "chinese": "钥匙孔",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keyword",
        "chinese": "关键词",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keychain",
        "chinese": "钥匙链",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keyboard",
        "chinese": "键盘",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "23": [
      {
        "english": "place",
        "chinese": "地方",
        "phonetic": "/pleis/",
        "category": "同音词",
        "theme": "同韵：-ace /eɪs/",
        "relation": "同韵：-ace /eɪs/",
        "isGuide": false
      },
      {
        "english": "race",
        "chinese": "比赛",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ace /eɪs/",
        "relation": "同韵：-ace /eɪs/",
        "isGuide": false
      },
      {
        "english": "space",
        "chinese": "空间",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ace /eɪs/",
        "relation": "同韵：-ace /eɪs/",
        "isGuide": false
      },
      {
        "english": "case",
        "chinese": "情况",
        "phonetic": "/keis/",
        "category": "同音词",
        "theme": "同韵：-ace /eɪs/",
        "relation": "同韵：-ace /eɪs/",
        "isGuide": false
      },
      {
        "english": "base",
        "chinese": "基础",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ace /eɪs/",
        "relation": "同韵：-ace /eɪs/",
        "isGuide": false
      },
      {
        "english": "fast",
        "chinese": "快的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "fast ↔ slow",
        "isGuide": false
      },
      {
        "english": "slow",
        "chinese": "慢的",
        "phonetic": "/sloʊ/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "fast ↔ slow",
        "isGuide": false
      },
      {
        "english": "high",
        "chinese": "高的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "high ↔ low",
        "isGuide": false
      },
      {
        "english": "low",
        "chinese": "低的",
        "phonetic": "/loʊ/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "high ↔ low",
        "isGuide": false
      },
      {
        "english": "side",
        "chinese": "一侧",
        "phonetic": "",
        "category": "引导词",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "inside",
        "chinese": "里面",
        "phonetic": "/ˌɪnˈsaɪd/",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "outside",
        "chinese": "外面",
        "phonetic": "/ˌaʊtˈsaɪd/",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "bedside",
        "chinese": "床边",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "roadside",
        "chinese": "路边",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sidewalk",
        "chinese": "人行道",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "24": [
      {
        "english": "back",
        "chinese": "后面",
        "phonetic": "/bæk/",
        "category": "同音词",
        "theme": "同韵：-ack /æk/",
        "relation": "同韵：-ack /æk/",
        "isGuide": false
      },
      {
        "english": "black",
        "chinese": "黑色的",
        "phonetic": "/blæk/",
        "category": "同音词",
        "theme": "同韵：-ack /æk/",
        "relation": "同韵：-ack /æk/",
        "isGuide": false
      },
      {
        "english": "track",
        "chinese": "轨道",
        "phonetic": "/træk/",
        "category": "同音词",
        "theme": "同韵：-ack /æk/",
        "relation": "同韵：-ack /æk/",
        "isGuide": false
      },
      {
        "english": "snack",
        "chinese": "零食",
        "phonetic": "/snæk/",
        "category": "同音词",
        "theme": "同韵：-ack /æk/",
        "relation": "同韵：-ack /æk/",
        "isGuide": false
      },
      {
        "english": "pack",
        "chinese": "打包",
        "phonetic": "/pæk/",
        "category": "同音词",
        "theme": "同韵：-ack /æk/",
        "relation": "同韵：-ack /æk/",
        "isGuide": false
      },
      {
        "english": "long",
        "chinese": "长的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "long ↔ short",
        "isGuide": false
      },
      {
        "english": "short",
        "chinese": "短的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "long ↔ short",
        "isGuide": false
      },
      {
        "english": "rich",
        "chinese": "富有的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "rich ↔ poor",
        "isGuide": false
      },
      {
        "english": "poor",
        "chinese": "贫穷的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "rich ↔ poor",
        "isGuide": false
      },
      {
        "english": "sea",
        "chinese": "海",
        "phonetic": "",
        "category": "引导词",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "seafood",
        "chinese": "海鲜",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seaside",
        "chinese": "海边",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seaweed",
        "chinese": "海藻",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seawater",
        "chinese": "海水",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seashore",
        "chinese": "海岸",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "25": [
      {
        "english": "blue",
        "chinese": "蓝色的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "true",
        "chinese": "真的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "new",
        "chinese": "新的",
        "phonetic": "/nju:/",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "knew",
        "chinese": "知道了",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "too",
        "chinese": "也",
        "phonetic": "/tu:/",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "wet",
        "chinese": "湿的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "wet ↔ dry",
        "isGuide": false
      },
      {
        "english": "dry",
        "chinese": "干的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "wet ↔ dry",
        "isGuide": false
      },
      {
        "english": "safe",
        "chinese": "安全的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "safe ↔ dangerous",
        "isGuide": false
      },
      {
        "english": "dangerous",
        "chinese": "危险的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "safe ↔ dangerous",
        "isGuide": false
      },
      {
        "english": "farm",
        "chinese": "农场",
        "phonetic": "",
        "category": "引导词",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "farmer",
        "chinese": "农民",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farming",
        "chinese": "农业",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farmland",
        "chinese": "农田",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farmyard",
        "chinese": "农家庭院",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farmhouse",
        "chinese": "农舍",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "26": [
      {
        "english": "red",
        "chinese": "红色的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ed /ɛd/",
        "relation": "同韵：-ed /ɛd/",
        "isGuide": false
      },
      {
        "english": "said",
        "chinese": "说了",
        "phonetic": "/sed/",
        "category": "同音词",
        "theme": "同韵：-ed /ɛd/",
        "relation": "同韵：-ed /ɛd/",
        "isGuide": false
      },
      {
        "english": "head",
        "chinese": "头",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ed /ɛd/",
        "relation": "同韵：-ed /ɛd/",
        "isGuide": false
      },
      {
        "english": "dead",
        "chinese": "死的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ed /ɛd/",
        "relation": "同韵：-ed /ɛd/",
        "isGuide": false
      },
      {
        "english": "bread",
        "chinese": "面包",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ed /ɛd/",
        "relation": "同韵：-ed /ɛd/",
        "isGuide": false
      },
      {
        "english": "black",
        "chinese": "黑色的",
        "phonetic": "/blæk/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "black ↔ white",
        "isGuide": false
      },
      {
        "english": "white",
        "chinese": "白色的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "black ↔ white",
        "isGuide": false
      },
      {
        "english": "north",
        "chinese": "北",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "north ↔ south",
        "isGuide": false
      },
      {
        "english": "south",
        "chinese": "南",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "north ↔ south",
        "isGuide": false
      },
      {
        "english": "fish",
        "chinese": "鱼",
        "phonetic": "",
        "category": "引导词",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "fishing",
        "chinese": "钓鱼",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fishnet",
        "chinese": "渔网",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fishbowl",
        "chinese": "鱼缸",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fishpond",
        "chinese": "鱼塘",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fisherman",
        "chinese": "渔夫",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "27": [
      {
        "english": "high",
        "chinese": "高的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：/aɪ/ 音",
        "relation": "同韵：/aɪ/ 音",
        "isGuide": false
      },
      {
        "english": "why",
        "chinese": "为什么",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：/aɪ/ 音",
        "relation": "同韵：/aɪ/ 音",
        "isGuide": false
      },
      {
        "english": "sky",
        "chinese": "天空",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：/aɪ/ 音",
        "relation": "同韵：/aɪ/ 音",
        "isGuide": false
      },
      {
        "english": "fly",
        "chinese": "飞",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：/aɪ/ 音",
        "relation": "同韵：/aɪ/ 音",
        "isGuide": false
      },
      {
        "english": "try",
        "chinese": "尝试",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：/aɪ/ 音",
        "relation": "同韵：/aɪ/ 音",
        "isGuide": false
      },
      {
        "english": "east",
        "chinese": "东",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "east ↔ west",
        "isGuide": false
      },
      {
        "english": "west",
        "chinese": "西",
        "phonetic": "/west/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "east ↔ west",
        "isGuide": false
      },
      {
        "english": "morning",
        "chinese": "早上",
        "phonetic": "/'mɒ:niŋ/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "morning ↔ evening",
        "isGuide": false
      },
      {
        "english": "evening",
        "chinese": "晚上",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "morning ↔ evening",
        "isGuide": false
      },
      {
        "english": "hair",
        "chinese": "头发",
        "phonetic": "/hєә/",
        "category": "引导词",
        "theme": "hair",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "haircut",
        "chinese": "发型",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hair",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "hairband",
        "chinese": "发带",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hair",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "hairline",
        "chinese": "发际线",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hair",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "hairbrush",
        "chinese": "发刷",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hair",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "hairstyle",
        "chinese": "发型",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hair",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "28": [
      {
        "english": "meat",
        "chinese": "肉",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-eat /iːt/",
        "relation": "同韵：-eat /iːt/",
        "isGuide": false
      },
      {
        "english": "seat",
        "chinese": "座位",
        "phonetic": "/si:t/",
        "category": "同音词",
        "theme": "同韵：-eat /iːt/",
        "relation": "同韵：-eat /iːt/",
        "isGuide": false
      },
      {
        "english": "beat",
        "chinese": "打",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-eat /iːt/",
        "relation": "同韵：-eat /iːt/",
        "isGuide": false
      },
      {
        "english": "heat",
        "chinese": "热",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-eat /iːt/",
        "relation": "同韵：-eat /iːt/",
        "isGuide": false
      },
      {
        "english": "sweet",
        "chinese": "甜的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-eat /iːt/",
        "relation": "同韵：-eat /iːt/",
        "isGuide": false
      },
      {
        "english": "always",
        "chinese": "总是",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "always ↔ never",
        "isGuide": false
      },
      {
        "english": "never",
        "chinese": "从不",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "always ↔ never",
        "isGuide": false
      },
      {
        "english": "often",
        "chinese": "经常",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "often ↔ rarely",
        "isGuide": false
      },
      {
        "english": "rarely",
        "chinese": "很少",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "often ↔ rarely",
        "isGuide": false
      },
      {
        "english": "art",
        "chinese": "艺术",
        "phonetic": "",
        "category": "引导词",
        "theme": "art",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "arts",
        "chinese": "艺术",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "art",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "artist",
        "chinese": "艺术家",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "art",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "artwork",
        "chinese": "艺术作品",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "art",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "artistic",
        "chinese": "艺术的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "art",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "artistry",
        "chinese": "艺术才能",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "art",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "29": [
      {
        "english": "cool",
        "chinese": "酷的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "rule",
        "chinese": "规则",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "pool",
        "chinese": "游泳池",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "tool",
        "chinese": "工具",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "fool",
        "chinese": "傻瓜",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 u 音 /uː/",
        "relation": "同韵：长 u 音 /uː/",
        "isGuide": false
      },
      {
        "english": "together",
        "chinese": "一起",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "together ↔ apart",
        "isGuide": false
      },
      {
        "english": "apart",
        "chinese": "分开",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "together ↔ apart",
        "isGuide": false
      },
      {
        "english": "above",
        "chinese": "在上面",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "above ↔ below",
        "isGuide": false
      },
      {
        "english": "below",
        "chinese": "在下面",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "above ↔ below",
        "isGuide": false
      },
      {
        "english": "act",
        "chinese": "行动",
        "phonetic": "",
        "category": "引导词",
        "theme": "act",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "actor",
        "chinese": "演员",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "act",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "action",
        "chinese": "行动",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "act",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "active",
        "chinese": "活跃的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "act",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "actress",
        "chinese": "女演员",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "act",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "activity",
        "chinese": "活动",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "act",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "30": [
      {
        "english": "side",
        "chinese": "一侧",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ide /aɪd/",
        "relation": "同韵：-ide /aɪd/",
        "isGuide": false
      },
      {
        "english": "ride",
        "chinese": "骑",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ide /aɪd/",
        "relation": "同韵：-ide /aɪd/",
        "isGuide": false
      },
      {
        "english": "hide",
        "chinese": "藏",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ide /aɪd/",
        "relation": "同韵：-ide /aɪd/",
        "isGuide": false
      },
      {
        "english": "wide",
        "chinese": "宽的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ide /aɪd/",
        "relation": "同韵：-ide /aɪd/",
        "isGuide": false
      },
      {
        "english": "guide",
        "chinese": "指导",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ide /aɪd/",
        "relation": "同韵：-ide /aɪd/",
        "isGuide": false
      },
      {
        "english": "front",
        "chinese": "前面",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "front ↔ back",
        "isGuide": false
      },
      {
        "english": "back",
        "chinese": "后面",
        "phonetic": "/bæk/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "front ↔ back",
        "isGuide": false
      },
      {
        "english": "top",
        "chinese": "顶部",
        "phonetic": "/tɑːp/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "top ↔ bottom",
        "isGuide": false
      },
      {
        "english": "bottom",
        "chinese": "底部",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "top ↔ bottom",
        "isGuide": false
      },
      {
        "english": "game",
        "chinese": "游戏",
        "phonetic": "/ɡeɪm/",
        "category": "引导词",
        "theme": "game",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "gamer",
        "chinese": "玩家",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "game",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "gaming",
        "chinese": "游戏活动",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "game",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "gamepad",
        "chinese": "游戏手柄",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "game",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "gameplay",
        "chinese": "游戏玩法",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "game",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "gameboard",
        "chinese": "游戏板",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "game",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "31": [
      {
        "english": "sing",
        "chinese": "唱歌",
        "phonetic": "/sɪŋ/",
        "category": "同音词",
        "theme": "同韵：-ing /ɪŋ/",
        "relation": "同韵：-ing /ɪŋ/",
        "isGuide": false
      },
      {
        "english": "ring",
        "chinese": "戒指",
        "phonetic": "/rɪŋ/",
        "category": "同音词",
        "theme": "同韵：-ing /ɪŋ/",
        "relation": "同韵：-ing /ɪŋ/",
        "isGuide": false
      },
      {
        "english": "bring",
        "chinese": "带来",
        "phonetic": "/briŋ/",
        "category": "同音词",
        "theme": "同韵：-ing /ɪŋ/",
        "relation": "同韵：-ing /ɪŋ/",
        "isGuide": false
      },
      {
        "english": "thing",
        "chinese": "东西",
        "phonetic": "/θiŋ/",
        "category": "同音词",
        "theme": "同韵：-ing /ɪŋ/",
        "relation": "同韵：-ing /ɪŋ/",
        "isGuide": false
      },
      {
        "english": "king",
        "chinese": "国王",
        "phonetic": "/kiŋ/",
        "category": "同音词",
        "theme": "同韵：-ing /ɪŋ/",
        "relation": "同韵：-ing /ɪŋ/",
        "isGuide": false
      },
      {
        "english": "begin",
        "chinese": "开始",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "begin ↔ end",
        "isGuide": false
      },
      {
        "english": "end",
        "chinese": "结束",
        "phonetic": "/end/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "begin ↔ end",
        "isGuide": false
      },
      {
        "english": "ask",
        "chinese": "问",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "ask ↔ answer",
        "isGuide": false
      },
      {
        "english": "answer",
        "chinese": "回答",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "ask ↔ answer",
        "isGuide": false
      },
      {
        "english": "web",
        "chinese": "网络",
        "phonetic": "",
        "category": "引导词",
        "theme": "web",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "webcam",
        "chinese": "网络摄像头",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "web",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "website",
        "chinese": "网站",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "web",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "webpage",
        "chinese": "网页",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "web",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "webmail",
        "chinese": "网页邮箱",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "web",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "webinar",
        "chinese": "网络研讨会",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "web",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "32": [
      {
        "english": "long",
        "chinese": "长的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ong /ɔːŋ/",
        "relation": "同韵：-ong /ɔːŋ/",
        "isGuide": false
      },
      {
        "english": "song",
        "chinese": "歌曲",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ong /ɔːŋ/",
        "relation": "同韵：-ong /ɔːŋ/",
        "isGuide": false
      },
      {
        "english": "wrong",
        "chinese": "错误的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ong /ɔːŋ/",
        "relation": "同韵：-ong /ɔːŋ/",
        "isGuide": false
      },
      {
        "english": "strong",
        "chinese": "强壮的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ong /ɔːŋ/",
        "relation": "同韵：-ong /ɔːŋ/",
        "isGuide": false
      },
      {
        "english": "along",
        "chinese": "沿着",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ong /ɔːŋ/",
        "relation": "同韵：-ong /ɔːŋ/",
        "isGuide": false
      },
      {
        "english": "send",
        "chinese": "发送",
        "phonetic": "/send/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "send ↔ receive",
        "isGuide": false
      },
      {
        "english": "receive",
        "chinese": "接收",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "send ↔ receive",
        "isGuide": false
      },
      {
        "english": "inside",
        "chinese": "里面",
        "phonetic": "/ˌɪnˈsaɪd/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "inside ↔ outside",
        "isGuide": false
      },
      {
        "english": "outside",
        "chinese": "外面",
        "phonetic": "/ˌaʊtˈsaɪd/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "inside ↔ outside",
        "isGuide": false
      },
      {
        "english": "mail",
        "chinese": "邮件",
        "phonetic": "",
        "category": "引导词",
        "theme": "mail",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "email",
        "chinese": "电子邮件",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mail",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "mailbox",
        "chinese": "邮箱",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mail",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "mailman",
        "chinese": "邮递员",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mail",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "mailroom",
        "chinese": "邮件室",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mail",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "voicemail",
        "chinese": "语音邮件",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mail",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "33": [
      {
        "english": "hand",
        "chinese": "手",
        "phonetic": "/hænd/",
        "category": "同音词",
        "theme": "同韵：-and /ænd/",
        "relation": "同韵：-and /ænd/",
        "isGuide": false
      },
      {
        "english": "land",
        "chinese": "土地",
        "phonetic": "/lænd/",
        "category": "同音词",
        "theme": "同韵：-and /ænd/",
        "relation": "同韵：-and /ænd/",
        "isGuide": false
      },
      {
        "english": "stand",
        "chinese": "站",
        "phonetic": "/stænd/",
        "category": "同音词",
        "theme": "同韵：-and /ænd/",
        "relation": "同韵：-and /ænd/",
        "isGuide": false
      },
      {
        "english": "band",
        "chinese": "乐队",
        "phonetic": "/bænd/",
        "category": "同音词",
        "theme": "同韵：-and /ænd/",
        "relation": "同韵：-and /ænd/",
        "isGuide": false
      },
      {
        "english": "sand",
        "chinese": "沙",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-and /ænd/",
        "relation": "同韵：-and /ænd/",
        "isGuide": false
      },
      {
        "english": "same",
        "chinese": "相同的",
        "phonetic": "/seim/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "same ↔ different",
        "isGuide": false
      },
      {
        "english": "different",
        "chinese": "不同的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "same ↔ different",
        "isGuide": false
      },
      {
        "english": "accept",
        "chinese": "接受",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "accept ↔ refuse",
        "isGuide": false
      },
      {
        "english": "refuse",
        "chinese": "拒绝",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "accept ↔ refuse",
        "isGuide": false
      },
      {
        "english": "drive",
        "chinese": "驾驶",
        "phonetic": "",
        "category": "引导词",
        "theme": "drive",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "driver",
        "chinese": "驾驶员",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "drive",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "driven",
        "chinese": "被驱动的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "drive",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "driving",
        "chinese": "驾驶",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "drive",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "driveway",
        "chinese": "车道",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "drive",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "overdrive",
        "chinese": "超负荷运转",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "drive",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "34": [
      {
        "english": "park",
        "chinese": "公园",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ark /ɑːrk/",
        "relation": "同韵：-ark /ɑːrk/",
        "isGuide": false
      },
      {
        "english": "dark",
        "chinese": "黑暗的",
        "phonetic": "/dɑ:k/",
        "category": "同音词",
        "theme": "同韵：-ark /ɑːrk/",
        "relation": "同韵：-ark /ɑːrk/",
        "isGuide": false
      },
      {
        "english": "mark",
        "chinese": "标记",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ark /ɑːrk/",
        "relation": "同韵：-ark /ɑːrk/",
        "isGuide": false
      },
      {
        "english": "shark",
        "chinese": "鲨鱼",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ark /ɑːrk/",
        "relation": "同韵：-ark /ɑːrk/",
        "isGuide": false
      },
      {
        "english": "spark",
        "chinese": "火花",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ark /ɑːrk/",
        "relation": "同韵：-ark /ɑːrk/",
        "isGuide": false
      },
      {
        "english": "add",
        "chinese": "添加",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "add ↔ remove",
        "isGuide": false
      },
      {
        "english": "remove",
        "chinese": "移除",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "add ↔ remove",
        "isGuide": false
      },
      {
        "english": "increase",
        "chinese": "增加",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "increase ↔ decrease",
        "isGuide": false
      },
      {
        "english": "decrease",
        "chinese": "减少",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "increase ↔ decrease",
        "isGuide": false
      },
      {
        "english": "color",
        "chinese": "颜色",
        "phonetic": "",
        "category": "引导词",
        "theme": "color",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "colored",
        "chinese": "有颜色的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "color",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "coloring",
        "chinese": "涂色",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "color",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "colorful",
        "chinese": "色彩丰富的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "color",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "colorless",
        "chinese": "无色的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "color",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "colorblind",
        "chinese": "色盲的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "color",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "35": [
      {
        "english": "best",
        "chinese": "最好的",
        "phonetic": "/best/",
        "category": "同音词",
        "theme": "同韵：-est /ɛst/",
        "relation": "同韵：-est /ɛst/",
        "isGuide": false
      },
      {
        "english": "rest",
        "chinese": "休息",
        "phonetic": "/rest/",
        "category": "同音词",
        "theme": "同韵：-est /ɛst/",
        "relation": "同韵：-est /ɛst/",
        "isGuide": false
      },
      {
        "english": "test",
        "chinese": "测试",
        "phonetic": "/test/",
        "category": "同音词",
        "theme": "同韵：-est /ɛst/",
        "relation": "同韵：-est /ɛst/",
        "isGuide": false
      },
      {
        "english": "west",
        "chinese": "西方",
        "phonetic": "/west/",
        "category": "同音词",
        "theme": "同韵：-est /ɛst/",
        "relation": "同韵：-est /ɛst/",
        "isGuide": false
      },
      {
        "english": "chest",
        "chinese": "胸部",
        "phonetic": "/tʃest/",
        "category": "同音词",
        "theme": "同韵：-est /ɛst/",
        "relation": "同韵：-est /ɛst/",
        "isGuide": false
      },
      {
        "english": "include",
        "chinese": "包括",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "include ↔ exclude",
        "isGuide": false
      },
      {
        "english": "exclude",
        "chinese": "排除",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "include ↔ exclude",
        "isGuide": false
      },
      {
        "english": "arrive",
        "chinese": "到达",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "arrive ↔ depart",
        "isGuide": false
      },
      {
        "english": "depart",
        "chinese": "离开",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "arrive ↔ depart",
        "isGuide": false
      },
      {
        "english": "mark",
        "chinese": "标记",
        "phonetic": "",
        "category": "引导词",
        "theme": "mark",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "marker",
        "chinese": "记号笔",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mark",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "remark",
        "chinese": "评论",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mark",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "marking",
        "chinese": "标记",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mark",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "bookmark",
        "chinese": "书签",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mark",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "watermark",
        "chinese": "水印",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "mark",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "36": [
      {
        "english": "sun",
        "chinese": "太阳",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-un /ʌn/",
        "relation": "同韵：-un /ʌn/",
        "isGuide": false
      },
      {
        "english": "fun",
        "chinese": "乐趣",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-un /ʌn/",
        "relation": "同韵：-un /ʌn/",
        "isGuide": false
      },
      {
        "english": "run",
        "chinese": "跑",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-un /ʌn/",
        "relation": "同韵：-un /ʌn/",
        "isGuide": false
      },
      {
        "english": "done",
        "chinese": "完成了",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-un /ʌn/",
        "relation": "同韵：-un /ʌn/",
        "isGuide": false
      },
      {
        "english": "son",
        "chinese": "儿子",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-un /ʌn/",
        "relation": "同韵：-un /ʌn/",
        "isGuide": false
      },
      {
        "english": "borrow",
        "chinese": "借入",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "borrow ↔ lend",
        "isGuide": false
      },
      {
        "english": "lend",
        "chinese": "借出",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "borrow ↔ lend",
        "isGuide": false
      },
      {
        "english": "pass",
        "chinese": "通过",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "pass ↔ fail",
        "isGuide": false
      },
      {
        "english": "fail",
        "chinese": "失败",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "pass ↔ fail",
        "isGuide": false
      },
      {
        "english": "land",
        "chinese": "土地",
        "phonetic": "/lænd/",
        "category": "引导词",
        "theme": "land",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "landing",
        "chinese": "着陆",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "land",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "inland",
        "chinese": "内陆的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "land",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "homeland",
        "chinese": "祖国",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "land",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "mainland",
        "chinese": "大陆",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "land",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "landmark",
        "chinese": "地标",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "land",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "37": [
      {
        "english": "friend",
        "chinese": "朋友",
        "phonetic": "/frend/",
        "category": "同音词",
        "theme": "同韵：-end /ɛnd/",
        "relation": "同韵：-end /ɛnd/",
        "isGuide": false
      },
      {
        "english": "end",
        "chinese": "结束",
        "phonetic": "/end/",
        "category": "同音词",
        "theme": "同韵：-end /ɛnd/",
        "relation": "同韵：-end /ɛnd/",
        "isGuide": false
      },
      {
        "english": "send",
        "chinese": "发送",
        "phonetic": "/send/",
        "category": "同音词",
        "theme": "同韵：-end /ɛnd/",
        "relation": "同韵：-end /ɛnd/",
        "isGuide": false
      },
      {
        "english": "spend",
        "chinese": "花费",
        "phonetic": "/spend/",
        "category": "同音词",
        "theme": "同韵：-end /ɛnd/",
        "relation": "同韵：-end /ɛnd/",
        "isGuide": false
      },
      {
        "english": "bend",
        "chinese": "弯曲",
        "phonetic": "/bend/",
        "category": "同音词",
        "theme": "同韵：-end /ɛnd/",
        "relation": "同韵：-end /ɛnd/",
        "isGuide": false
      },
      {
        "english": "find",
        "chinese": "找到",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "find ↔ lose",
        "isGuide": false
      },
      {
        "english": "lose",
        "chinese": "丢失",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "find ↔ lose",
        "isGuide": false
      },
      {
        "english": "possible",
        "chinese": "可能的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "possible ↔ impossible",
        "isGuide": false
      },
      {
        "english": "impossible",
        "chinese": "不可能的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "possible ↔ impossible",
        "isGuide": false
      },
      {
        "english": "shop",
        "chinese": "商店",
        "phonetic": "/ʃɑːp/",
        "category": "引导词",
        "theme": "shop",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "shopper",
        "chinese": "购物者",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "shop",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "shopping",
        "chinese": "购物",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "shop",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "shoplift",
        "chinese": "商店偷窃",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "shop",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "shopfront",
        "chinese": "店面",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "shop",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "shopkeeper",
        "chinese": "店主",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "shop",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "38": [
      {
        "english": "tone",
        "chinese": "语气",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-one /oʊn/",
        "relation": "同韵：-one /oʊn/",
        "isGuide": false
      },
      {
        "english": "alone",
        "chinese": "独自的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-one /oʊn/",
        "relation": "同韵：-one /oʊn/",
        "isGuide": false
      },
      {
        "english": "known",
        "chinese": "已知的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-one /oʊn/",
        "relation": "同韵：-one /oʊn/",
        "isGuide": false
      },
      {
        "english": "stone",
        "chinese": "石头",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-one /oʊn/",
        "relation": "同韵：-one /oʊn/",
        "isGuide": false
      },
      {
        "english": "zone",
        "chinese": "区域",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-one /oʊn/",
        "relation": "同韵：-one /oʊn/",
        "isGuide": false
      },
      {
        "english": "public",
        "chinese": "公开的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "public ↔ private",
        "isGuide": false
      },
      {
        "english": "private",
        "chinese": "私人的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "public ↔ private",
        "isGuide": false
      },
      {
        "english": "local",
        "chinese": "当地的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "local ↔ global",
        "isGuide": false
      },
      {
        "english": "global",
        "chinese": "全球的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "local ↔ global",
        "isGuide": false
      },
      {
        "english": "paint",
        "chinese": "画",
        "phonetic": "",
        "category": "引导词",
        "theme": "paint",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "painter",
        "chinese": "画家",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "paint",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "painting",
        "chinese": "绘画",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "paint",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "repaint",
        "chinese": "重新粉刷",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "paint",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "paintwork",
        "chinese": "油漆表面",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "paint",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "paintbrush",
        "chinese": "画笔",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "paint",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "39": [
      {
        "english": "green",
        "chinese": "绿色的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-een /iːn/",
        "relation": "同韵：-een /iːn/",
        "isGuide": false
      },
      {
        "english": "mean",
        "chinese": "意思是",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-een /iːn/",
        "relation": "同韵：-een /iːn/",
        "isGuide": false
      },
      {
        "english": "seen",
        "chinese": "看见过",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-een /iːn/",
        "relation": "同韵：-een /iːn/",
        "isGuide": false
      },
      {
        "english": "screen",
        "chinese": "屏幕",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-een /iːn/",
        "relation": "同韵：-een /iːn/",
        "isGuide": false
      },
      {
        "english": "teen",
        "chinese": "青少年",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-een /iːn/",
        "relation": "同韵：-een /iːn/",
        "isGuide": false
      },
      {
        "english": "simple",
        "chinese": "简单的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "simple ↔ complex",
        "isGuide": false
      },
      {
        "english": "complex",
        "chinese": "复杂的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "simple ↔ complex",
        "isGuide": false
      },
      {
        "english": "hard",
        "chinese": "硬的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hard ↔ soft",
        "isGuide": false
      },
      {
        "english": "soft",
        "chinese": "软的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hard ↔ soft",
        "isGuide": false
      },
      {
        "english": "rain",
        "chinese": "雨",
        "phonetic": "/reɪn/",
        "category": "引导词",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "rainy",
        "chinese": "下雨的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "raincoat",
        "chinese": "雨衣",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "rainbow",
        "chinese": "彩虹",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "raindrop",
        "chinese": "雨滴",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "rainfall",
        "chinese": "降雨量",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "rain",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "40": [
      {
        "english": "hair",
        "chinese": "头发",
        "phonetic": "/hєә/",
        "category": "同音词",
        "theme": "同韵：-air/-are /ɛr/",
        "relation": "同韵：-air/-are /ɛr/",
        "isGuide": false
      },
      {
        "english": "fair",
        "chinese": "公平的",
        "phonetic": "/fer/",
        "category": "同音词",
        "theme": "同韵：-air/-are /ɛr/",
        "relation": "同韵：-air/-are /ɛr/",
        "isGuide": false
      },
      {
        "english": "care",
        "chinese": "关心",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-air/-are /ɛr/",
        "relation": "同韵：-air/-are /ɛr/",
        "isGuide": false
      },
      {
        "english": "share",
        "chinese": "分享",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-air/-are /ɛr/",
        "relation": "同韵：-air/-are /ɛr/",
        "isGuide": false
      },
      {
        "english": "stare",
        "chinese": "盯着看",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-air/-are /ɛr/",
        "relation": "同韵：-air/-are /ɛr/",
        "isGuide": false
      },
      {
        "english": "deep",
        "chinese": "深的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "deep ↔ shallow",
        "isGuide": false
      },
      {
        "english": "shallow",
        "chinese": "浅的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "deep ↔ shallow",
        "isGuide": false
      },
      {
        "english": "thick",
        "chinese": "厚的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "thick ↔ thin",
        "isGuide": false
      },
      {
        "english": "thin",
        "chinese": "薄的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "thick ↔ thin",
        "isGuide": false
      },
      {
        "english": "sun",
        "chinese": "太阳",
        "phonetic": "",
        "category": "引导词",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "sunny",
        "chinese": "晴朗的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunrise",
        "chinese": "日出",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunset",
        "chinese": "日落",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunlight",
        "chinese": "阳光",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sunscreen",
        "chinese": "防晒霜",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sun",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "41": [
      {
        "english": "stop",
        "chinese": "停止",
        "phonetic": "/stɑːp/",
        "category": "同音词",
        "theme": "同韵：-op /ɒp~ɑːp/",
        "relation": "同韵：-op /ɒp~ɑːp/",
        "isGuide": false
      },
      {
        "english": "shop",
        "chinese": "商店",
        "phonetic": "/ʃɑːp/",
        "category": "同音词",
        "theme": "同韵：-op /ɒp~ɑːp/",
        "relation": "同韵：-op /ɒp~ɑːp/",
        "isGuide": false
      },
      {
        "english": "top",
        "chinese": "顶部",
        "phonetic": "/tɑːp/",
        "category": "同音词",
        "theme": "同韵：-op /ɒp~ɑːp/",
        "relation": "同韵：-op /ɒp~ɑːp/",
        "isGuide": false
      },
      {
        "english": "drop",
        "chinese": "掉下",
        "phonetic": "/drɑːp/",
        "category": "同音词",
        "theme": "同韵：-op /ɒp~ɑːp/",
        "relation": "同韵：-op /ɒp~ɑːp/",
        "isGuide": false
      },
      {
        "english": "pop",
        "chinese": "流行的",
        "phonetic": "/pɑːp/",
        "category": "同音词",
        "theme": "同韵：-op /ɒp~ɑːp/",
        "relation": "同韵：-op /ɒp~ɑːp/",
        "isGuide": false
      },
      {
        "english": "wide",
        "chinese": "宽的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "wide ↔ narrow",
        "isGuide": false
      },
      {
        "english": "narrow",
        "chinese": "窄的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "wide ↔ narrow",
        "isGuide": false
      },
      {
        "english": "loud",
        "chinese": "大声的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "loud ↔ quiet",
        "isGuide": false
      },
      {
        "english": "quiet",
        "chinese": "安静的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "loud ↔ quiet",
        "isGuide": false
      },
      {
        "english": "snow",
        "chinese": "雪",
        "phonetic": "",
        "category": "引导词",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "snowy",
        "chinese": "下雪的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowman",
        "chinese": "雪人",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowball",
        "chinese": "雪球",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowflake",
        "chinese": "雪花",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "snowfall",
        "chinese": "降雪量",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "snow",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "42": [
      {
        "english": "rain",
        "chinese": "雨",
        "phonetic": "/reɪn/",
        "category": "同音词",
        "theme": "同韵：-ain /eɪn/",
        "relation": "同韵：-ain /eɪn/",
        "isGuide": false
      },
      {
        "english": "train",
        "chinese": "火车",
        "phonetic": "/treɪn/",
        "category": "同音词",
        "theme": "同韵：-ain /eɪn/",
        "relation": "同韵：-ain /eɪn/",
        "isGuide": false
      },
      {
        "english": "pain",
        "chinese": "疼痛",
        "phonetic": "/pein/",
        "category": "同音词",
        "theme": "同韵：-ain /eɪn/",
        "relation": "同韵：-ain /eɪn/",
        "isGuide": false
      },
      {
        "english": "main",
        "chinese": "主要的",
        "phonetic": "/meɪn/",
        "category": "同音词",
        "theme": "同韵：-ain /eɪn/",
        "relation": "同韵：-ain /eɪn/",
        "isGuide": false
      },
      {
        "english": "brain",
        "chinese": "大脑",
        "phonetic": "/breɪn/",
        "category": "同音词",
        "theme": "同韵：-ain /eɪn/",
        "relation": "同韵：-ain /eɪn/",
        "isGuide": false
      },
      {
        "english": "warm",
        "chinese": "温暖的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "warm ↔ cool",
        "isGuide": false
      },
      {
        "english": "cool",
        "chinese": "凉的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "warm ↔ cool",
        "isGuide": false
      },
      {
        "english": "sweet",
        "chinese": "甜的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "sweet ↔ sour",
        "isGuide": false
      },
      {
        "english": "sour",
        "chinese": "酸的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "sweet ↔ sour",
        "isGuide": false
      },
      {
        "english": "air",
        "chinese": "空气",
        "phonetic": "/єә/",
        "category": "引导词",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "airbag",
        "chinese": "安全气囊",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airport",
        "chinese": "机场",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airline",
        "chinese": "航空公司",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airplane",
        "chinese": "飞机",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "airfare",
        "chinese": "机票价格",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "air",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "43": [
      {
        "english": "fire",
        "chinese": "火",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ire /aɪr/",
        "relation": "同韵：-ire /aɪr/",
        "isGuide": false
      },
      {
        "english": "wire",
        "chinese": "电线",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ire /aɪr/",
        "relation": "同韵：-ire /aɪr/",
        "isGuide": false
      },
      {
        "english": "hire",
        "chinese": "雇用",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ire /aɪr/",
        "relation": "同韵：-ire /aɪr/",
        "isGuide": false
      },
      {
        "english": "tire",
        "chinese": "轮胎",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ire /aɪr/",
        "relation": "同韵：-ire /aɪr/",
        "isGuide": false
      },
      {
        "english": "higher",
        "chinese": "更高的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ire /aɪr/",
        "relation": "同韵：-ire /aɪr/",
        "isGuide": false
      },
      {
        "english": "kind",
        "chinese": "友善的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "kind ↔ mean",
        "isGuide": false
      },
      {
        "english": "mean",
        "chinese": "刻薄的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "kind ↔ mean",
        "isGuide": false
      },
      {
        "english": "polite",
        "chinese": "礼貌的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "polite ↔ rude",
        "isGuide": false
      },
      {
        "english": "rude",
        "chinese": "粗鲁的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "polite ↔ rude",
        "isGuide": false
      },
      {
        "english": "head",
        "chinese": "头",
        "phonetic": "",
        "category": "引导词",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "headset",
        "chinese": "耳机",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headband",
        "chinese": "头带",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headache",
        "chinese": "头痛",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headline",
        "chinese": "标题",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "headlight",
        "chinese": "车头灯",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "head",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "44": [
      {
        "english": "mind",
        "chinese": "头脑",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ind /aɪnd/",
        "relation": "同韵：-ind /aɪnd/",
        "isGuide": false
      },
      {
        "english": "find",
        "chinese": "找到",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ind /aɪnd/",
        "relation": "同韵：-ind /aɪnd/",
        "isGuide": false
      },
      {
        "english": "kind",
        "chinese": "善良的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ind /aɪnd/",
        "relation": "同韵：-ind /aɪnd/",
        "isGuide": false
      },
      {
        "english": "behind",
        "chinese": "在后面",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ind /aɪnd/",
        "relation": "同韵：-ind /aɪnd/",
        "isGuide": false
      },
      {
        "english": "remind",
        "chinese": "提醒",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ind /aɪnd/",
        "relation": "同韵：-ind /aɪnd/",
        "isGuide": false
      },
      {
        "english": "correct",
        "chinese": "正确的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "correct ↔ wrong",
        "isGuide": false
      },
      {
        "english": "wrong",
        "chinese": "错误的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "correct ↔ wrong",
        "isGuide": false
      },
      {
        "english": "real",
        "chinese": "真的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "real ↔ fake",
        "isGuide": false
      },
      {
        "english": "fake",
        "chinese": "假的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "real ↔ fake",
        "isGuide": false
      },
      {
        "english": "hand",
        "chinese": "手",
        "phonetic": "/hænd/",
        "category": "引导词",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "handbag",
        "chinese": "手提包",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handful",
        "chinese": "一把",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handbook",
        "chinese": "手册",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handmade",
        "chinese": "手工制作的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "handshake",
        "chinese": "握手",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "hand",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "45": [
      {
        "english": "sound",
        "chinese": "声音",
        "phonetic": "/saund/",
        "category": "同音词",
        "theme": "同韵：-ound /aʊnd/",
        "relation": "同韵：-ound /aʊnd/",
        "isGuide": false
      },
      {
        "english": "round",
        "chinese": "圆的",
        "phonetic": "/raund/",
        "category": "同音词",
        "theme": "同韵：-ound /aʊnd/",
        "relation": "同韵：-ound /aʊnd/",
        "isGuide": false
      },
      {
        "english": "found",
        "chinese": "找到",
        "phonetic": "/faund/",
        "category": "同音词",
        "theme": "同韵：-ound /aʊnd/",
        "relation": "同韵：-ound /aʊnd/",
        "isGuide": false
      },
      {
        "english": "ground",
        "chinese": "地面",
        "phonetic": "/graund/",
        "category": "同音词",
        "theme": "同韵：-ound /aʊnd/",
        "relation": "同韵：-ound /aʊnd/",
        "isGuide": false
      },
      {
        "english": "pound",
        "chinese": "英镑",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ound /aʊnd/",
        "relation": "同韵：-ound /aʊnd/",
        "isGuide": false
      },
      {
        "english": "hot",
        "chinese": "热的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hot ↔ cold",
        "isGuide": false
      },
      {
        "english": "cold",
        "chinese": "冷的",
        "phonetic": "/kәuld/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hot ↔ cold",
        "isGuide": false
      },
      {
        "english": "full",
        "chinese": "满的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "full ↔ empty",
        "isGuide": false
      },
      {
        "english": "empty",
        "chinese": "空的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "full ↔ empty",
        "isGuide": false
      },
      {
        "english": "back",
        "chinese": "后面",
        "phonetic": "/bæk/",
        "category": "引导词",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "backpack",
        "chinese": "背包",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backseat",
        "chinese": "后座",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backyard",
        "chinese": "后院",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backward",
        "chinese": "向后的",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "backdrop",
        "chinese": "背景",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "back",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "46": [
      {
        "english": "line",
        "chinese": "线",
        "phonetic": "/lain/",
        "category": "同音词",
        "theme": "同韵：-ine /aɪn/",
        "relation": "同韵：-ine /aɪn/",
        "isGuide": false
      },
      {
        "english": "fine",
        "chinese": "好的",
        "phonetic": "/fain/",
        "category": "同音词",
        "theme": "同韵：-ine /aɪn/",
        "relation": "同韵：-ine /aɪn/",
        "isGuide": false
      },
      {
        "english": "mine",
        "chinese": "我的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ine /aɪn/",
        "relation": "同韵：-ine /aɪn/",
        "isGuide": false
      },
      {
        "english": "nine",
        "chinese": "九",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ine /aɪn/",
        "relation": "同韵：-ine /aɪn/",
        "isGuide": false
      },
      {
        "english": "sign",
        "chinese": "标志",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ine /aɪn/",
        "relation": "同韵：-ine /aɪn/",
        "isGuide": false
      },
      {
        "english": "early",
        "chinese": "早的",
        "phonetic": "/'ә:li/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "early ↔ late",
        "isGuide": false
      },
      {
        "english": "late",
        "chinese": "晚的",
        "phonetic": "/leit/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "early ↔ late",
        "isGuide": false
      },
      {
        "english": "old",
        "chinese": "老的",
        "phonetic": "/әuld/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "old ↔ young",
        "isGuide": false
      },
      {
        "english": "young",
        "chinese": "年轻的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "old ↔ young",
        "isGuide": false
      },
      {
        "english": "key",
        "chinese": "钥匙",
        "phonetic": "",
        "category": "引导词",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "keypad",
        "chinese": "键盘区",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keyhole",
        "chinese": "钥匙孔",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keyword",
        "chinese": "关键词",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keychain",
        "chinese": "钥匙链",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "keyboard",
        "chinese": "键盘",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "key",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "47": [
      {
        "english": "class",
        "chinese": "课",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ass /æs/",
        "relation": "同韵：-ass /æs/",
        "isGuide": false
      },
      {
        "english": "glass",
        "chinese": "玻璃",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ass /æs/",
        "relation": "同韵：-ass /æs/",
        "isGuide": false
      },
      {
        "english": "pass",
        "chinese": "通过",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ass /æs/",
        "relation": "同韵：-ass /æs/",
        "isGuide": false
      },
      {
        "english": "grass",
        "chinese": "草",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ass /æs/",
        "relation": "同韵：-ass /æs/",
        "isGuide": false
      },
      {
        "english": "last",
        "chinese": "最后的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ass /æs/",
        "relation": "同韵：-ass /æs/",
        "isGuide": false
      },
      {
        "english": "parent",
        "chinese": "父母",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "parent ↔ child",
        "isGuide": false
      },
      {
        "english": "child",
        "chinese": "孩子",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "parent ↔ child",
        "isGuide": false
      },
      {
        "english": "brother",
        "chinese": "兄弟",
        "phonetic": "/'brʌðә/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "brother ↔ sister",
        "isGuide": false
      },
      {
        "english": "sister",
        "chinese": "姐妹",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "brother ↔ sister",
        "isGuide": false
      },
      {
        "english": "side",
        "chinese": "一侧",
        "phonetic": "",
        "category": "引导词",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "inside",
        "chinese": "里面",
        "phonetic": "/ˌɪnˈsaɪd/",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "outside",
        "chinese": "外面",
        "phonetic": "/ˌaʊtˈsaɪd/",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "bedside",
        "chinese": "床边",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "roadside",
        "chinese": "路边",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "sidewalk",
        "chinese": "人行道",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "side",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "48": [
      {
        "english": "ice",
        "chinese": "冰",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ice /aɪs/",
        "relation": "同韵：-ice /aɪs/",
        "isGuide": false
      },
      {
        "english": "nice",
        "chinese": "好的",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ice /aɪs/",
        "relation": "同韵：-ice /aɪs/",
        "isGuide": false
      },
      {
        "english": "price",
        "chinese": "价格",
        "phonetic": "/praɪs/",
        "category": "同音词",
        "theme": "同韵：-ice /aɪs/",
        "relation": "同韵：-ice /aɪs/",
        "isGuide": false
      },
      {
        "english": "rice",
        "chinese": "米饭",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ice /aɪs/",
        "relation": "同韵：-ice /aɪs/",
        "isGuide": false
      },
      {
        "english": "twice",
        "chinese": "两次",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：-ice /aɪs/",
        "relation": "同韵：-ice /aɪs/",
        "isGuide": false
      },
      {
        "english": "healthy",
        "chinese": "健康的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "healthy ↔ sick",
        "isGuide": false
      },
      {
        "english": "sick",
        "chinese": "生病的",
        "phonetic": "/sɪk/",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "healthy ↔ sick",
        "isGuide": false
      },
      {
        "english": "strong",
        "chinese": "强壮的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "strong ↔ weak",
        "isGuide": false
      },
      {
        "english": "weak",
        "chinese": "虚弱的",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "strong ↔ weak",
        "isGuide": false
      },
      {
        "english": "sea",
        "chinese": "海",
        "phonetic": "",
        "category": "引导词",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "seafood",
        "chinese": "海鲜",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seaside",
        "chinese": "海边",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seaweed",
        "chinese": "海藻",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seawater",
        "chinese": "海水",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "seashore",
        "chinese": "海岸",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "sea",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "49": [
      {
        "english": "free",
        "chinese": "自由的",
        "phonetic": "/fri:/",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "three",
        "chinese": "三",
        "phonetic": "/θri:/",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "tree",
        "chinese": "树",
        "phonetic": "/triː/",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "agree",
        "chinese": "同意",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "degree",
        "chinese": "程度",
        "phonetic": "",
        "category": "同音词",
        "theme": "同韵：长 e 音 /iː/",
        "relation": "同韵：长 e 音 /iː/",
        "isGuide": false
      },
      {
        "english": "hurt",
        "chinese": "受伤",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hurt ↔ heal",
        "isGuide": false
      },
      {
        "english": "heal",
        "chinese": "康复",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "hurt ↔ heal",
        "isGuide": false
      },
      {
        "english": "push",
        "chinese": "推",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "push ↔ pull",
        "isGuide": false
      },
      {
        "english": "pull",
        "chinese": "拉",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "push ↔ pull",
        "isGuide": false
      },
      {
        "english": "farm",
        "chinese": "农场",
        "phonetic": "",
        "category": "引导词",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "farmer",
        "chinese": "农民",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farming",
        "chinese": "农业",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farmland",
        "chinese": "农田",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farmyard",
        "chinese": "农家庭院",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "farmhouse",
        "chinese": "农舍",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "farm",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ],
    "50": [
      {
        "english": "show",
        "chinese": "展示",
        "phonetic": "/ʃәu/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "slow",
        "chinese": "慢的",
        "phonetic": "/sloʊ/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "grow",
        "chinese": "生长",
        "phonetic": "/ɡroʊ/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "low",
        "chinese": "低的",
        "phonetic": "/loʊ/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "no",
        "chinese": "不",
        "phonetic": "/nәu/",
        "category": "同音词",
        "theme": "同韵：结尾都有 /oʊ/ 音",
        "relation": "同韵：结尾都有 /oʊ/ 音",
        "isGuide": false
      },
      {
        "english": "win",
        "chinese": "赢",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "win ↔ lose",
        "isGuide": false
      },
      {
        "english": "lose",
        "chinese": "输",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "win ↔ lose",
        "isGuide": false
      },
      {
        "english": "remember",
        "chinese": "记得",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "remember ↔ forget",
        "isGuide": false
      },
      {
        "english": "forget",
        "chinese": "忘记",
        "phonetic": "",
        "category": "成对词",
        "theme": "成对关系词",
        "relation": "remember ↔ forget",
        "isGuide": false
      },
      {
        "english": "fish",
        "chinese": "鱼",
        "phonetic": "",
        "category": "引导词",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": true
      },
      {
        "english": "fishing",
        "chinese": "钓鱼",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fishnet",
        "chinese": "渔网",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fishbowl",
        "chinese": "鱼缸",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fishpond",
        "chinese": "鱼塘",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      },
      {
        "english": "fisherman",
        "chinese": "渔夫",
        "phonetic": "",
        "category": "同词族/同韵",
        "theme": "fish",
        "relation": "短词 + 高频 + 同核心",
        "isGuide": false
      }
    ]
  };
  if (!window.ENGLISH_365_DATA) return;
  Object.entries(importedDays).forEach(([day, words]) => {
    window.ENGLISH_365_DATA.days[Number(day) - 1].words = words;
  });
})();
