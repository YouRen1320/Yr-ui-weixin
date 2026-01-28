# Calendar 日历

日历组件，支持单选、多选、范围选择。

## 基础使用

```html
<yr-ui-calendar type="{{1}}" bindchange="onChange"></yr-ui-calendar>
```

## 多选

```html
<yr-ui-calendar type="{{2}}" bindchange="onChange"></yr-ui-calendar>
```

## 范围选择

```html
<yr-ui-calendar type="{{3}}" bindchange="onChange"></yr-ui-calendar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 选择类型 | number | 1 | 1:单选, 2:多选, 3:范围 |
| value | 默认选中值 | array | [] | - |
| minDate | 最小日期 | string | 2010-01-01 | - |
| maxDate | 最大日期 | string | 2030-12-31 | - |
| showLunar | 是否显示农历 | boolean | false | - |
| language | 语言 | string | cn | cn, en |
| color | 字体颜色 | string | #181818 | - |
| activeColor | 选中文字颜色 | string | #FFFFFF | - |
| activeBackground | 选中背景颜色 | string | #465CFF | - |
| showBtn | 是否显示确定按钮 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 日期改变触发 | `{ value, week, lunar }` |
| dateChange | 年月切换触发 | `{ year, month }` |
