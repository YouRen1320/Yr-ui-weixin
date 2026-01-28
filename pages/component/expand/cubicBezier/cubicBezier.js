

Page({
  data: {
    left: 116,
    bottom: 140,
    right: 100
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  handleClick(e) {
    console.log(e.detail)
  }
})