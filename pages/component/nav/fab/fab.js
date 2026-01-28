
Page({
  data: {
    isLeft: true,
    items: [{
      name: 'star',
      text: '收藏'
    }, {
      name: 'share',
      text: '分享'
    }, {
      name: 'fabulous',
      text: '点赞'
    }, {
      name: 'comment',
      text: '评论'
    }],
    items2: [{
      name: 'calendar',
      text: '日程安排',
      background: '#3BBE88'
    }, {
      name: 'location',
      text: '地理位置',
      background: '#F7953B'
    }, {
      name: 'community',
      text: '社区交流',
      background: '#3493F0'
    }],
    list: [{
      abbr: 'A',
      abbrSize: 48,
      text: 'Apple'
    }, {
      abbr: 'F',
      abbrSize: 48,
      text: 'yr-ui@126.com'
    }, {
      abbr: 'S',
      abbrSize: 48,
      text: 'subject@126.com'
    }, {
      name: 'message-fill',
      abbrSize: 56,
      text: '提醒'
    }],
    background: '#465CFF',
    fabs: []
  },
  onLoad() {
    this.setData({
      fabs: this.data.items
    })
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  fab(e) {
    let type = Number(e.currentTarget.dataset.type)
    switch (type) {
      case 1:
        this.setData({
          fabs: this.data.items,
          background: '#465CFF'
        })
        wx.yrUi.toast('已恢复默认状态~')
        break;
      case 2:
        this.setData({
          fabs: this.data.items2,
          background: 'linear-gradient(300deg, #F53423 0%, #F67F48 100%)'
        })
        wx.yrUi.toast('已更换~')
        break;
      case 3:
        this.setData({
          fabs: this.data.list,
          background: '#465CFF'
        })
        wx.yrUi.toast('已切换~')
        break;
      case 4:
        this.setData({
          isLeft: !this.data.isLeft
        })
        break;
      default:
        break;
    }
  },
  handleClick(e) {
    console.log(e)
    wx.yrUi.toast(`您点击了【${this.data.fabs[e.detail.index].text}】按钮~`)
  },
  fabClick() {
    wx.yrUi.toast('这是一个单独的按钮~')
  }
})