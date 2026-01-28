
let scRef
Page({
  data: {
    //图片地址（默认宽高比2:1）
    src: '',
    resUrl: wx.yrUi.resUrl(),// 2021-5-6变更
    index: 0
  },
  onLoad: function (options) {
    this.getVerifyImage()
  },
  onReady:function(){
    scRef = this.selectComponent('#scRef')
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  getVerifyImage() {
    //获取需要验证的图片
    let index = this.data.index// 功能需要优化
    index++;
    if (index > 3) {
      index = 1// echo建议
    }// echo建议
    this.data.index = index
    this.setData({
      src:`${this.data.resUrl}/component/sc/img_sc_${index}.png`
    })
  },
  btnVerify() {// echo建议
    //需要等组件初始化完成
    scRef && scRef.show()
  },
  success(e) {
    wx.yrUi.toast('验证通过！')
    setTimeout(() => {
      //关闭验证框
      scRef && scRef.closeVerify()
    }, 200)
  },
  fail(e) {
    //当验证失败多次时，可在这里做相应处理
    let times = e.detail.times
    wx.yrUi.toast('验证失败！')
    if (times >= 3) {
      this.getVerifyImage()
    }
  }
})