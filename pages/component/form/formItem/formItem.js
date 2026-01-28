
 /*
	  结合表单校验显示错误信息需要注意：
	  1、yr-ui-form-item 组件 必须设置prop属性
	  2、yr-ui-form 组件show属性必须设为false
	  3、yr-ui-form 组件validator方法第三个参数必须传true
	*/
 const rules = [{
   name: "name",
   rule: ["required", "isChinese", "minLength:2", "maxLength:6"],
   msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
 }, {
   name: "mobile",
   rule: ["required", "isMobile"],
   msg: ["请输入手机号", "请输入正确的手机号"]
 }, {
   name: "idCard",
   rule: ["required", "isIdCard"],
   msg: ["请输入身份证号码", "请输入正确的身份证号码"]
 }, {
   name: "email",
   rule: ["required", "isEmail"],
   msg: ["请输入电子邮箱", "请输入正确的邮箱"]
 }, {
   name: "activityName",
   rule: ["required"],
   msg: ["请输入活动名称"]
 }, {
   name: "organizer",
   rule: ["required"],
   msg: ["请输入主办方"]
 }, {
   name: "descr",
   rule: ["required"],
   msg: ["请输入详细描述"]
 }];
 let form;
 Page({
   data: {
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
     //示例仅对必填项做了数据收集，仅为了演示表单校验效果
     // 小程序双向绑定暂不支持对象绑定，只支持简单绑定
     /*== formData 数据start ==*/
     name: '',
     mobile: '',
     idCard: '',
     email: '',
     activityName: '',
     organizer: '',
     descr: ''
     /*== formData 数据end ==*/
   },
   onReady() {
     form = this.selectComponent("#form")
     //开启校验数据监听处理【输入时可自动隐藏错误提示】
     form.setWatcherInstance(this)
     //开始实时校验 【当前item项内容改变即校验】
     //form.switchRealTimeValidator(true, rules)
   },
   submit() {
     if (!form) return;
     const {
       radioItems,
       checkboxItems,
       ...rest
     } = this.data
     //表单数据
     console.log(rest)
     //注意：validator方法第三个参数必须传true
     form.validator(rest, rules, true).then(res => {
       console.log(res)
       if (res.isPassed) {
         wx.yrUi.toast('校验通过！')
       } else {
         wx.yrUi.toast('向上滑动页面查看错误提示！')
       }
     }).catch(err => {
       console.log(err)
     })
   },
   vip() {
     wx.yrUi.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
   }
 })