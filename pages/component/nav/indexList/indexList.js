
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    let url = type == 1 ? '../indexList-A/indexList-A' : '../indexList-B/indexList-B'
    wx.yrUi.href(url)
  }
})