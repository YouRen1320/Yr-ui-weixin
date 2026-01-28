
Page({
  data: {
    current: 0,
    tabBar: [{
        text: "组件",
        iconPath: "/static/images/tabbar/assembly_default_3x.png",
        selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
      },
      {
        text: "布局",
        iconPath: "/static/images/tabbar/layout_default_3x.png",
        selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
      },
      {
        text: "模板",
        iconPath: "/static/images/tabbar/mod_default_3x.png",
        selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
      },
      {
        text: "我的",
        iconPath: "/static/images/tabbar/my_default_3x.png",
        selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
      }
    ],
    height: 0,
    texts: [
      'Tabbar 标签栏，用于在不同功能模块之间进行切换，小图标建议尺寸84*84。',
      '该使用方式只适用于简单的页面，过于复杂的页面建议不要使用。',
      '非必要情况下建议使用原生tabbar。',
      '一般只有当原生tabbar不能满足需求的时候才使用自定义tabbar。'
    ]
  },
  init(e) {
    //处理tabbar高度，避免内容被tabbar遮住
    this.setData({
      height: e.detail.height
    })
  },
  itemClick(e) {
    console.log(e.detail)
    //这里可以做其他验证处理，比如登录等
    //....
    //验证通过执行以下逻辑
    this.setData({
      current: e.detail.index
    })
    this.setTitle(e.detail.index)
  },
  change(e) {
    //禁止左右滑动
    if (e.detail.source == 'touch') {
      let index = e.target.current || e.detail.current;
      this.setData({
        current: index
      })
      this.setTitle(index)
    }
  },
  setTitle(index) {
    wx.setNavigationBarTitle({
      title: ['组件', '布局', '模板', '我的'][index]
    })
  }
})