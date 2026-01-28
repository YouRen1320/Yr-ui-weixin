
import $yrUi from '../../../../components/yr-ui/yr-ui-clipboard/index';
Page({
  copy(e) {
    const text = "www.yr-ui.cn"
    $yrUi.getClipboardData(text, res => {
      if (res) {
        wx.yrUi.toast('官网地址复制成功');
      }
    });
  },
  copyText(e) {
    let text = e.currentTarget.dataset.text
    $yrUi.getClipboardData(text, res => {
      if (res) {
        wx.yrUi.toast('文档地址复制成功');
      }
    });
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})