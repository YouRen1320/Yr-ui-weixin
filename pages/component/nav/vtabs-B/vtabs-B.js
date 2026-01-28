
Page({
  data: {
    activeTab: 0,
    vtabs: [],
    contents: [],
    content: {}
  },
  onLoad(options) {
    //内容可与tabs分开
    const vtabs = ['Yr-ui', '快速上手', '更新日志', '升级指南', '设计规范', '自定义主题', 'FAQ']
			const contents = [{
					title: 'yr-ui组件库',
					img: wx.yrUi.resUrl()+'/cooperate/light/img_banner_3x.png',
					descr: 'Yr-ui是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！'
				},
				{
					title: '快速上手',
					img: wx.yrUi.resUrl()+'/cooperate/dark/img_banner_3x.png',
					descr: '使用 Yr-ui前，请确保你已经学习并熟练使用过 uni-app 或者 微信小程序 。文档详见：https://doc.yr-ui.cn/docs/started.html。'
				},
				{
					title: '更新日志',
					img: wx.yrUi.resUrl()+'/cooperate/light/img_banner_3x.png',
					descr: 'Yr-ui 严格遵循 Semantic Versioning 2.0.0语义化版本规范。更新日志详见：https://doc.yr-ui.cn/docs/log.html。'
				},
				{
					title: '升级指南',
					img: wx.yrUi.resUrl()+'/cooperate/dark/img_banner_3x.png',
					descr: 'Yr-ui 升级指南，当含有破坏性更新，不向下兼容的版本升级时，会在这里写入相关的升级指导。'
				},
				{
					title: '设计规范',
					img: wx.yrUi.resUrl()+'/cooperate/light/img_banner_3x.png',
					descr: '为了约束和成就更多优秀的产品，打造优质的体验，我们拟定了一些UI界面设计指南和建议。 设计指南建立在充分尊重用户知情权与操作权的基础之上。旨在Yr-ui生态体系内，建立友好、高效、一致的用户体验，同时最大程度适应和支持不同需求，实现用户与Yr-ui的共赢。'
				},
				{
					title: '自定义主题',
					img: wx.yrUi.resUrl()+'/cooperate/dark/img_banner_3x.png',
					descr: 'Yr-ui 默认提供了一套主题，并使用 CSS 变量 来实现定制主题，链接中的内容可以帮助你对 CSS 变量 概念有基本的认识，避免许多不必要的困扰。文档详见：https://doc.yr-ui.cn/docs/theme.html。'
				},
				{
					title: 'FAQ',
					img: wx.yrUi.resUrl()+'/cooperate/light/img_banner_3x.png',
					descr: '常见问题解答，使用前请先仔细阅读FAQ内容，了解常见问题，避免在后续使用过程中花费更多时间。详见：https://doc.yr-ui.cn/docs/FAQ.html。'
				}
			]
      this.setData({
        vtabs:vtabs,
        contents:contents,
        content:contents[this.data.activeTab]
      })
  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({
      content:this.data.contents[index]
    })
  }
})