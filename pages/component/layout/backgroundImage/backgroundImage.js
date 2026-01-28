
Page({
  data: {
    top: ''
  },
  init(e) {
    this.setData({
      top: e
    })
  },
  onBack() {
    wx.navigateBack()
  }
})