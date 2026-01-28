# Tabbar 标签栏

底部标签栏，用于模块切换。

## 基础使用

```html
<yr-ui-tabbar tabBar="{{tabBar}}" current="{{current}}" bindclick="itemClick"></yr-ui-tabbar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| tabBar | 标签栏数据 | array | [] | - |
| current | 当前索引 | number | 0 | - |
| background | 背景颜色 | string | #FFFFFF | - |
| isFixed | 是否固定在底部 | boolean | true | - |
| fixedHeight | 固定底部时是否包含安全区高度 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击项触发 | `{ index, ...item }` |
| init | 初始化触发 | `{ height }` |
