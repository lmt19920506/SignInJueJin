const aid = "2608";
const uuid = "7031413657951864354";
const token = "3d26ef927a0543e6b33c4e2196fafd09";
const cookie =
  "_ga=GA1.2.79742148.1623899076; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; MONITOR_WEB_ID=644abba8-220f-4306-bf53-dbfea0236673; passport_csrf_token_default=15bfb6fae2770cdddbe328d121af5f7c; passport_csrf_token=15bfb6fae2770cdddbe328d121af5f7c; n_mh=4bnIFRYmoaJWmqKSWeZiE871NfQZByJe_9Y7x4xPgkY; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227031413657951864354%2522%252C%2522web_id%2522%253A%25227031413657951864354%2522%252C%2522timestamp%2522%253A1641797007509%257D; _gid=GA1.2.1503846170.1645422056; _tea_utm_cache_2018=undefined; passport_auth_status=6ba4d2cd74bfd8bcc2486f4efafae9c3%2C; passport_auth_status_ss=6ba4d2cd74bfd8bcc2486f4efafae9c3%2C; sid_guard=aa36301a9179c8d8f934f68da5c3a729%7C1645515593%7C5184000%7CSat%2C+23-Apr-2022+07%3A39%3A53+GMT; uid_tt=75f0d297955b66c70dac15cf45f541f6; uid_tt_ss=75f0d297955b66c70dac15cf45f541f6; sid_tt=aa36301a9179c8d8f934f68da5c3a729; sessionid=aa36301a9179c8d8f934f68da5c3a729; sessionid_ss=aa36301a9179c8d8f934f68da5c3a729; sid_ucp_v1=1.0.0-KDdiMzNkNDQwZDU0ZTQ2MTgyN2FiNDNlZGQ3ZDYzYzM5NWEwN2Q4N2QKFwjt1LDA_fXtBBDJptKQBhiwFDgCQPEHGgJsZiIgYWEzNjMwMWE5MTc5YzhkOGY5MzRmNjhkYTVjM2E3Mjk; ssid_ucp_v1=1.0.0-KDdiMzNkNDQwZDU0ZTQ2MTgyN2FiNDNlZGQ3ZDYzYzM5NWEwN2Q4N2QKFwjt1LDA_fXtBBDJptKQBhiwFDgCQPEHGgJsZiIgYWEzNjMwMWE5MTc5YzhkOGY5MzRmNjhkYTVjM2E3Mjk";

module.exports = {
  //掘金
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
    dipUrl: `https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=${aid}2608&uuid=${uuid}`, //免费抽奖
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
    token: `${token}`,
    url: `http://www.pushplus.plus/send`,
  },
};
