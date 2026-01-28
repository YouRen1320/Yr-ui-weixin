# WingBlank 左右间距

布局组件，主要用于设置元素内容两侧空白间距。

## 基础使用

```html
<!-- size = small (16rpx) -->
<yr-ui-wing-blank size="small">
  <view>Content</view>
</yr-ui-wing-blank>

<!-- size = default (24rpx) -->
<yr-ui-wing-blank size="default">
  <view>Content</view>
</yr-ui-wing-blank>

<!-- size = large (32rpx) -->
<yr-ui-wing-blank size="large">
  <view>Content</view>
</yr-ui-wing-blank>
```

## 自定义间距

```html
<!-- 间距 64rpx -->
<yr-ui-wing-blank gap="64">
  <view>Content</view>
</yr-ui-wing-blank>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| size | 间距大小 | string | default | small (16rpx), default (24rpx), large (32rpx) |
| gap | 自定义间距，单位 rpx，设置大于 0 的数值生效，优先级高于 size | string/number | 0 | - |
| background | 背景颜色 | string | transparent | - |
| radius | 圆角值，单位 rpx | string/number | 0 | - |
| marginTop | margin-top 值，单位 rpx | string/number | 0 | - |
| marginBottom | margin-bottom 值，单位 rpx | string/number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 内容区域 |
