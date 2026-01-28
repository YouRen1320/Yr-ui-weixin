
import form from '../../../../components/yr-ui/yr-ui-validator/yr-ui-validator'
//自定义校验方法
function checkWxNo(value) {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
}
const rules = [{
  name: "name",
  rule: ["required", "isChinese", "minLength:2", "maxLength:6"],
  msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
}, {
  name: "mobile",
  rule: ["required", "isMobile"],
  msg: ["请输入手机号", "请输入正确的手机号"]
}, {
  name: "password",
  rule: ["required", "isEnAndNo"],
  msg: ["请输入密码", "密码为4~30位数字和字母组合"]
}, {
  name: "confirmPwd",
  rule: ["required", "isSame:password"],
  msg: ["请输入确认密码", "两次输入的密码不一致"]
}, {
  name: "age",
  rule: ["isNum", "range:[1,149]"],
  msg: ["请输入正确的年龄", "请输入正确的年龄范围：1~149"]
}, {
  name: "idCard",
  rule: ["isIdCard"],
  msg: ["请输入正确的身份证号码"]
}, {
  name: "email",
  rule: ["isEmail"],
  msg: ["请输入正确的邮箱"]
}, {
  name: "url",
  rule: ["isUrl"],
  msg: ["请输入正确的URL地址"]
}, {
  name: "amount",
  rule: ["isAmount"],
  msg: ["请输入正确的金额，允许保留两位小数"]
}, {
  name: "wechatNo",
  validator: [{
    msg: "微信号不正确！请输入6~20位以字母开头，字母、数字、减号、下划线组合的微信号",
    method: checkWxNo
  }]
}];
Page({
  data: {
    name: '',
    mobile: '',
    password: '',
    confirmPwd: '',
    age: '',
    idCard: '',
    email: '',
    url: '',
    amount: '',
    wechatNo: ''
  },
  submit() {
    let formData = this.data
    console.log(formData)
    let res = form.validator(formData, rules);
    console.log(res)
    if (res.isPassed) {
      wx.yrUi.toast('校验通过！')
    } else {
      wx.yrUi.toast(res.errorMsg)
    }
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})