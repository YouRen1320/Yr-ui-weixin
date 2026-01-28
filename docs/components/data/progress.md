# Progress 进度条

展示操作的当前进度。

## 基础使用

```html
<yr-ui-progress percent="{{50}}"></yr-ui-progress>
```

## 显示百分比

```html
<yr-ui-progress percent="{{50}}" showInfo></yr-ui-progress>
```

## 自定义颜色

```html
<yr-ui-progress percent="{{80}}" activeColor="#465CFF"></yr-ui-progress>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| percent | 百分比 | number | 0 | 0-100 |
| height | 高度 | number | 8 | - |
| radius | 圆角 | number | 8 | - |
| showInfo | 是否显示百分比文字 | boolean | false | - |
| size | 文字大小 | number | 28 | - |
| color | 文字颜色 | string | #333 | - |
| activeColor | 进度条颜色 | string | - | - |
| background | 轨道背景色 | string | #CCCCCC | - |
| duration | 动画时长(ms/1%) | number | 15 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| activeend | 动画结束触发 | - |
