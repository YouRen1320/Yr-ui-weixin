
Page({
  data: {
    processData: [{
      title: '入场',
      time: '07:00',
      activeColor: '#465CFF'
    }, {
      title: '主场演讲',
      time: '08:00',
      descr: '马云（阿里巴巴）',
      activeColor: '#465CFF'
    }, {
      title: '世界互联经济',
      time: '08:30',
      descr: '马云（阿里巴巴）',
      activeColor: '#465CFF'
    }, {
      title: '打造自己的互联帝国',
      time: '09:30',
      descr: '马化腾（腾讯）',
      activeColor: '#FFB703'
    }, {
      title: '散场',
      time: '11:00',
      descr: '请带走垃圾，有序散场。'
    }]
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})