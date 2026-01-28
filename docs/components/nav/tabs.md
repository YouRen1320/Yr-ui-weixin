# Tabs 标签页

标签页组件，用于在不同的内容区域间进行切换。

## 基础使用

```html
<yr-ui-tabs tabs="{{tabs}}" bindchange="change"></yr-ui-tabs>
```

## 滚动与样式

```html
<!-- 滚动模式，红色滑块 -->
<yr-ui-tabs tabs="{{tabs}}" scroll selectedColor="#FFB703" sliderBackground="#FFB703"></yr-ui-tabs>
```

## 垂直排列

```html
<yr-ui-tabs tabs="{{tabs}}" direction="column"></yr-ui-tabs>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| tabs | 标签页数据 | array | [] | string[] / object[] |
| current | 当前选项卡索引 | number | 0 | - |
| scroll | 是否可以滚动 | boolean | false | - |
| height | 高度，单位 rpx | number | 96 | - |
| background | 背景颜色 | string | #fff | - |
| size | 字体大小 | number | 28 | - |
| selectedColor | 选中颜色 | string | - | - |
| sliderBackground | 滑块背景颜色 | string | - | - |
| isFixed | 是否固定 | boolean | false | - |
| isSticky | 是否吸顶 | boolean | false | - |
| alignLeft | item是否靠左对齐 (scroll=true时) | boolean | false | - |
| direction | 排列方式 | string | row | row, column |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换选项卡时触发 | `{ index, ...item }` |
