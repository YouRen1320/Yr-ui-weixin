
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  sticky(e) {
    let type = Number(e.currentTarget.dataset.type)
    let url = type === 1 ? '../sticky-A/sticky-A' : '../sticky-B/sticky-B'
    wx.yrUi.href(url)
  }
})