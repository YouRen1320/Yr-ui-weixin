
let ddm;
let statusRef;
let typesRef;
Page({
  data: {
    show: false,
    itemList: ['综合', '信用'],
    filters: [{
      title: '品牌',
      data: [{
        text: '南极人',
        value: 1
      }, {
        text: '易文',
        value: 2
      }, {
        text: '宿云月',
        value: 3
      }, {
        text: 'RAMPO/乱步乱步',
        value: 4
      }]
    }],
    brands: [],
    items: [{
      text: '综合',
      value: '',
      type: 'dropdown',
      active: false
    }, {
      text: '价格',
      type: 'sort',
      sort: 1
    }, {
      text: '销量',
      type: 'text',
      active: false
    }, {
      type: 'switch',
      switch: 1
    }, {
      text: '筛选',
      value: '',
      type: 'filter'
    }],
    items2: [{
      text: '综合',
      value: '',
      type: 'dropdown',
      active: false
    }, {
      text: '价格',
      type: 'sort',
      active: false,
      sort: 1
    }, {
      text: '评论',
      type: 'sort',
      sort: 1
    }],
    items3: [{
      text: 'Updated',
      value: '',
      type: 'dropdown',
      active: false
    }, {
      text: 'Forks',
      type: 'text',
      active: false,
      sort: 1
    }, {
      text: 'Stars',
      type: 'sort',
      value: 'asc',
      sort: 1
    }, {
      text: '筛选',
      value: '',
      type: 'filter'
    }],
    items4:[{
      text: '状态',
      type: 'dropdown',
      active: false
    },{
      text: '类型',
      type: 'dropdown',
      active: false
    }, {
      text: '时间',
      type: 'sort',
      sort: 1
    }],
    itemStatus: ['已完成', '待审核', '审核中'],
    itemTypes: ['PC网站', '小程序', '微信公众号']
  },
  onReady: function () {
    ddm = this.selectComponent("#ddm")
    statusRef = this.selectComponent("#statusRef")
    typesRef = this.selectComponent("#typesRef")
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  attrClick(e) {
    let val = e.currentTarget.dataset.value
    let attrs = [...this.data.brands];
    let index = attrs.indexOf(val)
    if (index !== -1) {
      attrs.splice(index, 1)

    } else {
      attrs.push(val)
    }
    this.setData({
      brands: attrs
    })
    let items = [...this.data.items]
    let vals = this.data.brands.join(',')
    //filter 类型需要设置value来表示选中
    items[4].value = vals
    wx.yrUi.toast(`筛选：${vals?vals:'全部'}`)
    this.setData({
      items: items
    })
  },
  changeData(items, idx) {
    items.forEach((item, index) => {
      if (index !== idx && item.type !== 'filter' && item.type !== 'switch') {
        if (item.type === 'sort') {
          item.sort = 1;
        }
        item.active = false;
        item.value = ''
      }
    })
    return items
  },
  itemClick(e) {
    console.log(e.detail)
    let items = [...this.data.items]
    let item = items[0]
    item.text = e.detail.text;
    //dropdown 类型需要设置value表示选中，不可为 0 或者 false 类型值
    item.value = e.detail.text;
    item.active = false;
    this.setData({
      items: this.changeData(items, 0)
    })
  },
  closeDrawer(e) {
    this.setData({
      show: false
    })
  },
  change(e) {
    console.log(e.detail)
    this.setData({
      items: e.detail.items
    })
    let item = this.data.items[e.detail.index]
    if (item.type === 'dropdown') {
      if (item.active) {
        ddm && ddm.show();
      } else {
        ddm && ddm.close();
      }
    } else if (item.type === 'sort') {
      wx.yrUi.toast(item.text + ' ' + item.value)
      this.changeData(this.data.items, e.detail.index)
    } else if (item.type === 'text') {
      wx.yrUi.toast(item.text)
      this.changeData(this.data.items, e.detail.index)
    } else if (item.type === 'switch') {
      wx.yrUi.toast('切换为：' + (item.switch === 1 ? '大图' : '列表'))
    } else if (item.type === 'filter') {
      this.setData({
        show: true
      })
    }
  },
  change4(e){
    console.log(e.detail)
    this.setData({
      items4:e.detail.items
    })
    let item = this.data.items4[e.detail.index]
    if(e.detail.index==0){
      if (item.active) {
        statusRef && statusRef.show();
      } else {
        statusRef && statusRef.close();
      }
    }else if(e.detail.index==1){
      if (item.active) {
        typesRef && typesRef.show();
      } else {
        typesRef && typesRef.close();
      }
    }
  },
  statusClick(e){
    console.log(e.detail)
    let items = [...this.data.items4]
    let item = items[0]
    item.text = e.detail.text;
    //dropdown 类型需要设置value表示选中，不可为 0 或者 false 类型值
    item.value = e.detail.text;
    item.active = false;
    this.setData({
      items4: items
    })
  },
  typeClick(e){
    console.log(e.detail)
    let items = [...this.data.items4]
    let item = items[1]
    item.text = e.detail.text;
    //dropdown 类型需要设置value表示选中，不可为 0 或者 false 类型值
    item.value = e.detail.text;
    item.active = false;
    this.setData({
      items4: items
    })
  }
})