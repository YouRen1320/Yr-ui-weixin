# DropdownList 下拉菜单 (列表)

下拉菜单列表，作为独立组件调用。

## 基础使用

```html
<yr-ui-dropdown-list 
  id="ddl" 
  options="{{options}}" 
  bindclick="onClick" 
  bindclose="onClose">
</yr-ui-dropdown-list>

<!-- JS中调用 -->
<!-- this.selectComponent('#ddl').show() -->
```

## 样式自定义

```html
<yr-ui-dropdown-list 
  id="ddl"
  height="{{600}}" 
  width="{{400}}" 
  checkboxColor="#FFB703" 
  options="{{options}}" 
  splitLine>
</yr-ui-dropdown-list>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| options | 菜单数据 | array | [] | - |
| height | 高度 | number/string | 0 | - |
| width | 宽度 | number/string | 0 | - |
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
| maskClosable | 点击遮罩是否关闭 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项触发 | `{ index, ...item }` |
| close | 菜单关闭触发 | - |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示下拉菜单 | - |
| close | 关闭下拉菜单 | - |
