# RotateVerify 旋转验证码

旋转验证码组件，行为验证码。

## 基础使用

```html
<yr-ui-rotate-verify id="rv" src="{{src}}" bindverify="verify"></yr-ui-rotate-verify>
```

```javascript
Page({
  data: {
    src: '/static/images/component/rotate_img.jpg' // 旋转后的图片
  },
  verify(e) {
    const angle = e.detail.angle
    // 验证逻辑，通常调用后端接口验证角度
    // 前端模拟验证
    /*
    this.selectComponent("#rv").verifyRes(angle, initAngle, range, (res) => {
      if (res) {
         this.selectComponent("#rv").success()
      } else {
         this.selectComponent("#rv").fail()
      }
    })
    */
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | String | - | 图片地址（旋转了初始角度后的图片） |
| imgWidth | String/Number | 240 | 图片宽度，单位rpx |
| width | String/Number | 600 | 验证弹层宽度，单位rpx |
| background | String | #FFFFFF | 弹层背景色 |
| title | String | 安全验证 | 标题文字 |
| color | String | #B2B2B2 | 标题/关闭按钮颜色 |
| size | String/Number | 28 | 标题字体大小，单位rpx |
| descrColor | String | #333333 | 描述文字颜色 |
| descrSize | String/Number | 32 | 描述文字大小，单位rpx |
| borderColor | String | #EEEEEE | 滑动条/滑块边框颜色 |
| sliderBgColor | String | #FFFFFF | 滑块背景颜色 |
| slideColor | String | #333333 | 滑块箭头颜色 |
| passColor | String | #09BE4F | 验证通过颜色 |
| failColor | String | #FF2B2B | 验证失败颜色 |
| zIndex | String/Number | 996 | 层级 |
| maskBgColor | String | rgba(0,0,0,.6) | 遮罩背景色 |
| maskClosable | Boolean | false | 点击遮罩是否可关闭 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindverify | 滑动结束触发校验 | `{ angle: 旋转角度 }` |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| show | 显示验证码 | - |
| closeVerify | 关闭验证码 (重置状态) | - |
| success | 验证成功 | - |
| fail | 验证失败 | - |
| reset | 重置状态 | - |
| verifyRes | 前端辅助验证工具方法 | `angle, initAngle, range, callback` |
