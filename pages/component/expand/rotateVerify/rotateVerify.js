
let rv
Page({
  data: {
    //图片地址（后端获取返回并已做初始角度旋转）
    src: '',
    //图片初始化旋转的角度（当后端进行验证时不需要返回）
    initAngle: 0,
    //验证结果误差范围 deg
    range: 0,
    resUrl: wx.yrUi.resUrl()
  },
  onLoad: function (options) {
    this.getVerifyImage()
  },
  onReady:function(){
    rv = this.selectComponent('#rv')
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  getVerifyImage() {
    //获取需要验证的图片，后端处理旋转并返回图片地址
    //此处仅为演示省略请求，使用预先处理的图片
    this.setData({
      src:`${this.data.resUrl}/component/verify/img_logo.jpeg`,
       //仅当在前端验证结果时返回
      initAngle:180,
      //仅当在前端验证结果时返回
      range:10
    })
  },
  btnVerify() {
    //需要等组件初始化完成
    rv && rv.show()
  },
  /*
   验证结果，仅前端验证时使用（模拟后端验证）
  @param {Number} angle 旋转角度
  @param {Number} initAngle 图片初始化时旋转角度，后端返回 [建议区间 -330deg<angle <-30deg 或 30deg<angle<330deg]
  @param {Number} range 可误差角度范围，约定或后端返回
  */
  verifyRes(angle, initAngle, range) {
    let res = false
    if (Math.abs(angle + initAngle - 360) <= range || Math.abs(angle + initAngle) <= range) {
      res = true
    }
    return res
  },
  verify(e) {
    console.log(e.detail)
    //验证旋转角度是否正确
    //e.detail.angle 旋转角度，注意返回角度中可能存在多位小数，请按需处理
    console.log(e.detail.angle)
    //可将结果发送至后端进行验证
    //...
    //此处为演示仅在前端进行验证
    // rv && rv.verifyRes(e.angle, 180, 5, (res) => {
    //        console.log(res)
    // })
    //此步骤可在后端进行完成（后端验证时仅传e.angle参数即可）
    let res = this.verifyRes(e.detail.angle, this.data.initAngle, this.data.range)
    if (res) {
      //验证通过
      rv && rv.success();
      wx.yrUi.toast('验证通过！')
      setTimeout(() => {
        //关闭验证框
        rv && rv.closeVerify()
      }, 300)
    } else {
      //验证失败
      //验证失败多次可重新获取验证图片
      rv && rv.fail()
      // wx.yrUi.toast('验证失败！')
    }
  }
})