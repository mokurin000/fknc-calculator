// Need unsafeWindow to replace fetch
// For webview, unsafeWindow doesn't exists.
const w = 'undefined' === typeof GM_info ? window : unsafeWindow;

const emailAddr = "guest@fknc.top";
const userId = "000d9a00-254f-41d3-a181-19d2afd2a1b9";
const identityId = "7aaf0e36-94d8-4453-becf-b8868f85af34";

const storageKey = "sb-nwacdthvbfukhxqyvuxh-auth-token";

let nickName = localStorage.getItem("nick-name") ?? "疯狂的农民";
let avatarIndex = parseInt(localStorage.getItem("avatar-index") ?? "18");

let game_data = `{
  "versions": {
    "cropsVersion": 8,
    "mutationsVersion": 2
  },
  "crops": [
    {
      "name": "土豆",
      "imageUrl": "/carzyfarm/土豆.png",
      "priceCoefficient": 26.3026,
      "maxWeight": 11.9,
      "growthSpeed": 28.5,
      "type": "普通",
      "specialMutations": [
        "薯片"
      ]
    },
    {
      "name": "香菇",
      "imageUrl": "/carzyfarm/香菇.png",
      "priceCoefficient": 687.682,
      "maxWeight": 3.4,
      "growthSpeed": 133,
      "type": "普通"
    },
    {
      "name": "番茄",
      "imageUrl": "/carzyfarm/番茄.png",
      "priceCoefficient": 66.2398,
      "maxWeight": 10.2,
      "growthSpeed": 33.33,
      "type": "普通"
    },
    {
      "name": "波斯菊",
      "imageUrl": "/carzyfarm/波斯菊.png",
      "priceCoefficient": 43.5395,
      "maxWeight": 34,
      "growthSpeed": 17,
      "type": "普通"
    },
    {
      "name": "大豆",
      "imageUrl": "/carzyfarm/大豆.png",
      "priceCoefficient": 2579.0104,
      "maxWeight": 3.4,
      "growthSpeed": 275,
      "type": "普通"
    },
    {
      "name": "竹子",
      "imageUrl": "/carzyfarm/竹子.png",
      "priceCoefficient": 12.2462,
      "maxWeight": 136,
      "growthSpeed": 7.5,
      "type": "普通"
    },
    {
      "name": "黄瓜",
      "imageUrl": "/carzyfarm/黄瓜.png",
      "priceCoefficient": 215.0457,
      "maxWeight": 13.6,
      "growthSpeed": 50,
      "type": "普通",
      "specialMutations": [
        "黄瓜蛇"
      ]
    },
    {
      "name": "西瓜",
      "imageUrl": "/carzyfarm/西瓜.png",
      "priceCoefficient": 10.7111,
      "maxWeight": 170,
      "growthSpeed": 6,
      "type": "普通",
      "specialMutations": [
        "方形"
      ]
    },
    {
      "name": "梨",
      "imageUrl": "/carzyfarm/梨.png",
      "priceCoefficient": 484.155,
      "maxWeight": 13.6,
      "growthSpeed": 75,
      "type": "普通"
    },
    {
      "name": "橘子",
      "imageUrl": "/carzyfarm/橘子.png",
      "priceCoefficient": 537.9143,
      "maxWeight": 13.6,
      "growthSpeed": 75,
      "type": "普通"
    },
    {
      "name": "玉米",
      "imageUrl": "/carzyfarm/玉米.png",
      "priceCoefficient": 103.5096,
      "maxWeight": 40.8,
      "growthSpeed": 27.78,
      "type": "普通"
    },
    {
      "name": "白菜",
      "imageUrl": "/carzyfarm/白菜.png",
      "priceCoefficient": 579.7213,
      "maxWeight": 10.2,
      "growthSpeed": 80,
      "type": "普通"
    },
    {
      "name": "牵牛花",
      "imageUrl": "/carzyfarm/牵牛花.png",
      "priceCoefficient": 2108.1851,
      "maxWeight": 5.1,
      "growthSpeed": 200,
      "type": "普通"
    },
    {
      "name": "棉花",
      "imageUrl": "/carzyfarm/棉花.png",
      "priceCoefficient": 2578.4733,
      "maxWeight": 5.2,
      "growthSpeed": 200,
      "type": "普通"
    },
    {
      "name": "苹果",
      "imageUrl": "/carzyfarm/苹果.png",
      "priceCoefficient": 188.7409,
      "maxWeight": 37.4,
      "growthSpeed": 40.5,
      "type": "普通",
      "specialMutations": [
        "糖葫芦"
      ]
    },
    {
      "name": "石榴",
      "imageUrl": "/carzyfarm/石榴.png",
      "priceCoefficient": 527.5836,
      "maxWeight": 20,
      "growthSpeed": 83.5,
      "type": "普通"
    },
    {
      "name": "香蕉",
      "imageUrl": "/carzyfarm/香蕉.png",
      "priceCoefficient": 2484.6553,
      "maxWeight": 10.2,
      "growthSpeed": 280,
      "type": "普通",
      "specialMutations": [
        "香蕉猴"
      ]
    },
    {
      "name": "车厘子",
      "imageUrl": "/carzyfarm/车厘子.png",
      "priceCoefficient": 1657.661,
      "maxWeight": 10.5,
      "growthSpeed": 166,
      "type": "普通"
    },
    {
      "name": "椰子",
      "imageUrl": "/carzyfarm/椰子.png",
      "priceCoefficient": 145.9826,
      "maxWeight": 40.8,
      "growthSpeed": 32.5,
      "type": "普通"
    },
    {
      "name": "南瓜",
      "imageUrl": "/carzyfarm/南瓜.png",
      "priceCoefficient": 12.9595,
      "maxWeight": 204,
      "growthSpeed": 6.5,
      "type": "普通",
      "specialMutations": [
        "万圣夜"
      ]
    },
    {
      "name": "草莓",
      "imageUrl": "/carzyfarm/草莓.png",
      "priceCoefficient": 8706.3654,
      "maxWeight": 8.5,
      "growthSpeed": 888,
      "type": "普通",
      "specialMutations": [
        "连体"
      ]
    },
    {
      "name": "猕猴桃",
      "imageUrl": "/carzyfarm/猕猴桃.png",
      "priceCoefficient": 2147.9813,
      "maxWeight": 13.6,
      "growthSpeed": 278,
      "type": "普通"
    },
    {
      "name": "荔枝",
      "imageUrl": "/carzyfarm/荔枝.png",
      "priceCoefficient": 790.1983,
      "maxWeight": 23.8,
      "growthSpeed": 135,
      "type": "普通"
    },
    {
      "name": "榴莲",
      "imageUrl": "/carzyfarm/榴莲.png",
      "priceCoefficient": 202.944,
      "maxWeight": 61.2,
      "growthSpeed": 55.55,
      "type": "普通"
    },
    {
      "name": "向日葵",
      "imageUrl": "/carzyfarm/向日葵.png",
      "priceCoefficient": 370.3206,
      "maxWeight": 51,
      "growthSpeed": 80,
      "type": "普通",
      "specialMutations": [
        "笑日葵"
      ]
    },
    {
      "name": "松果",
      "imageUrl": "/carzyfarm/松果.png",
      "priceCoefficient": 4615.5964,
      "maxWeight": 17,
      "growthSpeed": 570,
      "type": "普通"
    },
    {
      "name": "大王菊",
      "imageUrl": "/carzyfarm/大王菊.png",
      "priceCoefficient": 24833.3587,
      "maxWeight": 10.2,
      "growthSpeed": 2400,
      "type": "普通"
    },
    {
      "name": "葡萄",
      "imageUrl": "/carzyfarm/葡萄.png",
      "priceCoefficient": 24836.8915,
      "maxWeight": 10.2,
      "growthSpeed": 2400,
      "type": "普通"
    },
    {
      "name": "蟠桃",
      "imageUrl": "/carzyfarm/蟠桃.png",
      "priceCoefficient": 8783.1627,
      "maxWeight": 20.4,
      "growthSpeed": 1333.33,
      "type": "普通"
    },
    {
      "name": "惊奇菇",
      "imageUrl": "/carzyfarm/惊奇菇.png",
      "priceCoefficient": 49680.1819,
      "maxWeight": 10.2,
      "growthSpeed": 2400,
      "type": "普通"
    },
    {
      "name": "仙人掌象",
      "imageUrl": "/carzyfarm/仙人掌象.png",
      "priceCoefficient": 9525.0487,
      "maxWeight": 34,
      "growthSpeed": 720,
      "type": "普通"
    },
    {
      "name": "魔鬼朝天椒",
      "imageUrl": "/carzyfarm/魔鬼朝天椒.png",
      "priceCoefficient": 33143.6022,
      "maxWeight": 10.2,
      "growthSpeed": 2400,
      "type": "普通"
    },
    {
      "name": "月光草",
      "imageUrl": "/carzyfarm/月光草.png",
      "priceCoefficient": 343.8951,
      "maxWeight": 3.4,
      "growthSpeed": 111,
      "type": "月球"
    },
    {
      "name": "灰壤豆",
      "imageUrl": "/carzyfarm/灰壤豆.png",
      "priceCoefficient": 1374.736,
      "maxWeight": 3.4,
      "growthSpeed": 180,
      "type": "月球"
    },
    {
      "name": "月灯草",
      "imageUrl": "/carzyfarm/月灯草.png",
      "priceCoefficient": 1498.0086,
      "maxWeight": 5.1,
      "growthSpeed": 205,
      "type": "月球"
    },
    {
      "name": "月番茄",
      "imageUrl": "/carzyfarm/月番茄.png",
      "priceCoefficient": 662.4769,
      "maxWeight": 10.2,
      "growthSpeed": 111,
      "type": "月球"
    },
    {
      "name": "月环树",
      "imageUrl": "/carzyfarm/月环树.png",
      "priceCoefficient": 322.0468,
      "maxWeight": 20.4,
      "growthSpeed": 58,
      "type": "月球"
    },
    {
      "name": "银灰苔",
      "imageUrl": "/carzyfarm/银灰苔.png",
      "priceCoefficient": 3046.6455,
      "maxWeight": 5.1,
      "growthSpeed": 280,
      "type": "月球"
    },
    {
      "name": "月莓",
      "imageUrl": "/carzyfarm/月莓.png",
      "priceCoefficient": 3916.4157,
      "maxWeight": 8.5,
      "growthSpeed": 375,
      "type": "月球"
    },
    {
      "name": "星叶菜",
      "imageUrl": "/carzyfarm/星叶菜.png",
      "priceCoefficient": 3976.5503,
      "maxWeight": 10.2,
      "growthSpeed": 416,
      "type": "月球"
    },
    {
      "name": "月核树",
      "imageUrl": "/carzyfarm/月核树.png",
      "priceCoefficient": 3388.6303,
      "maxWeight": 17,
      "growthSpeed": 460,
      "type": "月球"
    },
    {
      "name": "液光藤",
      "imageUrl": "/carzyfarm/液光藤.png",
      "priceCoefficient": 3512.6104,
      "maxWeight": 20.4,
      "growthSpeed": 520,
      "type": "月球"
    },
    {
      "name": "幻月花",
      "imageUrl": "/carzyfarm/幻月花.png",
      "priceCoefficient": 8362.3227,
      "maxWeight": 23.8,
      "growthSpeed": 1142.5,
      "type": "月球"
    },
    {
      "name": "星空玫瑰",
      "imageUrl": "/carzyfarm/星空玫瑰1.png",
      "priceCoefficient": 33128.7533,
      "maxWeight": 10.2,
      "growthSpeed": 2966.6,
      "type": "月球"
    },
    {
      "name": "月兔",
      "imageUrl": "/carzyfarm/月兔1.png",
      "priceCoefficient": 11161.4743,
      "maxWeight": 23.8,
      "growthSpeed": 1524,
      "type": "月球"
    },
    {
      "name": "红包树",
      "imageUrl": "/carzyfarm/红包树1.png",
      "priceCoefficient": 83300.1019,
      "maxWeight": 5.1,
      "growthSpeed": 5270,
      "type": "月球"
    },
    {
      "name": "月影梅",
      "imageUrl": "/carzyfarm/月影梅.png",
      "priceCoefficient": 77270.106,
      "maxWeight": 3.4,
      "growthSpeed": 4000,
      "type": "月球"
    },
    {
      "name": "彼岸花",
      "imageUrl": "/carzyfarm/彼岸花1.png",
      "priceCoefficient": 49683.6217,
      "maxWeight": 10.2,
      "growthSpeed": 2766,
      "type": "月球"
    },
    {
      "name": "月蟾蜍",
      "imageUrl": "/carzyfarm/月蟾蜍1.png",
      "priceCoefficient": 9807.0881,
      "maxWeight": 34,
      "growthSpeed": 990,
      "type": "月球"
    }
  ],
  "mutations": [
    {
      "name": "金币",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "past",
      "shareBitIndex": 39,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "太阳耀斑",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "intermediate",
      "shareBitIndex": 34,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "薯片",
      "color": "紫色",
      "multiplier": 1.5,
      "groupKey": "special",
      "shareBitIndex": 5,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "瓷化",
      "color": "紫色",
      "multiplier": 8,
      "groupKey": "common",
      "shareBitIndex": 13,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "星空",
      "color": "彩色",
      "multiplier": 40,
      "groupKey": "quality",
      "shareBitIndex": 3,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "流火",
      "color": "金色",
      "multiplier": 15,
      "groupKey": "moon",
      "shareBitIndex": 23,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "霓虹",
      "color": "彩色",
      "multiplier": 18,
      "groupKey": "rare",
      "shareBitIndex": 30,
      "isActive": true,
      "sortOrder": 0
    },
    {
      "name": "极光",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "past",
      "shareBitIndex": 32,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "方形",
      "color": "紫色",
      "multiplier": 1.5,
      "groupKey": "special",
      "shareBitIndex": 6,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "星环",
      "color": "紫色",
      "multiplier": 10,
      "groupKey": "rare",
      "shareBitIndex": 15,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "沙尘",
      "color": "灰色",
      "multiplier": 2,
      "groupKey": "intermediate",
      "shareBitIndex": 35,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "日蚀",
      "color": "紫色",
      "multiplier": 10,
      "groupKey": "moon",
      "shareBitIndex": 24,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "亮晶晶",
      "color": "紫色",
      "multiplier": 10,
      "groupKey": "common",
      "shareBitIndex": 14,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "流光",
      "color": "彩色",
      "multiplier": 30,
      "groupKey": "quality",
      "shareBitIndex": 4,
      "isActive": true,
      "sortOrder": 1
    },
    {
      "name": "水晶",
      "color": "金色",
      "multiplier": 20,
      "groupKey": "quality",
      "shareBitIndex": 2,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "血月",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "rare",
      "shareBitIndex": 27,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "落雷",
      "color": "绿色",
      "multiplier": 3,
      "groupKey": "common",
      "shareBitIndex": 16,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "糖葫芦",
      "color": "紫色",
      "multiplier": 1.5,
      "groupKey": "special",
      "shareBitIndex": 7,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "灼热",
      "color": "灰色",
      "multiplier": 2,
      "groupKey": "intermediate",
      "shareBitIndex": 36,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "暗雾",
      "color": "蓝色",
      "multiplier": 6,
      "groupKey": "moon",
      "shareBitIndex": 25,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "幽魂",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "past",
      "shareBitIndex": 31,
      "isActive": true,
      "sortOrder": 2
    },
    {
      "name": "陨石",
      "color": "绿色",
      "multiplier": 3,
      "groupKey": "moon",
      "shareBitIndex": 26,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "金",
      "color": "蓝色",
      "multiplier": 10,
      "groupKey": "quality",
      "shareBitIndex": 1,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "惊魂夜",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "past",
      "shareBitIndex": 33,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "结霜",
      "color": "灰色",
      "multiplier": 2,
      "groupKey": "intermediate",
      "shareBitIndex": 37,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "彩虹",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "rare",
      "shareBitIndex": 28,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "连体",
      "color": "紫色",
      "multiplier": 1.5,
      "groupKey": "special",
      "shareBitIndex": 8,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "冰冻",
      "color": "绿色",
      "multiplier": 4,
      "groupKey": "common",
      "shareBitIndex": 17,
      "isActive": true,
      "sortOrder": 3
    },
    {
      "name": "银",
      "color": "绿色",
      "multiplier": 3,
      "groupKey": "quality",
      "shareBitIndex": 0,
      "isActive": true,
      "sortOrder": 4
    },
    {
      "name": "黄瓜蛇",
      "color": "金色",
      "multiplier": 2.5,
      "groupKey": "special",
      "shareBitIndex": 9,
      "isActive": true,
      "sortOrder": 4
    },
    {
      "name": "颤栗",
      "color": "灰色",
      "multiplier": 1,
      "groupKey": "common",
      "shareBitIndex": 18,
      "isActive": true,
      "sortOrder": 4
    },
    {
      "name": "荧光",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "rare",
      "shareBitIndex": 29,
      "isActive": true,
      "sortOrder": 4
    },
    {
      "name": "哈基咪",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "past",
      "shareBitIndex": 40,
      "isActive": true,
      "sortOrder": 4
    },
    {
      "name": "陶化",
      "color": "绿色",
      "multiplier": 4,
      "groupKey": "intermediate",
      "shareBitIndex": 38,
      "isActive": true,
      "sortOrder": 4
    },
    {
      "name": "万圣夜",
      "color": "金色",
      "multiplier": 2,
      "groupKey": "special",
      "shareBitIndex": 10,
      "isActive": true,
      "sortOrder": 5
    },
    {
      "name": "覆雪",
      "color": "灰色",
      "multiplier": 2,
      "groupKey": "common",
      "shareBitIndex": 19,
      "isActive": true,
      "sortOrder": 5
    },
    {
      "name": "香蕉猴",
      "color": "金色",
      "multiplier": 2,
      "groupKey": "special",
      "shareBitIndex": 11,
      "isActive": true,
      "sortOrder": 6
    },
    {
      "name": "潮湿",
      "color": "灰色",
      "multiplier": 1,
      "groupKey": "common",
      "shareBitIndex": 20,
      "isActive": true,
      "sortOrder": 6
    },
    {
      "name": "迷雾",
      "color": "灰色",
      "multiplier": 2,
      "groupKey": "common",
      "shareBitIndex": 21,
      "isActive": true,
      "sortOrder": 7
    },
    {
      "name": "笑日葵",
      "color": "彩色",
      "multiplier": 10,
      "groupKey": "special",
      "shareBitIndex": 12,
      "isActive": true,
      "sortOrder": 7
    },
    {
      "name": "生机",
      "color": "灰色",
      "multiplier": 2,
      "groupKey": "common",
      "shareBitIndex": 22,
      "isActive": true,
      "sortOrder": 8
    },
    {
      "name": "故障",
      "color": "蓝色",
      "multiplier": 5,
      "groupKey": "common",
      "shareBitIndex": 41,
      "isActive": true,
      "sortOrder": 9
    }
  ],
  "cachedAt": 1778604994771
}`;

