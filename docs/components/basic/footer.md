# Footer 页脚

页脚组件，通常用于页面底部显示版权信息或导航链接。

## 基础使用

```html
<yr-ui-footer text="Copyright © 2021 yr-ui.cn"></yr-ui-footer>
```

## 带链接

```html
<yr-ui-footer navigate="{{navigate}}" text="Copyright © 2021 yr-ui.cn"></yr-ui-footer>
```

```javascript
// page.js
data: {
  navigate: [{
    text: '隐私协议',
    url: '/pages/common/privacy/privacy'
  }, {
    text: '服务条款',
    url: '/pages/common/terms/terms'
  }]
}
```

## 固定底部

```html
<yr-ui-footer isFixed text="Copyright © 2021 yr-ui.cn"></yr-ui-footer>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| navigate | 链接设置，数组元素为对象 `{url, openType, delta, text, color, size}` | array | [] | - |
| text | 底部文本 | string | - | - |
| color | 文本字体颜色 | string | #B2B2B2 | - |
| size | 文本字体大小，单位 rpx | number/string | 24 | - |
| background | 背景颜色 | string | transparent | - |
| borderColor | 分隔线颜色，仅 nvue 生效 | string | #B2B2B2 | - |
| isFixed | 是否固定在底部 | boolean | false | - |
| bottom | 固定在底部时的 bottom 值，单位 rpx | string/number | 0 | - |
| safeArea | 是否适配底部安全区 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击链接时触发（如果配置了 url 则会自动跳转，无需处理） | `{ index: number, item: object }` |
