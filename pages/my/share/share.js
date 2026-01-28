
import $yrUi from '../../../components/yr-ui/yr-ui-clipboard/index';
let generator;
Page({
  data: {
    posterData: {
      imgs: [{
        imgResource: '/static/images/share/img_bg_3x.png',
        x: 64,
        y: 112,
        width: 622,
        height: 466,
        zIndex: 1
      }, {
        imgResource: '/static/images/common/img_logo.png',
        x: 329,
        y: 48,
        width: 92,
        height: 92,
        borderRadius: 24,
        zIndex: 3
      }, {
        imgResource: '/static/images/qrcode/wx_qrcode.jpg',
        x: 175,
        y: 546,
        width: 400,
        height: 400,
        zIndex: 3
      }],
      blocks: [{
        width: 750,
        height: 1064,
        x: 0,
        y: 0,
        backgroundColor: '#F1F4FA'
      }, {
        width: 512,
        height: 512,
        x: 119,
        y: 490,
        backgroundColor: '#FFFFFF',
        borderRadius: 48,
        shadow: {
          offsetX: 0,
          offsetY: 20,
          blur: 50,
          color: 'rgba(9, 41, 134, 0.12)'
        },
        zIndex: 2
      }],
      texts: [{
        text: 'Yr-ui组件库',
        x: 375,
        y: 184,
        fontSize: 28,
        color: '#181818',
        width: 184,
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 3
      }]
    },
    isReady: false,
    //海报绘制完成保存路径，避免重复绘制
    filePath: ''
  },
  onReady: function (options) {
    generator = this.selectComponent("#generator")
  },
  ready() {
    this.setData({
      isReady: true
    })
  },
  previewImage() {
    wx.previewImage({
      urls: [this.data.filePath]
    })
  },
  generatePoster() {
    if (this.data.isReady) {
      //已经绘制直接使用，避免重复绘制
      if (this.data.filePath) {
        this.previewImage()
      } else {
        wx.showLoading({
          title: '正在生成...'
        })
        //绘制海报
        if (generator) {
          generator.generatePoster(this.data.posterData, (res) => {
            //海报图片res
            console.log(res)
            this.setData({
              filePath: res
            }, () => {
              this.previewImage()
              wx.hideLoading()
            })
          })
        }
      }
    } else {
      wx.yrUi.toast('组件尚未初始化完成！')
    }
  },
  onShareAppMessage() {
    return {
      title: 'Yr-ui组件库'
    }
  }
})