
Page({
  data: {
    width: wx.yrUi.rpx2px(600)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onChange(e) {
    console.log(e.detail)
    wx.yrUi.toast(`当前选择的值为：${e.detail.value}`)
  },
  //需要实时数据时使用
  onChanging(e) {
    //console.log(e.detail)
  },
  //区间选择返回数据
  sectionChange(e) {
    console.log(e.detail)
  }
})