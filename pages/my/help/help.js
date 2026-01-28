Page({
  data: {
    resUrl: wx.yrUi.resUrl(),
    ques: [
      "我只想用某个组件可以吗？",
      "某些平台当我使用 textarea 等组件时层级太高遮挡其他组件，如何解决？",
      "为什么文档或示例中有些组件在GitHub或npm下载的包中无法找到？",
      "组件支持Nvue、支付宝小程序...吗？",
      "组件支持vue3吗？",
    ],
    bugs: [
      "方法未定义?",
      "编译到微信小程序样式混乱?",
      "编译到微信小程序报错?",
      "小程序运行报错?",
    ],
  },
  search() {
    wx.yrUi.toast("暂不提供搜索功能~");
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type);
    if (type === 1) {
      wx.yrUi.href("../webview/webview");
    } else if (type === 2) {
      wx.yrUi.href("../updated/updated");
    }
  },
  detail(e) {
    let dataset = e.currentTarget.dataset;
    wx.yrUi.href(`../qa/qa?index=${dataset.index}&title=${dataset.title}`);
  },
});
