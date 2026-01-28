
import barcode from './barcode.js'
import {
  code128
} from './barcode-code128.js';
const canvasId = `fui_bc_${Math.ceil(Math.random() * 10e5).toString(36)}`
const defalutOptions = {
  number: true,
  prefix: true,
  color: '#181818',
  debug: false,
  onValid() {},
  onInvalid() {},
  onSuccess() {},
  onError() {}
}
Component({
  properties: {
    width: {
      type: String,
      optionalTypes: [Number],
      value: 480,
      observer(val) {
        this.setData({
          w: this.rpx2px(val || 480)
        })
      }
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 200,
      observer(val) {
        this.setData({
          h: this.rpx2px(val || 200)
        })
      }
    },
    value: {
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    //条形码类型:1-EAN-13 2-Code 128
    type: {
      type: String,
      optionalTypes: [Number],
      value: 1
    }
  },
  data: {
    canvasId,
    defalutOptions,
    w: 240,
    h: 100,
    ctx: null
  },
  lifetimes: {
    attached: function () {
      this.setData({
        w: this.rpx2px(this.data.width || 480),
        h: this.rpx2px(this.data.height || 200)
      })
    },
    ready: function () {
      setTimeout(() => {
        this.triggerEvent('ready', {
          canvasId: this.data.canvasId
        })
      }, 50)
    }
  },
  methods: {
    rpx2px(value) {
      let sys = wx.getSystemInfoSync()
      return sys.windowWidth / 750 * value
    },
    getContext(callback) {
      const query = wx.createSelectorQuery().in(this)
      query.select(`#${this.data.canvasId}`)
        .fields({
          node: true,
          size: true
        })
        .exec((res) => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          const dpr = wx.getSystemInfoSync().pixelRatio
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctx.scale(dpr, dpr)
          this.data.ctx = ctx;
          callback && callback()
        })
    },
    drawBarcode(options){
      this.data.ctx.clearRect(0, 0, this.data.w, this.data.h);
      if (this.data.type == 1) {
        const opts = Object.assign({}, this.data.defalutOptions, options)
        new barcode(String(this.data.value), Object.assign({
          width: this.data.w,
          height: this.data.h
        }, opts), this.data.ctx)
      } else {
        code128(this.data.ctx, String(this.data.value), this.data.w, this.data.h)
      }
    },
    draw(options = {}) {
      if (!this.data.ctx) {
        this.getContext(()=>{
           this.drawBarcode(options)
        })
        // this.data.ctx = wx.createCanvasContext(this.data.canvasId, this)
      }else{
        this.drawBarcode(options)
      }
    },
    longtap() {
      this.triggerEvent('longclick', {})
    },
    touchstart() {
      this.triggerEvent('touchStart', {})
    },
    touchend() {
      this.triggerEvent('touchEnd', {})
    }
  }
})