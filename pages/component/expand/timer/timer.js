
let timer;
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onReady: function () {
    timer = this.selectComponent("#timer");
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  end(e) {
    console.log(e.detail)
    wx.yrUi.toast(`计时结束，时间：${e.detail.totalSeconds}s`)
  },
  handleClick(e) {
    let index = e.detail.index;
    if (index == 0) {
      timer && timer.startTiming()
    } else if (index == 1) {
      timer && timer.endTimer()
    } else {
      timer && timer.resetTimer()
    }
  }
})