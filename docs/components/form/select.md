# Select 选择器

底部弹出选择器，支持单选、多选、自定义样式。

## 基础使用

```html
<yr-ui-select show="{{show}}" options="{{options}}" bindclick="onTap"></yr-ui-select>
```

## 单选与多选

```html
<!-- 单选 -->
<yr-ui-select show="{{show}}" options="{{items}}" type="select" bindconfirm="onConfirm"></yr-ui-select>

<!-- 多选 -->
<yr-ui-select show="{{show}}" options="{{items}}" multiple bindconfirm="onConfirm"></yr-ui-select>
```

## 自定义样式

```html
<yr-ui-select 
  isReverse 
  checkboxColor="#FFC529" 
  btnBackground="#FFC529" 
  btnColor="#1A1D26" 
  show="{{show}}"
  options="{{items}}">
</yr-ui-select>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| options | 数据源 (string[] 或 object[]) | array | [] | - |
| type | 类型 | string | select | select |
| multiple | 是否多选 | boolean | false | - |
| title | 标题 | string | 请选择 | - |
| height | 内容高度，单位 rpx | number | 600 | - |
| isCheckMark | 是否通过对号标记选中 | boolean | false | - |
| isReverse | 是否反转图标与文本位置 | boolean | false | - |
| btnText | 确定按钮文本 | string | 确定 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击列表项触发 (type!='select'时) | `{ index, options }` |
| change | 选中状态改变时触发 | `{ index, options }` (单选) / `{ options }` (多选) |
| confirm | 点击确定触发 | 同 change |
| close | 关闭时触发 | - |
