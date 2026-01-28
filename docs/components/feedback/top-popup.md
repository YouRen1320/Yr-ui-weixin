# TopPopup 顶部弹出层

顶部弹出的浮层容器。

## 基础使用

```html
<yr-ui-top-popup show="{{show}}" bindclose="onClose">
  <view class="content">内容区域</view>
</yr-ui-top-popup>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| background | 背景颜色 | string | #fff | - |
| radius | 圆角 | number | 24 | - |
| zIndex | 层级 | number | 1001 | - |
| maskClosable | 点击遮罩是否关闭 | boolean | true | - |
| maskBackground | 遮罩背景色 | string | rgba(0,0,0,.6) | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭触发 (maskClosable=true) | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 弹出层内容 |
