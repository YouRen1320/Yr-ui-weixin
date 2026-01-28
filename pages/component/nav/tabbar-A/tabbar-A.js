
import data from './index'
Page({
  data: {
    tabBar: data.tabBar,
    current: 0,
    current2: 0,
    tabBar2: data.tabBar2,
    tabBar3: data.tabBar3,
    tabBar4: data.tabBar4,
    tabBar5: data.tabBar5,
    tabBar6: data.tabBar6,
    tabBar7: data.tabBar7
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  itemClick(e) {
    console.log(e.detail)
    this.setData({
      current: e.detail.index
    })
  },
  itemClick2(e) {
    console.log(e.detail)
    if (e.detail.index == 2) {
      wx.yrUi.toast('您点击了大图标~')
    } else {
      this.setData({
        current2: e.detail.index
      })
    }
  }
})