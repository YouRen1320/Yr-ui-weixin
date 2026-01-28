# Lazyload 图片懒加载

图片懒加载组件，只渲染可视区域内的图片，增强用户体验，减少 HTTP 请求。

## 基础使用

```html
<yr-ui-lazyload src="https://example.com/image.png"></yr-ui-lazyload>
```

## 占位图与圆角

支持设置占位图 placeholders 以及图片圆角。

```html
<yr-ui-lazyload src="{{src}}" placeholder="/static/images/placeholder.png" radius="16"></yr-ui-lazyload>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | String | - | 图片资源地址 |
| width | String/Number | 320 | 图片宽度，单位rpx |
| height | String/Number | 320 | 图片高度，单位rpx |
| radius | String/Number | 0 | 图片圆角，单位rpx |
| placeholder | String | - | 占位图地址 |
| background | String | #EEEEEE | 占位背景色（无占位图时显示） |
| mode | String | widthFix | 图片剪裁、缩放的模式，同原生 image |
| webp | Boolean | false | 默认不解析 webP 格式，只在可信赖的 webP 源下使用 |
| marginTop | String/Number | 0 | 上外边距，单位rpx |
| marginRight | String/Number | 0 | 右外边距，单位rpx |
| marginBottom | String/Number | 0 | 下外边距，单位rpx |
| marginLeft | String/Number | 0 | 左外边距，单位rpx |
| param | String/Number | 0 | 自定义参数，事件回调中返回 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindload | 图片加载完毕时触发 | `{ detail: 原生event.detail, param }` |
| binderror | 图片加载失败时触发 | `{ detail: 原生event.detail, param }` |
| bindclick | 点击图片时触发 | `{ param }` |
