
//微信号自定义校验方法
function checkWxNo(value) {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
}
//勾选协议校验
function checkAgree(agree) {
  return agree
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
  name: "code",
  rule: ["required"],
  msg: ["请输入验证码"]
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
}, {
  name: "agree",
  validator: [{
    msg: "请勾选并同意《yr-ui 相关条款》",
    method: checkAgree
  }]
}];
let form, upload;
Page({
  data: {
    // 小程序双向绑定暂不支持对象绑定，只支持简单绑定
    /*== formData 数据start ==*/
    name: '',
    mobile: '',
    code: '',
    password: '',
    confirmPwd: '',
    age: '',
    idCard: '',
    email: '',
    url: '',
    amount: '',
    wechatNo: '',
    text: '',
    ageRange: '1',
    motion: '1',
    switchRes: false,
    area: '',
    dateTime: '',
    score: 0,
    img: '',
    agree: false,
    /*== formData 数据end ==*/
    radioItems: [{
        name: '18~28岁',
        value: '1',
        checked: true
      },
      {
        name: '29~40岁',
        value: '2',
        checked: false
      }
    ],
    checkboxItems: [{
      name: '篮球',
      value: '1',
      checked: true
    }, {
      name: '乒乓球',
      value: '2',
      checked: false
    }],
    areaOptions: ['中国', '美国', '俄罗斯', '日本'],
    show: false,
    dateShow: false,
    uploadUrl: 'https://ffa.yr-ui.cn/api/example/upload-file'
  },
  onReady() {
    form = this.selectComponent("#form")
    upload = this.selectComponent("#upload")
  },
  submit() {
    const {
      radioItems,
      checkboxItems,
      areaOptions,
      show,
      dateShow,
      uploadUrl,
      ...rest
    } = this.data
    //表单数据
    console.log(rest)
    if (form) {
      //model数据传入this.data 或者 rest 都可以
      form.validator(this.data, rules).then(res => {
        console.log(res)
        if (res.isPassed) {
          wx.yrUi.toast('校验通过！')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  checkboxChange(e) {
    console.log(e.detail)
    this.setData({
      motion: e.detail.value.join(',')
    })
  },
  switchChange(e) {
    console.log(e.detail)
    this.setData({
      switchRes: e.detail.value
    })
  },
  areaPicker() {
    this.setData({
      show: true
    })
  },
  change(e) {
    console.log(e)
    this.setData({
      area: e.detail.value
    })
    this.areaCancel()
  },
  areaCancel() {
    this.setData({
      show: false
    })
  },
  datePicker() {
    this.setData({
      dateShow: true
    })
  },
  dateChange(e) {
    console.log(e)
    this.setData({
      dateTime: e.detail.result
    })
    this.dateCancel()
  },
  dateCancel() {
    this.setData({
      dateShow: false
    })
  },
  //评分
  rateChange(e) {
    console.log(e)
    this.setData({
      score: e.detail.score
    })
  },
  //图片上传，具体使用请查看上传组件
  success(e) {
    console.log(e.detail)
    let res = JSON.parse(e.detail.res.data.replace(/\ufeff/g, "") || "{}")
    if (res.data.url) {
      upload && upload.result(res.data.url, e.detail.index)
    }
  },
  complete(e) {
    if (e.detail.status === 'success' && e.detail.action === 'upload') {
      wx.yrUi.toast('上传完成！')
      console.log(e.detail.urls)
      this.setData({
        img: e.detail.urls.join(',')
      })
    }
  },
  agreeChange(e) {
    console.log(e)
    this.setData({
      agree: e.detail.checked
    })
  },
  vip() {
    wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})