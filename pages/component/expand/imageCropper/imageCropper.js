
let cropper;
Page({
  data: {
    src: ''
  },
  onLoad(options) {
    if (options.src) {
      this.setData({
        src:options.src
      })
    }
  },
  onReady(){
    cropper = this.selectComponent("#cropper")
  },
  chooseImage(e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({
          src:res.tempFilePaths[0]
        })
      }
    });
  },
  rotate() {
    cropper && cropper.rotate()
  },
  cutting() {
    if (cropper) {
      cropper.cutting((filePath) => {
        console.log(filePath)
        wx.previewImage({
          urls: [filePath]
        })
      })
    }
  }
})