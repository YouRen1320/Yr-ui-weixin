# DropdownMenu 下拉菜单

下拉菜单组件，包裹触发元素使用。

## 基础使用

```html
<yr-ui-dropdown-menu options="{{options}}" bindclick="onClick">
  <view class="trigger">点击显示菜单</view>
</yr-ui-dropdown-menu>
```

## 样式自定义

```html
<yr-ui-dropdown-menu 
  options="{{options}}" 
  minWidth="{{300}}" 
  isCheckMark 
  checkmarkColor="#465CFF" 
  selectedColor="#465CFF" 
  direction="up" 
  bindclick="onClick">
  <view class="trigger">向上弹出</view>
</yr-ui-dropdown-menu>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| options | 菜单数据 | array | [] | string[] / object[] |
| maxHeight | 最大高度 | number/string | 400 | - |
| minWidth | 最小宽度 | number/string | 0 | - |
| left | 左定位 | number/string | 0 | - |
| right | 右定位 | number/string | -1 | - |
| background | 背景颜色 | string | #fff | - |
| radius | 圆角值 | number/string | 0 | - |
| padding | padding值 | string | 32rpx | - |
| isCheckbox | 是否复选框模式 | boolean | true | - |
| checkboxColor | 复选框颜色 | string | - | - |
| isCheckMark | 是否打钩模式 | boolean | false | - |
| checkmarkColor | 打钩样式颜色 | string | #fff | - |
| isReverse | 选中项是否反转颜色 | boolean | false | - |
| splitLine | 是否显示分割线 | boolean | false | - |
| selectedColor | 选中文字颜色 | string | - | - |
| isMask | 是否显示遮罩 | boolean | true | - |
| direction | 弹出方向 | string | down | down, up |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项触发 | `{ index, ...item }` |
| close | 菜单关闭触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发下拉菜单的元素 |
