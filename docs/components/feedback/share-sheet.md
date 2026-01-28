# ShareSheet 分享面板

底部弹出的分享操作面板。

## 基础使用

```html
<yr-ui-share-sheet 
  show="{{show}}" 
  itemList="{{itemList}}" 
  bindclick="onClick" 
  bindcancel="onCancel">
</yr-ui-share-sheet>
```

## 多行显示

```html
<yr-ui-share-sheet 
  show="{{show}}" 
  itemList="{{multiItemList}}" 
  bindclick="onClick">
</yr-ui-share-sheet>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| itemList | 分享列表 | array | [] | [{name, src}] |
| title | 标题 | string | 分享到 | - |
| btnText | 取消按钮文本 | string | 取消 | - |
| background | 背景颜色 | string | #EAEAEA | - |
| isFull | 是否宽度100% | boolean | false | - |
| maskClosable | 点击遮罩是否关闭 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击项目触发 | `{ index, subIndex, item }` |
| cancel | 点击取消或遮罩触发 | - |
