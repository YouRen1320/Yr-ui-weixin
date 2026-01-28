# List 列表

列表组件，包含 List 和 ListCell。

## 基础使用

```html
<yr-ui-list title="基础列表">
  <yr-ui-list-cell>列表项 1</yr-ui-list-cell>
  <yr-ui-list-cell>列表项 2</yr-ui-list-cell>
</yr-ui-list>
```

## 带箭头与点击效果

```html
<yr-ui-list-cell arrow bindclick="handleClick">
  <text>跳转页面</text>
</yr-ui-list-cell>
```

## 自定义样式

```html
<yr-ui-list-cell bottomBorder="{{false}}" padding="20rpx">
  <view>自定义内容</view>
</yr-ui-list-cell>
```

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 列表标题 | string | - | - |
| marginTop | margin-top 值 | number | 0 | - |
| padding | 标题 padding | string | 32rpx 32rpx 20rpx | - |
| footer | 底部说明文字 | string | - | - |
| topBorder | 是否显示上边框 | boolean | true | - |
| bottomBorder | 是否显示下边框 | boolean | false | - |

### ListCell Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| arrow | 是否显示右侧箭头 | boolean | false | - |
| highlight | 是否有点击效果 | boolean | true | - |
| topBorder | 是否显示上边框 | boolean | false | - |
| bottomBorder | 是否显示下边框 | boolean | true | - |
| bottomLeft | 下边框 left 偏移 | number | -1 (默认继承) | - |
| padding | 内边距 | string | 32rpx | - |
| radius | 圆角值 | string | 0 | - |

### ListCell Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击触发 | `{ index }` |
