
import layoutData from './layout.data.js';
Page({
  data: {
    layoutData: layoutData,
    resUrl: wx.yrUi.resUrl()
  },
  href(e) {
    let page = e.currentTarget.dataset.page
    if(page){
      wx.yrUi.href(page)
    }else{
      wx.yrUi.href('/pages/common/coding/coding')
    }
  },
  vip(){
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onShareAppMessage: function () {
    return {
      title: 'Yr-ui组件库'
    }
  }
})