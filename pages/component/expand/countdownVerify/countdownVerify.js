
let fui_cdv, fui_cdv2, fui_cdv3, fui_cdv4
Page({
  data: {
    //是否为初始化状态
    init: true
  },
  onReady: function () {
    fui_cdv = this.selectComponent("#fui_cdv")
    fui_cdv2 = this.selectComponent("#fui_cdv2")
    fui_cdv3 = this.selectComponent("#fui_cdv3")
    fui_cdv4 = this.selectComponent("#fui_cdv4")
    setTimeout(() => {
      //开启倒计时
      fui_cdv2 && fui_cdv2.success()
      this.setData({
        init: false
      })
    }, 50)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  sendCode() {
    //延时为了效果展示
    setTimeout(() => {
      //发送短信
      //...
      fui_cdv && fui_cdv.success()
    }, 800)
  },
  sendCode2() {
    this.setData({
      init: false
    })
    setTimeout(() => {
      //发送短信
      //...
      fui_cdv2 && fui_cdv2.success()
    }, 800)
  },
  end2() {
    //倒计时结束，初始化样式
    this.setData({
      init: true
    })
  },
  sendCode3() {
    setTimeout(() => {
      //发送短信
      //...
      fui_cdv3 && fui_cdv3.success()
    }, 800)
  },
  sendCode4() {
    setTimeout(() => {
      wx.yrUi.toast('手机号码格式不正确！')
      fui_cdv4 && fui_cdv4.reset()
    }, 200)
  }
})