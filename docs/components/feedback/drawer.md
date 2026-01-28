# Drawer 抽屉

抽屉式的导航面板，从屏幕边缘滑出。

## 引入

```json
{
  "usingComponents": {
    "yr-ui-drawer": "/components/yr-ui/yr-ui-drawer/yr-ui-drawer"
  }
}
```

## 代码演示

### 基础用法

从右侧打开抽屉：

```html
<yr-ui-button text="打开抽屉" bind:click="openDrawer"></yr-ui-button>

<yr-ui-drawer show="{{show}}" bind:close="closeDrawer">
  <view class="drawer-content">
    <view>抽屉内容</view>
  </view>
</yr-ui-drawer>
```

```js
Page({
  data: {
    show: false
  },
  openDrawer() {
    this.setData({ show: true })
  },
  closeDrawer() {
    this.setData({ show: false })
  }
})
```

### 左侧打开

```html
<yr-ui-drawer show="{{show}}" direction="left" bind:close="closeDrawer">
  <view class="drawer-content">左侧抽屉</view>
</yr-ui-drawer>
```

### 自定义宽度和圆角

```html
<yr-ui-drawer 
  show="{{show}}" 
  radius="16" 
  bind:close="closeDrawer"
>
  <view class="drawer-content" style="width: 500rpx;">
    带圆角的抽屉
  </view>
</yr-ui-drawer>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示抽屉 | Boolean | `false` |
| direction | 抽屉打开方向，可选 `left` `right` | String | `right` |
| background | 抽屉背景颜色 | String | `#fff` |
| zIndex | z-index 层级 | Number/String | `996` |
| maskClosable | 点击遮罩是否可关闭 | Boolean | `true` |
| maskBackground | 遮罩背景颜色 | String | `rgba(0,0,0,.6)` |
| radius | 圆角值（左侧打开时为右侧圆角，右侧打开时为左侧圆角） | String/Number | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭抽屉时触发 | - |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 抽屉内容 |
