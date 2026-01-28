# DatePicker 日期时间选择器

日期时间选择器组件。

## 引入

```json
{
  "usingComponents": {
    "yr-ui-date-picker": "/components/yr-ui/yr-ui-date-picker/yr-ui-date-picker"
  }
}
```

## 代码演示

### 基础用法

```html
<yr-ui-date-picker 
  show="{{show}}" 
  bind:change="onChange">
</yr-ui-date-picker>
```

### 选择器类型

```html
<!-- 日期选择 -->
<yr-ui-date-picker type="1"></yr-ui-date-picker>

<!-- 时间选择 -->
<yr-ui-date-picker type="2"></yr-ui-date-picker>

<!-- 日期时间选择 -->
<yr-ui-date-picker type="3"></yr-ui-date-picker>
```

### 区间选择

```html
<yr-ui-date-picker 
  type="1" 
  isRange 
  value="{{startDate}}"
  valueEnd="{{endDate}}">
</yr-ui-date-picker>
```

### 设置范围

```html
<yr-ui-date-picker 
  minDate="2020-01-01" 
  maxDate="2025-12-31">
</yr-ui-date-picker>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| type | 选择器类型：1-日期 2-时间 3-日期时间 | Number | `1` |
| value | 默认值 | String | - |
| valueEnd | 结束日期默认值（区间选择时使用） | String | - |
| isRange | 是否区间选择 | Boolean | `false` |
| minDate | 最小日期 | String | - |
| maxDate | 最大日期 | String | - |
| isClose | 点击确认后是否自动关闭 | Boolean | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择改变时触发 | `{ value }` |
| cancel | 取消时触发 | - |
