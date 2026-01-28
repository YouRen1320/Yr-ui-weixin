# Gallery 画廊

图片预览组件。

## 基础使用

```html
<yr-ui-gallery urls="{{urls}}" show="{{show}}" bindhide="onHide"></yr-ui-gallery>
```

## 指定字段

```html
<yr-ui-gallery 
  urls="{{list}}" 
  srcKey="url" 
  descrKey="title" 
  show="{{show}}" 
  bindhide="onHide">
</yr-ui-gallery>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| urls | 图片列表 | array | [] | string[] / object[] |
| current | 当前索引 | number | 0 | - |
| srcKey | 图片地址字段名 | string | src | - |
| descrKey | 描述字段名 | string | descr | - |
| ellipsis | 描述是否单行省略 | boolean | false | - |
| zIndex | 层级 | number | 1001 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换图片触发 | `{ index }` |
| hide | 点击关闭触发 | - |
