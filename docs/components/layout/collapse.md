# Collapse 折叠面板

可以折叠/展开的内容区域。

## 基础使用

```html
<yr-ui-collapse bindchange="change">
  <yr-ui-collapse-item wx:for="{{items}}" wx:key="index" index="{{index}}" open="{{item.isOpen}}">
    <view class="title">{{item.title}}</view>
    <view slot="content" class="content">{{item.content}}</view>
  </yr-ui-collapse-item>
</yr-ui-collapse>
```

## 手风琴效果

设置 `accordion` 属性开启手风琴模式（每次只能展开一个）。

```html
<yr-ui-collapse accordion>
  <!-- items -->
</yr-ui-collapse>
```

## Collapse 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| accordion | Boolean | false | 是否开启手风琴效果 |
| background | String | transparent | 背景颜色 |

## Collapse 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindchange | 切换面板时触发 | `{ index: 索引, isOpen: 是否展开 }` |

## CollapseItem 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| index | Number | 0 | 索引值，必填 |
| disabled | Boolean | false | 是否禁用 |
| open | Boolean | false | 是否展开 |
| arrow | Boolean | true | 是否显示右侧箭头 |
| arrowColor | String | #333 | 箭头颜色 |
| background | String | #fff | 标题栏背景颜色 |
| contentBg | String | #fff | 内容区域背景颜色 |
| animation | Boolean | true | 是否开启过渡动画 |

## CollapseItem 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 标题栏内容 |
| content | 展开的内容区域 |
