
import $yrUi from '../../../../../components/yr-ui/yr-ui-clipboard/index';
let app = getApp()
Component({
  properties: {

  },
  data: {
    version: app.globalData.version
  },
  methods: {
    getLink(e) {
      $yrUi.getClipboardData('https://github.com/yr-ui/yr-ui', res => {
        wx.yrUi.toast('GitHub地址复制成功');
      });
    },
    href(e){
      let page=e.currentTarget.dataset.page
      wx.yrUi.href(page)
    }
  }
})