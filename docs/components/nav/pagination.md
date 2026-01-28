# Pagination 分页器

分页组件。

## 基础使用

```html
<yr-ui-pagination total="{{100}}" bindchange="change"></yr-ui-pagination>
```

## 展开型页码

```html
<yr-ui-pagination total="{{1000}}" pageType="{{2}}" bindchange="change"></yr-ui-pagination>
```

## 自定义按钮

```html
<yr-ui-pagination total="{{100}}" custom>
  <yr-ui-icon name="arrowleft" slot="prev"></yr-ui-icon>
  <yr-ui-icon name="arrowright" slot="next"></yr-ui-icon>
</yr-ui-pagination>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| total | 数据总量 | number | 0 | - |
| pageSize | 每页数据量 | number | 10 | - |
| current | 当前页码 | number | 1 | - |
| prevText | 上一页文字 | string | 上一页 | - |
| nextText | 下一页文字 | string | 下一页 | - |
| width | 按钮宽度 | number | 128 | - |
| pageType | 页码展示类型 | number | 1 | 1: 简约, 2: 展开 |
| isPage | 是否展示页码 (type=1) | boolean | true | - |
| custom | 是否自定义按钮内容 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页码改变触发 | `{ type, current }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| prev | 上一页按钮内容 (custom=true) |
| next | 下一页按钮内容 (custom=true) |
