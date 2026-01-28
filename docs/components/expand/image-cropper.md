# ImageCropper 图片裁剪

图片裁剪组件，支持缩放、旋转。

## 基础使用

需要通过 `id` 获取组件实例来调用裁剪方法。

```html
<yr-ui-image-cropper src="{{src}}" id="cropper"></yr-ui-image-cropper>

<view class="btn-box">
  <button bindtap="rotate">旋转</button>
  <button bindtap="cutting">确定</button>
</view>
```

```javascript
Page({
  data: {
    src: '' // 图片路径
  },
  rotate() {
    const cropper = this.selectComponent("#cropper")
    cropper.rotate()
  },
  cutting() {
    const cropper = this.selectComponent("#cropper")
    cropper.cutting((src) => {
      // src 为裁剪后的图片临时路径
      console.log(src)
    })
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | String | - | 图片资源地址 |
| width | String/Number | 280 | 裁剪框宽度，单位 px |
| height | String/Number | 280 | 裁剪框高度，单位 px |
| round | Boolean | false | 是否为圆形裁剪框 |
| scaleRatio | String/Number | 2 | 缩放比率，决定生成图片的清晰度 |
| fileType | String | png | 生成图片的类型 |
| quality | Number | 0.8 | 图片质量 (0, 1] |
| network | Boolean | false | 是否为网络图片 (设为 true 时组件内部会尝试下载) |
| borderColor | String | #B2B2B2 | 边框颜色 |
| background | String | rgba(0,0,0,.6) | 遮罩背景颜色 |
| zIndex | String/Number | 10 | 层级 |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| rotate | 旋转图片 (90度) | - |
| cutting | 开始裁剪 | `callback(tempFilePath)`: 回调函数 |
| reset | 重置图片状态 | - |
