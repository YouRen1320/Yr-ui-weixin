
Page({
  data: {
    itemList: [{
      id: 1,
      text: '标题文本《一》'
    }, {
      id: 2,
      text: '标题文本《二》'
    }, {
      id: 3,
      text: '标题文本《三》'
    }, {
      id: 4,
      text: '标题文本《四》'
    }, {
      id: 5,
      text: '标题文本《五》'
    }, {
      id: 6,
      text: '标题文本《六》'
    }, {
      id: 7,
      text: '标题文本《七》'
    }, {
      id: 8,
      text: '标题文本《八》'
    }, {
      id: 9,
      text: '标题文本《九》'
    }]
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  end(e) {
    //排序后列表
    console.log(e.detail.itemList)
  },
  del(e){
    wx.yrUi.toast(`删除列目索引：${e.detail.index}`)
  }
})