
Page({
  data: {
    searchList: [
      '持续巩固拓展脱贫攻坚成果',
      '大宗商品未来走势如何?',
      '13万级混动SUV皓极预售火爆，4小时订单超700000000'
    ]
  },
  vip() {
    const url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    wx.yrUi.href(url)
  },
  href() {
    const url = "/pages/component/nav/noticeBar/noticeBar"
    wx.yrUi.href(url)
  }
})