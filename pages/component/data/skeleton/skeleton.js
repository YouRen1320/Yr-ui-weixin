
Page({
  data: {
    //手动绘制数据，比较繁琐。可通过动态查找节点，然后通过change事件返回节点数据缓存使用
    preloadList: [{
      left: 15,
      top: 10,
      bottom: 220,
      width: 40,
      height: 40,
      type: 'round'
    }, {
      left: 60,
      right: 365,
      top: 10,
      bottom: 220,
      width: 180,
      height: 19,
      type: 'rect'
    }, {
      left: 60,
      right: 365,
      top: 40,
      bottom: 220,
      width: 240,
      height: 19,
      type: 'rect'
    }, {
      left: 60,
      right: 365,
      top: 70,
      bottom: 220,
      width: 200,
      height: 19,
      type: 'rect'
    }],
    show: true
  },
  onReady: function () {
    setTimeout(() => {
      this.setData({
        show:false
      })
    }, 2000)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e) {
    //返回查找的骨架节点信息，可在开发环境中获取缓存到本地，然后直接用于生产环境
    //nvue端暂不支持动态获取节点，可考虑缓存节点数据直接传入使用
    console.log(e.detail.nodes)
  }
})