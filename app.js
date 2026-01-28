
import yrUi from './common/yr-ui-app.js'
import fuiConfig from './components/yr-ui/yr-ui-config/index'
import http from './components/yr-ui/yr-ui-request/index'
wx.yrUi = yrUi
wx.$yrUi = fuiConfig
//初始化请求配置项
http.create({
	host: 'https://ffa.yr-ui.cn',
	header: {
		// 'content-type': 'application/x-www-form-urlencoded'
	}
})
//请求拦截
http.interceptors.request.use(config => {
	//请求之前可在请求头中加入token等信息
	let token = wx.getStorageSync('yr-ui_token') || 'testToken';
	if (config.header) {
		config.header['Authorization'] = token
	} else {
		config.header = {
			'Authorization': token
		}
	}
	return config
})
//响应拦截
http.interceptors.response.use(response => {
	//TODO
	return response
})
wx.http = http
App({
  onLaunch() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            wx.yrUi.modal('更新提示', '发现新版本，为了获得更好的体验，建议立即更新', (res) => {
              updateManager.applyUpdate();
            });
          });
          updateManager.onUpdateFailed(() => {
            wx.yrUi.modal('更新失败', '新版本更新失败，请稍后再试或删除小程序重新搜索打开',
              (res) => {});
          });
        }
      });
    }
  },
  globalData: {
    version: "2.4.0"
  }
})