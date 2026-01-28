
Page({
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onReady: function () {
    const manager = wx.getBackgroundAudioManager();
    if (manager) {
      manager.title = '小鸡哔哔';
      manager.singer = '洛天依';
      manager.coverImgUrl =
        'https://res.yr-ui.cn/template/component/music/cover.jpeg';
      manager.src =
        'https://res.yr-ui.cn/template/component/music/chicken_beep.mp3';
    }
  }
})