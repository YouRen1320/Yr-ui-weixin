# DatePicker 日期选择器

日期时间选择器，支持年、年月、年月日、时分秒等多种模式。

## 基础使用

```html
<!-- type=1: 年, 2: 年月, 3: 年月日, 4: 年月日时, 5: 年月日时分, 6: 时分, 7: 时分秒, 8: 分秒 -->
<yr-ui-date-picker show="{{show}}" type="{{3}}" bindchange="change"></yr-ui-date-picker>
```

## 日期区间选择

```html
<yr-ui-date-picker range show="{{show}}" type="{{3}}" bindchange="change"></yr-ui-date-picker>
```

## 设置默认值与范围

```html
<yr-ui-date-picker value="2023-10-01" minDate="2020-01-01" maxDate="2025-12-31" show="{{show}}" bindchange="change"></yr-ui-date-picker>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示选择器 | boolean | false | - |
| type | 选择器类型 | number | 1 | 1-8 |
| value | 默认日期 (YYYY-MM-DD HH:mm:ss) | string | - | - |
| range | 是否为区间选择 | boolean | false | - |
| minDate | 最小日期 | string | 2010-01-01 | - |
| maxDate | 最大日期 | string | 2030-12-31 | - |
| unit | 是否显示单位 (年/月/日) | boolean | true | - |
| title | 标题 | string | - | - |
| theme | 主题 | string | light | light, dark |
| height | 内容高度，单位 rpx | number | 520 | - |
| radius | 顶部圆角 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 确定时触发 | 单选返回对象包含 `result` 等；区间选择返回 `{ startDate, endDate }` |
| cancel | 取消时触发 | `{ param }` |
