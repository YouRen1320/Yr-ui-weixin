
Component({
  properties: {
    options: {
      type: Array,
      value: [],
      observer(vals) {
        this.setDefaultOptions(this.data.value)
      }
    },
    textKey: {
      type: String,
      value: 'text'
    },
    valueKey: {
      type: String,
      value: 'value'
    },
    childrenKey: {
      type: String,
      value: 'children'
    },
    srcKey: {
      type: String,
      value: 'src'
    },
    value: {
      type: Array,
      value: [],
      observer(vals) {
        this.setDefaultOptions(vals)
      }
    },
    defaultKey: {
      type: String,
      value: 'value'
    },
    stepLoading: {
      type: Boolean,
      value: false
    },
    showBorder: {
      type: Boolean,
      value: true
    },
    borderColor: {
      type: String,
      value: '#eee'
    },
    headHeight: {
      type: String,
      optionalTypes: [Number],
      value: 88
    },
    headBackground: {
      type: String,
      value: '#FFFFFF'
    },
    text: {
      type: String,
      value: '请选择'
    },
    size: {
      type: String,
      optionalTypes: [Number],
      value: 28
    },
    color: {
      type: String,
      value: '#181818'
    },
    //选中颜色
    activeColor: {
      type: String,
      value: ''
    },
    showLine: {
      type: Boolean,
      value: true
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 600
    },
    //item  swiper 内容部分背景颜色
    background: {
      type: String,
      value: '#FFFFFF'
    },
    checkMarkColor: {
      type: String,
      value: ''
    },
    imgWidth: {
      type: String,
      optionalTypes: [Number],
      value: 48
    },
    imgHeight: {
      type: String,
      optionalTypes: [Number],
      value: 48
    },
    radius: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    textSize: {
      type: String,
      optionalTypes: [Number],
      value: 26
    },
    textColor: {
      type: String,
      value: '#181818'
    },
    textActiveColor: {
      type: String,
      value: '#181818'
    }
  },
  data: {
    current: 0,
    defCurrent: 0,
    selectedArr: [],
    scrollViewId: 'fui_cr__0',
    isShow: true
  },
  lifetimes: {
    attached: function () {
      this.setDefaultOptions(this.data.value)
    }
  },
  methods: {
    //重置选择，暴露给用户使用
    reset() {
      this.initData(this.data.options, -1);
    },
    //设置请求返回数据，暴露给用户使用（分级加载数据）
    setRequestData(data, layer) {
      this.subLevelData(data, layer)
    },
    //无子级数据，选择结束
    end(layer) {
      this.subLevelData([], layer)
    },
    subLevelData(data, layer) {
      if (!data || data.length === 0) {
        if (layer == -1) return;
        let arr = this.data.selectedArr;
        if (layer < arr.length - 1) {
          let newArr = arr.slice(0, layer + 1);
          this.setData({
            selectedArr: newArr
          })
        }
        let result = JSON.parse(JSON.stringify(this.data.selectedArr));
        let lastItem = result[result.length - 1] || {};
        let text = [];
        let value = [];
        let src = [];
        result.map(item => {
          text.push(item[this.data.textKey]);
          value.push(item[this.data.valueKey])
          src.push(item[this.data.srcKey])
          delete item['data'];
          delete item['index'];
          delete item['scrollViewId'];
          return item;
        });
        this.triggerEvent('complete', {
          result: result,
          [this.data.valueKey]: value,
          [this.data.textKey]: text,
          [this.data.srcKey]: src
        });
        setTimeout(() => {
          this.setData({
            scrollViewId: `fui_cr_${layer}`
          })
        }, 50)
      } else {
        let item = [{
          [this.data.textKey]: this.data.text,
          [this.data.valueKey]: this.data.text,
          [this.data.srcKey]: '',
          index: -1,
          scrollViewId: 'fui_c__0',
          data
        }];
        if (layer == -1) {
          this.setData({
            selectedArr: item
          })
        } else {
          let retainArr = this.data.selectedArr.slice(0, layer + 1) || [];
          this.setData({
            selectedArr: retainArr.concat(item)
          })
        }
        let current = this.data.selectedArr.length - 1;
        if (current >= this.data.current) {
          this.setData({
            defCurrent: this.data.current
          })
        }
        //基础库 2.2.3 开始支持
        if (wx.canIUse('nextTick')) {
          wx.nextTick(() => {
            setTimeout(() => {
              this.setData({
                defCurrent: current,
                current: current,
                scrollViewId: `fui_cr_${current> 1?current - 1:0}`
              })
            }, 50)
          })
        } else {
          setTimeout(() => {
            this.setData({
              defCurrent: current,
              current: current,
              scrollViewId: `fui_cr_${current> 1?current - 1:0}`
            })
          }, 100)
        }
      }
    },
    getDefaultIndex(arr, val) {
      if (!arr || arr.length === 0 || val === undefined) return -1;
      let key = this.data.defaultKey || 'value';
      let index = -1;
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i][key] == val) {
          index = i;
          break;
        }
      }
      return index;
    },
    removeChildren(data) {
      let list = data.map(item => {
        delete item[this.data.childrenKey];
        return item;
      });
      return list;
    },
    getItemList(layer, index, selectedArr) {
      let list = [];
      let arr = JSON.parse(JSON.stringify(this.data.options));
      selectedArr = selectedArr || this.data.selectedArr
      if (layer == -1) {
        list = this.removeChildren(arr);
      } else {
        let subi = selectedArr[0].index;
        subi = subi === undefined || subi == -1 ? index : subi;
        if (arr[subi] && arr[subi][this.data.childrenKey]) {
          list = arr[subi][this.data.childrenKey]
        }
        if (layer > 0) {
          for (let i = 1; i < layer + 1; i++) {
            let val = layer === i ? index : selectedArr[i].index;
            list = val === -1 ? [] : (list[val][this.data.childrenKey] || []);
            if (list.length === 0) break;
          }
        }
        list = this.removeChildren(list);
      }
      return list;
    },
    setDefaultOptions(vals) {
      let options = this.data.options || []
      if (!options || options.length === 0) return;
      vals = vals || [];
      let selectedArr = []
      if (vals.length > 0) {
        const text = this.data.textKey;
        const value = this.data.valueKey;
        const src = this.data.srcKey;
        //分级加载
        if (this.data.stepLoading) {
          options.forEach((item, index) => {
            let subi = this.getDefaultIndex(item, vals[index])
            let obj = item[subi] || {}
            selectedArr.push({
              [text]: obj[text] || this.data.text,
              [value]: obj[value] || '',
              [src]: obj[src] || '',
              index: subi,
              scrollViewId: `fui_c_${subi}`,
              data: item
            })
          })
        } else {
          let subi = -1
          for (let j = 0, len = vals.length; j < len; j++) {
            let item = vals[j]
            let list = []
            let obj = {}
            if (j === 0) {
              list = this.getItemList(-1)
            } else {
              list = this.getItemList(j - 1, subi, selectedArr)
            }
            subi = this.getDefaultIndex(list, item)
            if (subi !== -1) {
              obj = list[subi]
            }
            selectedArr.push({
              [text]: obj[text] || this.data.text,
              [value]: obj[value] || '',
              [src]: obj[src] || '',
              index: subi,
              scrollViewId: `fui_c_${subi}`,
              data: list
            })
            if (subi === -1) break;
          }
        }
        this.setData({
          selectedArr: selectedArr,
          defCurrent: this.data.current
        }, () => {
          let current = selectedArr.length - 1;
          setTimeout(() => {
            this.setData({
              defCurrent: current,
              current: current
            })
            this.checkTabs();
          }, 30)
        })
      } else {
        this.initData(options, -1);
      }
    },
    initData(data, layer) {
      if (!data || data.length === 0) return;
      if (this.stepLoading) {
        if (Array.isArray(data[0])) {
          data = data[0]
        }
        this.subLevelData(data, layer);
      } else {
        this.subLevelData(this.getItemList(layer, -1), layer);
      }
    },
    swichTabs(e) {
      let current = Number(e.currentTarget.dataset.idx)
      if (this.data.current != current) {
        this.setData({
          defCurrent: this.data.current
        }, () => {
          setTimeout(() => {
            this.setData({
              defCurrent: current,
              current: current
            })
          }, 30)
        })
      }
    },
    checkTabs() {
      let current = this.data.current;
      let item = this.data.selectedArr[current] || {};
      let scrollViewId = `selectedArr[${current}].scrollViewId`;
      this.setData({
        [scrollViewId]: 'fui_c__0'
      }, () => {
        setTimeout(() => {
          let index = Number(item.index)
          let val = index < 2 ? 0 : index - 2;
          this.setData({
            [scrollViewId]: `fui_c_${val}`
          })
        }, 30);
      })

      this.setData({
        scrollViewId: `fui_cr_${current > 1?current - 1:0}`
      })
    },
    switchTab(e) {
      this.setData({
        current: e.detail.current
      }, () => {
        this.checkTabs()
      })
    },
    change(e) {
      let dataset = e.currentTarget.dataset
      let index = Number(dataset.index)
      let subi = Number(dataset.subi)
      let sub = dataset.sub
      let item = this.data.selectedArr[index];
      if (item.index == subi) return;
      let model = `selectedArr[${index}]`;
      item.index = subi;
      item[this.data.textKey] = sub[this.data.textKey];
      item[this.data.valueKey] = sub[this.data.valueKey];
      item[this.data.srcKey] = sub[this.data.srcKey] || '';
      this.setData({
        [model]: item
      })
      this.triggerEvent('change', {
        layer: index,
        index: subi,
        ...sub
      });
      if (!this.data.stepLoading) {
        let data = this.getItemList(index, subi);
        this.subLevelData(data, index);
      }
    }
  }
})