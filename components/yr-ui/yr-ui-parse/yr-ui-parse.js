
import HtmlToJson from './utils/html2json.js';
import marked from './marked/index.js'
import util from './utils/util.js';
Component({
  properties: {
    // 可选：html | markdown (md)
    language: {
      type: String,
      value: 'html'
    },
    nodes: {
      type: String,
      optionalTypes: [Array, Object],
      value: '',
      observer(val) {
        this.data.isInit && this.initData(val)
      }
    },
    imgPreview: {
      type: Boolean,
      value: true
    },
    thBgcolor: {
      type: Boolean,
      value: true
    },
    //此参数值不可重复
    nodeKey: {
      type: String,
      value: ''
    },
    //内部属性
    styleStr: {
      type:String,
      value: ''
    }
  },
  data: {
    parsegroup: null,
    pageNodeKey: '',
    nodesData: [],
    bindData: {},
    width: 0,
    height: 0,
    mode: '',
    isInit: false
  },
  lifetimes: {
    attached: function () {
      this.data.isInit = true
      this.initData(this.data.nodes)
      this.setData({
        mode: 'widthFix'
      })
    },
    detached: function () {
      // 组件销毁，清除绑定实例
      util.cacheInstance.remove(this.data.pageNodeKey)
    }
  },
  methods: {
    initData(val) {
      if (!val) return;
      // 采用markdown解析
      if (this.data.language == 'markdown' || this.data.language == 'md') {
        const parseNodes = marked(val);
        setTimeout(() => {
          this._parseNodes(parseNodes)
        }, 0);
      } else {
        // 默认采用html解析
        setTimeout(() => {
          this._parseNodes(val)
        }, 0)
      }
    },
    _parseNodes(nodes) {
      // 设置页面唯一键值标识符
      const _KEY = `fui_parse_${Math.ceil(Math.random() * 10e5).toString(36)}`;
      this.setData({
        pageNodeKey: this.data.nodeKey || _KEY
      })
      if (typeof nodes === 'string') { // 初始为html富文本字符串
        this._parseHtml(nodes)
      } else if (Array.isArray(nodes)) { // html 富文本解析成节点数组
        this.setData({
          nodesData: nodes
        })
      } else { // 其余为单个节点对象
        this.setData({
          nodesData: [nodes]
        })
      }
    },
    _parseHtml(html) {
      //存放html节点转化后的json数据
      const transData = HtmlToJson.html2json(html, this.data.pageNodeKey)
      transData.view = {}
      transData.view.imagePadding = 0
      this.setData({
        nodesData: transData.nodes,
        bindData: {
          [this.data.pageNodeKey]: transData
        }
      })
      util.cacheInstance.set(this.data.pageNodeKey, transData)
    },
    /**
     * 图片视觉宽高计算函数区
     * @param {*} e
     */
    fuiParseImgLoad(e) {
      // 获取当前的image node节点
      const {
        from: tagFrom,
        index
      } = (e.target.dataset || e.currentTarget.dataset || {})
      if (typeof tagFrom !== 'undefined' && tagFrom.length > 0) {
        const {
          width,
          height
        } = e.detail

        //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
        const recal = this._fuiAutoImageCal(width, height)
        this.setData({
          width: recal.imageWidth,
          height: recal.imageHeight
        })
        const nodesData = this.data.nodesData;
        nodesData[index].loaded = true;
        this.setData({
          nodesData
        })
      }
    },

    /**
     * 预览图片
     * @param {*} e
     */
    fuiParseImgTap(e) {
      const {
        src
      } = (e.target.dataset || e.currentTarget.dataset)

      let {
        imageUrls = []
      } = util.cacheInstance.get(this.data.pageNodeKey)
      if (imageUrls.length == 0) {
        imageUrls = [src]
      }
      if (this.data.imgPreview) {
        wx.previewImage({
          current: src,
          urls: imageUrls
        })
      }
      this.triggerEvent('preview', {
        src,
        imageUrls
      })

    },

    /**
     * 计算视觉优先的图片宽高
     * @param {*} originalWidth
     * @param {*} originalHeight
     */
    _fuiAutoImageCal(originalWidth, originalHeight) {
      let autoWidth = 0,
        autoHeight = 0;
      const results = {}
      const [windowWidth, windowHeight] = util.getSystemInfo()

      // 判断按照哪种方式进行缩放
      if (originalWidth > windowWidth) { //在图片width大于手机屏幕width时候
        autoWidth = windowWidth
        autoHeight = (autoWidth * originalHeight) / originalWidth
        results.imageWidth = autoWidth
        results.imageHeight = autoHeight
      } else { // 否则展示原来数据
        results.imageWidth = originalWidth
        results.imageHeight = originalHeight
      }
      return results
    },

    /**
     * 增加a标签跳转
     * @param {*} e
     */
    fuiParseTagATap(e) {
      const {
        src = ''
      } = e.currentTarget.dataset

      this.triggerEvent('atap', {
        value: src
      })
      // 判断是否内部链接跳转
      const isInnerPage = src.indexOf('http') === -1
      if (isInnerPage) {
        wx.navigateTo({
          url: src
        })
      }
    },
    onAtap(e) {
      this.triggerEvent('atap', e.detail)
    },
    onPreview(e) {
      this.triggerEvent('preview', e.detail)
    }
  }
})