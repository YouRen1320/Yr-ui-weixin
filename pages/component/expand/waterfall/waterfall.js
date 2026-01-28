
Page({
  data: {
    images: [
      'https://res.yr-ui.cn/static/images/component/waterfall/P_001.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_002.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_003.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_004.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_005.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_006.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_007.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_008.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_009.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_010.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_011.jpeg',
      'https://res.yr-ui.cn/static/images/component/waterfall/P_012.jpeg'
    ],
    isEnd: false
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onEnd(e) {
    this.setData({
      isEnd:true
    })
  }
})