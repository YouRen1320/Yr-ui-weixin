
Page({
  data: {
    show: false,
    buttons: [],
    radius: 16,
    maskClosable: false,
    descr: '',
    direction: 'row',
    show2: false,
    show3: false
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  showModal(e) {
    let type = Number(e.currentTarget.dataset.type)
    this.setData({
      radius: 16,
      maskClosable: false,
      buttons: [],
      direction: 'row'
    })
    switch (type) {
      case 1:
        this.setData({
          show: true
        })
        break;
      case 2:
        this.setData({
          descr: '您还未登录，请先登录',
          buttons: ['确定'],
          show2: true
        })
        break;
      case 3:
        this.setData({
          descr: '请选择您的身份',
          direction: 'column',
          buttons: [{
            text: '开发者'
          }, {
            text: '运营人员',
            background: '#FFB703'
          }, {
            text: '管理员',
            background: '#FF2B2B'
          }],
          show2: true
        })
        break;
      case 4:
        this.setData({
          radius: 80,
          descr: '是否将此次编辑保留？',
          buttons: [{
            text: '不保留',
            plain: true,
            color: '#FFB703',
            background: '#FFB703'
          }, {
            text: '保留',
            background: '#FFB703'
          }],
          show2: true
        })
        break;
      case 5:
        this.setData({
          maskClosable: true,
          descr: '是否将此次编辑保留？',
          buttons: [{
            text: '不保留',
            plain: true,
            color: '#FF2B2B',
            background: '#FF2B2B'
          }, {
            text: '保留',
            background: '#FF2B2B'
          }],
          show2: true
        })
        break;
      case 6:
        this.setData({
          show3: true
        })
        break;
      default:
        break;
    }
  },
  onClick(e) {
    console.log(e.detail)
    wx.yrUi.toast(`您点击了${e.detail.text}`)
    //...
    this.setData({
      show: false
    })
  },
  onClick2(e) {
    console.log(e.detail)
    //...
    this.onCancel2()
  },
  onCancel2(e) {
    this.setData({
      show2: false
    })
  },
  onCancel3(e) {
    this.setData({
      show3: false
    })
  }
})