
import watcher from './yr-ui-form-watch'
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    //padding值
    padding: {
      type: String,
      value: '30rpx 32rpx'
    },
    //margin-top 单位rpx
    marginTop: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //margin-bottom 单位rpx
    marginBottom: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //标签文本
    label: {
      type: String,
      value: ''
    },
    //标题字体大小
    labelSize: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    labelColor: {
      type: String,
      value: ''
    },
    //label宽度 rpx
    labelWidth: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    labelRight: {
      type: String,
      optionalTypes: [Number],
      value: 30
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
    //是否显示必填的红色星号
    asterisk: {
      type: Boolean,
      value: false
    },
    asteriskColor: {
      type: String,
      value: ''
    },
    //left,right
    asteriskPosition: {
      type: String,
      value: ''
    },
    background: {
      type: String,
      value: '#fff'
    },
    highlight: {
      type: Boolean,
      value: false
    },
    arrow: {
      type: Boolean,
      value: false
    },
    arrowColor: {
      type: String,
      value: '#B2B2B2'
    },
    bottomBorder: {
      type: Boolean,
      value: true
    },
    borderColor: {
      type: String,
      value: '#EEEEEE'
    },
    //下边框left值，单位rpx
    left: {
      type: String,
      optionalTypes: [Number],
      value: 32
    },
    //下边框right值，单位rpx
    right: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    radius: {
      type: String,
      value: '0'
    },
    param: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //v2.1.0+ 表单域 model 字段，在使用校验时该属性是必填的
    prop: {
      type: String,
      value: ''
    },
    //v2.1.0+ 1-absolute 2-relative
    errorPosition: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //v2.1.0+ left/center/right
    errorAlign: {
      type: String,
      value: ''
    },
    //V2.2.0 表单验证规则，不支持嵌套传入函数，请使用setRules方法传入
    rules: {
      type: Object,
      value: {}
    }
  },
  relations: {
    '../yr-ui-form/yr-ui-form': {
      type: 'ancestor',
      linked: function (target) {
        this.data.form = target
        this.init()
      }
    }
  },
  data: {
    form: null,
    lSize: 32,
    lColor: '#333',
    lWidth: 160,
    lAlign: '',
    lWeight: 400,
    akColor: '#FF2B2B',
    akPosi: '',
    akPosiLeft: '12rpx',
    ePosition: 1,
    eAlign: 'left',
    eLeft: 0,
    errorMsg: '',
    isRealTime: false,
    watcherKey: '',
    //此参数由yr-ui-form中获取
    showError: false,
    itemValue: '',
    //item项自己的rules
    formItemRules: null
  },
  lifetimes: {
    ready: function () {
      if (!this.data.form) {
        this.init(true)
      }
    },
    detached: function () {
      this.uninstall()
    }
  },
  methods: {
    getAkPosi() {
      const akPosi = this.data.akPosi;
      const lWidth = this.data.lWidth
      const lRight = this.data.labelRight
      const pr = this.data.padding
      let pdr = 0;
      if (pr) {
        const pLeft = pr.split(' ')[0]
        pdr = pLeft.replace('rpx', '').replace('px', '')
      }
      const akPosiLeft = akPosi === 'right' ? `${Number(lWidth) + Number(pdr || 0) + 2 - Number(lRight || 0)}rpx` : '12rpx'
      this.setData({
        akPosiLeft
      })
    },
    getErrorLeft() {
      const align = this.data.eAlign
      let left = '32rpx'
      if (align === 'center') {
        const lWidth = this.data.lWidth
        const pr = this.data.padding
        let pdr = 0;
        if (pr) {
          const pLeft = pr.split(' ')[1]
          pdr = pLeft ? pLeft.replace('rpx', '').replace('px', '') : 0;
        }
        left = (Number(lWidth) + Number(pdr)) + 'rpx'
      }
      this.setData({
        eLeft: left
      })
    },
    watch() {
      const key = this.data.prop || 'fui_unknown'
      let wObj = {}
      let model = {}
      const instance = this
      wObj[key] = function (val) {
        if (instance.data.isRealTime && instance.data.prop && instance.data.form) {
          model[key] = val
          instance.data.form.realTimeValidator(model, key).then(res => {
            instance.setData({
              errorMsg: res.isPassed ? '' : res.errorMsg
            })
          }).catch(err => {
            console.log(err.errorMsg)
          })
        } else {
          if (instance.data.showError && val != instance.data.itemValue) {
            instance.setData({
              errorMsg: ''
            })
          }
        }
      }
      return wObj
    },
    setWatcherPageProp(instance) {
      const form = this.data.form
      if (form && this.data.prop && this.data.prop !== true && this.data.watcherKey !== this.data.prop) {
        this.data.watcherKey = this.data.prop
        watcher.setWatcher(instance, this.watch())
      }
    },
    switchRealTimeValidator(isOpen) {
      this.data.isRealTime = isOpen
    },
    init(isReset) {
      const form = this.data.form;
      !isReset && form && form.data.childrenArr.push(this)
      const dangerColor = (wx.$yrUi && wx.$yrUi.color.danger) || '#FF2B2B'
      this.setData({
        lSize: this.data.labelSize || (form && form.data.labelSize) || 32,
        lColor: this.data.labelColor || (form && form.data.labelColor) || '#333',
        lWidth: this.data.labelWidth || (form && form.data.labelWidth) || 160,
        akColor: this.data.asteriskColor || (form && form.data.asteriskColor) || dangerColor,
        lAlign: this.data.labelAlign || (form && form.data.labelAlign) || 'left',
        lWeight: this.data.labelWeight || (form && form.data.labelWeight) || 400,
        akPosi: this.data.asteriskPosition || (form && form.data.asteriskPosition) || 'left',
        ePosition: this.data.errorPosition || (form && form.data.errorPosition) || 1,
        eAlign: this.data.errorAlign || (form && form.data.errorAlign) || 'left',
        showError: (form && form.data.show) ? false : true,
        isRealTime: (form && form.data.isRealTime) ? true : false
      }, () => {
        this.getAkPosi()
        this.getErrorLeft()
      })
    },
    // Form组件获取当前FormItem 项 rules数据
    getRules() {
      //优先使用setRules 方法传入的rules值
      const rules = this.data.formItemRules || this.data.rules
      if (!rules.name && (rules.rule || rules.validator)) {
        rules['name'] = this.data.prop
      }
      //当未传入prop、rule 或 validator 则不校验
      return !rules.name ? null : rules
    },
    //设置校验规则
    setRules(rules) {
      this.data.formItemRules = rules
    },
    //设置校验规则，并合并或替换Form组件中该prop对应的rules【当页面调用Form组件校验方法传入rules时进行合并操作】
    setRulesMerge(rules) {
      this.data.formItemRules = rules || this.data.rules
      const form = this.data.form
      if (form) {
        const index = form.data.mergeRules.findIndex(e => e.name === rules.name || e.name === this.data.prop)
        const rule = this.getRules()
        if (!rule) return;
        if (index === -1) {
          form.data.mergeRules.push(rule)
        } else {
          form.data.mergeRules[index] = rule
        }
      }
    },
    /**
     * 验证方法
     * @param {any} value 值，不传则使用Form组件model中值
     */
    validator(value) {
      const rules = this.getRules()
      const form = this.data.form
      return new Promise((resolve, reject) => {
        if (form && rules) {
          const model = {}
          model[rules.name] = value;
          form.realTimeValidator(model, rules.name, [rules]).then(res => {
            if (res.isPassed) {
              this.setData({
                errorMsg: ''
              })
            } else {
              this.setData({
                errorMsg: res.errorMsg
              })
            }
            resolve(res)
          }).catch(err => {
            reject(err)
            console.log(err.errorMsg)
          })
        } else {
          reject({
            isPassed: false,
            errorMsg: '未检查到Form组件或校验规则rules数据！'
          })
        }
      })
    },
    clearValidate() {
      this.setData({
        errorMsg: ''
      })
    },
    uninstall() {
      this.data.form && this.data.form.uninstall(this)
    },
    handleClick() {
      this.triggerEvent('click', {
        param: this.data.param
      });
    }
  }
})