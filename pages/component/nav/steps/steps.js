
Page({
  data: {
    current: 0,
    current2:1,
    current3:2,
    items: [{
      title: '注册'
    }, {
      title: '激活邮箱'
    }, {
      title: '注册完成'
    }],
    items2: [{
      title: '注册',
      text: '1'
    }, {
      title: '激活邮箱',
      text: '2'
    }, {
      title: '注册完成',
      text: '3'
    }],
    items3: [{
      title: 'STEP1',
      descr: '步骤一',
      text: 'F'
    }, {
      title: 'STEP2',
      descr: '步骤二',
      text: 'S'
    }, {
      title: 'STEP3',
      descr: '步骤三',
      text: 'T'
    }],
    items4: [{
      title: 'STEP1',
      descr: '步骤一',
      src: '/static/images/common/logo.png'
    }, {
      title: 'STEP2',
      descr: '步骤二',
      src: '/static/images/common/img_logo.png'
    }, {
      title: 'STEP3',
      descr: '步骤三',
      src: '/static/images/common/logo.png'
    }]
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  stepChange() {
    //实际开发需根据步骤数据长度-1来得出最后一步（从 0 开始记数），此处为演示
    if (this.data.current === 2) {
      this.setData({
        current: 0
      })
    } else {
      this.setData({
        current: this.data.current + 1
      })
    }
  }
})