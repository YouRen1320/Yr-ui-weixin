
import $yrUi from '../../../components/yr-ui/yr-ui-clipboard/index';
let app = getApp()
Page({
  data: {
    version: app.globalData.version
  },
  getLink(e) {
    $yrUi.getClipboardData('https://github.com/yr-ui/yr-ui', res => {
      wx.yrUi.toast('GitHub地址复制成功');
    });
  },
  href(e) {
    let page = e.currentTarget.dataset.page
    wx.yrUi.href(page)
  }
})