# DigitalRoller 数字滚轮

数字滚动动画组件。

## 基础使用

```html
<yr-ui-digital-roller value="{{1234}}"></yr-ui-digital-roller>
```

## 自定义样式

```html
<yr-ui-digital-roller value="{{987.65}}" color="#465CFF" size="{{48}}" duration="{{2}}"></yr-ui-digital-roller>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 数值 | number/string | - | - |
| color | 颜色 | string | - | - |
| size | 字体大小 | number | 32 | - |
| fontWeight | 字重 | number | 400 | - |
| width | 字符宽度 | number | 0 (auto) | - |
| height | 字符高度 | number | 32 | - |
| duration | 动画时长(秒) | number | 1.2 | - |
