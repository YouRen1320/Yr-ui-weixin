# Autograph 手写签名

手写签名组件，用于手写电子签名。

## 基础使用

<Device>
  <!-- 这里可以放截图或者其他演示内容 -->
  <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #999;">
     示例图片/内容
  </div>
</Device>

`yr-ui-autograph` 提供了手写签名的功能，可以通过 `width` 和 `height` 设置画布宽高。

```html
<yr-ui-autograph id="autograph" bindready="ready"></yr-ui-autograph>
```

```javascript
Page({
  data: {
    src: ''
  },
  ready() {
    // 组件初始化完成
  },
  // 重签
  redraw() {
    const autograph = this.selectComponent("#autograph")
    autograph.redraw()
  },
  // 完成签名
  complete() {
    const autograph = this.selectComponent("#autograph")
    autograph.drawComplete((res) => {
      // res 为临时路径，如果失败则为 false
      if (res) {
        this.setData({
          src: res
        })
      }
    })
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | String/Number | 0 | 画布宽度，单位rpx，0表示屏幕宽度 |
| height | String/Number | 400 | 画布高度，单位rpx |
| background | String | #ffffff | 画布背景颜色 |
| lineWidth | String/Number | 5 | 线条宽度，单位px |
| color | String | #181818 | 线条颜色 |
| tips | String | 请签名！ | 签名提示语，设为 `true` 字符串或 boolean true 则不提示 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindready | canvas 初始化完成时触发 | `{ canvasId }` |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| redraw | 重置/清空画布 | - |
| drawComplete | 完成签名并生成图片 | `callback(tempFilePath)`: 回调函数，返回图片临时路径或 false |
