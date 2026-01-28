# Validator 表单验证

轻量级表单验证工具，支持内置规则与自定义校验。

## 基础使用

```javascript
import form from '@/components/yr-ui/yr-ui-validator/yr-ui-validator.js'

const rules = [{
  name: "mobile",
  rule: ["required", "isMobile"],
  msg: ["请输入手机号", "请输入正确的手机号"]
}];

let res = form.validator(this.data.formData, rules);
if (!res.isPassed) {
  console.log(res.errorMsg);
}
```

## 内置规则

| 规则名 | 说明 |
| --- | --- |
| required | 必填 |
| isMobile | 手机号 |
| isEmail | 邮箱 |
| isIdCard | 身份证 (15/18位) |
| isCarNo | 车牌号 |
| isAmount | 金额 (最多两位小数) |
| isNumber | 纯数字 |
| isChinese | 全中文 |
| isNotChinese | 不包含中文 |
| isEnglish | 全英文 |
| isEnAndNo | 英文和数字组合 (4-30位) |
| isEnOrNo | 英文或数字 |
| isSpecial | 包含特殊字符 |
| isEmoji | 包含表情 |
| isDate | 日期 (YYYY-MM-DD) |
| isUrl | URL 地址 |
| isSame:key | 与另一个字段值相同 (如确认密码) |
| range:[min,max] | 数值范围 |
| minLength:n | 最小长度 |
| maxLength:n | 最大长度 |
| isKeyword | 不包含关键词 |

## 自定义校验

```javascript
const rules = [{
  name: "wechatNo",
  validator: [{
    msg: "自定义校验失败提示",
    method: function(value) {
      return value === 'custom_value';
    }
  }]
}];
```

## API

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validator | 执行校验 | `(formData, rules, checkAll)` | `{ isPassed, errorMsg }` |
