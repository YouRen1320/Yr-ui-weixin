
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    wx.yrUi.href(`../result-eg/result-eg?type=${type}`)
  }
})