
Page({
  data: {
    value: 361
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        value: 908
      })
    }, 1200);
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  roller(e) {
    let val = e.currentTarget.dataset.value
    this.setData({
      value: val
    })
  }
})