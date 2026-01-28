# BannerArc 横幅圆弧

横幅底部圆弧效果，常用于 Banner 图片底部。

## 基础使用

```html
<yr-ui-banner-arc background="#465CFF"></yr-ui-banner-arc>
```

## 配合图片使用

```html
<yr-ui-banner-arc background="#EDF9FF" height="512" ratio="{{1.5}}">
  <image class="banner-img" src="/static/banner.png" mode="widthFix"></image>
</yr-ui-banner-arc>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height | String/Number | 400 | Banner 高度，单位rpx |
| ratio | String/Number | 1.2 | 圆弧宽度比率，最小 1.2。值越大弧度越小 (扁平) |
| background | String | - | 背景颜色，支持渐变色 |
| marginTop | String/Number | 0 | 上外边距 |
| marginBottom | String/Number | 0 | 下外边距 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindclick | 点击组件触发 | - |
