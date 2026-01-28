# ActionSheet 上拉菜单

底部弹出的操作菜单。

## 基础使用

```html
<yr-ui-actionsheet show="{{show}}" itemList="{{itemList}}" bindclick="onClick"></yr-ui-actionsheet>
```

## 带提示信息

```html
<yr-ui-actionsheet 
  show="{{show}}" 
  tips="确定要删除吗？" 
  itemList="{{itemList}}" 
  bindclick="onClick">
</yr-ui-actionsheet>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| itemList | 菜单列表 | array | [] | string[] / object[] |
| tips | 提示信息 | string | - | - |
| color | 提示文字颜色 | string | #7F7F7F | - |
| size | 提示文字大小 | number | 26 | - |
| radius | 是否圆角 | boolean | true | - |
| isCancel | 是否显示取消按钮 | boolean | true | - |
| theme | 主题模式 | string | light | light, dark |
| maskClosable | 点击遮罩是否关闭 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项触发 | `{ index, ...item }` |
| cancel | 点击取消或遮罩触发 | - |
