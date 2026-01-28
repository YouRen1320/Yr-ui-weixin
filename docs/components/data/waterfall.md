# Waterfall 瀑布流

瀑布流布局组件。

## 基础使用

需配合 `yr-ui-waterfall-item` 使用。

```html
<yr-ui-waterfall id="fui_waterfall" bindinit="onInit">
  <yr-ui-waterfall-item wx:for="{{list}}" wx:key="index">
    <image src="{{item.src}}" mode="widthFix" class="item-img"></image>
  </yr-ui-waterfall-item>
</yr-ui-waterfall>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| columnGap | 列间距 | number | 24 | - |
| topGap | 顶部间距 | number | 24 | - |
| leftGap | 左侧间距 | number | 0 | - |
| rightGap | 右侧间距 | number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| init | 初始化完成触发 | `{ itemWidth }` |
| end | 排序结束触发 | - |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| startSorting | 开始排序布局 | - |
| resetLoadmore | 重置布局（刷新时使用） | - |
