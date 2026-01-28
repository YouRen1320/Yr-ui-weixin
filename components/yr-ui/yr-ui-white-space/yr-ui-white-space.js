
Component({
  properties: {
    //small、default、large 默认优先使用全局配置
    size: {
      type: String,
      value: ''
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    background: {
      type: String,
      value: ''
    }
  },
  data: {
    c_size: (wx.$yrUi && wx.$yrUi.fuiWhiteSpace && wx.$yrUi.fuiWhiteSpace.size) || 'default',
    c_height: (wx.$yrUi && wx.$yrUi.fuiWhiteSpace && wx.$yrUi.fuiWhiteSpace.height) || 0,
    c_background: (wx.$yrUi && wx.$yrUi.fuiWhiteSpace && wx.$yrUi.fuiWhiteSpace.background) || 'transparent'
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {})
    }
  }
})