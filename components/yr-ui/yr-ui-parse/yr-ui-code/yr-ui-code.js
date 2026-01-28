
import hljs from '../high-light/index.js'
// 支持的解析语言列表
const LANGUAGE_LIST = [
  'javascript',
  'css',
  'xml',
  'sql',
  'typescript',
  'markdown',
  'c++',
  'c',
];
Component({
  properties: {
    codeText: {
      type: String,
      value: ''
    },
    language: {
      type: String,
      value: 'javascript'
    }
  },
  data: {
    code: ''
  },
  lifetimes: {
    attached: function () {
      this.parseCode(this.data.codeText, this.data.language)
    }
  },
  methods: {
    parseCode(input, language) {
      const lang = LANGUAGE_LIST.includes(language) ? language : 'javascript'
      const {
        value
      } = hljs.highlight(lang, input)
      const highlighted = value.replace('&amp;', '&').trim()

      let codeResult = `<code class="${lang}">${highlighted}</code>`
      codeResult = codeResult.replace(/\n/g, "<br/>").replace('\<code\>', '')
      this.setData({
        code: codeResult
      })
    }
  }
})