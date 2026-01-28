
Page({
  data: {
    show: false,
    position: 3,
    closable: true
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  showPopup(e) {
    let type = Number(e.currentTarget.dataset.type)
    this.setData({
      closable: type !== 4,
      position: type,

    }, () => {
      setTimeout(() => {
        this.setData({
          show: true
        })
      }, 50);
    })
  },
  closePopup() {
    this.setData({
      show: false
    })
  },
  btnClick(e) {
    wx.yrUi.toast('您点击了按钮~')
    //...
    this.closePopup()
  }
})