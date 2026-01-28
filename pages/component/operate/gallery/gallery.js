
Page({
  data: {
    urls: [{
      src: '/static/images/common/logo.png',
      descr: 'Yr-ui 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
    }, {
      src: '/static/images/component/img_goods_3x.jpg'
    }, {
      src: '/static/images/component/img_bg_poster.png'
    }],
    show: false,
    resUrl: wx.yrUi.resUrl()
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  showGallery() {
    this.setData({
      show: true
    })
  },
  hideGallery() {
    this.setData({
      show: false
    })
  },
  previewImage() {
    wx.previewImage({
      urls: [`${this.data.resUrl}/common/logo.png`, `${this.data.resUrl}/component/img_goods_3x.jpg`]
    })
  }
})