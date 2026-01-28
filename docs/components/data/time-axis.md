# TimeAxis 时间轴

时间轴展示组件。

## 基础使用

需配合 `yr-ui-timeaxis-node` 使用。

```html
<yr-ui-timeaxis>
  <yr-ui-timeaxis-node>
    <view>2023-01-01 12:00:00</view>
    <view>已发货</view>
  </yr-ui-timeaxis-node>
  <yr-ui-timeaxis-node>
    <view>2023-01-02 14:00:00</view>
    <view>运输中</view>
  </yr-ui-timeaxis-node>
</yr-ui-timeaxis>
```

## API

### TimeAxis Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| padding | 内边距 | string | 0 | - |
| background | 背景颜色 | string | transparent | - |
| leftWidth | 左侧宽度 | number | 0 | - |
| width | 节点宽度 | number | 48 | - |
| lineWidth | 线条宽度 | number | 1 | - |

### TimeAxisNode Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| lined | 是否显示线条 | boolean | true | - |
| lineColor | 线条颜色 | string | #ccc | - |

### TimeAxisNode Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 节点内容 |
