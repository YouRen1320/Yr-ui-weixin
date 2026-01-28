# Modal 模态框

模拟弹窗，支持自定义按钮和内容。

## 基础使用

```html
<yr-ui-modal show="{{show}}" title="提示" descr="确定操作吗？" bindclick="onClick"></yr-ui-modal>
```

## 自定义按钮

```html
<yr-ui-modal 
  show="{{show}}" 
  descr="自定义按钮样式" 
  buttons="{{buttons}}" 
  bindclick="onClick">
</yr-ui-modal>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| title | 标题 | string | - | - |
| size | 标题大小 | number | 34 | - |
| color | 标题颜色 | string | #333 | - |
| descr | 描述文本 | string | - | - |
| descrSize | 描述字体大小 | number | 28 | - |
| descrColor | 描述字体颜色 | string | #7F7F7F | - |
| buttons | 按钮列表 | array | [{text:'取消',plain:true},{text:'确定'}] | - |
| direction | 按钮排列方向 | string | row | row, column |
| radius | 圆角值 | number | 16 | - |
| width | 宽度 | number | 640 | - |
| background | 背景颜色 | string | #FFFFFF | - |
| maskClosable | 点击遮罩是否关闭 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮触发 | `{ index, ...button }` |
| cancel | 点击遮罩关闭触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义模态框内容 |
