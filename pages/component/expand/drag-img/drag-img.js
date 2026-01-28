
Page({
  data: {
    itemList: [{
      id: 1,
      src: '/static/images/common/logo.png'
    }, {
      id: 2,
      src: '/static/images/common/img_logo.png'
    }, {
      id: 3,
      src: '/static/images/qrcode/h5_qrcode.png'
    }, {
      id: 4,
      src: '/static/images/qrcode/toutiao_qrcode.png'
    }, {
      id: 5,
      src: '/static/images/qrcode/qq_qrcode.jpg'
    }, {
      id: 6,
      src: '/static/images/qrcode/wx_qrcode.jpg'
    }, {
      id: 7,
      src: '/static/images/qrcode/baidu_qrcode.png'
    }, {
      id: 8,
      src: '/static/images/qrcode/ali_qrcode.png'
    }, {
      id: 9,
      src: '/static/images/common/logo.png'
    }, {
      id: 10,
      src: '/static/images/common/img_logo.png'
    }]
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  end(e){
    //排序后列表
    console.log(e.detail.itemList)
  }
})