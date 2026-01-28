
import $yrUi from '../../../components/yr-ui/yr-ui-clipboard/index';
Page({
  data: {
    resUrl: wx.yrUi.resUrl(),
    links: [{
      img: 'website',
      name: 'Yr-ui 官网地址',
      link: 'https://www.yr-ui.cn/'
    }, {
      img: 'file',
      name: 'Yr-ui 文档地址',
      link: 'https://doc.yr-ui.cn/'
    }, {
      img: 'github',
      name: 'GitHub 地址',
      link: 'https://github.com/yr-ui/yr-ui'
    }, {
      img: 'uni',
      name: 'UniApp 插件市场地址',
      link: 'https://ext.dcloud.net.cn/publisher?id=766365'
    }]
  },
  getLink(e) {
    const item = this.data.links[e.detail.index]
    $yrUi.getClipboardData(item.link, res => {
      wx.yrUi.toast(`${item.name}复制成功`);
    });
  }
})