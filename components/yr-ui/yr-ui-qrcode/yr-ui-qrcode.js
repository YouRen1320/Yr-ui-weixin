
import fuiQr from './yr-ui-qr/index.js'
const canvasId = `fui_qr_${Math.ceil(Math.random() * 10e5).toString(36)}`
/**
 * 字符串转换成 UTF-8
 * @param {String} str 文本内容
 */
const utf16to8 = (str) => {
  const len = str.length
  let out = ''

  for (let i = 0; i < len; i++) {
    const c = str.charCodeAt(i)

    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i)
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F))
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
    }
  }

  return out
}
Component({
  properties: {
    width: {
      type: String,
      optionalTypes: [Number],
      value: 400
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 400
    },
    value: {
      type: String,
      value: ''
    },
    foreground: {
      type: String,
      value: '#181818'
    },
    background: {
      type: String,
      value: '#ffffff'
    }
  },
  data: {
    canvasId,
    //误差校正等级
    errorCorrectLevel: 2,
    //类型
    typeNumber: -1,
    w: 200,
    h: 200,
    ctx: null
  },
  observers: {
    'width,height,foreground,background,value': function (width, height, foreground, background, value) {
      this.setData({
        w: this.rpx2px(this.data.width || 400),
        h: this.rpx2px(this.data.height || 400)
      }, () => {
        setTimeout(() => {
          this.draw()
        }, 50);
      })
    }
  },
  lifetimes: {
    attached: function () {
      this.setData({
        w: this.rpx2px(this.data.width || 400),
        h: this.rpx2px(this.data.height || 400)
      })
    },
    ready: function () {
      setTimeout(() => {
        this.draw()
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
    drawQrcode() {
      this.data.ctx.clearRect(0, 0, this.data.w, this.data.h);
      const qrcode = fuiQr(utf16to8(this.data.value), {
        typeNumber: this.data.typeNumber,
        errorCorrectLevel: this.data.errorCorrectLevel,
      })
      const cells = qrcode.modules
      const tileW = this.data.w / cells.length
      const tileH = this.data.h / cells.length
      cells.forEach((row, rdx) => {
        row.forEach((cell, cdx) => {
          this.data.ctx.fillStyle = cell ? this.data.foreground : this.data.background
          // this.data.ctx.setFillStyle(cell ? this.data.foreground : this.data.background)
          const w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
          const h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
          this.data.ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
        })
      })
      // this.data.ctx.draw()
    },
    draw() {
      if (!this.data.ctx) {
        this.getContext(() => {
          this.drawQrcode()
        })
        // this.data.ctx = wx.createCanvasContext(this.data.canvasId, this)
      } else {
        this.drawQrcode()
      }
      // this.data.ctx.scale(1, 1)
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