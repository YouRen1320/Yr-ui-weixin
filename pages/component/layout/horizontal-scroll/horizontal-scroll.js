
import data from './index.js'
Page({
  data: {
    goodsList: data.goodsList,
    menuList: data.menuList
  },
  onLoad(options) {

  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})