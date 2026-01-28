# Backdrop 遮罩层

背景遮罩层。

## 基础使用

```html
<yr-ui-backdrop show="{{show}}" closable bindclick="onClose"></yr-ui-backdrop>
```

## 绝对定位

```html
<yr-ui-backdrop show="{{show}}" absolute></yr-ui-backdrop>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| background | 背景颜色 | string | rgba(0,0,0,0.6) | - |
| absolute | 是否绝对定位 | boolean | false | - |
| zIndex | 层级 | number | 999 | - |
| closable | 点击是否触发click | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击遮罩触发 (closable=true) | - |
