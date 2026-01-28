# MovableView 可移动视图

可移动的视图容器，支持在页面中拖拽滑动。

## 基础使用

```html
<yr-ui-movable-view>
  <view class="content">可拖拽内容</view>
</yr-ui-movable-view>
```

## 初始位置

可以通过 `left`, `top`, `bottom`, `right` 设置初始位置。

```html
<!-- 距离左侧 80rpx -->
<yr-ui-movable-view left="80">
   <yr-ui-icon name="plus"></yr-ui-icon>
</yr-ui-movable-view>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| left | String/Number | -1 | 距离左侧距离，单位rpx，>-1时生效 |
| right | String/Number | 80 | 距离右侧距离，单位rpx (left失效时生效) |
| top | String/Number | -1 | 距离顶部距离，单位rpx，>-1时生效 |
| bottom | String/Number | 120 | 距离底部距离，单位rpx (top失效时生效) |
| zIndex | String/Number | 10 | 层级 z-index |
| direction | String | all | 移动方向，可选值：all, vertical, horizontal, none |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindchange | 拖动过程中触发 | `{ x: X坐标, y: Y坐标 }` |
