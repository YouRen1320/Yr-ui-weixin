# Tag 标签

标签组件，用于标记或分类。

## 基础使用

```html
<yr-ui-tag text="标签一"></yr-ui-tag>
<yr-ui-tag text="标签二" type="danger"></yr-ui-tag>
<yr-ui-tag text="标签三" type="success"></yr-ui-tag>
<yr-ui-tag text="标签四" type="warning"></yr-ui-tag>
<yr-ui-tag text="标签五" type="purple"></yr-ui-tag>
```

## 主题风格

```html
<!-- 浅色调 -->
<yr-ui-tag text="标签一" theme="light"></yr-ui-tag>
<!-- 空心 -->
<yr-ui-tag text="标签一" theme="plain"></yr-ui-tag>
```

## 带关闭按钮

```html
<yr-ui-tag text="标签一" theme="light" padding="12rpx 20rpx">
  <view class="yr-ui-close__icon">
    <yr-ui-icon name="close" color="#465CFF" size="{{32}}"></yr-ui-icon>
  </view>
</yr-ui-tag>
```

## 自定义颜色与大小

```html
<yr-ui-tag text="标签一" background="rgba(255, 43, 43, .05)" color="#333"></yr-ui-tag>
<yr-ui-tag text="标签三" scaleRatio="{{0.8}}"></yr-ui-tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 标签内容 | string | - | - |
| type | 样式类型 | string | primary | success, warning, danger, purple |
| theme | 主题风格 | string | dark | light, plain |
| background | 背景色，如果设置背景则 type 失效 | string | - | - |
| isBorder | 是否显示边框 | boolean | true | - |
| borderColor | 边框颜色 | string | - | - |
| color | 字体颜色 | string | - | - |
| size | 字体大小，单位 rpx | string/number | 24 | - |
| scaleRatio | 缩放比例 | number | 1 | - |
| highlight | 是否有点击效果 | boolean | false | - |
| radius | 圆角值 | string/number | 8 | - |
| padding | 内边距 | string | 16rpx 32rpx | - |
| margin | 外边距 | string | 0 | - |
| index | 索引值，点击事件回调中返回 | number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | `{ index: number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 标签内部内容，可用于放置关闭按钮等 |
