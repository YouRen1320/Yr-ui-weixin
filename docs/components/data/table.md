# Table 表格

表格组件，用于展示多条结构化数据。

## 基础使用

```html
<yr-ui-table header="{{header}}" itemList="{{tableData}}"></yr-ui-table>
```

```js
Page({
  data: {
    header: [
      { key: 'name', label: '姓名' },
      { key: 'age', label: '年龄' },
      { key: 'address', label: '地址' }
    ],
    tableData: [
      { name: '张三', age: 18, address: '北京市' },
      { name: '李四', age: 20, address: '上海市' }
    ]
  }
})
```

## 带斑马纹

```html
<yr-ui-table header="{{header}}" itemList="{{tableData}}" stripe></yr-ui-table>
```

## 可选择

```html
<yr-ui-table 
  header="{{header}}" 
  itemList="{{tableData}}" 
  selection 
  bindselectionChange="onSelectionChange">
</yr-ui-table>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| header | 表头配置 | array | [] | - |
| itemList | 数据列表 | array | [] | - |
| show | 是否显示 | boolean | true | - |
| size | 字体大小 | number | 28 | - |
| color | 字体颜色 | string | #7F7F7F | - |
| headerBgColor | 表头背景色 | string | #fff | - |
| fixed | 是否固定表头 | boolean | false | - |
| height | 表格高度 | number | 0 (自动) | - |
| border | 是否显示纵向边框 | boolean | true | - |
| horBorder | 是否显示横向边框 | boolean | true | - |
| stripe | 是否显示斑马纹 | boolean | false | - |
| align | 对齐方式 | string | center | left, center, right |
| selection | 是否开启多选 | boolean | false | - |
| emptyText | 空数据提示 | string | 暂无数据 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格触发 | `{ item, index, buttonIndex }` |
| selectionChange | 选择项改变触发 | `{ value: [] }` |
| sortChange | 排序改变触发 | `{ itemList, sort, prop }` |

### Methods

通过 `selectComponent` 获取实例调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clearSelection | 清空选择 | - |
| resetSort | 重置排序 | - |
