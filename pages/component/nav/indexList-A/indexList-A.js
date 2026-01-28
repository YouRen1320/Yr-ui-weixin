
import lists from './index.list.js'
Page({
  data: {
    lists: lists,
    show: false
  },
  init(){
    this.setData({
      show:true
    })
  },
  search(e){
     wx.yrUi.toast(`搜索：${e.detail.value}`)
     //相关逻辑自行处理
     // ...
  },
  itemClick(e) {
    console.log(e.detail)
  }
})