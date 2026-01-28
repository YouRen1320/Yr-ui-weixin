
Page({
  data: {
    status: false,
    isOpen: false,
		isOpen2: false
  },
  change(e) {
    this.setData({
      status: e.detail.value
    })
  },
  change2(e) {
    this.setData({
      isOpen:e.detail.value
    })
  },
  change3(e) {
    this.setData({
      isOpen2:e.detail.value
    })
  }
})