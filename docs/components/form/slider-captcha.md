# SliderCaptcha 滑块验证码

滑块拼图验证码组件，用于安全验证。

## 基础使用

```html
<yr-ui-slider-captcha type="{{1}}" src="{{src}}" bindsuccess="success" bindfail="fail"></yr-ui-slider-captcha>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 验证码类型 | number | 1 | 1: 拼图 |
| src | 背景图片地址 | string | - | - |
| width | 宽度，单位 rpx | number/string | 640 | - |
| height | 高度，单位 rpx | number/string | 320 | - |
| title | 标题 | string | 安全验证 | - |
| maskClosable | 点击遮罩是否关闭 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| init | 初始化时触发 | `{ width, height, cutGraphWidth }` |
| verify | 验证时触发(后端验证使用) | `{ x, x1, slipDistance }` |
| success | 验证成功触发 | - |
| fail | 验证失败触发 | `{ times }` |
| close | 关闭弹框触发 | - |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示验证码 | `(refresh)` |
| success | 显示成功状态 | - |
| fail | 显示失败状态 | - |
| reset | 重置 | - |
