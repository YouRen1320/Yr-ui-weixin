
let sv
Page({
  onReady:function(){
    sv = this.selectComponent('#sv')
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  success() {
    wx.yrUi.toast('验证通过！')
  },
  fail() {
    wx.yrUi.toast('验证失败！')
  },
  reset() {
    sv && sv.reset()
    wx.yrUi.toast('重置成功！')
  }
})