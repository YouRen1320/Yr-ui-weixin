
Page({
  leftClick(e) {
    console.log('左侧按钮点击')
  },
  rightClick(e) {
    console.log('右侧按钮点击')
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})