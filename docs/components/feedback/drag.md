# Drag 拖拽

拖拽排序组件。

## 基础使用

```html
<yr-ui-drag 
  itemList="{{itemList}}" 
  columns="{{3}}" 
  bindchange="onChange" 
  bindclick="onClick">
</yr-ui-drag>
```

## 页面滚动处理

需在 `onPageScroll` 中更新 `scrollTop`。

```js
Page({
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})
```

```html
<yr-ui-drag scrollTop="{{scrollTop}}" ...></yr-ui-drag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| itemList | 数据列表 | array | [] | - |
| width | 宽度 | number | 0 (屏幕宽) | - |
| columns | 列数 | number | 1 | - |
| itemHeight | 高度 | number | 0 | - |
| square | 是否正方形 | boolean | false | - |
| scrollTop | 页面滚动高度 | number | 0 | - |
| isDrag | 是否可拖拽 | boolean | true | - |
| isDel | 是否可删除 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击项目触发 | `{ index, item }` |
| change | 排序改变触发 | `{ itemList }` |
| end | 拖拽结束触发 | `{ itemList }` |
| delete | 删除触发 | `{ index }` |
