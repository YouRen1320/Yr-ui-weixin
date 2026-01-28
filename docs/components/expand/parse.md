# Parse 富文本解析

富文本解析组件，支持 html 或 markdown 解析。

## 基础使用

```html
<!-- html 解析 -->
<yr-ui-parse nodes="{{html}}"></yr-ui-parse>
```

```javascript
Page({
  data: {
    html: '<div>Hello yr-ui</div>'
  }
})
```

## Markdown 解析

设置 `language="md"` 即可支持 markdown 解析。

```html
<yr-ui-parse nodes="{{md}}" language="md"></yr-ui-parse>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| nodes | String/Array/Object | - | 富文本数据，支持 html 字符串或节点数组 |
| language | String | html | 解析语言，可选值：html, markdown (md) |
| imgPreview | Boolean | true | 是否开启图片点击预览 |
| thBgcolor | Boolean | true | 表格头部是否显示背景色 |
| nodeKey | String | - | 节点标识 key，用于区分不同富文本实例，不传则自动生成 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindpreview | 图片点击预览时触发 | `{ src: 当前图片地址, imageUrls: 所有图片数组 }` |
| bindatap | 点击 a 标签时触发 | `{ value: 链接地址 }` |
