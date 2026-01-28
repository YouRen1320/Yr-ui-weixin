
Page({
  data: {
    result: '',
    type: 1,
    range: false,
    //默认值
    value: '',
    show: false
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  btnClick(e) {
    let d = e.currentTarget.dataset
    let type = Number(d.type)
    let range = Number(d.range || 0)
    let def = Number(d.def || 0)
    this.setData({
      show: false,
      type: type,
      range: range === 1,
      value: def === 1 ? '2021-11-22 11:12' : ''
    }, () => {
      setTimeout(() => {
        this.setData({
          show: true
        })
      }, 80)
    })
  },
  change(e) {
    console.log(e.detail)
    this.setData({
      show: false,
      result: JSON.stringify(e.detail || {})
    })
  },
  cancel() {
    this.setData({
      show: false
    })
  }
})