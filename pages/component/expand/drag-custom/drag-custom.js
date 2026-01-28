
Page({
  data: {
    itemList: [{
      id: 1,
      text: '微信小程序',
      src: '/static/images/qrcode/wx_qrcode.jpg'
    }, {
      id: 2,
      text: '支付宝小程序',
      src: '/static/images/qrcode/ali_qrcode.png'
    }, {
      id: 3,
      text: '头条小程序',
      src: '/static/images/qrcode/toutiao_qrcode.png'
    }, {
      id: 4,
      text: '百度小程序',
      src: '/static/images/qrcode/baidu_qrcode.png'
    }, {
      id: 5,
      text: 'QQ小程序',
      src: '/static/images/qrcode/qq_qrcode.jpg'
    }, {
      id: 6,
      text: 'H5',
      src: '/static/images/qrcode/h5_qrcode.png'
    }, {
      id: 7,
      text: 'IOS',
      src: '/static/images/common/logo.png'
    }, {
      id: 8,
      text: 'Android',
      src: '/static/images/common/img_logo.png'
    }]
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  end(e) {
    //排序后列表
    console.log(e.detail.itemList)
  }
})