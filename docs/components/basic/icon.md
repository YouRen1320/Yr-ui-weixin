# Icon 图标

Yr-ui 字体图标库，可自行扩展。

## 基础使用

```html
<yr-ui-icon name="icon-name"></yr-ui-icon>
```

## 修改颜色和大小

```html
<yr-ui-icon name="success" color="#09BE4F" :size="64"></yr-ui-icon>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| name | 图标名称 | string | - | - |
| size | 图标大小，单位 rpx | number/string | 0 (默认64) | - |
| unit | 图标单位 | string | rpx | px, rpx |
| color | 图标颜色 | string | - | - |
| fontWeight | 字重 | number/string | normal | - |
| disabled | 是否禁用点击 | boolean | false | - |
| params | 点击事件携带的参数 | number/string | 0 | - |
| customPrefix | 自定义图标前缀 | string | - | - |
| primary | 是否显示为主色调，color为空时有效 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击图标时触发 | `{ params: number/string }` |
