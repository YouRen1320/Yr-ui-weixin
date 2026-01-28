
import icons from './index.js';
import $yrUi from '../../../../components/yr-ui/yr-ui-clipboard/index';
Page({
  data: {
    icons: icons
  },
  getName(e) {
    const name = this.data.icons[e.detail.index]
    if (!name) return;
    $yrUi.getClipboardData(name, res => {
      wx.yrUi.toast('图标名称复制成功');
    });
  }
})