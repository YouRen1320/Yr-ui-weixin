
// pages/component/expand/singleInput-B/singleInput-B.js
Page({
  onInput(e) {
    //e.detail.value
    console.log(e.detail)
  },
  onComplete(e) {
    //e.detail.value
    console.log(e.detail)
    wx.yrUi.toast(`您输入的密码为：${e.detail.value}`)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})