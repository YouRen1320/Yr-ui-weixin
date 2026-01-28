
/*!
 * 剪贴板
 *
 * 官网地址：https://yr-ui.cn/
 * 文档地址：https://doc.yr-ui.cn/
 */
// #ifdef H5
// import ClipboardJS from "./clipboard.min.js"
// #endif

/**
 * data 需要复制的数据
 * callback 回调
 * **/
const getClipboardData = function (data, callback) {

	wx.setClipboardData({
		data: data,
		success(res) {
			("function" == typeof callback) && callback(true)
		},
		fail(res) {
			("function" == typeof callback) && callback(false)
		}
	})
}
export default {
	getClipboardData: getClipboardData
};