
import newsList from './index.js'
Page({
  data: {
    newsList
  },
  vip() {
    const url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    wx.yrUi.href(url)
  }
})