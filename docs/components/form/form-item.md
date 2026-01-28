# FormItem 表单项

表单项组件，用于包裹表单域，提供布局与样式，配合 Form 组件进行校验。

## 基础使用

```html
<yr-ui-form-item label="姓名">
  <yr-ui-input borderBottom="{{false}}" padding="0" placeholder="请输入姓名"></yr-ui-input>
</yr-ui-form-item>
```

## 带必填星号与校验

```html
<yr-ui-form-item label="手机号" asterisk prop="mobile">
  <yr-ui-input borderBottom="{{false}}" padding="0" model:value="{{mobile}}"></yr-ui-input>
</yr-ui-form-item>
```

## 布局调整

```html
<!-- label 右对齐，星号在右侧 -->
<yr-ui-form-item label-align="right" asterisk-position="right" label="活动名称">
  <yr-ui-input borderBottom="{{false}}" padding="0"></yr-ui-input>
</yr-ui-form-item>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| label | 标签文本 | string | - | - |
| prop | 表单域字段名（校验时必填） | string | - | - |
| padding | 内边距 | string | 30rpx 32rpx | - |
| marginTop | margin-top 值 | number/string | 0 | - |
| labelWidth | label 宽度，单位 rpx | number/string | 0 (继承 Form) | - |
| labelAlign | label 对齐方式 | string | left | left, right |
| asterisk | 是否显示必填星号 | boolean | false | - |
| asteriskPosition | 星号位置 | string | left | left, right |
| background | 背景色 | string | #fff | - |
| highlight | 是否有点击效果 | boolean | false | - |
| arrow | 是否显示右侧箭头 | boolean | false | - |
| bottomBorder | 是否显示下边框 | boolean | true | - |
| rules | 验证规则（当前项） | object | {} | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | `{ param }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 表单控件内容 |
| right | 右侧内容 slot (部分布局支持) |
