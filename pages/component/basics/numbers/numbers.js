
Page({
  onTap(e) {
    console.log(e.detail)
    wx.yrUi.toast(String(e.detail.text))
  }
})