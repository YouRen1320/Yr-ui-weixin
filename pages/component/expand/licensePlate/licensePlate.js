
let fui_si;
Page({
  data: {
    show: false,
    value: '',
    theme: 'light',
    toolbar: true
  },
  onReady: function () {
    fui_si = this.selectComponent("#fui_si")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onFocus() {
    if (!this.data.show) {
      this.setData({
        show: true
      })
      //输入框获得焦点
      fui_si && fui_si.initFocus(true)
    }
  },
  keyClick(e) {
    console.log(e.detail)
    //输入的值
    let val = e.detail.value;
    if (this.data.value.length === 8) return
    this.setData({
      value: this.data.value + val
    })
  },
  complete(e) {
    this.setData({
      show: false
    })
    //输入框失去焦点
    fui_si && fui_si.initFocus(false)
  },
  backspace(e) {
    let val = this.data.value;
    if (val) {
      this.setData({
        value: val.substring(0, val.length - 1)
      })
    }
  },
  btnTap(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        theme: 'light'
      })
    } else {
      this.setData({
        theme: 'dark'
      })
    }
    if (!this.data.show) {
      this.setData({
        show: true
      })
      //输入框获得焦点
      fui_si && fui_si.initFocus(true)
    }
  }
})