# BubbleBox 气泡框

气泡式弹出菜单。

## 基础使用

```html
<yr-ui-bubble-box 
  show="{{show}}" 
  items="{{items}}" 
  position="absolute" 
  bindclick="onClick" 
  bindclose="onClose">
  <view class="trigger">点击显示</view>
</yr-ui-bubble-box>
```

## 自定义样式

```html
<yr-ui-bubble-box 
  show="{{show}}" 
  items="{{items}}" 
  background="#4c4c4c" 
  color="#fff" 
  lineColor="#666" 
  direction="top" 
  bindclick="onClick">
  <view class="trigger">上方显示</view>
</yr-ui-bubble-box>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| items | 菜单列表 | array | [] | - |
| width | 宽度 | number | 300 | - |
| padding | padding值 | array | ['26rpx', '32rpx'] | - |
| position | 定位方式 | string | fixed | fixed, absolute |
| direction | 弹出方向 | string | bottom | top, bottom, left, right |
| background | 背景颜色 | string | #fff | - |
| size | 字体大小 | number | 32 | - |
| color | 字体颜色 | string | #181818 | - |
| triangle | 三角形样式 | object | {} | - |
| isMask | 是否显示遮罩 | boolean | true | - |
| maskClosable | 点击遮罩是否关闭 | boolean | true | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项触发 | `{ index }` |
| close | 关闭触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发元素 |
