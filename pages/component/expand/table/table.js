
import data from './tableData.js'
let table;
Page({
  data: {
    tableData: data.table,
    itemList: data.itemList,
    //基础使用 表头
    headerData: [{
      prop: 'name',
      label: '名称'
    }, {
      prop: 'province',
      label: '省份'
    }, {
      prop: 'city',
      label: '城市'
    }],
    header: [{
      prop: 'date',
      label: '日期',
      fixed: true,
      //是否开启排序
      sortable: true,
      //排序图标颜色，颜色不传值则使用默认值
      sortColor: '#465CFF',
      //必传：排序数据类型
      sortType: 'date',
      //排序图标right值，默认40（单位rpx），根据列宽度自行调整至合适的位置
      // sortRight:40
    }, {
      prop: 'ranking',
      label: '名次',
      sortable: true,
      sortColor: '#465CFF',
      sortType: 'number'
    }, {
      prop: 'province',
      label: '省份',
      sortColor: '#465CFF',
      sortable: true,
      sortType: 'string'
    }, {
      prop: 'city',
      label: '城市'
    }, {
      prop: 'address',
      label: '地址',
      width: 320
    }, {
      label: '操作',
      fixed: 'right',
      type: 3,
      width: 160,
      buttons: [{
        text: '详情',
        color: '#465CFF',
        // size: 30,
        fontWeight: 600
      }]
    }]
  },
  onReady(){
    table = this.selectComponent('#table')
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  detail(e) {
    console.log(e.detail)
    wx.yrUi.toast(e.detail.item.province)
  },
  change(e) {
    console.log(e.detail)
  },
  toggleSelection() {
    const row = this.data.tableData[2]
    table && table.toggleRowSelection(row)
  },
  clearSelection() {
    table && table.clearSelection()
  },
  sortChange(e){
    //排序数据发生改变时触发
    console.log(e.detail)
  }
})