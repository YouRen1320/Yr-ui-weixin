
import pkData from './index.js'
let picker;
Page({
  data: {
    value: ['10:00-11:30'],
    result: '',
    layer: 1,
    items: [],
    linkage: false,
    show: false,
    options: pkData.options,
    options2: pkData.options2,
    options3: pkData.options3,
    options4: pkData.options4,
    options5: pkData.options5,
    options6: pkData.options6,
    options7: pkData.options7
  },
  onReady() {
    picker = this.selectComponent("#picker")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  btnClick(e) {
    let type = Number(e.currentTarget.dataset.type)
    this.setData({
      show: false
    })
    switch (type) {
      case 1:
        this.setData({
          layer: 1,
          linkage: false,
          items: this.data.options
        })
        break;
      case 2:
        this.setData({
          layer: 2,
          linkage: false,
          items: this.data.options2
        })
        break;
      case 3:
        this.setData({
          layer: 3,
          linkage: false,
          items: this.data.options3
        })
        break;
      case 4:
        this.setData({
          layer: 4,
          linkage: false,
          items: this.data.options4
        })
        break;
      case 5:
        this.setData({
          layer: 2,
          linkage: true,
          items: this.data.options5
        })
        break;
      case 6:
        this.setData({
          layer: 3,
          linkage: true,
          items: this.data.options6
        })
        break;
      case 7:
        this.setData({
          layer: 4,
          linkage: true,
          items: this.data.options7
        })
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.setData({
        show: true
      })
    }, 100)
  },
  change(e) {
    this.setData({
      show: false
    })
    this.onChange(e)
  },
  onChange(e) {
    console.log(e)
    this.setData({
      result: JSON.stringify(e.detail || {})
    })
  },
  cancel() {
    this.setData({
      show: false
    })
  },
  pickerShow() {
    //显示选择器
    picker && picker.open()
  }
})