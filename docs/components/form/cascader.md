# Cascader 级联选择器

级联选择器，用于多层级数据的选择，支持一次性加载与分级加载。

## 基础使用

```html
<yr-ui-cascader options="{{options}}" bindcomplete="complete"></yr-ui-cascader>
```

## 默认选中

```html
<yr-ui-cascader options="{{options}}" value="{{value}}" activeColor="#FF2B2B" bindcomplete="complete">
</yr-ui-cascader>
```

## 分级加载（异步请求）

```html
<yr-ui-cascader options="{{layerData}}" stepLoading bindchange="change" bindcomplete="complete">
</yr-ui-cascader>
```

```javascript
// change 事件中请求下一级数据
change(e) {
  // 请求接口获取数据
  // ...
  // 使用 setRequestData 设置下一级数据
  this.selectComponent('#cascader').setRequestData(data, e.layer);
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| options | 数据源 | array | [] | - |
| value | 默认值的 value 数组 | array | [] | - |
| stepLoading | 是否分级加载 | boolean | false | - |
| showBorder | 是否显示顶栏边框 | boolean | true | - |
| headHeight | 顶栏高度，单位 rpx | number/string | 88 | - |
| text | 顶部默认提示文本 | string | 请选择 | - |
| activeColor | 选中项颜色 | string | - | - |
| height | 内容高度，单位 rpx | number/string | 600 | - |
| background | 内容颜色 | string | #FFFFFF | - |
| checkMarkColor | 对号颜色 | string | - | - |
| imgWidth | 图片宽度 | number/string | 48 | - |
| imgHeight | 图片高度 | number/string | 48 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中某一项时触发（用于分级加载） | `{ layer, index, ...item }` |
| complete | 选择完成时触发 | `{ result, value, text, src }` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| reset | 重置选择 | - |
| setRequestData | 设置下一级数据（分级加载时使用） | `(data, layer)` |
| end | 结束选择（无子级数据时调用） | `(layer)` |
