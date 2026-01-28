# Rate 评分

评分组件，支持半星、自定义颜色与大小。

## 基础使用

```html
<yr-ui-rate bindchange="change"></yr-ui-rate>
```

## 自定义展示

```html
<!-- 自定义颜色与大小 -->
<yr-ui-rate color="#888" activeColor="#465CFF" size="{{48}}"></yr-ui-rate>

<!-- 设置最大分与默认分 -->
<yr-ui-rate max="{{8}}" score="{{5}}"></yr-ui-rate>
```

## 支持半星与禁用

```html
<yr-ui-rate allowHalf></yr-ui-rate>
<yr-ui-rate disabled score="{{3.5}}"></yr-ui-rate>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| max | 最大评分数 | number | 5 | - |
| score | 当前评分 | number | 0 | - |
| color | 未选中颜色 | string | #CCCCCC | - |
| activeColor | 选中颜色 | string | #FFB703 | - |
| disabled | 是否禁用 | boolean | false | - |
| size | 星星大小，单位 rpx | number | 56 | - |
| spacing | 星星间距，单位 rpx | number | 0 | - |
| allowHalf | 是否支持半星 | boolean | false | - |
| touchable | 是否支持滑动评分 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 评分变化时触发 | `{ score, param }` |
