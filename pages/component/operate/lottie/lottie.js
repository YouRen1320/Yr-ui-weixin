
//本地json文件不支持直接引入，需要放入js文件中导出使用
import emptyJson from './nodata'
Page({
  data: {
    options: {
      animationData: emptyJson
    },
    option: {
      path: 'https://res.yr-ui.cn/static/json/empty.json'
    },
    action: 'play'
  },
  //销毁隐藏可使用wx:if自行控制
  ani(e) {
    const action = e.currentTarget.dataset.action
    if (this.data.action === action) return;
    this.setData({
      action
    })
  }

})