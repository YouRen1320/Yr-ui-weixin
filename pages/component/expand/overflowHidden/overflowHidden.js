
Page({
  data: {
    text: 'Yr-ui是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！',
    text2: 'Yr-ui是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！此外yr-ui准备打造其他版本框架，不仅仅局限于uni-app，目前考虑的有微信小程序原生版本、支付宝原生版本、Taro版本等。目前已上架的除uni-app外，微信小程序原生版本已于2022年02月正式上线。',
    visible: false,
    btnText: '点击查看所有内容',
    isHidden: true
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change() {
    this.setData({
      isHidden:!this.data.isHidden
    })
  },
  readMore() {
    if (this.data.visible) {
      this.setData({
        visible:false,
        btnText:'点击查看所有内容'
      })
    } else {
      this.setData({
        visible:true,
        btnText:'点击隐藏内容'
      })
    }
  }
})