# BackgroundImage 背景图

背景图组件，用于设置页面或容器的背景图片。

## 基础使用

`yr-ui-background-image` 用于放置背景图，支持绝对定位覆盖整个容器。

```html
<view class="yr-ui-wrap">
  <yr-ui-background-image src="/static/images/component/bg.jpeg"></yr-ui-background-image>
  <view class="yr-ui-content">
    <text>内容区域</text>
  </view>
</view>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | String | - | 图片资源地址 |
| background | String | transparent | 背景颜色，支持渐变色等 CSS 背景属性 |
| zIndex | String/Number | -1 | 层级 z-index |
| aspectFill | Boolean | true | 是否保持纵横比缩放图片，只保证图片的短边能完全显示出来 |
| absolute | Boolean | false | 是否使用 absolute 定位，默认 fixed |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 内容区域，通常不需要使用，直接覆盖在上方即可 |
