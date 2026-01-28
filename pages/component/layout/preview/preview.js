
Page({
  data: {
    previewData: {
      label: '订单金额',
      value: '￥29.90',
      list: [{
        label: '订单号',
        // labelColor:'#FF2B2B',
        value: 'Fui00000111112',
        valueColor: '#FF2B2B'
      }, {
        label: '物流单号',
        value: '34409992021080911'
      }, {
        label: '创建时间',
        value: '2021-08-09 09:20'
      }, {
        label: '付款时间',
        value: '2021-08-09 09:30'
      }, {
        label: '订单备注',
        value: '路上请安全第一，如果超时可提前按已送达或与我联系。辛苦了！'
      }],
      buttons: [{
        text: '联系客服'
      }]
    },
    previewData2: {
      label: '个人信息',
      list: [{
        label: '姓名',
        value: '张三'
      }, {
        label: '性别',
        value: '男'
      }, {
        label: '年龄',
        value: '36'
      }, {
        label: '手机号码',
        value: '189****0020'
      }, {
        label: '家庭住址',
        value: '广东省深圳市龙华区深圳北站'
      }],
      buttons: [{
        id: 1, //自定义属性，非约定
        text: '修改',
        color: '#181818'
      }, {
        id: 2,
        text: '删除',
        color: '#FF2B2B'
      }]
    }
  },
  btnClick(e) {
    console.log(e)
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})