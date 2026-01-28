# LicensePlate 车牌号键盘

车牌号输入专用键盘。

## 基础使用

```html
<yr-ui-license-plate show="{{show}}" bindclick="onClick" bindcomplete="onComplete"></yr-ui-license-plate>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| toolbar | 是否显示工具栏 | boolean | true | - |
| theme | 主题 | string | light | light, dark |
| zIndex | 层级 | number | 1001 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击键盘触发 | `{ value }` |
| backspace | 点击退格触发 | - |
| complete | 点击完成触发 | - |
