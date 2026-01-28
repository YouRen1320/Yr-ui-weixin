# Steps 步骤条

步骤条组件，展示任务进度。

## 基础使用

```html
<yr-ui-steps items="{{items}}" current="{{current}}"></yr-ui-steps>
```

## 样式调整

```html
<!-- 线条贯穿圆点，线条加粗，处理状态颜色 -->
<yr-ui-steps 
  items="{{items}}" 
  current="{{current}}" 
  line-through 
  lineBold 
  processStatus="wait" 
  process-color="#FFB703">
</yr-ui-steps>
```

## 纵向展示

```html
<yr-ui-steps items="{{items}}" direction="column"></yr-ui-steps>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| items | 步骤数据 | array | [] | - |
| current | 当前步骤索引 | number | 0 | - |
| direction | 排列方向 | string | row | row, column |
| activeColor | 激活状态颜色 | string | - | - |
| processStatus | 当前步骤状态 | string | - | wait, fail, success |
| processColor | 当前步骤状态颜色 | string | - | - |
| isMark | 完成步骤是否显示对号 | boolean | true | - |
| lineBold | 线条是否加粗 | boolean | false | - |
| lineThrough | 线条是否贯穿 (仅小圆点模式) | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击步骤触发 | `{ index, ...item }` |
