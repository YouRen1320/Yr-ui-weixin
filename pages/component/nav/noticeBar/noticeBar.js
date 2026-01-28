
Page({
  data: {
    content: 'Yr-ui 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。',
    show: true
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  closeNotice() {
    this.setData({
      show: false
    })
  }
})