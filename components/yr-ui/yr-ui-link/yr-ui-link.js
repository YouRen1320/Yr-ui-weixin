
Component({
  properties: {
    href: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    underline: {
      type: String,
      optionalTypes:[Boolean],
      value: false
    },
    copyTips: {
      type: String,
      value: '链接已复制'
    },
    color: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      optionalTypes:[Number],
      value: 28
    },
    fontWeight: {
      type: String,
      optionalTypes:[Number],
      value: 400
    },
    highlight: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  methods: {
    openURL() {
      wx.setClipboardData({
        data: this.data.href,
        success: () => {
          wx.showToast({
            title: this.data.copyTips,
            icon: 'none'
          });
        }
      });
    }
  }
})