
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e){
    console.log(e.detail)
  },
  handleClick(){
    wx.yrUi.toast('点击了~')
  }
})