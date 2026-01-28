# IndexList 索引列表

索引列表，用于长列表的快速索引。

## 基础使用

```html
<yr-ui-index-list listData="{{list}}" bindclick="onClick"></yr-ui-index-list>
```

## 带选择功能

```html
<yr-ui-index-list 
  listData="{{list}}" 
  isSelect 
  selectedColor="#FFB703" 
  activeColor="#FFB703" 
  bindclick="onClick">
</yr-ui-index-list>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| listData | 列表数据 | array | [] | `{letter, data:[]}` |
| height | 索引项高度 | number | 64 | - |
| color | 字体颜色 | string | #181818 | - |
| background | 背景颜色 | string | - | - |
| keyColor | 索引字符颜色 | string | #7F7F7F | - |
| activeColor | 选中/触摸索引颜色 | string | #FFFFFF | - |
| activeBackground | 选中/触摸背景颜色 | string | - | - |
| isSelect | 是否开启选择模式 | boolean | false | - |
| borderColor | 边框颜色 | string | #ccc | - |
| selectedColor | 选中项图标颜色 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击项触发 | `{ index, letter, subIndex, ...data }` |
| scrolltolower | 滚动到底部触发 | - |
