
import form from './yr-ui-validator.js'
Component({
  properties: {
    //表单padding值
    padding: {
      type: String,
      value: "0"
    },
    //是否显示校验错误信息
    show: {
      type: Boolean,
      value: true
    },
    //是否禁用该表单内的所有组件,透明遮罩层
    disabled: {
      type: Boolean,
      value: false
    },
    //提示框top值 px
    top: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    left: {
      type: Number,
      optionalTypes: [String],
      value: 24
    },
    right: {
      type: Number,
      optionalTypes: [String],
      value: 24
    },
    //错误提示框背景色
    background: {
      type: String,
      value: ''
    },
    //错误提示字体大小
    size: {
      type: Number,
      optionalTypes: [String],
      value: 28
    },
    //错误提示字体颜色
    color: {
      type: String,
      value: '#fff'
    },
    //错误提示框圆角值
    radius: {
      type: String,
      optionalTypes: [Number],
      value: 16
    },
    //错误消息显示时间 ms
    duration: {
      type: Number,
      value: 2000
    },
    //form-item标题字体大小 默认使用全局设置值
    labelSize: {
      type: String,
      optionalTypes: [Number],
      value: 32
    },
    labelColor: {
      type: String,
      value: '#333'
    },
    //form-item label宽度,单位rpx
    labelWidth: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //label 对齐方式：left，right
    labelAlign: {
      type: String,
      value: ''
    },
    //V1.9.8+
    labelWeight: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    // form-item 必填项星号颜色
    asteriskColor: {
      type: String,
      value: '#FF2B2B'
    },
    //left,right
    asteriskPosition: {
      type: String,
      value: ''
    },
    //v2.1.0+ 1-absolute 2-relative
    errorPosition: {
      type: String,
      optionalTypes: [Number],
      value: 1
    },
    //v2.1.0+ left/center/right
    errorAlign: {
      type: String,
      value: 'center'
    }
  },
  relations: {
    '../yr-ui-form-item/yr-ui-form-item': {
      type: 'descendant'
    }
  },
  data: {
    errorMsg: '',
    timer: null,
    childrenArr: [],
    rules: [],
    mergeRules: [],
    isRealTime: false
  },
  lifetimes: {
    detached: function () {
      this.clearTimer()
    }
  },
  methods: {
    clearTimer() {
      this.data.childrenArr = null
      clearTimeout(this.data.timer)
      this.data.timer = null;
    },
    getFormItemRules() {
      let rules = []
      const children = this.data.childrenArr
      if (children && children.length > 0) {
        children.forEach(child => {
          let rule = child.getRules()
          rule && rules.push(rule)
        })
      }
      return rules;
    },
    getMergeRules(rules) {
      if (this.data.mergeRules.length === 0) return rules;
      let formRules = [...rules]
      //合并并替换当前rules数据
      this.data.mergeRules.forEach(item => {
        const index = rules.findIndex(e => e.name === item.name)
        if (index === -1) {
          formRules.push(item)
        } else {
          formRules[index] = item;
        }
      })
      return formRules;
    },
    /*
			 @param model 表单数据对象
			 @param rules 表单验证规则
			 @param checkAll 校验所有元素
			*/
    validator(model, rules, checkAll = false) {
      rules = rules || []
      return new Promise((resolve, reject) => {
        try {
          if (rules.length === 0) {
            rules = this.getFormItemRules()
          } else {
            rules = this.getMergeRules(rules)
          }
          let res = form.validator(model, rules, checkAll);
          if (!res.isPassed) {
            let errors = res.errorMsg;
            if (this.data.show) {
              this.clearTimer()
              if (checkAll) {
                errors = errors[0].msg
              }
              this.setData({
                errorMsg: errors
              }, () => {
                this.data.timer = setTimeout(() => {
                  this.setData({
                    errorMsg: ''
                  })
                }, this.data.duration)
              })
            } else {
              if (checkAll) {
                //formItem 显示提示
                const children = this.data.childrenArr
                if (children && children.length > 0) {
                  children.forEach(item => {
                    const index = errors.findIndex(err => err.name === item.data.prop)
                    if (item.data.prop && item.data.prop !== true && ~index) {
                      item.setData({
                        errorMsg: errors[index].msg,
                        itemValue: model[item.data.prop]
                      })
                    }
                  })
                }
              }
            }
          }
          resolve(res)
        } catch (e) {
          reject({
            isPassed: false,
            errorMsg: '校验出错，请检查传入的数据格式是否有误！'
          })
        }
      })
    },
    /**
     * 验证具体的某个字段
     * @param {Array<string> ｜ String} props 字段key
     * @param {Object} model 表单数据对象
     * @param {Array} rules 表单验证规则，当传null 或空数组时使用FormItem组件内rules
     */
    validateField(props, model, rules) {
      if (!rules || rules.length === 0) {
        rules = this.getFormItemRules()
      } else {
        rules = this.getMergeRules(rules)
      }
      const isString = typeof props === 'string';
      const formRules = rules.filter(item => props === item.name || (!isString && props
        .indexOf(item.name) !== -1));
      model = model
      return this.validator(model, formRules, true)
    },
    //v2.1.0+ 通知formItem组件重置props参数
    resetFormItemParam() {
      const children = this.data.childrenArr
      if (children && children.length > 0) {
        children.forEach(item => {
          item.init(true)
        })
      }
    },
    setWatcherInstance(instance) {
      //设置页面实例，通知子组件开启表单数据监听
      setTimeout(() => {
        const children = this.data.childrenArr
        if (children && children.length > 0) {
          children.forEach(item => {
            item.setWatcherPageProp(instance)
          })
        }
      }, 50);
    },
    //v2.1.0+ 通知formItem组件开启实时校验
    switchRealTimeValidator(isOpen, rules = []) {
      this.data.isRealTime = isOpen;
      setTimeout(() => {
        if (isOpen) {
          if (!rules || rules.length === 0) {
            rules = this.getFormItemRules()
          } else {
            rules = this.getMergeRules(rules)
          }
          this.data.rules = rules || []
        }
        const children = this.data.childrenArr
        if (children && children.length > 0) {
          children.forEach(item => {
            item.switchRealTimeValidator(isOpen)
          })
        }
      }, 50);
    },
    //内部方法，提供给FormItem组件使用
    realTimeValidator(model, prop, rules) {
      return new Promise((resolve, reject) => {
        try {
          const formRules = rules || this.data.rules
          const _rules = formRules.filter(item => item.name === prop)
          let res = form.validator(model, _rules);
          resolve(res)
        } catch (e) {
          reject({
            isPassed: false,
            errorMsg: '校验出错，请检查传入的数据格式是否有误！'
          })
        }
      })
    },
    clearValidate(props = []) {
      let arr = props;
      arr = !arr ? [] : arr
      if (typeof props === 'string') {
        arr = [props]
      }
      const children = this.data.childrenArr
      if (children && children.length > 0) {
        //清除指定字段的表单验证信息
        if (arr && arr.length > 0) {
          children.forEach(item => {
            if (item.data.prop && ~arr.indexOf(item.data.prop)) {
              item.setData({
                errorMsg: ''
              })
            }
          })
        } else {
          //清除所有字段的表单验证信息
          children.forEach(item => {
            item.setData({
              errorMsg: ''
            })
          })
        }
      }
    },
    // 移除表单项
    uninstall(instance) {
      const children = this.data.childrenArr
      if (children && children.length > 0) {
        const index = children.findIndex(item => item === instance)
        if (index !== -1) {
          this.data.childrenArr.splice(index, 1)
        }
        const rules = instance.getRules() || {}
        const prop = instance.prop || rules.name || ''
        const idx = this.data.mergeRules.findIndex(ru => ru.name === prop)
        if (idx !== -1) {
          this.data.mergeRules.splice(idx, 1)
        }
      }
    }
  }
})