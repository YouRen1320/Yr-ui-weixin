
let msg, tips;
Page({
  data: {
    background: 'rgba(0,0,0,.6)'
  },
  onReady: function () {
    msg = this.selectComponent("#msg")
    tips = this.selectComponent("#tips")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  showMsg(e) {
    let type = Number(e.currentTarget.dataset.type)
    this.setData({
      background: 'rgba(0,0,0,.6)'
    })
    let options = {}
    switch (type) {
      case 1:
        options.text = 'Hello Yr-ui！'
        msg && msg.show(options)
        break;
      case 2:
        this.setData({
          background:'#09BE4F'
        },()=>{
          options.text = '这是一条成功提示消息！'
          msg && msg.show(options)
        })
        break;
      case 3:
        options.text = '您已操作成功！'
        tips && tips.show(options)
        break;
      case 4:
        options.duration = 4000
        options.text = '4s后关闭提示信息！默认2s~'
        msg && msg.show(options)
        break;
      default:
        break;
    }
  }
})