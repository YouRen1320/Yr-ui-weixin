
Page({
  data: {
    current: 0,
				current2: 0,
				items: [{
					src: 'https://res.yr-ui.cn/static/images/component/sc/img_sc_1.png'
				}, {
					src: 'https://res.yr-ui.cn/static/images/component/sc/img_sc_2.png'
				}, {
					src: 'https://res.yr-ui.cn/static/images/component/sc/img_sc_3.png'
				}],
				styles: {
					activeBackground: '#FFB703',
					activeWidth: 30
				}
  },
  vip() {
    const url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    wx.yrUi.href(url)
  },
  href() {
    const url = "/pages/component/expand/swiperDot/swiperDot"
    wx.yrUi.href(url)
  },
  change(e) {
    this.setData({
      current:e.detail.current
    })
  },
  change2(e) {
    this.setData({
      current2: e.detail.current
    })
  }
})