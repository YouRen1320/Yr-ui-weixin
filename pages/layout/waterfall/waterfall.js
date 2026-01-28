
import list from './index.js'
let waterfall;
Page({
  data: {
    //数据列表
    goodsList: [],
    //瀑布流数据是否渲染完，未完成不可加载数据
    isEnd: false,
    //页码
    pageNo: 1,
    //是否加载完
    finished: false,
    loading: false
  },
  onLoad(options) {
    setTimeout(() => {
      this.setData({
        goodsList:list
      })
    }, 300)
  },
  onReady(){
      waterfall = this.selectComponent('#waterfall')
  },
  onEnd(e) {
    this.setData({
      isEnd:true
    })
  },
  handleClick(e) {
    wx.yrUi.toast('点击了~')
  },
  onPullDownRefresh() {
      //重置加载
      waterfall && waterfall.resetLoadmore();
      setTimeout(() => {
        wx.stopPullDownRefresh();
        //务必先清空原有数据
        this.setData({
          goodsList:[]
        },()=>{
          //数据成功返回后执行
          this.setData({
            goodsList:list,
            pageNo:1,
            finished:false,
            loading:false
          })
          wx.yrUi.toast('刷新成功~');
        })
      }, 200);
  },
  onReachBottom() {
    if (this.data.finished || !this.data.isEnd || this.data.loading) return;
    this.setData({
      loading:true
    })
    //延时 模拟请求
    setTimeout(() => {
      const data = this.data.pageNo === 3 ? [] : (this.data.pageNo === 2 ? list.reverse() : list)
      this.setData({
        goodsList:this.data.goodsList.concat(data),
        pageNo:this.data.pageNo + 1,
        loading:false
      })
      if (data.length < 10) {
        this.setData({
          finished:true
        })
      }
    }, 200)
  }
})