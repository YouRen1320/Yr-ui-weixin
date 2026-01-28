

Component({
  properties: {
    item: {
      type: Object,
      value:{}
    }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click',{
        item:this.data.item
      });
    }
  }
})