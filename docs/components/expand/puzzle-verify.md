# PuzzleVerify 滑块拼图验证

滑块拼图验证组件，行为验证码。

## 基础使用

```html
<yr-ui-puzzle-verify width="{{width}}" height="{{height}}" src="{{src}}" cutSrc="{{cutSrc}}" x="{{x}}" y="{{y}}" bindverify="verify" id="pvRef"></yr-ui-puzzle-verify>
```

```javascript
Page({
  verify(e) {
    const slipDistance = e.detail.slipDistance // 滑动距离
    // 校验逻辑
    if (Math.abs(slipDistance - this.data.x) < 5) {
      this.selectComponent("#pvRef").success()
    } else {
      this.selectComponent("#pvRef").reset()
    }
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | String | - | 背景图片地址 |
| cutSrc | String | - | 裁剪缺口图片地址（通常与背景图配套） |
| width | String/Number | 300 | 验证码宽度，单位rpx |
| height | String/Number | 150 | 验证码高度，单位rpx |
| x | String/Number | 10 | 缺口位置 X 坐标 |
| y | String/Number | 10 | 缺口位置 Y 坐标 |
| background | String | #FFFFFF | 验证框背景颜色 |
| title | String | 安全验证 | 标题文字 |
| color | String | #B2B2B2 | 标题字体颜色 / 关闭按钮颜色 |
| size | String/Number | 28 | 标题字体大小，单位rpx |
| descrColor | String | #333333 | 描述文字颜色 |
| descrSize | String/Number | 36 | 描述文字大小，单位rpx |
| sliderBgColor | String | - | 滑块背景颜色 |
| slideColor | String | #FFFFFF | 滑块内部图标/文字颜色 |
| zIndex | String/Number | 996 | 层级 |
| maskBgColor | String | rgba(0,0,0,.6) | 遮罩背景色 |
| maskClosable | Boolean | false | 点击遮罩是否可关闭 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindinit | 组件初始化完成触发 | `{ cutGraphWidth: 切割图宽度 }` |
| bindverify | 滑动结束触发校验 | `{ slipDistance: 滑动距离 }` |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示验证码 | - |
| closeVerify | 关闭验证码 (重置状态) | - |
| success | 验证成功 | - |
| reset | 验证失败重置 | - |
