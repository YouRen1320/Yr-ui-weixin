
import richtext from './index.js'
Page({
  data: {
    html: richtext.html,
    md: richtext.md
  },

  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  preview(e) {
    console.log(e.detail)
  },
  atap(e) {
    console.log(e)
    wx.yrUi.toast(e.detail.value)
  }
})