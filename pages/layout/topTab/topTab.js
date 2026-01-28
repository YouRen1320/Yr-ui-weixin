
import newsData from './index.js'
// 缓存最多页数
const MAX_CACHE_PAGEINDEX = 3;
// 缓存页签数量
const MAX_CACHE_PAGE = 12;
Page({
  data: {
    newsList: [],
    cacheTab: [],
    tabIndex: 0,
    tabs: ['推荐', '热榜', '新时代', '科技', '懂车帝', '体育', '健康', 'NBA', '每日必看']
  },
  onLoad(options) {
    setTimeout(() => {
      this.setData({
        newsList:this.initData()
      })
    }, 200);
  },
  initData() {
    let ary = [];
    for (let i = 0, length = this.data.tabs.length; i < length; i++) {
      let aryItem = {
        loadingText: '正在加载...',
        refreshing: false,
        data: [],
        isLoading: false,
        pageIndex: 1
      };
      if (i === this.data.tabIndex) {
        aryItem.pageIndex = 2;
        aryItem.data = aryItem.data.concat(newsData);
      }
      ary.push(aryItem);
    }
    return ary;
  },
  getList(index, refresh) {
    let activeTab = this.data.newsList[index];
    let list = newsData || [];
    if (refresh) {
      activeTab.data = [];
      activeTab.loadingText = '正在加载...';
      activeTab.pageIndex = 2;
      activeTab.data = list || [];
    } else {
      activeTab.data = activeTab.data.concat(list);
      activeTab.pageIndex++;
      activeTab.isLoading = false;
      //根据实际修改判断条件
      if (activeTab.pageIndex > 3) {
        activeTab.loadingText = '没有更多了';
      }
    }
    const item=`newsList[${index}]`
    this.setData({
      [item]:activeTab
    })
  },
  detail(e) {
    console.log(e.detail)
    wx.yrUi.toast('详情~')
  },
  loadMore(e) {
    let index = this.data.tabIndex
    let activeTab = this.data.newsList[index];
    const item=`newsList[${index}]`
    if (activeTab.pageIndex < 4 && !activeTab.isLoading) {
      activeTab.isLoading = true;
      this.setData({
        [item]:activeTab
      })
      setTimeout(() => {
        this.getList(index);
      }, 300);
    }
  },
  change(e) {
    this.switchTab(e.detail.index);
  },
  tabChange(e) {
    console.log(e.detail)
    if (e.detail.source == 'touch' || e.detail.source == 'autoplay') {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    }
  },
  switchTab(index) {
    if (this.data.tabIndex === index) return;
    if (this.data.newsList[index].data.length === 0) {
      this.getList(index);
    }
    // 缓存 tabId
    if (this.data.newsList[this.data.tabIndex].pageIndex > MAX_CACHE_PAGEINDEX) {
      let isExist = this.data.cacheTab.indexOf(this.data.tabIndex);
      if (isExist < 0) {
        this.data.cacheTab.push(this.data.tabIndex);
      }
    }
    this.setData({
      tabIndex:index
    })
    // 释放 tabId
    if (this.data.cacheTab.length > MAX_CACHE_PAGE) {
      let cacheIndex = this.data.cacheTab[0];
      this.clearTabData(cacheIndex);
      this.data.cacheTab.splice(0, 1);
    }
  },
  clearTabData(e) {
    this.setData({
      [`newsList[${e}].data`]:[],
      [`newsList[${e}].loadingText`]:'加载更多...',
      [`newsList[${e}].refreshing`]: false,
      [`newsList[${e}].isLoading`]: false,
      [`newsList[${e}].pageIndex`]: 1
    })
  },
  onrefresh(e) {
    let index = this.data.tabIndex;
    let tab = this.data.newsList[index];
    if (tab.refreshing) return;
    let item=`newsList[${index}].refreshing`
    this.setData({
      [item]:true
    })

    setTimeout(() => {
      this.getList(index, true);
      this.setData({
        [item]:false
      })
      wx.yrUi.toast('刷新成功')
    }, 1000);
  }
})