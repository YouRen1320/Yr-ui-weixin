
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e){
    //返回评分 e.detail.score
    console.log(e.detail)
  }
})