
let fui_si, fui_si2;
Page({
  data: {
    init: false,
    show: false,
    value: '',
    background: '',
    decimal: false,
    spareKey: '',
    theme: 'light',
    visible: false,
    value2: ''
  },
  onReady: function () {
    fui_si = this.selectComponent("#fui_si");
    fui_si2 = this.selectComponent("#fui_si2")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  keyClick(e) {
    console.log(e.detail)
    //输入的值
    let val = e.detail.value;
    //之前输入的值
    let text = this.data.value;
    //判断根据实际情况做调整，这里只是做演示
    if (text.length === 4) {
      wx.yrUi.toast('已完成输入！')
      return
    } else if (text.includes('.') && val === '.') {
      wx.yrUi.toast('小数点不可重复输入！')
      return
    }

    if (!text && val === '.') {
      this.setData({
        value: '0.'
      })
    } else {
      this.setData({
        value: this.data.value + val
      })
    }
  },
  confirm(e) {
    let text = this.data.value;
    let vals = text.split('')
    if (text.length < 4) {
      wx.yrUi.toast('请先输入完成！')
      return
    } else if (vals[vals.length - 1] === '.') {
      wx.yrUi.toast('最后一位不可输入小数点！')
      return
    }

    wx.yrUi.toast('您输入的值为：' + text)
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
  spare(e) {
    console.log(e.detail)
    //备用键事件，可以换成其他需要的功能
    if (this.data.spareKey === '清空') {
      this.setData({
        value: ''
      })
    } else {
      this.setData({
        show: false
      })
      //输入框失去焦点
      fui_si && fui_si.initFocus(false)
    }
  },
  onFocus(e) {
    setTimeout(() => {
      this.setData({
        show: true
      })
      if (this.data.init) {
        this.setData({
          init: false
        })
      }
    }, this.data.init ? 200 : 0);
  },
  btnTap(e) {
    let type = Number(e.currentTarget.dataset.type)
    switch (type) {
      case 0:
        this.setData({
          theme: 'light',
          background: '#465CFF',
          spareKey: '',
          decimal: false
        })
        break;
      case 1:
        this.setData({
          background: '#FFB703'
        })
        break;
      case 2:
        this.setData({
          decimal: true
        })
        break;
      case 3:
        //备用键，可以替换为其他需要的功能
        this.setData({
          spareKey: '取消'
        })
        break;
      case 4:
        this.setData({
          spareKey: '清空'
        })
        break;
      case 5:
        this.setData({
          theme: 'dark'
        })
        break;
      default:
        break;
    }
    if (!this.data.show) {
      this.show = true
      this.setData({
        show: true
      })
      //输入框获得焦点
      fui_si && fui_si.initFocus(true)
    }
  },
  btnClick() {
    //清空之前输入的密码
    this.setData({
      value2: '',
      visible: true
    })
    fui_si2 && fui_si2.initFocus(true)
  },
  keyClick2(e) {
    console.log(e.detail)
    if (this.data.value2.length === 6) return;
    this.setData({
      value2: this.data.value2 + e.detail.value
    })
  },
  confirm2(e) {
    let text = this.data.value2;
    if (text.length < 6) {
      wx.yrUi.toast('请输入6位数密码！')
      return
    }
    wx.yrUi.toast('您输入的密码为：' + text)
    this.setData({
      visible: false
    })
    //输入框失去焦点
    fui_si2 && fui_si2.initFocus(false)
  },
  backspace2(e) {
    let val = this.detail.value2;
    if (val) {
      this.setData({
        value2: val.substring(0, val.length - 1)
      })
    }
  },
  spare2(e) {
    //清空输入的密码
    this.setData({
      value2: '',
      visible: false
    })
    //输入框失去焦点
    fui_si2 && fui_si2.initFocus(false)
  }
})