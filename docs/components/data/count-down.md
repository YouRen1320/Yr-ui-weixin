# CountDown 倒计时

用于倒计时显示。

## 基础使用

```html
<yr-ui-count-down value="{{100}}"></yr-ui-count-down>
```

## 显示天

```html
<yr-ui-count-down value="{{100000}}" isDays></yr-ui-count-down>
```

## 自定义样式

```html
<yr-ui-count-down 
  value="{{1000}}" 
  borderColor="#465CFF" 
  background="#465CFF" 
  color="#fff" 
  colonColor="#465CFF">
</yr-ui-count-down>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 倒计时秒数 | number | 0 | - |
| width | 数字框宽度 | number | 40 | - |
| height | 数字框高度 | number | 40 | - |
| borderColor | 边框颜色 | string | #333 | - |
| background | 背景颜色 | string | #fff | - |
| color | 数字颜色 | string | #333 | - |
| size | 数字大小 | number | 28 | - |
| isDays | 是否显示天 | boolean | false | - |
| isHours | 是否显示小时 | boolean | true | - |
| isMinutes | 是否显示分 | boolean | true | - |
| isSeconds | 是否显示秒 | boolean | true | - |
| isColon | 是否显示冒号 | boolean | true | - |
| autoStart | 是否自动开始 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| end | 倒计时结束触发 | - |
| time | 倒计时进行中触发(需开启returnTime) | `{ seconds }` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| startCountdown | 开始倒计时 | - |
| endCountdown | 结束倒计时 | - |
| resetCountdown | 重置倒计时 | seconds |
