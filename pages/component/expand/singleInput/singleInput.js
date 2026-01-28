
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    let url = type == 1 ? '../singleInput-A/singleInput-A' : '../singleInput-B/singleInput-B'
    wx.yrUi.href(url)
  },
  dk() {
    wx.yrUi.href('../digitalKeyboard/digitalKeyboard')
  }
})