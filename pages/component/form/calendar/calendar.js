
let calendarRef;
Page({
  data: {
    //默认值，多选
    value: ['2021-01-06', '2021-01-16', '2021-01-26', '2021-02-08', '2022-01-08', '2022-01-10', '2022-01-20'],
    //区间选择默认值设置
    // value2:['2021-12-06', '2021-12-31'],
    show: false,
    result: '',
    descrDate: ''
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '请稍候...'
    })

    setTimeout(() => {
      wx.hideLoading()
    }, 800)
  },
  onReady() {
    calendarRef = this.selectComponent('#calendarRef')
    //设置自定义描述数据
    calendarRef && calendarRef.setDescr(this.getDescr)
    //设置角标，返回数组中数据判定为true则显示角标，为false则不显示角标
    calendarRef && calendarRef.setBadge(this.getDescr)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e) {
    console.log(e)
    wx.yrUi.toast(e.detail.value)
  },
  change1(e) {
    console.log(e)
    wx.yrUi.toast(e.detail.value.join(','))
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
  change2(e) {
    this.setData({
      result: JSON.stringify(e.detail)
    })
    this.closePopup()
  },
  //返回Promise的获取描述数据的函数
  getDescr(year, month, days) {
    //year, month, days 为 组件返回数据
    console.log(year, month, days)
    this.data.descrDate = `${year}-${month}`

    return new Promise((resolve, reject) => {
      //模拟获取到数据且处理后返回
      setTimeout(() => {
        //返回数据需要处理成和 days格式一致,没有描述则使用空字符串（描述文本不可过长）
        if (true) {
          //成功后处理描述数据，数据顺序需要与days中日期保持一致
          const descrArr = []
          days.forEach((item, index) => {
            //此处仅为模拟判断，具体逻辑需自行结合数据判断
            let descr = ''
            if (month % 2 === 0) {
              descr = (index + 1) % 2 === 0 ? '有号' : ''
            } else {
              descr = index % 2 === 0 ? '有号' : ''
            }
            descrArr.push(descr)
          })
          resolve(descrArr)
        } else {
          //失败
          reject(false)
        }
      }, 200)
    })
  },
  dateChange(e) {
    console.log(e.detail)
    //设置自定义描述数据，页面过于复杂时初始化可能 calendarRef 还未获取到组件实例，可在onReady初始执行一次
    const d = e.detail
    if (this.data.descrDate === `${d.year}-${d.month}`) return;
    calendarRef && calendarRef.setDescr(this.getDescr)
  }
})