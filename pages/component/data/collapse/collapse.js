Page({
  data: {
    items: [
      {
        src: "/static/images/common/logo.png",
        title: "Yr-ui",
        descr:
          "Yr-ui 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。",
        isOpen: true,
      },
      {
        src: "/static/images/common/icon_tabbar_2x.png",
        title: "标题内容",
        descr:
          "自定义折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开。再次点击标题，折叠内容。",
      },
    ],
    list: [
      {
        question: "我只想用某个组件可以吗？",
        answer:
          "可以，组件支持按需引入，详见 Yr-ui 文档 “快速上手”，使用组件前请先仔细阅读组件文档。",
      },
      {
        question: "组件支持Nvue、支付宝小程序...吗？",
        answer:
          "支持。组件支持哪些平台请参考组件具体文档，每个组件文档中都有支持平台的说明。",
      },
    ],
  },
  change(e) {
    console.log(e.detail);
  },
});
