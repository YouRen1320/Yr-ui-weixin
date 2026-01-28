# DataTag 标签选择

数据驱动的标签选择组件，支持单选、多选、全选等功能。

## 基础使用

```html
<!-- 单选 -->
<yr-ui-data-tag options="{{options}}" bindchange="change"></yr-ui-data-tag>

<!-- 多选 -->
<yr-ui-data-tag multiple options="{{options}}" bindchange="change"></yr-ui-data-tag>
```

```javascript
Page({
  data: {
    options: ['标签一', '标签二', '标签三']
  },
  change(e) {
    console.log(e.detail)
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| options | Array | [] | 数据源，支持字符串数组或对象数组 |
| value | Array/String/Number | [] | 选中的值 |
| textKey | String | text | 选项显示文本的键名 |
| valueKey | String | value | 选项值的键名 |
| multiple | Boolean | false | 是否多选 |
| min | String/Number | 1 | 最小选择数（单选时如果 >0 则必选一项） |
| multipleMin | String/Number | 0 | 多选时最小选择数 |
| max | String/Number | -1 | 多选时最大选择数，-1不限制 |
| width | String/Number | 0 | 标签宽度，0表示自适应 |
| height | String/Number | 0 | 标签高度，0表示自适应 |
| padding | String | 16rpx 32rpx | 标签内边距 |
| gap | String/Number | 20 | 标签间距，单位rpx |
| radius | String/Number | 6 | 圆角大小，单位rpx |
| size | String/Number | 24 | 字体大小，单位rpx |
| color | String | #333 | 默认字体颜色 |
| activeColor | String | - | 选中字体颜色 |
| background | String | #fff | 默认背景颜色 |
| activeBgColor | String | #fff | 选中背景颜色 |
| borderColor | String | - | 边框颜色 |
| activeBorderColor | String | - | 选中边框颜色 (通常由 CSS 控制，这里主要是 `activeColor` 或者 `activeBgColor` 配合) |
| defaultBorderColor | String | - | 默认边框颜色 |
| mark | Boolean | false | 是否显示角标（选中时的对勾等） |
| markSize | String/Number | 52 | 角标大小 |
| markColor | String | - | 角标颜色 |
| nowrap | Boolean | false | 是否不换行（V2.1.0+），设为true时外层需自行处理横向滚动 |
| disableKey | String | disable | 禁用选项的键名 |
| isAllKey | String | isAll | 全选选项的键名 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindchange | 选中状态改变时触发 | `{ value: 选中的值(多选为数组), item: 选中的项对象(多选为数组) }` |
