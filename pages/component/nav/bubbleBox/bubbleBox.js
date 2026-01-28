
Page({
  data: {
    triangle: {
      top: 78
    },
    triangle2: {
      left: 56
    },
    items: [{
      text: 'Yr-ui',
      src: '/static/images/common/logo.png'
    }, {
      text: '气泡框',
      src: '/static/images/common/logo.png'
    }],
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  bubble(e) {
    let type = Number(e.currentTarget.dataset.type)
    switch (type) {
      case 1:
        this.setData({
          show1: true
        })
        break;
      case 2:
        this.setData({
          show2: true
        })
        break;
      case 3:
        this.setData({
          show3: true
        })
        break;
      case 4:
        this.setData({
          show4: true
        })
        break;
      case 5:
        this.setData({
          show5: true
        })
        break;
      case 6:
        this.setData({
          show6: true
        })
        break;
      default:
        break;
    }
  },
  itemClick(e) {
    let type = Number(e.currentTarget.dataset.type)
    console.log(e.detail)
    this.onClose(type)
  },
  onClose(e) {
    const type=Number(e.currentTarget.dataset.type)
    switch (type) {
      case 1:
        this.setData({
          show1: false
        })
        break;
      case 2:
        this.setData({
          show2: false
        })
        break;
      case 3:
        this.setData({
          show3: false
        })
        break;
      case 4:
        this.setData({
          show4: false
        })
        break;
      case 5:
        this.setData({
          show5: false
        })
        break;
      case 6:
        this.setData({
          show6: false
        })
        break;
      default:
        break;
    }
  }
})