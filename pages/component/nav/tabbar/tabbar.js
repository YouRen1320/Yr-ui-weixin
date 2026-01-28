
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    let url = '../tabbar-A/tabbar-A';
    if (type !== 1) {
      url = type == 2 ? '../tabbar-B/tabbar-B' : '../tabbar-C/tabbar-C'
    }

    wx.yrUi.href(url)
  }
})