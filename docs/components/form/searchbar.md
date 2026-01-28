# SearchBar 搜索栏

搜索栏组件，支持输入搜索、动画效果。

## 引入

```json
{
  "usingComponents": {
    "yr-ui-search-bar": "/components/yr-ui/yr-ui-search-bar/yr-ui-search-bar"
  }
}
```

## 代码演示

### 基础用法

```html
<yr-ui-search-bar 
  bind:search="onSearch" 
  bind:input="onInput"
></yr-ui-search-bar>
```

```js
Page({
  onSearch(e) {
    console.log('搜索:', e.detail.value)
  },
  onInput(e) {
    console.log('输入:', e.detail.value)
  }
})
```

### 自定义样式

```html
<yr-ui-search-bar 
  inputBackground="#f5f5f5"
  placeholder="搜索商品"
  radius="36"
  bind:search="onSearch"
></yr-ui-search-bar>
```

### 禁用状态（跳转搜索页）

```html
<yr-ui-search-bar 
  disabled 
  bind:click="goToSearch"
></yr-ui-search-bar>
```

### 左对齐输入框

```html
<yr-ui-search-bar isLeft></yr-ui-search-bar>
```

### 固定定位

```html
<yr-ui-search-bar fixed></yr-ui-search-bar>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| background | 搜索栏背景颜色 | String | - |
| paddingTb | 上下内边距，单位 rpx | Number/String | `16` |
| paddingLr | 左右内边距，单位 rpx | Number/String | `24` |
| height | 输入框高度，单位 rpx | Number/String | `72` |
| radius | 输入框圆角，单位 rpx | Number/String | `8` |
| color | 输入文字颜色 | String | - |
| inputBackground | 输入框背景颜色 | String | `#fff` |
| focus | 是否自动聚焦 | Boolean | `false` |
| placeholder | 占位提示文字 | String | `请输入搜索关键词` |
| isLeft | placeholder 是否左对齐 | Boolean | `false` |
| value | 输入框的值 | String | - |
| disabled | 是否禁用 | Boolean | `false` |
| cancel | 是否显示取消按钮 | Boolean | `true` |
| cancelText | 取消按钮文字 | String | `取消` |
| cancelColor | 取消按钮颜色 | String | `#7F7F7F` |
| searchText | 搜索按钮文字（传空则隐藏） | String | `搜索` |
| searchColor | 搜索按钮颜色 | String | - |
| showInput | 是否显示输入框 | Boolean | `true` |
| showLabel | 是否显示标签（placeholder居中动画） | Boolean | `true` |
| fixed | 是否固定定位 | Boolean | `false` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| search | 点击搜索按钮时触发 | `{ value }` |
| input | 输入内容变化时触发 | `{ value }` |
| focus | 输入框聚焦时触发 | `detail` |
| blur | 输入框失焦时触发 | `detail` |
| clear | 清空输入内容时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| click | 点击搜索栏时触发（disabled 时可用） | - |

## Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| reset | 重置搜索栏到初始状态 | - |
