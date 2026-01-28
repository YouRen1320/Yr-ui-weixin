# Fab 悬浮按钮

页面右下角的悬浮操作按钮。

## 基础使用

```html
<yr-ui-fab fabs="{{fabs}}" bindclick="onClick"></yr-ui-fab>
```

## 可拖拽

```html
<yr-ui-fab fabs="{{fabs}}" isDrag bindclick="onClick"></yr-ui-fab>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| fabs | 按钮列表 | array | [] | - |
| position | 位置 | string | right | left, right |
| distance | 左右间距 | number | 80 | - |
| bottom | 底部间距 | number | 120 | - |
| width | 宽度 | number | 108 | - |
| background | 背景颜色 | string | - | - |
| color | 字体颜色 | string | #fff | - |
| mask | 是否显示遮罩 | boolean | true | - |
| isDrag | 是否可拖拽 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项触发 | `{ index }` |
| change | 展开收起触发 | `{ isShow }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义按钮内容 (custom=true) |