const userMetadata = () => {
    return {
        id: userId,
        aud: "authenticated",
        role: "authenticated",
        email: emailAddr,
        email_confirmed_at: "2222-02-22T22:22:22.222222Z",
        phone: "",
        confirmed_at: "2222-02-22T22:22:22.222222Z",
        last_sign_in_at: "2222-02-22T22:22:22.222222Z",
        app_metadata: {
            provider: "email",
            providers: [
                "email"
            ]
        },
        user_metadata: {
            avatar_index: avatarIndex,
            display_name: nickName,
            email: emailAddr,
            email_verified: true,
            phone_verified: false,
            sub: userId
        },
        identities: [{
            identity_id: identityId,
            id: userId,
            user_id: userId,
            identity_data: {
                email: emailAddr,
                email_verified: true,
                phone_verified: false,
                sub: userId
            },
            provider: "email",
            last_sign_in_at: "2222-02-22T22:22:22.222222Z",
            created_at: "2222-02-22T22:22:22.222222Z",
            updated_at: "2222-02-22T22:22:22.222222Z",
            email: emailAddr
        }],
        created_at: "2222-02-22T22:22:22.222222Z",
        updated_at: "2222-02-22T22:22:22.222222Z",
        is_anonymous: false
    };
}

const localRecord = () => {
    return {
        access_token: "",
        token_type: "bearer",
        expires_in: 3600,
        expires_at: 9999999999,
        refresh_token: "4UeF5YEaTznX",
        user: userMetadata(),
        weak_password: null
    }
};

