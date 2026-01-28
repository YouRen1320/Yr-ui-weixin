# BottomNavbar 底部导航栏

底部导航条，常用于显示底部操作按钮。

## 基础使用

```html
<yr-ui-bottom-navbar items="{{items}}" bindclick="onClick"></yr-ui-bottom-navbar>
```

## 样式自定义

```html
<yr-ui-bottom-navbar 
  items="{{items}}" 
  background="#222" 
  color="#fff" 
  lineColor="#333" 
  isDivider="{{false}}">
</yr-ui-bottom-navbar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| items | 导航项列表 | array | [] | string[] / object[] |
| height | 高度，单位 rpx | number | 100 | - |
| size | 字体大小 | number | 28 | - |
| fontWeight | 字重 | number | 400 | - |
| color | 字体颜色 | string | #333333 | - |
| left | 左侧间距 | number | 0 | - |
| background | 背景颜色 | string | #FFFFFF | - |
| isBorder | 是否显示顶边框 | boolean | true | - |
| isDivider | 是否显示分割线 | boolean | true | - |
| lineColor | 分割线颜色 | string | #EEEEEE | - |
| isFixed | 是否固定在底部 | boolean | true | - |
| zIndex | 层级 | number | 900 | - |
| safeArea | 是否适配底部安全区 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击项触发 | `{ index, ...item }` |
| init | 初始化触发 | `{ height, windowWidth }` |
