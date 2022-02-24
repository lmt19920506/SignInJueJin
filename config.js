const aid = process.env.AID;
const uuid = process.env.UUID;
const cookie = process.env.COOKIE;

module.exports = {
  //掘金
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖
    dipUrl: `https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=${aid}&uuid=${uuid}`, //沾喜气
    headers: {
      cookie: `${cookie}`,
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
    },
  },
  //微信推送
  pushPlus: {
    url: `http://www.pushplus.plus/send`,
    token: `3d26ef927a0543e6b33c4e2196fafd09`,
  },
};