(function () {
    'use strict';

    if (w === undefined || w === null) {
        console.log("Unable to obtain unsafeWindow, early abort!");
        return;
    }

    // Disable realtime stats update
    w.WebSocket = undefined;


    // Hide the invite code popup
    localStorage.setItem("invite_modal_first_shown", "1");
    // Bypass login
    localStorage.setItem(storageKey, JSON.stringify(localRecord()));
    // Offline game data
    localStorage.setItem("fknc_game_data", game_data);

    const origFetch = w.fetch;

    w.fetch = async (...args) => {
        const [input, init] = args;

        const url =
            typeof input === "string" ?
                input :
                input instanceof Request ?
                    input.url :
                    String(input);

        const parsed = new URL(url, location.origin);

        let mockBody = null;
        let returnCode = 200;

        if (parsed.pathname === "/rest/v1/rpc/use_free_query") {
            // Unlock free query
            mockBody = JSON.stringify({
                allowed: true
            });
        } else if (parsed.pathname === "/rest/v1/user_profiles") {
            // Spoof phone number
            mockBody = JSON.stringify([{ phone: 110 }]);
        } else if (parsed.pathname === "/rest/v1/rpc/get_my_subscription") {
            // Spoof premium expiry time
            mockBody = JSON.stringify({
                subscription_end_at: 7955157722000,
                is_active: true
            });
        } else if (parsed.pathname === "/rest/v1/crop_daily_stats") {
            // Mock daily click stats
            mockBody = JSON.stringify([]);
        } else if (parsed.pathname === "/rest/v1/rpc/log_user_query") {
            // Disable user query log
            mockBody = JSON.stringify({
                ok: true
            });
        } else if (parsed.pathname === "/rest/v1/rpc/set_display_name") {
            // Support custom nickname
            const newNickName = JSON.parse(init.body)?.p_display_name;

            if (newNickName !== null && newNickName != nickName) {
                nickName = newNickName;
                localStorage.setItem("nick-name", newNickName);
                localStorage.setItem(storageKey, JSON.stringify(localRecord()));
            }

            mockBody = JSON.stringify({
                ok: true
            });
        } else if (parsed.pathname === "/auth/v1/user") {
            // Support custom avatar
            const newAvatarIndex = JSON.parse(init.body)?.data?.avatar_index;
            if (newAvatarIndex !== null && newAvatarIndex != avatarIndex) {
                avatarIndex = newAvatarIndex;
                localStorage.setItem("avatar-index", newAvatarIndex);
                localStorage.setItem(storageKey, JSON.stringify(localRecord()));
            }
            localStorage.setItem(storageKey, JSON.stringify(localRecord()));

            mockBody = JSON.stringify(userMetadata());
        } else if ([
            "/rest/v1/user_feedback",
            "/rest/v1/price_feedback",
            "/rest/v1/data_versions",
            "/rest/v1/rpc/get_user_query_leaderboard",
            "/rest/v1/rpc/get_membership_leaderboard",
            "/rest/v1/rpc/get_or_create_invite_code",
            "/rest/v1/rpc/get_my_invite_stats",
            "/rest/v1/rpc/get_game_data",
        ].includes(parsed.pathname)) {
            returnCode = 401;
            mockBody = JSON.stringify({
                code: "PGRST301",
                details: null,
                hint: null,
                message: "暂未支持该操作！"
            });
        }

        if (mockBody === null) {
            return origFetch.apply(this, args);
        } else {
            return new Response(mockBody, {
                status: returnCode,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }

    };
})();

// apply custom stylesheet
window.addEventListener("DOMContentLoaded", () => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
    /* Hide logout button */
    div.user-center-section-danger
    /* Favorite button */
    , button.favorite-header-button , button.share-header-button
    , div.champion-section-favorite
    /* Hide premium subscription */
    , div.user-center-section:nth-child(2) > div.user-center-membership > button
    /* Hide user feedback */
    , button.contact-option-button:nth-child(3)
    /* Hide phone, invite, top list */
    , div.user-center-section:nth-child(3) > div.user-center-item-list > button.user-center-item:nth-child(2)
    , div.user-center-section:nth-child(3) > div.user-center-item-list > button.user-center-item:nth-child(3)
    , div.user-center-section:nth-child(3) > div.user-center-item-list > button.user-center-item:nth-child(4)
    /* Hide more useless things */
    , div.user-center-section:nth-child(4) > div.user-center-item-list > button.user-center-item:nth-child(1)
    , div.user-center-section:nth-child(4) > div.user-center-item-list > button.user-center-item:nth-child(2)
    , div.user-center-section:nth-child(4) > div.user-center-item-list > button.user-center-item:nth-child(4)
    /* Hide feedback button */
    , div.calculator-result-fixed > div.gradient-button
    /* Hide footer links */
    , div.footer-beian
    {
        display: none !important;
    }

    /* Margin padding of footer */
    div.crop-selector {
        margin-bottom: 16px;
    }
    `;
    document.documentElement.appendChild(styleSheet);
});
