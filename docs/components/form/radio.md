# Radio 单选框

单选框组件，用于单项选择。

## 基础使用

```html
<yr-ui-radio-group name="radio" model:value="{{val}}" bindchange="change">
  <yr-ui-label>
    <yr-ui-radio value="1"></yr-ui-radio>
    <text>选项一</text>
  </yr-ui-label>
  <yr-ui-label>
    <yr-ui-radio value="2"></yr-ui-radio>
    <text>选项二</text>
  </yr-ui-label>
</yr-ui-radio-group>
```

## 修改颜色与圆角

```html
<yr-ui-radio value="1" color="#FFB703" borderColor="#B2B2B2" borderRadius="8rpx"></yr-ui-radio>
```

## 修改选中样式

```html
<!-- styleType=2: 对号样式调整 -->
<yr-ui-radio value="1" style-type="{{2}}"></yr-ui-radio>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 选项值 | string/number | - | - |
| checked | 是否选中 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| color | 选中背景颜色 | string | - | - |
| borderColor | 未选中时边框颜色 | string | #ccc | - |
| borderRadius | 圆角值 | string | 50% | - |
| isCheckMark | 是否只展示对号 | boolean | false | - |
| checkMarkColor | 对号颜色 | string | #fff | - |
| scaleRatio | 缩放比例 | number/string | 1 | - |
| styleType | 选中样式类型 | number | 1 | 1, 2 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中状态变化时触发 | `{ checked: boolean, value: any }` |
