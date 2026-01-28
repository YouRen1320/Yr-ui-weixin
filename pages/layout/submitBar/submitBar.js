
Page({
  data: {
    checkeAll: false
  },
  vip() {
    const url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    wx.yrUi.href(url)
  },
  change(e) {
    console.log(e)
    this.setData({
      checkeAll:e.detail.checked
    })
  }
})