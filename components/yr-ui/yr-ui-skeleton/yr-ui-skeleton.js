
Component({
  properties: {
    //外层元素class值
    outerClass: {
      type: String,
      value: "yr-ui-skeleton"
    },
    //需要在骨架元素添加以下class值，也可传入自定义class值
    //需要做骨架的元素class值，包含round表示处理成圆形，其他为矩形
    selector: {
      type: Array,
      value: ['yr-ui-round', 'yr-ui-rect']
    },
    //骨架屏背景色
    background: {
      type: String,
      value: "transparent"
    },
    //骨架屏预载数据，如果传入数据则不动态获取节点信息
    preloadList: {
      type: Array,
      value: []
    },
    //是否展示动画效果
    active: {
      type: Boolean,
      value: true
    },
    //light、dark
    theme: {
      type: String,
      value: 'light'
    },
    //v2.1.0+ 组件初始化完成后是否立即显示骨架【仅在页面使用及component为false时有效】
    immediate: {
      type: Boolean,
      value: true
    },
    //v2.1.0+ 是否在自定义组件内使用，需要调用方法显示骨架
    component: {
      type: Boolean,
      value: false
    }
  },
  data: {
    //round、rect
    elList: [],
    height: 0,
    top:0
  },
  lifetimes: {
    attached: function () {
      const res = wx.getSystemInfoSync();
      this.setData({
        height: res.windowHeight
      })
      if (this.data.preloadList && this.data.preloadList.length > 0) {
        this.setData({
          elList: this.data.preloadList
        })
      }
    },
    ready: function () {
      if (this.data.immediate && !this.data.component) {
        //页面使用无需传
        this.shown()
      }
    }
  },
  methods: {
    shown(instance) {
      setTimeout(() => {
        this.nodesRef(this.data.outerClass, instance).then((res) => {
          if (res && res[0]) {
            this.setData({
              height: res[0].height,
              top: this.data.component ? res[0].top : 0
            })
          }
        });
        if (!this.data.preloadList || this.data.preloadList.length === 0) {
          this.selectorQuery(instance)
        }
      }, 50);
    },
    async selectorQuery(instance) {
      let selector = this.data.selector || []
      let nodes = []
      for (let item of selector) {
        await this.nodesRef(item, instance).then((res) => {
          res.map(d => {
            d.type = item.indexOf('round') === -1 ? 'rect' : 'round';
          })
          nodes = nodes.concat(res)
        })
      }
      this.setData({
        elList: nodes
      }, () => {
        this.triggerEvent('change', {
          nodes: nodes
        })
      })
    },
    async nodesRef(name, instance) {
      return await new Promise((resolve, reject) => {
        if (this.data.component) {
          wx.createSelectorQuery()
            .in(instance)
            .selectAll(`.${name}`)
            .boundingClientRect((res) => {
              if (res) {
                resolve(res);
              } else {
                reject(res)
              }
            }).exec();
        } else {
          wx.createSelectorQuery()
            .selectAll(`.${name}`)
            .boundingClientRect((res) => {
              if (res) {
                resolve(res);
              } else {
                reject(res)
              }
            }).exec();
        }
      })
    }
  }
})