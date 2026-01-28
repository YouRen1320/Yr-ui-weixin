
Page({
  //brief 是否返回简洁数据
  get(e) {
    let brief = Number(e.currentTarget.dataset.type) === 0 ? false : true
    wx.http.get('/api/example/info', {
      brief: brief
    }).then(res => {
      console.log(res)
      if (brief) {
        if (res.succeeded) {
          wx.yrUi.toast('请求成功！')
        }
      } else {
        const d = res.data;
        if (d.succeeded) {
          wx.yrUi.toast('请求成功！')
        }
      }
    }).catch(e => {
      console.log(e)
    })
  },
  get2() {
    wx.http.get('/api/example/info', {
      data: {
        id: 1
      }
    }).then(res => {
      console.log(res)
      const d = res.data;
      if (d.succeeded) {
        wx.yrUi.toast('请求成功！')
      }
    }).catch(e => {
      console.log(e)
    })
  },
  //brief 是否返回简洁数据
  post(e) {
    let brief = Number(e.currentTarget.dataset.type) === 0 ? false : true
    wx.http.post('/api/example/info', {
      brief: brief,
      data: {
        Id: 2,
        Name: '张三'
      }
    }).then(res => {
      console.log(res)
      if (brief) {
        if (res.succeeded) {
          wx.yrUi.toast('请求成功！')
        }
      } else {
        const d = res.data;
        if (d.succeeded) {
          wx.yrUi.toast('请求成功！')
        }
      }
    }).catch(e => {
      console.log(e)
    })
  },
  changeHost() {
    wx.http.get('/api/example/info', {
      //此处只是为了演示
      host: 'https://ffa.yr-ui.cn'
    }).then(res => {
      console.log(res)
      const d = res.data;
      if (d.succeeded) {
        wx.yrUi.toast('请求成功！')
      }
    }).catch(e => {
      console.log(e)
    })
  },
  all() {
    //合并多个请求：都返回数据后再进行其他操作
    let func1 = wx.http.get('/api/example/info')
    let func2 = wx.http.get('/api/example/info', {
      data: {
        id: 3
      }
    })
    wx.http.all([func1, func2]).then(res => {
      console.log(res)
      wx.yrUi.toast('请求成功！')
    }).catch(e => {})
  },
  async sync() {
    console.log('同步请求start...')
    let res = await wx.http.get('/api/example/info')
    console.log(res)
    console.log('同步请求end...')
    wx.yrUi.toast('请求成功！')
  },
  request() {
    wx.http.request({
      url: '/api/example/info',
      method: 'GET',
      data: {
        id: '100'
      }
    }).then(res => {
      console.log(res)
      const d = res.data;
      if (d.succeeded) {
        wx.yrUi.toast('请求成功！')
      }
    }).catch(e => {})
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})