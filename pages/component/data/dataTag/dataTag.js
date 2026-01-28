
Page({
  data: {
    options: ['选项一', '选项二', '选项三', '选项四'],
    defVal: '选项二',
    chkDefVal: ['选项二', '选项三'],
    val: '',
     //注意：小程序端双向绑定目前仅支持字符串，不支持数组格式，vals得到的结果为字符串格式，需要自行转化
    vals: '[]',
    val2: '选项三',
    //isAll仅可设置一个为true
    options2: [{
      text: '全部',
      value: '-99',
      isAll: true
    }, {
      text: '选项一',
      value: '1'
    }, {
      text: '选项二',
      value: '2'
    }, {
      text: '选项三',
      value: '3'
    }]
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e) {
    console.log(e.detail)
    wx.yrUi.toast(e.detail.value)
  },
  change2(e) {
    console.log(e.detail)
    let arr = e.detail.value || []
    if (arr.length > 0) {
      wx.yrUi.toast(arr.join(','))
    } else {
      wx.yrUi.toast('已全部取消')
    }
  }
})