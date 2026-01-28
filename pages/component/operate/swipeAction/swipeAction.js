
Page({
  data: {
    show: false,
    buttons: [{
      text: '标为未读',
      background: '#465CFF'
    }, {
      text: '删除',
      background: '#FF2B2B'
    }],
    isShow:false
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        show: true
      })
    }, 500)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onClick(e) {
    console.log(e.detail)
    wx.yrUi.toast(e.detail.item.text)
  },
  change(e) {
    console.log(e.detail)
  },
  //点击不关闭，结合提示操作
  stateChange(e) {
    //同步打开状态【结合提示时必须同步】
    this.setData({
      isShow: e.detail.isOpen
    })
  },
  onTap() {
    //列表点击事件
    wx.yrUi.toast('点击了～')
     //关闭菜单，自行控制是否关闭
    //  this.setData({
    //   isShow: false
    // })
  },
  buttonTap(e) {
    //按钮点击事件
    console.log(e)
    wx.yrUi.modal('提示', '确定要删除吗', (confirm) => {
      if (confirm) {
        wx.yrUi.toast('删除～')
      } else {
        wx.yrUi.toast('取消删除，关闭菜单～')
        //关闭菜单
        this.setData({
          isShow: false
        })
      }
    }, true)
  }
})