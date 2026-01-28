# Loading 加载

加载状态指示器。

## 基础使用

```html
<yr-ui-loading></yr-ui-loading>
```

## 横向布局

```html
<yr-ui-loading type="row" text="正在加载..."></yr-ui-loading>
```

## 更换图标

```html
<yr-ui-loading srcCol="/static/loading.png" text="加载中"></yr-ui-loading>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 布局类型 | string | col | col, row |
| text | 提示文本 | string | 加载中 | - |
| color | 文本颜色 (row类型为 rowColor) | string | #7F7F7F | - |
| size | 文本大小 | number | 26 | - |
| srcCol | 纵向布局图标 | string | (base64) | - |
| srcRow | 横向布局图标 | string | (base64) | - |
| isFixed | 是否固定显示 | boolean | true | - |
| isMask | 是否显示遮罩 (仅isFixed=true) | boolean | false | - |
| maskBgColor | 遮罩背景色 | string | transparent | - |
