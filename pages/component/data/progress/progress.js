
Page({
  data: {
    percent: 0
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  percentChange() {
    if (this.data.percent >= 100) {
      this.setData({
        percent: 40
      })
    } else {
      //大于100按100处理
      this.setData({
        percent: this.data.percent + 30
      })
    }
  }
})