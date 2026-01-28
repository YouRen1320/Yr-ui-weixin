
Page({
  data: {
    type: 'success',
    btnType: 'success',
    color: '#09BE4F',
    title: '操作成功',
    descr: 'Result 结果页，在页面中组织图标、文字等内容，向用户反馈操作结果'
  },
  onLoad: function (options) {
    let type = Number(options.type || 1)
    let title = ['操作成功', '操作失败', '操作失败', '正在审核', '操作标题'][type - 1]
    let iconType = ['success', 'warning', 'fail', 'waiting', 'custom'][type - 1]
    let btnType = ['success', 'warning', 'primary', 'primary', 'danger'][type - 1]
    let color = ['#09BE4F', '#FFB703', '#465CFF', '#465CFF', '#FF2B2B'][type - 1]
    this.setData({
      title: title,
      type: iconType,
      btnType: btnType,
      color: color
    })
  }
})