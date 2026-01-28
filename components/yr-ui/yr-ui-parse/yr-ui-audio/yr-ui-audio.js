
Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    desc: {
      type: String,
      value: ''
    },
    src: {
      type: String,
      value: ''
    }
  },
  data: {
    isPlay: false,
    currentTimeStr: '00:00',
    durationStr: '00:00',
    progress: 0,
    innerAudioContext: null
  },
  lifetimes: {
    attached: function () {
      this.data.src && this.handleInitAudio(this.data.src)
    },
    detached: function () {
      this.data.innerAudioContext && this.data.innerAudioContext.destroy()
    }
  },
  methods: {
    handleInitAudio(src) {
      this.data.innerAudioContext = wx.createInnerAudioContext()
      this.data.innerAudioContext.src = src
      this.data.innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })

      this.data.innerAudioContext.onCanplay(() => {
        const _fui_duration = this.data.innerAudioContext.duration;
        setTimeout(() => {
          const durationStr = this.parseTime(this.data.innerAudioContext.duration)
          this.setData({
            durationStr
          })
        }, 1000)
      })

      this.data.innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })

      this.data.innerAudioContext.onEnded(() => {
        this.setData({
          isPlay: false
        })
      })

      this.data.innerAudioContext.onTimeUpdate(() => {
        const currentTime = this.data.innerAudioContext.currentTime
        const duration = this.data.innerAudioContext.duration
        const currentTimeStr = this.parseTime(currentTime)
        const progress = (currentTime / duration) * 100
        this.setData({
          currentTimeStr: currentTimeStr,
          progress: progress
        })
      })
    },

    handleControl() {
      if (!this.data.isPlay) {
        this.setData({
          isPlay: true
        })
        this.data.innerAudioContext && this.data.innerAudioContext.play()
      } else {
        this.setData({
          isPlay: false
        })
        this.data.innerAudioContext && this.data.innerAudioContext.pause()
      }
    },

    parseTime(time) {
      const minute = Math.floor(time / 60)
      const second = Math.floor(time % 60)
      return `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
    }
  }
})