# Panel 面板

常用的布局组件，包含头部、内容区域等。

## 基础使用

```html
<yr-ui-panel panelData="{{panelData}}"></yr-ui-panel>
```

```javascript
Page({
  data: {
    panelData: {
      head: '基础使用',
      list: [
        {
          src: '',
          title: '标题',
          desc: '描述信息'
        }
      ]
    }
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| panelData | Object | {} | 面板数据，格式详见上方示例 |
| fields | Object | {} | 字段映射，默认对应关系：head, list, src, title, desc, source, time, extra |
| background | String | - | 背景颜色 |
| highlight | Boolean | true | 是否有点击效果 |
| marginTop | Number/String | 0 | 上外边距 |
| marginBottom | Number/String | 0 | 下外边距 |
| padding | Number/String | 32 | 左右内边距 |
| isBorder | Boolean | true | 是否显示外层边框 |
| hdBorder | Boolean | true | 是否显示头部下划线 |
| bdBorder | Boolean | true | 是否显示 列表项 下划线 (不包括最后的一项) |
| width | Number/String | 120 | 图片宽度，单位rpx |
| height | Number/String | 120 | 图片高度，单位rpx |
| radius | Number/String | 0 | 图片圆角 |
| size | Number/String | 32 | 标题字体大小 |
| color | String | - | 标题颜色 |
| fontWeight | String/Number | normal | 标题粗细 |
| descSize | Number/String | 28 | 描述文字大小 |
| descColor | String | - | 描述文字颜色 |
| infoSize | Number/String | 24 | 底部辅助信息字体大小 |
| infoColor | String | - | 底部辅助信息颜色 |
| flexStart | Boolean | false | 列表项是否顶部对齐 |
| rowReverse | Boolean | false | 图片与内容是否反转位置 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindclick | 点击列表项时触发 | `{ index: 索引, ...item数据 }` |
