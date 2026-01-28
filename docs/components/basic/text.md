# Text 文本

Text 文本组件，用于包裹文本内容，支持颜色、大小、对齐方式、数据格式化（手机号、金额、姓名脱敏）等功能。

## 基础使用

```html
<yr-ui-text text="Yr-ui"></yr-ui-text>
```

## 样式类型

```html
<yr-ui-text text="primary" type="primary"></yr-ui-text>
<yr-ui-text text="success" type="success"></yr-ui-text>
<yr-ui-text text="warning" type="warning"></yr-ui-text>
<yr-ui-text text="danger" type="danger"></yr-ui-text>
<yr-ui-text text="purple" type="purple"></yr-ui-text>
<yr-ui-text text="gray" type="gray"></yr-ui-text>
<yr-ui-text text="black" type="black"></yr-ui-text>
```

## 块级显示与自定义颜色

```html
<yr-ui-text text="block" color="brown" block></yr-ui-text>
```

## 数据脱敏与格式化

```html
<!-- 姓名脱敏 -->
<yr-ui-text text="张三" text-type="name" format block></yr-ui-text>

<!-- 手机号脱敏 -->
<yr-ui-text text="13544339908" text-type="mobile" format></yr-ui-text>

<!-- 金额格式化 -->
<yr-ui-text text="20000" text-type="amount" format>￥</yr-ui-text>
```

## 点击效果

```html
<yr-ui-text text="Link" highlight bindclick="handleClick"></yr-ui-text>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 样式类型 | string | black | primary, success, warning, danger, purple, gray, black |
| text | 文本内容 | string/number | - | - |
| size | 字体大小 | string/number | 0 (默认32) | - |
| unit | 字体大小单位 | string | rpx | px, rpx |
| color | 字体颜色 | string | - | - |
| fontWeight | 字重 | string/number | 400 | - |
| align | 文本对齐方式 | string | left | left, center, right |
| decoration | 文本修饰 | string | none | none, underline, line-through |
| lineHeight | 是否将行高设置与字体大小一致 | boolean | false | - |
| padding | 内边距 | string | 0 | - |
| block | 是否为块级元素 | boolean | false | - |
| textType | 文本类型 | string | text | text, mobile, amount, name |
| format | 是否格式化，仅 textType 为 mobile/amount/name 时有效 | boolean | false | - |
| call | 点击是否拨打电话 | boolean | false | - |
| userSelect | 文本是否可选 | boolean | false | - |
| decode | 是否解码 | boolean | false | - |
| highlight | 是否有点击效果 | boolean | false | - |
| disable | 是否禁用点击 | boolean | false | - |
| unShrink | 是否不收缩（flex布局下） | boolean | false | - |
| param | 点击事件携带的参数 | string/number | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击文本时触发 | `{ text: string, param: string/number }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 文本前缀内容（例如金额符号） |
