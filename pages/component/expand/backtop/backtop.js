
Page({
  data: {
    name: 'top',
    background: '#FFFFFF',
    color: '#333333',
    scrollTop: 0
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onChange(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type == 1) {
      this.setData({
        name:'top',
        background:'#FFFFFF',
        color:'#333333'
      })
    } else if (type == 2) {
      this.setData({
        name:'turningup'
      })
    } else {
      this.setData({
        background:'#465CFF',
        color:'#FFFFFF'
      })
    }
  },
  onPageScroll(e) {
    this.setData({
      scrollTop:e.scrollTop
    })
  }
})