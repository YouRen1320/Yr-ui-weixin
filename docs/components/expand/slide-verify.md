# SlideVerify 滑动验证码

滑动验证码组件，行为验证码。

## 基础使用

```html
<yr-ui-slide-verify bindsuccess="success" bindfail="fail"></yr-ui-slide-verify>
```

```javascript
Page({
  success() {
    wx.showToast({ title: '验证通过' })
  },
  fail() {
    wx.showToast({ title: '验证失败', icon: 'none' })
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| range | String/Number | 3 | 允许的误差范围 |
| error | String/Number | 3 | 允许的最大错误次数，超过次数重置目标位置 |
| width | String/Number | 640 | 组件宽度，单位rpx |
| height | String/Number | 80 | 组件高度，单位rpx |
| background | String | #EEEEEE | 背景颜色 |
| activeBgColor | String | - | 激活状态背景颜色 |
| sliderWidth | String/Number | 80 | 滑块宽度，单位rpx |
| sliderBgColor | String | #FFFFFF | 滑块背景颜色 |
| borderColor | String | #EEEEEE | 边框颜色 |
| passColor | String | - | 验证通过时的颜色 |
| size | String/Number | 28 | 提示文字大小，单位rpx |
| color | String | #333333 | 提示文字颜色 |
| activeColor | String | #FFFFFF | 激活状态文字颜色 |
| iconSize | String/Number | 48 | 图标大小，单位rpx |
| arrowColor | String | #B2B2B2 | 箭头颜色 |
| lineColor | String | #B2B2B2 | 线条颜色 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindsuccess | 验证成功时触发 | - |
| bindfail | 验证失败时触发 | - |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| reset | 重置验证码 | - |
