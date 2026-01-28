
import $yrUi from '../../../components/yr-ui/yr-ui-clipboard/index';
Page({
  data: {
    resUrl: wx.yrUi.resUrl(),
    menus: [{
      icon: 'app',
      name: 'App定制',
    }, {
      icon: 'web',
      name: '网站定制'
    }, {
      icon: 'applet',
      name: '小程序'
    }, {
      icon: 'design',
      name: 'UI定制'
    }, {
      icon: 'code',
      name: '贡献代码'
    }, {
      icon: 'cooperation',
      name: '其他合作'
    }],
    contacts: [{
      icon: 'email',
      text: '邮箱',
      value: 'yr-ui@126.com'
    }, {
      icon: 'weixin',
      text: '微信',
      value: 'wx_yr-ui'
    }, {
      icon: 'qq',
      text: 'QQ',
      value: '3560662983'
    }],
    show: false,
    styles: {
      position: 'fixed',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      backgroundColor: 'rgba(0,0,0,0.6)'
    },
    idx: 0,
    title: '开发定制'
  },
  copy(e) {
    let dataset = e.currentTarget.dataset
    let title = dataset.text || '链接'
    $yrUi.getClipboardData(dataset.value, res => {
      wx.yrUi.toast(`${title}复制成功`);
    });
  },
  open(e) {
    let idx = Number(e.currentTarget.dataset.index)
    this.setData({
      idx: idx
    })
    let title = "开发定制"
    if (idx === 4) {
      title = '贡献代码'
    } else if (idx === 5) {
      title = '其他合作'
    } else {
      title = '开发定制'
    }
    this.setData({
      title: title
    }, () => {
      this.setData({
        show: true
      })
    })
  },
  close() {
    this.setData({
      show: false
    })
  }
})