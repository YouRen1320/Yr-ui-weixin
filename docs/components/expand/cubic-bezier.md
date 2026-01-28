# CubicBezier 贝塞尔曲线

贝塞尔曲线组件，通常用于实现加入购物车的抛物线动画效果。

## 基础使用

监听点击事件，触发动画。

```html
<yr-ui-cubic-bezier left="{{left}}" bottom="{{bottom}}" param="{{0}}" bindclick="handleClick">
  <yr-ui-icon name="plussign"></yr-ui-icon>
  <view slot="badge" class="yr-ui-badge">1</view>
</yr-ui-cubic-bezier>
```

```javascript
Page({
  handleClick(e) {
    // 触发动画逻辑，通常配合页面逻辑改变 left/bottom 等位置或进行购物车数量更新
    // 组件内部已处理点击节流和动画触发
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| direction | String | lb | 动画运动方向，可选值：lb (左下), rb (右下), lt (左上), rt (右上) |
| top | String/Number | 100 | 目标终点 顶部距离，单位rpx (lt, rt 时生效) |
| bottom | String/Number | 100 | 目标终点 底部距离，单位rpx (lb, rb 时生效) |
| left | String/Number | 60 | 目标终点 左侧距离，单位rpx (lb, lt 时生效) |
| right | String/Number | 60 | 目标终点 右侧距离，单位rpx (rb, rt 时生效) |
| param | String/Number | 0 | 自定义参数，点击事件中返回 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindclick | 点击事件触发 | `{ param }` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 触发动画的元素（如加号按钮） |
| badge | 运动的小球或徽标元素 |
