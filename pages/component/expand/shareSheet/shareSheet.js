
Page({
  data: {
    visible: false,
    items: [{
      name: 'wechat',
      color: '#07c160',
      text: '微信好友',
      openType: 'share'
    }, {
      name: 'moments',
      color: '#44DC6B',
      text: '朋友圈'
    }, {
      name: 'qq',
      color: '#3FB7F5',
      text: 'QQ'
    }, {
      name: 'sina',
      color: '#D8070B',
      text: '新浪微博'
    }],
    itemList: [],
    show: false,
    itemList2: [],
    show2: false
  },
  onLoad: function (options) {
    let itemList = [
      [{
        name: 'wechat',
        size: 72,
        color: '#07c160',
        text: '微信好友',
        openType: 'share'
      }, {
        name: 'moments',
        size: 72,
        color: '#44DC6B',
        text: '朋友圈'
      }, {
        name: 'qq',
        size: 72,
        color: '#3FB7F5',
        text: 'QQ'
      }, {
        name: 'sina',
        size: 72,
        color: '#D8070B',
        text: '新浪微博'
      }, {
        name: 'browser',
        size: 72,
        color: '#465CFF',
        text: '浏览器打开'
      }, {
        name: 'community-fill',
        size: 72,
        color: '#FFB703',
        text: '社区'
      }],
      [{
        name: 'picture',
        size: 56,
        text: '分享海报'
      }, {
        name: 'link',
        size: 56,
        text: '复制链接'
      }, {
        name: 'search',
        size: 56,
        text: '搜索'
      }, {
        name: 'refresh',
        size: 56,
        text: '刷新'
      }, {
        name: 'help',
        size: 56,
        text: '帮助'
      }, {
        name: 'edit',
        size: 56,
        text: '反馈',
        openType: 'feedback'
      }]
    ]
    let itemList2 = JSON.parse(JSON.stringify(itemList))
    itemList2.map((item, index) => {
      if (index === 1) {
        item.map(obj => {
          obj.color = "#d1d1d1"
        })
      }
    })
    this.setData({
      itemList: itemList,
      itemList2: itemList2
    })
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  shareSheet(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        visible: true
      })
    } else if (type === 2) {
      this.setData({
        show: true
      })
    } else {
      this.setData({
        show2: true
      })
    }
  },
  onTap(e) {
    console.log(e.detail)
    wx.yrUi.toast(e.detail.item.text)
    this.setData({
      visible: false
    })
  },
  onClick(e) {
    console.log(e.detail)
    let type = Number(e.currentTarget.dataset.type)
    if (type === 2) {
      this.setData({
        show: false
      })
    } else {
      this.setData({
        show2: false
      })
    }
  },
  onCancel(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type == 1) {
      this.setData({
        visible: false
      })
    } else if (type == 2) {
      this.setData({
        show: false
      })
    } else {
      this.setData({
        show2: false
      })
    }
  }
})