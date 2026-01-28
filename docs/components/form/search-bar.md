# SearchBar 搜索栏

搜索栏组件，主要用于搜索场景，支持固定显示、样式自定义等。

## 基础使用

```html
<yr-ui-search-bar bindsearch="search"></yr-ui-search-bar>
```

## 自定义样式

```html
<yr-ui-search-bar background="#ededed" radius="{{36}}" searchColor="#FFB703"></yr-ui-search-bar>
```

## 不显示占位与自定义插槽

```html
<yr-ui-search-bar inputBackground="#fafafa">
  <view class="yr-ui-arrow__left" catchtap="back">
    <yr-ui-icon name="arrowleft" size="{{56}}"></yr-ui-icon>
  </view>
</yr-ui-search-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| placeholder | 占位内容 | string | 请输入搜索关键词 | - |
| value | 搜索框值 | string | - | - |
| focus | 是否获取焦点 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| cancel | 是否显示取消按钮 | boolean | true | - |
| background | 背景颜色 | string | - | - |
| height | 高度，单位 rpx | number | 72 | - |
| radius | 圆角值 | number | 8 | - |
| inputBackground | 输入框背景色 | string | #fff | - |
| isLeft | 占位内容是否左对齐 | boolean | false | - |
| fixed | 是否固定在顶部 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 确定搜索/回车时触发 | `{ value }` |
| input | 输入时触发 | `detail` |
| focus | 聚焦时触发 | `detail` |
| blur | 失焦时触发 | `detail` |
| click | 点击组件时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| clear | 点击清除按钮时触发 | - |
