# Sticky 吸顶容器

吸顶容器组件，用于将标题栏等元素在滚动时固定到页面顶部。

## 基础使用

```html
<yr-ui-sticky scrollTop="{{scrollTop}}" top="0">
  <view>吸顶内容</view>
</yr-ui-sticky>
```

```javascript
Page({
  data: {
    scrollTop: 0
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})
```

## 指定内容范围

通过 `range` 属性设置是否仅在父容器范围内吸顶。

```html
<view class="container">
  <!-- 当父容器滚动出可视区域时，吸顶失效 -->
  <yr-ui-sticky scrollTop="{{scrollTop}}" range>
    <view>范围吸顶</view>
  </yr-ui-sticky>
  <view>...</view>
</view>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| scrollTop | Number | 0 | 页面滚动距离，需在 onPageScroll 中动态绑定 |
| top | Number/String | 0 | 吸顶时距离顶部的距离，单位rpx (虽然代码中可能是 px，但通常组件库约定 rpx 或 px，源码中使用了 `(this.data.scrollTop || 0)` 加上 `res.top` ? 源码逻辑 `elTop = res.top + scrollTop` 是初始绝对位置。判断 `st + t >= et`。`top` 值直接参与计算，若为 rpx 需自行转换? 源码中并未对 `top` 做 rpx2px 转换，所以建议传 px 值或 0) |
| range | Boolean | false | 是否指定吸顶生效范围（仅在父容器内生效） |
| zIndex | Number | 999 | 层级 |
| param | Number/String | 0 | 自定义参数 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| sticky | 吸顶状态改变时触发 | `{ isFixed: Boolean, param }` |
