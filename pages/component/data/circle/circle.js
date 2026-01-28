
Page({
  data: {
    percent: 0
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  percentChange() {
    let percent = this.data.percent + 25
    this.setData({
      percent:percent > 100 ? 25 : percent
    })
  }
})