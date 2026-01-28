
Component({
  properties: {
    width: {
      type: String,
      optionalTypes: [Number],
      value: 40
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 40
    },
    index: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    model: {
      type: Object,
      value: {}
    },
    isDel: {
      type: Boolean,
      value: false
    },
    isMenu: {
      type: Boolean,
      value: true
    }
  },
  data: {
    padding: 0,
    background: "#fff",
    size: 30,
    color: '#181818',
    delColor: '#FF2B2B',
    slideColor: '#B2B2B2'
  },
  methods: {
    handleDel() {
      this.triggerEvent('delete', {
        index: this.data.index
      })
    }
  }
})