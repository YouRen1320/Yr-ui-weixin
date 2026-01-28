# InputNumber 数字输入框

数字输入框组件，支持加减操作、自定义步长与样式。

## 基础使用

```html
<yr-ui-input-number bindchange="change"></yr-ui-input-number>
```

## 设置范围与步长

```html
<yr-ui-input-number min="{{1}}" max="{{10}}" step="{{1}}" bindchange="change"></yr-ui-input-number>

<!-- 浮点数步长 -->
<yr-ui-input-number step="{{0.1}}"></yr-ui-input-number>
```

## 自定义样式

```html
<yr-ui-input-number signColor="#FFB703" backgroundColor="#F1F4FA"></yr-ui-input-number>

<!-- 自定义加减号 -->
<yr-ui-input-number custom>
  <yr-ui-icon name="minussign" size="{{48}}" color="#FFB703"></yr-ui-icon>
  <yr-ui-icon slot="plus" name="plussign-fill" size="{{48}}" color="#FFB703"></yr-ui-icon>
</yr-ui-input-number>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 输入框值 | number | 1 | - |
| min | 最小值 | number | 1 | - |
| max | 最大值 | number | 99 | - |
| step | 步长 | number | 1 | - |
| disabled | 是否禁用 | boolean | false | - |
| width | 输入框宽度，单位 rpx | number | 80 | - |
| height | 输入框高度，单位 rpx | number | 40 | - |
| backgroundColor | 背景颜色 | string | #EEEEEE | - |
| radius | 圆角值 | number | 8 | - |
| size | 字体大小 | number | 26 | - |
| signColor | 加减号颜色 | string | #181818 | - |
| custom | 是否自定义加减号（使用 slot） | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值改变时触发 | `{ value, index, params }` |
| blur | 失焦时触发 | `detail` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 减号插槽 |
| plus | 加号插槽 |
