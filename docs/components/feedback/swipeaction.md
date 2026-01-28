# SwipeAction 滑动菜单

列表项侧滑菜单。

## 基础使用

```html
<yr-ui-swipeaction-group>
  <yr-ui-swipe-action bindclick="onClick">
    <yr-ui-list-cell>默认菜单按钮</yr-ui-list-cell>
  </yr-ui-swipe-action>
</yr-ui-swipeaction-group>
```

## 自定义菜单

```html
<yr-ui-swipeaction-group>
  <yr-ui-swipe-action buttons="{{buttons}}" bindclick="onClick">
    <yr-ui-list-cell>自定义按钮</yr-ui-list-cell>
  </yr-ui-swipe-action>
</yr-ui-swipeaction-group>

<!-- buttons 格式: [{text: '删除', background: '#FF2B2B'}] -->
```

## 禁止滑动

```html
<yr-ui-swipe-action disabled>...</yr-ui-swipe-action>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| buttons | 菜单按钮 | array | [{text:'删除',background:'#FF2B2B'}] | - |
| size | 字体大小 | number | 32 | - |
| color | 字体颜色 | string | #fff | - |
| show | 是否打开 | boolean | false | - |
| threshold | 滑动阈值 | number | 30 | - |
| disabled | 是否禁用 | boolean | false | - |
| autoClose | 是否自动关闭其他菜单 | boolean | true | - |
| clickClose | 点击按钮是否关闭 | boolean | true | - |
| custom | 是否自定义菜单插槽 | boolean | false | - |
| marginTop | margin-top | number | 0 | - |
| marginBottom | margin-bottom | number | 0 | - |
| param | 自定义参数 | number/string | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单按钮触发 | `{ index, item, param }` |
| change | 状态改变触发 | `{ isOpen, param }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 列表项内容 |
| buttons | 自定义菜单内容 (custom=true) |
