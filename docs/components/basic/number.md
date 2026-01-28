# Number 数字

数字组件，使用 DigitalNumbers 字体，仅支持数字和小数点显示。

## 基础使用

```html
<yr-ui-number text="1234567890.00"></yr-ui-number>
```

## 调整颜色与大小

```html
<yr-ui-number text="200" color="#465CFF"></yr-ui-number>
<yr-ui-number text="123" color="#FFB703" size="24"></yr-ui-number>
```

## 加粗与点击效果

```html
<yr-ui-number text="{{520}}" fontWeight="bold" highlight bindclick="onTap"></yr-ui-number>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 数字内容 | string/number | - | - |
| size | 字体大小，单位 rpx | string/number | 0 (默认32) | - |
| unit | 字体单位 | string | rpx | px, rpx |
| color | 字体颜色 | string | #333 | - |
| fontWeight | 字重 | string/number | normal | normal, bold |
| disabled | 是否禁用点击 | boolean | false | - |
| highlight | 是否有点击效果 | boolean | false | - |
| decoration | 文本修饰 | string | none | none, underline, line-through |
| lineHeight | 是否将行高设置与字体大小一致 | boolean | false | - |
| params | 点击事件携带的参数 | string/number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `{ text: string/number, params: string/number }` |
