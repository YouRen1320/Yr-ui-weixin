
Page({
  data: {
    triangle: {
      left: 100
    },
    items: ['历史文章', '面试总结', '欢迎投稿'],
    options: [{
      text: '最新动态',
      name: 'menu',
      size: 24
    }, {
      text: '学习平台'
    }, {
      text: '加入我们'
    }],
    subItems: [{
      text: '官方新闻'
    }, {
      text: '线下活动'
    }, {
      text: '商城优惠'
    }],
    height: 100,
    show: false
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  init(e) {
    this.setData({
      height: Math.ceil(e.detail.height / e.detail.windowWidth * 750)
    })
  },
  onClick(e) {
    console.log(e.detail)
    if (e.detail.index === 0) {
      this.setData({
        show: true
      })
    } else {
      wx.yrUi.toast(e.text)
    }
  },
  subClick(e) {
    console.log(e.detail)
    wx.yrUi.toast(this.data.subItems[e.detail.index].text)
    this.onClose()
  },
  onClose() {
    this.setData({
      show: false
    })
  }
})