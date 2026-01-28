# Switch 开关

开关选择器。

## 基础使用

```html
<yr-ui-switch bindchange="change"></yr-ui-switch>
```

## 带文字插槽

```html
<yr-ui-switch bindchange="change">
  <text class="yr-ui-switch--text">{{isOpen?'ON':'OFF'}}</text>
</yr-ui-switch>
```

## 带图标插槽

```html
<yr-ui-switch btnColor="#3d3d3d" color="#2C2C2C">
  <image src="/static/icon.png" class="yr-ui-icon--img"></image>
</yr-ui-switch>
```

## Checkbox 样式

```html
<yr-ui-switch type="checkbox" color="#FFB703" scaleRatio="{{1.2}}"></yr-ui-switch>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 组件名称 | string | - | - |
| checked | 是否选中 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| type | 样式类型 | string | switch | switch, checkbox |
| color | 选中颜色 | string | - | - |
| background | 背景颜色 | string | #fdfdfd | - |
| btnColor | 按钮颜色 | string | - | - |
| btnBgColor | 按钮背景颜色 | string | #fff | - |
| scaleRatio | 缩放比例 | number | 1 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 状态发生变化时触发 | `detail` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内部内容（如文字或图标） |
