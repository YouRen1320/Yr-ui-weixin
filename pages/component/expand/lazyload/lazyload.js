
Page({
  data: {
    src: ''
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        src:'https://res.yr-ui.cn/static/images/common/logo.png'
      })
    }, 3000)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})