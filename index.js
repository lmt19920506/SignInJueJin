const axios = require("axios");
const schedule = require("node-schedule");
const { nuggets, pushPlus } = require("./config");
/**
 * pushplus消息推送，关注wx公众号可以调用他们的接口进行wx消息推送
 * @param {String} title
 * @param {JSON} content
 */
const pushMsg = async (title, content) => {
  //获取配置参数
  const { url, token } = pushPlus;
  const res = await axios({
    url,
    method: `get`,
    params: {
      token,
      template: `json`,
      title,
      content,
    },
  });
};

/**
 * 签到
 */
const signRequest = async () => {
  const { headers, signInUrl } = nuggets; //签到相关参数
  const res = await axios({
    url: signInUrl,
    method: `post`,
    headers,
  });
  if (res && res.data && res.data.err_no === 0) {
    luckDraw();
    luckDip();
    pushMsg(`掘金签到成功`, res.data.data);
  } else {
    pushMsg(`掘金签到失败`, { RES: res.data.err_msg });
  }
};
/**
 * 抽奖
 */
const luckDraw = async () => {
  const { headers, drawUrl } = nuggets; //抽奖相关参数
  const res = await axios({
    url: drawUrl,
    method: `post`,
    headers,
  });
  pushMsg(`掘金抽奖`, res.data.data);
};

/**
 * 沾喜气
 */
const luckDip = async () => {
  const { headers, dipUrl } = nuggets; //抽奖相关参数
  const res = await axios({
    url: dipUrl,
    method: `post`,
    headers,
  });
  pushMsg(`掘金沾喜气`, res.data.data);
};

const signTask = () => {
  const rule = new schedule.RecurrenceRule();
  rule.minute = [8, 9, 10, 11];
  // "0 0 6 * * *"
  schedule.scheduleJob(rule, () => {
    setTimeout(() => {
      signRequest(); //签到函数
    }, Math.random() * 1000);
  });
};

signTask();
