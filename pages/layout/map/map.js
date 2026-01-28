
Page({
  data: {

  },
  href(e) {
    const type=Number(e.currentTarget.dataset.type || 0)
    let url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    if (type) {
      url = type === 1 ? '/pages/layout/route/route' : '/pages/layout/markerCluster/markerCluster'
    }
    wx.yrUi.href(url)
  }
})