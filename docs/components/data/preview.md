# Preview 表单预览

用于表单数据的预览展示。

## 基础使用

```html
<yr-ui-preview previewData="{{previewData}}" fields="{{fields}}"></yr-ui-preview>
```

```js
Page({
  data: {
    previewData: {
      label: '金额',
      value: '￥100.00',
      list: [
        { label: '商品', value: 'yr-ui' },
        { label: '交易时间', value: '2023-01-01' }
      ]
    },
    fields: {
      label: 'label',
      value: 'value',
      list: 'list'
    }
  }
})
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| previewData | 预览数据 | object | {} | - |
| fields | 字段映射 | object | {} | {label, value, list, buttons...} |
| background | 背景颜色 | string | - | - |
| labelWidth | 标签宽度 | number | 0 | - |
| labelAlign | 标签对齐方式 | string | left | left, right, justify |
| highlight | 按钮是否有点击态 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮触发 | `{ index, ...item }` |
| valueClick | 点击列表项触发 | `{ index, item }` |
