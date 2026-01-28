# Label 标签

Label 标签，用于改进表单组件的可用性，点击时触发内部控件（Radio, Checkbox, Switch）。

## 基础使用

```html
<yr-ui-radio-group>
  <yr-ui-label>
    <yr-ui-radio value="1"></yr-ui-radio>
    <text>选项一</text>
  </yr-ui-label>
</yr-ui-radio-group>
```

## 布局属性

```html
<!-- inline: 行内布局, full: 充满父容器 -->
<yr-ui-label inline full>
  <yr-ui-checkbox value="1"></yr-ui-checkbox>
  <text>选项一</text>
</yr-ui-label>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| padding | 内边距 | string | 0 | - |
| margin | 外边距 | string | 0 | - |
| full | 是否占满父容器宽度 | boolean | false | - |
| inline | 是否为行内元素 | boolean | false | - |
