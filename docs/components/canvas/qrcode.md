# Qrcode 二维码

二维码生成组件。

## 基础使用

```html
<yr-ui-qrcode value="https://doc.yr-ui.cn"></yr-ui-qrcode>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | String/Number | 400 | 二维码宽度，单位rpx |
| height | String/Number | 400 | 二维码高度，单位rpx |
| value | String | - | 二维码内容 |
| foreground | String | #181818 | 前景色 |
| background | String | #ffffff | 背景色 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindready | canvas 初始化完成时触发 | `{ canvasId }` |
| bindlongclick | 长按事件 | - |
| bindtouchStart | 触摸开始事件 | - |
| bindtouchEnd | 触摸结束事件 | - |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| draw | 手动触发绘制 | - |
