
Component({
  options: {
    virtualHost: true
  },
  properties: {
    height: {
      type: String,
      optionalTypes:[Number],
      value: 400
    },
    //圆弧view宽度与banner宽度比率，最小值 1.2:1
    ratio: {
      type: String,
      optionalTypes:[Number],
      value: 1.2,
      observer(val){
        this.initArcWidth()
      }
    },
    background: {
      type: String,
      value: ''
    },
    marginTop: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    marginBottom: {
      type: String,
      optionalTypes:[Number],
      value: 0
    }
  },
  data: {
    width: 120
  },
  lifetimes:{
    attached:function(){
      this.initArcWidth()
    }
  },
  methods: {
    initArcWidth() {
      let ratio = Number(this.data.ratio || 0)
      ratio = ratio < 1.2 ? 1.2 : ratio;
      this.setData({
        width:100 * ratio
      })
    },
    handleClick() {
      this.triggerEvent('click', {})
    }
  }
})