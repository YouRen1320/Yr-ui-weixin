
Component({
  properties: {
    width: {
      type: String,
      optionalTypes:[Number],
      value: 40
    },
    height: {
      type: String,
      optionalTypes:[Number],
      value: 40
    },
    square: {
      type: Boolean,
      value: false
    },
    index: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    model:{
      type:Object,
      value: {}
    },
    isDel:{
      type: Boolean,
      value: false
    }
  },
  data: {
    padding: 4,
    background: "#fff",
    size: 30,
    delColor: '#FF2B2B'
  },
  methods: {
    handleDel() {
      this.triggerEvent('delete', {
        index: this.data.index
      })
    }
  }
})