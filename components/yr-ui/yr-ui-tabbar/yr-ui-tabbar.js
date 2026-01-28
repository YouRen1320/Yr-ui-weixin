
Component({
  properties: {
    tabBar: {
      type: Array,
      value: [],
      observer(vals) {
        this.initData(vals)
      }
    },
    //当前索引
    current: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    size: {
      type: String,
      optionalTypes: [Number],
      value: 24
    },
    fontWeight: {
      type: String,
      optionalTypes: [Number],
      value: 400
    },
    //V2.2.0+ 字体图标字体大小 rpx
    iconSize: {
      type: String,
      optionalTypes: [Number],
      value: 56
    },
    //V2.2.0+ 字体图标字体大小 rpx
    iconUnit: {
      type: String,
      value: 'rpx'
    },
    //字体颜色
    color: {
      type: String,
      value: '#333333'
    },
    //字体选中颜色
    selectedColor: {
      type: String,
      value: ''
    },
    //背景颜色
    background: {
      type: String,
      value: '#FFFFFF'
    },
    isBorder: {
      type: Boolean,
      value: true
    },
    //固定在底部
    isFixed: {
      type: Boolean,
      value: true
    },
    //角标字体颜色
    badgeColor: {
      type: String,
      value: '#FFFFFF'
    },
    //角标背景颜色
    badgeBackground: {
      type: String,
      value: ''
    },
    //z-index
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 980
    },
    //v1.9.9+ 固定底部时是否返回异形屏安全区固定高度
    fixedHeight: {
      type: Boolean,
      value: false
    }
  },
  data: {
    tabs: [],
    safeAreaH: 0
  },
  lifetimes: {
    attached: function () {
      let sys = wx.getSystemInfoSync()
      if (this.data.fixedHeight) {
        this.setData({
          safeAreaH: this.isPhoneX(sys) ? 34 : 0
        })
      }
      this.triggerEvent('init', {
        height: sys.windowWidth / 750 * 100 + this.data.safeAreaH
      })
      this.initData(this.data.tabBar)
    }
  },
  methods: {
    isPhoneX(res) {
      //34px
      let iphonex = false;
      let models = ['iphonex', 'iphonexr', 'iphonexsmax', 'iphone11', 'iphone11pro', 'iphone11promax',
        'iphone12', 'iphone12mini', 'iphone12pro', 'iphone12promax', 'iphone13', 'iphone13mini',
        'iphone13pro', 'iphone13promax', 'iphone14', 'iphone14mini',
        'iphone14pro', 'iphone14promax', 'iphone15', 'iphone15mini', 'iphone15pro', 'iphone14promax'
      ]
      const model = res.model.replace(/\s/g, "").toLowerCase()
      const newModel = model.split('<')[0]
      if (models.includes(model) || models.includes(newModel) || (res.safeAreaInsets && res.safeAreaInsets
          .bottom > 0)) {
        iphonex = true;
      }
      return iphonex;
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === 'string') {
          vals = vals.map(item => {
            return {
              text: item
            }
          })
        }
        this.setData({
          tabs: vals
        })
      }
    },
    itemClick(e) {
      let index = Number(e.currentTarget.dataset.index)
      this.triggerEvent('click', {
        index: index,
        ...this.data.tabs[index]
      })
    }
  }
})