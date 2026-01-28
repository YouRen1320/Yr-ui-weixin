# UploadVideo 视频上传

视频上传组件，支持拍摄或从相册选择视频上传。

## 基础使用

自动上传：

```html
<yr-ui-upload-video url="https://example.com/upload" immediate bindsuccess="success"></yr-ui-upload-video>
```

手动上传：

```html
<yr-ui-upload-video url="https://example.com/upload" id="upload" bindsuccess="success"></yr-ui-upload-video>
<button bindtap="startUpload">开始上传</button>
```

```javascript
Page({
  startUpload() {
    this.selectComponent("#upload").start()
  },
  success(e) {
    console.log(e.detail)
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | String/Number | 640 | 容器宽度，单位rpx |
| height | String/Number | 320 | 容器高度，单位rpx |
| fileList | Array | [] | 默认显示的视频列表，格式：`['url1', 'url2']` |
| max | String/Number | 1 | 最大上传数量 |
| url | String | - | 上传接口地址 |
| name | String | file | 上传文件对应的 key |
| header | Object | {} | 上传请求头 |
| formData | Object | {} | 上传额外参数 |
| immediate | Boolean | false | 是否选择视频后立即上传 |
| callUpload | Boolean | false | 是否自定义上传方法（V1.9.8+），设为 true 后需调用 `upload` 方法传入 promise |
| compressed | Boolean | true | 是否压缩视频 |
| maxDuration | Number | 60 | 拍摄视频最大时长，单位秒 |
| sourceType | Array | ['album', 'camera'] | 视频来源 |
| extension | Array | [] | 限制上传格式，如 `['mp4']` |
| size | String/Number | 20 | 单个视频大小限制，单位 MB |
| background | String | #eee | 容器背景色 |
| radius | String/Number | 0 | 圆角 |
| borderColor | String | - | 边框颜色 |
| borderSytle | String | solid | 边框样式 |
| progressColor | String | #465CFF | 进度条颜色 |
| delColor | String | #eee | 删除按钮颜色 |
| confirmDel | Boolean | false | 删除前是否弹窗确认 |
| isView | Boolean | false | 是否仅展示模式（不可上传/删除） |
| custom | Boolean | false | 是否自定义选择按钮（未实现自定义slot，源码未见slot，可能仅控制样式显示？）源码仅判断 `custom` 属性? 源码中未见 explicit slot usage for custom button, need verify. 但 `custom` 属性存在。 |
| param | String/Number | 0 | 自定义参数 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindsuccess | 上传成功时触发 | `{ status, res, param, ... }` |
| binderror | 上传失败时触发 | `{ status, res, param, ... }` |
| bindcomplete | 上传完成/状态改变时触发 | `{ status, urls, action, param }` |
| binddelete | 删除视频时触发 | `{ index }` |
| bindreupload | 重新上传时触发 (callUpload=true) | `{ index }` |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| start | 开始上传 (非 immediate 模式) | - |
| reUpload | 重新上传 | `e` (事件对象，通常用于点击进度条重新上传) |
| upload | 自定义上传方法 | `callback(file, index)`: 返回 Promise 的函数, `index`: 可选，指定索引 |
