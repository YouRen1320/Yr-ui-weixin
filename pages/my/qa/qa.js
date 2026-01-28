Page({
  data: {
    title: "",
    answerList: {
      0: [
        "可以，组件支持按需引入，详见 Yr-ui 文档 “快速上手”，使用组件前请先仔细阅读组件文档。",
      ],
      1: [
        "参考uni-app官方组件：cover-view/cover-image",
        "建议使用 v-if 控制显隐",
      ],
      3: [
        "支持。组件支持哪些平台请参考组件具体文档，每个组件文档中都有支持平台的说明。",
      ],
      4: ["支持情况同uni-app官方一致，具体请前往uni-app官网查看。"],
      5: [
        "如果控制台有提示方法未定义，请先查看示例的引用，如检查 main.js 中是否有引用，然后检查一下自己的代码是否复制完整。",
      ],
      6: [
        '将 app.json 中的 "style": "v2" 去除，小程序的新版基础组件强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。',
      ],
      7: [
        "原因一可能是调试基础库版本较低，请先检查小程序开发工具调试基础库的版本是否为比较新的版本，如果不是，切换至比较新的版本重新编译",
        "原因二可能是未配置appid，请配置小程序的appid",
      ],
      8: [
        "TypeError: Cannot read property ‘mark’ of undefined...",
        "出现此错误一般是程序中ES7语法导致编译错误，解决办法：尝试将开发工具 “详情->本地设置->增强编译” 勾选上，重新编译。",
      ],
    },
    answers: [],
  },
  onLoad: function (e) {
    const index = Number(e.index) || 0;
    this.setData({
      title: e.title || "我只想用某个组件可以吗？",
      answers: this.data.answerList[index],
    });
  },
});
