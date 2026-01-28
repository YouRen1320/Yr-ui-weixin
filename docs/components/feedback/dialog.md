# Dialog 对话框

对话框组件。

## 基础使用

```html
<yr-ui-dialog show="{{show}}" content="这是一个对话框" bindclick="onClick"></yr-ui-dialog>
```

## 自定义按钮

```html
<yr-ui-dialog 
  show="{{show}}" 
  title="标题" 
  content="内容..." 
  buttons="{{buttons}}" 
  bindclick="onClick">
</yr-ui-dialog>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| title | 标题 | string | 提示 | - |
| color | 标题颜色 | string | #333 | - |
| content | 内容文本 | string | - | - |
| contentColor | 内容文本颜色 | string | #7F7F7F | - |
| buttons | 按钮列表 | array | [{text:'取消'},{text:'确定',color:'#465CFF'}] | - |
| background | 背景颜色 | string | #fff | - |
| radius | 圆角值 | number | 24 | - |
| maskClosable | 点击遮罩是否关闭 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮触发 | `{ index, ...button }` |
| close | 点击遮罩关闭触发 | - |
