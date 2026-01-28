# Slider 滑块选择器

滑块选择器，支持单点选择与区间选择。

## 基础使用

```html
<yr-ui-slider bindchange="onChange"></yr-ui-slider>
```

## 显示值与自定义颜色

```html
<yr-ui-slider showValue activeColor="#FFB703" blockColor="#FFB703"></yr-ui-slider>
```

## 区间选择

```html
<yr-ui-slider section min="{{100}}" max="{{800}}" value="{{200}}" endValue="{{600}}" bindchange="onChange"></yr-ui-slider>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| min | 最小值 | number | 0 | - |
| max | 最大值 | number | 100 | - |
| value | 当前值 (起始值) | number | 0 | - |
| step | 步长 | number | 1 | - |
| section | 是否为区间选择 | boolean | false | - |
| endValue | 结束值 (区间模式) | number | 100 | - |
| width | 宽度，单位 px | number | 240 | - |
| height | 轨道高度，单位 px | number | 2 | - |
| blockWidth | 滑块宽度 | number | 24 | - |
| showValue | 是否显示当前值 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 完成拖动/点击时触发 | `{ value, endValue }` |
| changing | 拖动中触发 | `{ value, endValue }` |
