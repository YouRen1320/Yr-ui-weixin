
Page({
  data: {
    isVoice: true,
    focus: false
  },
  vip() {
    const url = "/pages/my/qa/qa?index=2&title=VIP专属内容"
    wx.yrUi.href(url)
  },
  change() {
    this.setData({
      isVoice:!this.data.isVoice
    })
  },
  focusChange(e){
    this.setData({
      focus:true
    })
  },
  blurChange(){
    this.setData({
      focus: false
    })
  }
})