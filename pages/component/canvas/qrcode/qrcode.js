
Page({
  data: {
    val: 'https://doc.yr-ui.cn',
    value: ''
  },
  onLoad() {
    this.setData({
      value: this.data.val
    })
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  qrcode() {
    this.setData({
      value: this.data.val
    })
  }
})