# Timer 计时器

正向计时组件。

## 基础使用

```html
<yr-ui-timer></yr-ui-timer>
```

## 设置初始值

```html
<yr-ui-timer value="{{100}}"></yr-ui-timer>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 初始秒数 | number | 0 | - |
| maxTime | 最大计时秒数 | number | 0 (无限) | - |
| isDays | 是否显示天 | boolean | false | - |
| isHours | 是否显示小时 | boolean | true | - |
| isMinutes | 是否显示分 | boolean | true | - |
| isSeconds | 是否显示秒 | boolean | true | - |
| autoStart | 是否自动开始 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| end | 计时结束触发(达到maxTime) | `{ day, hour, minute, second, totalSeconds }` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| startTiming | 开始计时 | - |
| endTimer | 停止计时 | - |
| resetTimer | 重置计时 | - |
