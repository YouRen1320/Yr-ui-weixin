
//需要自行申请key：https://lbs.qq.com
//小程序平台引入sdk请在后台添加业务域名 https://apis.map.qq.com
import QQMapWX from '../../../libs/qqmap-wx-jssdk.min.js'
const key = 'I4OBZ-YWVWU-MENVE-4Z3TZ-GEAJT-IWBX3';
const map = new QQMapWX({
  key
});
Page({
  data: {
    latitude: 22.616917615026814,
    longitude: 114.02557368550984,
    mapHeight: 0,
    markers: [{
      iconPath: "/static/images/layout/img_rider_3x.png",
      id: 1,
      latitude: 22.611359108097293,
      longitude: 114.03014980402233,
      width: 48,
      height: 48
    }],
    circles: [{
      latitude: 22.616917615026814,
      longitude: 114.02557368550984,
      color: '#00AE8F11',
      fillColor: '#00AE8F30',
      radius: 200

    }, {
      latitude: 22.616917615026814,
      longitude: 114.02557368550984,
      color: '#FFFFFF',
      fillColor: '#FFFFFF',
      radius: 60
    }, {
      latitude: 22.616917615026814,
      longitude: 114.02557368550984,
      color: '#00AE8F',
      fillColor: '#00AE8F',
      radius: 24
    }],
    polyline: [],
    distance: 0,
    time: 0
  },
  onLoad(options) {
    const sys = wx.getSystemInfoSync()
    this.setData({
      mapHeight:sys.windowHeight - wx.yrUi.rpx2px(300)
    })
  },
  onReady() {
    setTimeout(() => {
      this.getPolyline()
    }, 50)
  },
  getDirection(routes) {
    let coors = routes.polyline,
      pl = [];
    //坐标解压（返回的点串坐标，通过前向差分进行压缩）
    let kr = 1000000;
    for (var i = 2; i < coors.length; i++) {
      coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
    }
    //将解压后的坐标放入点串数组pl中
    for (var i = 0; i < coors.length; i += 2) {
      pl.push({
        latitude: coors[i],
        longitude: coors[i + 1]
      })
    }
    //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
     //距离
     const distance = routes.distance<1000?`${routes.distance}m`:`${(routes.distance/1000).toFixed(1)}km`;
    this.setData({
      ['markers[0].latitude']:pl[0].latitude,
      ['markers[0].longitude']: pl[0].longitude,
      polyline:[{
        points: pl,
        color: '#00AE8F',
        width: 4
      }],
      distance:distance,
       //时间分钟
      time:routes.duration
    })
  },
  getPolyline() {
    /*
    wx.getLocation({
      type: 'gcj02',
      // altitude: true,
      success: (res) => {
        this.setData({
          longitude:res.longitude,
          latitude:res.latitude
        })
      },
      fail(err) {
        console.log(err)
      }
    })
    */

    // 骑手位置，可从后端获取，或上一页面传入
    const from = {
      latitude: this.data.markers[0].latitude,
      longitude: this.data.markers[0].longitude
    }
    //我的位置，正式环境使用上方注释代码获取当前位置
    const to = {
      // latitude: res.latitude,
      // longitude: res.longitude
      latitude: this.data.circles[0].latitude,
      longitude: this.data.circles[0].longitude
    }
    map.direction({
      //可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行）
      mode: 'bicycling',
      from: from,
      to: to,
      success: (res) => {
        console.log(res);
        if (res.result && res.result.routes && res.result.routes[0]) {
          this.getDirection(res.result.routes[0])
        }
      },
      fail: (error) => {
        console.error(error);
      }
    })

  },
  back(){
    wx.navigateBack()
  }
})