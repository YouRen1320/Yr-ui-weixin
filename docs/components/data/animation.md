# Animation 动画

过渡动画组件。

## 基础使用

```html
<yr-ui-animation show="{{show}}" animationType="{{['fade']}}" bindclick="onClick">
  <view class="box">内容</view>
</yr-ui-animation>
```

## 组合动画

```html
<yr-ui-animation show="{{show}}" animationType="{{['fade', 'slide-top']}}">
  <view class="box">内容</view>
</yr-ui-animation>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示 | boolean | false | - |
| animationType | 动画类型 | array | [] | fade, slide-top, slide-right, slide-bottom, slide-left, zoom-in, zoom-out |
| duration | 动画时长(ms) | number | 300 | - |
| styles | 自定义样式 | object | {} | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击触发 | `{ value: boolean }` |
| change | 状态改变触发 | `{ value: boolean }` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| open | 开启动画 | - |
| close | 关闭动画 | - |
