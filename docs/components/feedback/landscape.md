# Landscape 压屏窗

全屏或局部覆盖的压屏弹窗。

## 基础使用

```html
<yr-ui-landscape show="{{show}}" bindclose="onClose">
  <image src="/static/ad.png" mode="widthFix"></image>
</yr-ui-landscape>
```

## 关闭按钮位置

```html
<yr-ui-landscape show="{{show}}" position="{{3}}">...</yr-ui-landscape>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| closable | 是否显示关闭按钮 | boolean | true | - |
| position | 关闭按钮位置 | number/string | 3 | 1:无, 2:右上, 3:中下 |
| type | 关闭按钮图标 | string | cancel | - |
| color | 关闭按钮颜色 | string | #fff | - |
| absolute | 是否绝对定位 | boolean | false | - |
| maskClosable | 点击遮罩是否关闭 | boolean | false | - |
| param | 自定义参数 | number/string | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭触发 | `{ param }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 弹窗内容 |
