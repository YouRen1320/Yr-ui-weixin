
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  btnClick(e) {
    console.log(e.detail)
    wx.yrUi.toast(`您点击了【${e.detail.text}】按钮`)
  }
})