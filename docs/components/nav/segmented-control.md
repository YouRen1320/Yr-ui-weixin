# SegmentedControl 分段器

分段控制组件。

## 基础使用

```html
<yr-ui-segmented-control values="{{values}}" bindclick="onClick"></yr-ui-segmented-control>
```

## 样式自定义

```html
<yr-ui-segmented-control 
  values="{{values}}" 
  color="#FF2B2B" 
  height="{{80}}" 
  radius="{{100}}">
</yr-ui-segmented-control>
```

## 文本类型

```html
<yr-ui-segmented-control type="text" values="{{values}}"></yr-ui-segmented-control>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| values | 选项数据 | array | [] | string[] / object[] |
| current | 当前索引 | number | 0 | - |
| type | 类型 | string | button | button, text |
| color | 主题颜色 | string | - | - |
| activeColor | 选中颜色 (text类型) | string | #fff | - |
| bold | 是否加粗 | boolean | false | - |
| height | 高度，单位 rpx | number | 64 | - |
| size | 字体大小 | number | 28 | - |
| radius | 圆角值 | number | 8 | - |
| disabled | 是否禁用 | boolean | false | - |
| marginTop | margin-top | number | 0 | - |
| marginBottom | margin-bottom | number | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击项触发 | `{ index, ...item }` |
