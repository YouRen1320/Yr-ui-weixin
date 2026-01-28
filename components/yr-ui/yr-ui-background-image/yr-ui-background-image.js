
Component({
  properties: {
    src: {
      type: String,
      value: ''
    },
    background: {
      type: String,
      value: 'transparent'
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: -1
    },
    aspectFill: {
      type: Boolean,
      value: true
    },
    absolute: {
      type: Boolean,
      value: false
    }
  }
})