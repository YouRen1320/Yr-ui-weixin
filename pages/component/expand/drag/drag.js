
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    let url='../drag-img/drag-img'
    if(type!==1){
      url = type == 2 ? '../drag-text/drag-text' : '../drag-custom/drag-custom'
    }
    wx.yrUi.href(url)
  }
})