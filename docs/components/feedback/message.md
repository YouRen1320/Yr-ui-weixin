# Message 消息提示

顶部消息提示组件。

## 基础使用

```html
<yr-ui-message id="msg"></yr-ui-message>

<!-- JS 调用 -->
<!-- this.selectComponent('#msg').show({ text: '这是一条消息提示' }) -->
```

## 自定义样式

```html
<!-- JS 调用 -->
<!-- this.selectComponent('#msg').show({ text: '错误提示', background: '#FF2B2B' }) -->
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| background | 背景颜色 | string | rgba(0,0,0,0.6) | - |
| color | 字体颜色 | string | #fff | - |
| size | 字体大小 | number | 30 | - |
| textAlign | 文本对齐方式 | string | center | left, center, right |
| top | 顶部距离 | number | 0 | - |
| zIndex | 层级 | number | 1001 | - |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示消息 | `options: { text, duration, background, color }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义消息内容 |
