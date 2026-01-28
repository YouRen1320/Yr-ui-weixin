# Form 表单

表单组件，用于数据收集与校验，支持自定义校验规则。

## 基础使用

```html
<yr-ui-form id="form" top="{{0}}">
  <yr-ui-input required label="姓名" model:value="{{name}}"></yr-ui-input>
  <yr-ui-input required label="手机号" model:value="{{mobile}}"></yr-ui-input>
  <yr-ui-button text="提交" bindclick="submit"></yr-ui-button>
</yr-ui-form>
```

```javascript
// 提交时校验
submit() {
  // rules 校验规则，可自定义传入，若不传则使用组件内定义的 rules
  this.selectComponent('#form').validator(this.data.formData, rules).then(res => {
    if (res.isPassed) {
      // 校验通过
    } else {
      // 校验失败，res.errorMsg 为错误信息
    }
  })
}
```

## 实时校验

可通过调用 `switchRealTimeValidator` 方法开启实时校验。

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| top | 错误提示框 top 值，单位 px | number/string | 0 | - |
| show | 是否显示错误校验信息 | boolean | true | - |
| disabled | 是否禁用表单内所有组件 | boolean | false | - |
| padding | 表单 padding 值 | string | 0 | - |
| labelWidth | label 宽度，单位 rpx | number/string | 0 | - |
| labelAlign | label 对齐方式 | string | left | left, right |
| asteriskColor | 必填星号颜色 | string | #FF2B2B | - |
| asteriskPosition | 星号位置 | string | left | left, right |
| errorPosition | 错误信息展示位置 | number | 1 | 1 (absolute), 2 (relative) |
| errorAlign | 错误信息对齐方式 | string | center | left, center, right |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validator | 表单校验 | `(model, rules, checkAll)` |
| validateField | 校验指定字段 | `(props, model, rules)` |
| clearValidate | 清除校验信息 | `(props)` |
| switchRealTimeValidator | 开启/关闭实时校验 | `(isOpen)` |
