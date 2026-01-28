
let autograph
Page({
  data: {
    canvasId: '',
    src: ''
  },
  onReady: function () {
    autograph = this.selectComponent("#autograph")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  ready(e) {
    this.setData({
      canvasId: e.detail.canvasId
    })
  },
  redraw() {
    if (!this.data.canvasId) return;
    this.src = '';
    this.setData({
      src: ''
    })
    autograph && autograph.redraw()
  },
  complete() {
    if (!this.data.canvasId || this.data.src) return;
    autograph && autograph.drawComplete((res) => {
      //res为签名图片
      this.setData({
        src: res
      })
    })
  },
  preview() {
    if (!this.data.src) return;
    wx.previewImage({
      urls: [this.data.src]
    })
  }
})