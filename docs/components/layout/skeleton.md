# Skeleton 骨架屏

骨架屏，在需要等待加载内容的位置提供一个占位图形组合。

## 基础使用

```html
<yr-ui-skeleton wx:if="{{loading}}" outerClass="yr-ui-wrap"></yr-ui-skeleton>
<view class="yr-ui-wrap">
  <view class="yr-ui-rect">矩形元素</view>
  <view class="yr-ui-round">圆形元素</view>
</view>
```

## 自定义 class 选择器

默认选择器为 `yr-ui-rect` (矩形) 和 `yr-ui-round` (圆形)，可通过 `selector` 属性自定义。

```html
<yr-ui-skeleton selector="{{['.my-rect', '.my-round']}}"></yr-ui-skeleton>
```

## 预加载数据 (手动绘制)

```html
<yr-ui-skeleton preloadList="{{[ {width: 100, height: 100, type: 'rect'}, ... ]}}"></yr-ui-skeleton>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| outerClass | String | yr-ui-skeleton | 需要被覆盖的外层元素 class 类名 |
| selector | Array | ['yr-ui-round', 'yr-ui-rect'] | 骨架元素选择器，元素需添加对应 class |
| background | String | transparent | 背景颜色 |
| preloadList | Array | [] | 预载数据，不动态获取节点，直接渲染 |
| active | Boolean | true | 是否展示动画效果 |
| theme | String | light | 主题色，可选值：light, dark |
| immediate | Boolean | true | 是否立即显示 (页面中使用时) |
| component | Boolean | false | 是否在组件内使用 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindchange | 节点信息获取完成触发 | `{ nodes }` |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| shown | 显示骨架屏 (组件内使用需要手动调用) | `instance`(当前组件实例 this) |
