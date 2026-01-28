
let countdown;
Page({
  onReady: function () {
    countdown = this.selectComponent("#countdown")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  end(e) {
    console.log(e.detail)
    wx.yrUi.toast('倒计时结束~')
  },
  handleClick(e) {
    let index = e.detail.index;
    if (index == 0) {
      countdown && countdown.startCountdown()
    } else if (index == 1) {
      countdown && countdown.endCountdown(true)
    } else {
      countdown && countdown.resetCountdown()
    }
  }
})