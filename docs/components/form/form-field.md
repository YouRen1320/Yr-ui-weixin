# FormField 表单域

表单域组件，用于将自定义组件接入表单提交体系。

## 基础使用

在自定义组件中引入并使用：

```html
<yr-ui-form-field name="{{name}}" value="{{val}}"></yr-ui-form-field>
```

## 说明

该组件基于 `wx://form-field` behavior 实现，用于使自定义组件能够像原生表单组件一样被 `form` 组件获取值。通常不需要直接使用，而是集成在需要支持表单提交的自定义组件内部。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| hidden | 是否为隐藏域 | boolean | false | - |
