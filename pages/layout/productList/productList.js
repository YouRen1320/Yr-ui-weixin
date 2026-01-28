
import dataList from './index.js'
Page({
  data: {
    productList: dataList
  },

  vip() {
    const url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    wx.yrUi.href(url)
  },
  handleClick() {
    wx.yrUi.toast('点击了~')
  }
})