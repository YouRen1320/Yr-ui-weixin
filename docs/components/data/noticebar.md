# NoticeBar 通告栏

通告栏组件，用于循环播放重要信息。

## 引入

```json
{
  "usingComponents": {
    "yr-ui-notice-bar": "/components/yr-ui/yr-ui-notice-bar/yr-ui-notice-bar"
  }
}
```

## 代码演示

### 基础用法

```html
<yr-ui-notice-bar content="这是一条通告消息，请注意查看。"></yr-ui-notice-bar>
```

### 滚动播放

```html
<yr-ui-notice-bar 
  content="这是一条很长的通告消息，支持水平滚动播放展示完整内容。" 
  scrollable
  bind:click="onClick"
></yr-ui-notice-bar>
```

### 自定义样式

```html
<yr-ui-notice-bar 
  content="自定义样式的通告栏"
  background="#e8f4ff"
  color="#1890ff"
  size="32"
></yr-ui-notice-bar>
```

### 单行显示

```html
<yr-ui-notice-bar 
  content="这是一条很长的消息，设置单行显示会截断多余内容"
  single
></yr-ui-notice-bar>
```

### 自定义左右图标

```html
<yr-ui-notice-bar content="带图标的通告栏">
  <yr-ui-icon slot="left" name="notification" size="36"></yr-ui-icon>
  <yr-ui-icon slot="right" name="close" size="36" bind:click="closeNotice"></yr-ui-icon>
</yr-ui-notice-bar>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 通告栏高度，单位 rpx | Number/String | `72` |
| content | 通告内容 | String | - |
| size | 文字大小，单位 rpx | Number/String | `28` |
| color | 文字颜色 | String | - |
| bold | 是否加粗 | Boolean | `false` |
| background | 背景颜色 | String | `rgba(255, 43, 43, .05)` |
| padding | 内边距 | String | `0` |
| single | 是否单行显示 | Boolean | `false` |
| scrollable | 是否滚动播放 | Boolean | `false` |
| speed | 滚动速度，单位 px/s | Number/String | `100` |
| activeMode | 滚动动画模式，可选 `backwards` `forwards` | String | `backwards` |
| param | 自定义参数 | Number/String | `0` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击通告栏时触发 | `{ param }` |
| leftClick | 点击左侧图标时触发 | `{ param }` |
| rightClick | 点击右侧图标时触发 | `{ param }` |

## Slots

| 名称 | 说明 |
| --- | --- |
| left | 左侧图标区域 |
| right | 右侧图标区域 |
