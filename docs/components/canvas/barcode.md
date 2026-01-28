# Barcode 条形码

条形码组件，用于生成和展示条形码。

## 基础使用

`yr-ui-barcode` 支持生成 EAN-13 和 Code 128 类型的条形码。

```html
<!-- EAN-13 -->
<yr-ui-barcode value="1234567890123"></yr-ui-barcode>

<!-- Code 128 -->
<yr-ui-barcode type="2" value="123456"></yr-ui-barcode>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | String/Number | 480 | 条形码宽度，单位rpx |
| height | String/Number | 200 | 条形码高度，单位rpx |
| value | String/Number | - | 条形码数据 |
| type | String/Number | 1 | 条形码类型，1: EAN-13, 2: Code 128 |

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
| draw | 手动触发绘制 | `options`: 配置项 (EAN-13 类型有效) |
