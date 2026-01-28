
import lists from './index.list.js'
Page({
  data: {
    lists: lists,
    show: false
  },
  init() {
    this.setData({
      show: true
    })
  },
  search(e) {
    wx.yrUi.toast(`搜索：${e.detail.value}`)
    //相关逻辑自行处理
    // ...
  },
  itemClick(e) {
    console.log(e.detail)
    //相关逻辑自行处理，如限制选择数，选择后操作等
    let index = e.detail.index;
    let subIndex = e.detail.subIndex;
    let item = this.data.lists[index].data[subIndex]
    let obj = `lists[${index}].data[${subIndex}].checked`
    this.setData({
      [obj]: !item.checked
    })
    // ...
  }
})