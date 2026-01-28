# Picker 选择器

选择器组件，用于数据的选择，支持单列、多列及联动选择。

## 基础使用

```html
<yr-ui-picker show="{{show}}" options="{{options}}" bindchange="change"></yr-ui-picker>
```

## 多列联动

```html
<!-- linkage: 是否联动, layer: 列数 -->
<yr-ui-picker layer="{{3}}" linkage show="{{show}}" options="{{options}}" bindchange="change"></yr-ui-picker>
```

## 暗黑模式

```html
<yr-ui-picker theme="dark" title="请选择" show="{{show}}" options="{{options}}" bindchange="change"></yr-ui-picker>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示选择器 | boolean | false | - |
| options | 数据源 | array | [] | - |
| layer | 列数 | number | 1 | - |
| linkage | 是否联动 | boolean | false | - |
| fields | 数据结构字段，默认 `['text', 'value', 'children']` | array | - | - |
| value | 默认值的索引数组 | array | [] | - |
| title | 标题 | string | - | - |
| theme | 主题 | string | light | light, dark |
| height | 内容区域高度，单位 rpx | number | 520 | - |
| radius | 顶部是否圆角 | boolean | false | - |
| confirmText | 确定按钮文本 | string | 确定 | - |
| cancelText | 取消按钮文本 | string | 取消 | - |
| maskClosable | 点击遮罩是否关闭 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 点击确定时触发 | `{ text, value, index, result, param }` |
| cancel | 点击取消或遮罩时触发 | `{ param }` |
