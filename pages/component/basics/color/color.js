
import colors from './index.js';
import $yrUi from '../../../../components/yr-ui/yr-ui-clipboard/index';
Page({
  data: {
    colors: colors
  },
  getColor(e, color) {
    $yrUi.getClipboardData(color, res => {
      wx.yrUi.toast('颜色复制成功');
    });
  }
})