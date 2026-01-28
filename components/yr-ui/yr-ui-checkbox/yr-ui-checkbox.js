
Component({
  options: {
    virtualHost: true
  },
  properties: {
    value: {
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    checked: {
      type: Boolean,
      value: false,
      observer(newVal) {
        this.setData({
          val: newVal
        }, () => {
          this.parentChangeValue()
        })
      }
    },
    disabled: {
      type: Boolean,
      value: false
    },
    //checkbox选中背景颜色
    color: {
      type: String,
      value: ''
    },
    //checkbox未选中时边框颜色
    borderColor: {
      type: String,
      value: '#ccc'
    },
    borderRadius: {
      type: String,
      value: '50%'
    },
    //是否只展示对号，无边框背景
    isCheckMark: {
      type: Boolean,
      value: false
    },
    //对号颜色
    checkMarkColor: {
      type: String,
      value: '#fff'
    },
    scaleRatio: {
      type: String,
      optionalTypes: [Number],
      value: 1
    }
  },
  relations: {
    '../yr-ui-checkbox-group/yr-ui-checkbox-group': {
      type: 'ancestor'
    },
    '../yr-ui-label/yr-ui-label': {
      type: 'ancestor'
    }
  },
  data: {
    val: false
  },
  lifetimes: {
    attached: function () {
      this.setData({
        val: this.data.checked
      }, () => {
        this.parentChangeValue()
      })
    },
    detached: function () {
      this.unInstall()
    }
  },
  methods: {
    unInstall() {
      const group = this.getRelationNodes('../yr-ui-checkbox-group/yr-ui-checkbox-group')[0]
      if (group) {
        group.data.childrens.forEach((item, index) => {
          if (item === this) {
            group.data.childrens.splice(index, 1)
          }
        })
      }
    },
    checkboxChange(e) {
      if (this.data.disabled) return;
      this.setData({
        val: !this.data.val
      }, () => {
        this.parentChangeValue()
      })
    },
    parentChangeValue() {
      const group = this.getRelationNodes('../yr-ui-checkbox-group/yr-ui-checkbox-group')[0]
      group && group.changeValue(this.data.val, this);
      this.triggerEvent('change', {
        checked: this.data.val,
        value: this.data.value
      })
    },
    labelClick() {
      this.checkboxChange()
    }
  }
})