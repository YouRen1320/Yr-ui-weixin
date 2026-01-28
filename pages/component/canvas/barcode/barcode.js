
let barcode, barcode_code;
Page({
  data: {
    val: '6937147252044',
    code128: 'yr-ui2024'
  },
  onReady: function () {
    barcode = this.selectComponent("#barcode")
    barcode_code = this.selectComponent('#barcode_code')
    setTimeout(() => {
      this.barcode()
      this.barcodeCode128()
    }, 50)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  barcode() {
    if (String(this.data.val).length === 13) {
      barcode && barcode.draw()
    } else {
      wx.yrUi.toast('请输入13位条形码！')
    }
  },
  isNotChinese(value) {
    let reg = /.*[\u4e00-\u9fa5]+.*$/;
    let result = true;
    if (reg.test(value)) {
      result = false
    }
    return result
  },
  barcodeCode128() {
    if(this.isNotChinese(this.data.code128)){
      barcode_code && barcode_code.draw()
    }else{
      wx.yrUi.toast('不支持中文！')
    }
  }
})