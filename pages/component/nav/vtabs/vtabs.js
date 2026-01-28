
Page({
  data: {

  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.index)
    let url = '../vtabs-A/vtabs-A';
    if (type !== 1) {
      url = '../vtabs-B/vtabs-B'
    }

    wx.yrUi.href(url)
  }
})