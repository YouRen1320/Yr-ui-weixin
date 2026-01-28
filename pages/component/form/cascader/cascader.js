
import data from './data.js'
let cascader, cascader1, cascader2;
Page({
  data: {
    options: data.options,
    value: ["440000", "440200", "440202", "44020203"],
    //分级加载时，设置第一级数据
    layer1: data.layer_0,
    //分级加载设置默认数据时，需要将所有层级数据返回
    layerData: [data.layer_0, data.layer_1, data.layer_2, data.layer_3, data.layer_4, data.layer_5],
    value2: ["04", "0203", "0302", "0405", "0501", "0602"],
    show: false
  },
  onReady() {
    cascader = this.selectComponent("#cascader")
    cascader1 = this.selectComponent("#cascader1")
    cascader2 = this.selectComponent("#cascader2")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  btnReset() {
    //重置选择
    cascader && cascader.reset()
  },
  complete(e) {
    console.log(e)
    wx.yrUi.toast(`您的选择为：${e.detail.text.join('')}`)
  },
  change(e) {
    //默认返回的为约定数据，其他属性可自行扩展
    console.log(e.detail)
    //当前点击item所在层级
    let layer = e.detail.layer;
    //当前点击item索引值
    let index = e.detail.index;
    //value值
    let val = e.detail.value
    //...

    //获取下一级数据，此处为模拟，省略请求
    wx.showLoading()
    setTimeout(() => {
      //设置请求返回数据
      //当无数据时设置空数组，则会触发bind:complete事件，表示完成选择（或者调用end方法）
      // if (layer === 5) {
      // 	//如果层级已知，可直接判断，结束选择
      // 	cascader1 && cascader1.end();
      // 	return
      // }
      wx.hideLoading()
      cascader1 && cascader1.setRequestData(data[`layer_${layer+1}`], layer)
    }, 300)
  },
  change2(e) {
    //默认返回的为约定数据，其他属性可自行扩展
    console.log(e.detail)
    //当前点击item所在层级
    let layer = e.detail.layer;
    //当前点击item索引值
    let index = e.detail.index;
    //value值
    let val = e.detail.value
    //...

    //获取下一级数据，此处为模拟，省略请求
    wx.showLoading()
    setTimeout(() => {
      //设置请求返回数据
      //当无数据时设置空数组，则会触发bind:complete事件，表示完成选择（或者调用end方法）
      // if (layer === 5) {
      // 	//如果层级已知，可直接判断，结束选择
      // 	cascader2 && cascader2.end();
      // 	return
      // }
      wx.hideLoading()
      cascader2 && cascader2.setRequestData(data[`layer_${layer+1}`], layer)
    }, 300)
  },
  btnSelect() {
    this.setData({
      show: true
    })
  },
  closePopup() {
    this.setData({
      show: false
    })
  },
  complete2(e) {
    console.log(e.detail)
    wx.yrUi.toast(`您的选择为：${e.detail.text.join('')}`)
    this.closePopup()
  }
})