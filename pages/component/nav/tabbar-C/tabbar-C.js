
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
    height: 0
  },
  init(e) {
    //处理tabbar高度，避免内容被tabbar遮住
    this.setData({
      height:e.detail.height
    })
  },
  itemClick(e) {
    console.log(e.detail)
    //这里可以做其他验证处理，比如登录等
    //....
    //验证通过执行以下逻辑
    this.setData({
      current:e.detail.index
    })

    wx.setNavigationBarTitle({
      title:['组件','布局','模板','我的'][e.detail.index]
    })
  }
})