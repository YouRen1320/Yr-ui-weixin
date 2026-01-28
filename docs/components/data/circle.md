# Circle 圆形进度条

圆环形的进度显示组件。

## 基础使用

```html
<yr-ui-circle percent="{{80}}"></yr-ui-circle>
```

## 自定义颜色和宽度

```html
<yr-ui-circle percent="{{80}}" color="#FFB703" strokeWidth="{{8}}" width="{{200}}"></yr-ui-circle>
```

## 渐变色

```html
<yr-ui-circle percent="{{80}}" foreground="#465CFF" gradient="#FFB703"></yr-ui-circle>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| percent | 进度百分比 | number | 0 | 0-100 |
| width | 宽度 | number | 120 | - |
| strokeWidth | 线条宽度 | number | 4 | - |
| color | 进度文字颜色 | string | - | - |
| size | 进度文字大小 | number | 12 | - |
| background | 轨道背景色 | string | #CCCCCC | - |
| foreground | 进度条颜色 | string | - | - |
| gradient | 渐变色起始值 | string | - | - |
| speed | 动画速度 | number | 1 | - |
| activeMode | 动画模式 | string | forwards | forwards, backwards |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 进度改变触发 | `{ percent }` |
| end | 动画结束触发 | `{ canvasId, percent }` |
