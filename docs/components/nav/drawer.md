# Drawer 抽屉

抽屉式导航。

## 基础使用

```html
<yr-ui-drawer show="{{show}}" bindclose="onClose">
  <view class="content">抽屉内容</view>
</yr-ui-drawer>
```

## 方向与圆角

```html
<yr-ui-drawer show="{{show}}" direction="left" radius="{{24}}"></yr-ui-drawer>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| direction | 弹出方向 | string | right | right, left |
| background | 背景颜色 | string | #fff | - |
| zIndex | 层级 | number | 996 | - |
| maskClosable | 点击遮罩是否关闭 | boolean | true | - |
| radius | 圆角值 | number/string | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭触发 (maskClosable=true) | - |
