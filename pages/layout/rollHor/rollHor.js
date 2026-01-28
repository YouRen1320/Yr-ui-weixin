
import mock from './index.js'
Page({
  data: {
    records: mock.records
  },
  href(e) {
    const type=Number(e.currentTarget.dataset.type)
    const url = type === 1 ? "/pages/my/qa/qa?index=2&title=VIP专属内容" : '/pages/component/nav/tabs/tabs'
    wx.yrUi.href(url)
  }
})