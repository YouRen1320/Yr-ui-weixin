
Component({
  properties: {
    //small、value、large
    size: {
      type: String,
      value: ''
    },
    gap: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    background: {
      type: String,
      value: ''
    },
    radius: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    marginTop: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    marginBottom: {
      type: String,
      optionalTypes: [Number],
      value: 0
    }
  },
  data: {
    c_size: (wx.$yrUi && wx.$yrUi.fuiWingBlank && wx.$yrUi.fuiWingBlank.size) || 'default',
    c_gap: (wx.$yrUi && wx.$yrUi.fuiWingBlank && wx.$yrUi.fuiWingBlank.gap) || 0,
    c_background: (wx.$yrUi && wx.$yrUi.fuiWingBlank && wx.$yrUi.fuiWingBlank.background) || 'transparent'
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {})
    }
  }
})