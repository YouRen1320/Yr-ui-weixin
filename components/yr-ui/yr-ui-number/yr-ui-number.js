
Component({
  options: {
    virtualHost: true
  },
  properties: {
    //数字值
    text: {
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    size: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //rpx | px
    unit: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#333'
    },
    //字重
    fontWeight: {
      type: String,
      optionalTypes: [Number],
      value: 'normal'
    },
    //是否禁用点击
    disabled: {
      type: Boolean,
      value: false
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      value: false
    },
    //none、 underline、line-through
    decoration: {
      type: String,
      value: 'none'
    },
    //是否将行高设置与字体大小一致
    lineHeight: {
      type: Boolean,
      value: false
    },
    params: {
      type: String,
      optionalTypes: [Number],
      value: 0
    }
  },
  data: {
    c_size: (wx.$yrUi && wx.$yrUi.fuiNumber && wx.$yrUi.fuiNumber.size) || 32,
    c_unit: (wx.$yrUi && wx.$yrUi.fuiNumber && wx.$yrUi.fuiNumber.unit) || 'rpx'
  },
  methods: {
    handleClick() {
      if (this.data.disabled) return;
      this.triggerEvent('click', {
        text: this.data.text,
        params: this.data.params
      });
    }
  }
})