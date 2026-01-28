
import tabs from './tabs.js';
Page({
  data: {
    tabs: tabs,
    scrollInto: '',
    tabIndex: 0,
    height: 0,
    resUrl: wx.yrUi.resUrl()
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        height: wx.getSystemInfoSync().windowHeight - wx.yrUi.rpx2px(538)
      })
    }, 50)
  },
  tabClick(e) {
    let index = Number(e.currentTarget.dataset.index)
    this.switchTab(index)
  },
  tabChange(e) {
    if (e.detail.source == 'touch') {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    }
  },
  switchTab(index) {
    if (this.data.tabIndex === index) return;
    let scrollIndex = index - 1 < 0 ? 0 : index - 1;
    this.setData({
      tabIndex: index,
      scrollInto: this.data.tabs[scrollIndex].id
    })
  },
  href(e) {
    let dataset = e.currentTarget.dataset
    let type = dataset.id
    let page = dataset.page
    if (page) {
      wx.yrUi.href(`/pages/component/${type}/${page}/${page}`)
    } else {
      wx.yrUi.href('/pages/common/coding/coding')
    }
  },
  onShareAppMessage() {
    return {
      title: 'Yr-ui组件库'
    }
  }
})