
Page({
  data: {
    current: 0,
    current2: 0,
    current3: 0,
    current4: 0,
    current5: 0,
    items: [{
      background: '#09BE4F',
      title: 'Yr-ui组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。'
    }, {
      background: '#FFB703',
      title: 'UI 样式可配置，拓展灵活，轻松适应不同的设计风格。'
    }, {
      background: '#B2B2B2',
      title: '支持App-vue（Android、IOS）、App-Nvue（Android、IOS）。'
    }],
    styles: {
      width: 12,
      height: 12,
      activeWidth: 24
    },
    styles2: {
      width: 40,
      height: 40,
      background: 'rgba(255, 43, 43, .1)',
      activeBackground: '#FF2B2B'
    },
    styles3: {
      height: 80,
      bottom: 0
    },
    styles4: {
      width: 68,
      height: 40
    }
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e) {
    this.setData({
      current:e.detail.current
    })
  },
  change2(e) {
    this.setData({
      current2:e.detail.current
    })
  },
  change3(e) {
    this.setData({
      current3:e.detail.current
    })
  },
  change4(e) {
    this.setData({
      current4:e.detail.current
    })
  },
  change5(e) {
    this.setData({
      current5:e.detail.current
    })
  }
})