# Empty 缺省页

空数据时的占位提示。

## 基础使用

```html
<yr-ui-empty></yr-ui-empty>
```

## 自定义文本和图片

```html
<yr-ui-empty src="/static/empty.png" title="暂无相关数据" descr="请稍后再试..."></yr-ui-empty>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| src | 图片地址 | string | - | - |
| width | 图片宽度 | number | 576 | - |
| height | 图片高度 | number | 318 | - |
| title | 标题 | string | - | - |
| descr | 描述 | string | - | - |
| color | 标题颜色 | string | - | - |
| size | 标题大小 | number | 32 | - |
| marginTop | 顶部间距 | number | 0 | - |
| isFixed | 是否固定定位 | boolean | false | - |
