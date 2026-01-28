# Divider 分割线

分割线组件，可自定义线条宽度、颜色等。

## 基础使用

```html
<yr-ui-divider text="没有更多了"></yr-ui-divider>
```

## 自定义样式

```html
<yr-ui-divider dividerColor="#465CFF" color="#465CFF" width="100%" text="文本"></yr-ui-divider>
```

## 使用插槽

```html
<yr-ui-divider>
  <view>自定义内容</view>
</yr-ui-divider>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | - | 显示的文本 |
| height | Number/String | 100 | 占据高度，单位rpx |
| width | String | 400rpx | 线条宽度 |
| dividerColor | String | #CCCCCC | 线条颜色，支持渐变 |
| color | String | #B2B2B2 | 文本颜色 |
| size | Number/String | 24 | 文本字体大小，单位rpx |
| fontWeight | Number/String | 400 | 文本粗细 |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义分割线中间内容 |
