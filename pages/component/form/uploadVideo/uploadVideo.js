
let upload,upload2,uploader;
Page({
  data: {
    //上传接口地址
    url: 'https://ffa.yr-ui.cn/api/example/upload-file',
    //上传状态，用于保存或其他操作时做判断
    status: '',
    //上传的视频地址列表
    urls: [],
    //上传状态，用于保存或其他操作时做判断
    status2: '',
    //初始化已上传的视频列表
    fileList: ['https://ffa.yr-ui.cn/uploadfile/220831211231709.mp4'],
    //上传的视频地址列表
    urls2: [],
    //调用upload 方法上传
    status3: '',
    urls3: []
  },
  onLoad(options) {
    this.setData({
      urls2:this.data.fileList
    })
  },
  onReady(){
    upload = this.selectComponent('#upload')
    upload2 = this.selectComponent('#upload2')
    uploader= this.selectComponent('#uploader')
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  success(e) {
    console.log(e)
    //上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
    let res = JSON.parse(e.detail.res.data.replace(/\ufeff/g, "") || "{}")
    this.setData({
      status:e.detail.status
    })
    if (res.data.url) {
      //处理结果返回给组件
      //data.url为上传成功后返回的视频地址
      //e.index为视频索引值
      upload && upload.result(res.data.url, e.detail.index)
    }
  },
  error(e) {
    this.setData({
      status:e.detail.status
    })
  },
  complete(e) {
    this.setData({
      status:e.detail.status,
      urls:e.detail.urls
    })
    if (this.data.status === 'success' && e.detail.action === 'upload') {
      wx.yrUi.toast('上传完成！')
      //已上传完成的视频列表 this.data.urls
      console.log(this.detail.urls)
    }
  },
  success2(e) {
    console.log(e)
    //上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
    let res = JSON.parse(e.detail.res.data.replace(/\ufeff/g, "") || "{}")
    this.setData({
      status:e.detail.status
    })
    if (res.data.url) {
      //处理结果返回给组件
      //data.url为上传成功后返回的视频地址
      //e.detail.index为视频索引值
      upload2 && upload2.result(res.data.url, e.detail.index)
    }
  },
  error2(e) {
    this.setData({
      status2:e.detail.status
    })
    wx.showModal({
      content: JSON.stringify(e)
    })
  },
  complete2(e) {
    this.setData({
      status2:e.detail.status,
      urls2:e.detail.urls
    })
    if (this.data.status2 === 'success' && e.detail.action === 'upload') {
      wx.yrUi.toast('上传完成！')
      //已上传完成的视频列表 this.data.urls
      console.log(this.data.urls)
    }
  },
  startUpload() {
    if (!this.data.status2 || this.data.status2 !== 'preupload') {
      wx.yrUi.toast('请选择需要上传的视频！')
      return
    }
    //开始上传
    upload2 && upload2.start()
  },
  /*
     以下为调用upload方法手动上传的所有方法内容
  */
  //调用upload方法上传时传入的回调函数
  uploadFile(filePath, index) {
    //filePath：上传的临时文件路径；index：位置索引值（更新上传进度使用）
    console.log('upload filePath', filePath)

    // 文件上传的函数，返回一个promise
    //上传成功后返回上传后的视频地址，上传失败则返回false即可
    return new Promise((resolve, reject) => {
      //调用api上传，所有需要参数自行补充
      const uploadTask = wx.uploadFile({
        url: this.data.url,
        name: 'file',
        // header: {},
        // formData: {},
        filePath: filePath,
        success: (res) => {
          //以下成功或失败逻辑根据接口自行处理
          const data = JSON.parse(res.data.replace(/\ufeff/g, "") || "{}")
          if (data.statusCode === 200) {
            //返回上传成功后的视频（约定返回格式，不可修改）
            resolve(data.data.url)
          } else {
            //上传失败（约定返回格式，不可修改）
            reject(false)
          }
        },
        fail: (res) => {
          //上传失败（约定返回格式，不可修改）
          reject(false)
        }
      })
      //更新上传进度
      uploadTask.onProgressUpdate((res) => {
        //调用方法更新组件内当前视频上传进度
        uploader && uploader.setProgress(res.progress, index)
      });
    })
  },
  callUpload() {
    //注意：此方法上传函数需要页面自行实现，如上 uploadFile（当组件内部方法无法满足时使用该方法自行去实现上传）
    if (!this.data.status3 || this.data.status3 !== 'preupload') {
      wx.yrUi.toast('请选择需要上传的视频！')
      return
    }
    //调用upload 方法上传，并传入函数，此时请勿传入index值
    uploader && uploader.upload(this.uploadFile)
  },
  //重新上传
  reUpload(e) {
    /*
      callUpload 中上传失败时会出现重新上传按钮
      点击重新上传按钮触发（仅call-upload 为true 时有效）
    */
    //当前上传按钮索引值
    console.log(e.detail.index)
    //调用upload 方法上传，并传入函数，且此时需要传入index值
    uploader && uploader.upload(this.uploadFile, e.detail.index)
  },
  complete3(e) {
    console.log(e.detail)
    this.setData({
      status3:e.detail.status,
      urls3:e.detail.urls
    })
    if (this.data.status3 === 'success' && e.data.action === 'upload') {
      wx.yrUi.toast('上传完成！')
      //已上传完成的视频列表 this.data.urls3
      // console.log(this.data.urls3)
    }
  }
})