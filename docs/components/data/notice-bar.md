# NoticeBar 通告栏

用于循环播放展示消息通告。

## 基础使用

```html
<yr-ui-notice-bar content="这是一条重要通知..."></yr-ui-notice-bar>
```

## 滚动播放

```html
<yr-ui-notice-bar scrollable content="这是一条非常长长长长长长长长的滚动通知..."></yr-ui-notice-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| content | 通告内容 | string | - | - |
| height | 高度 | number | 72 | - |
| size | 字体大小 | number | 28 | - |
| color | 字体颜色 | string | - | - |
| background | 背景颜色 | string | rgba(255, 43, 43, .05) | - |
| scrollable | 是否滚动 | boolean | false | - |
| speed | 滚动速度 | number | 100 | - |
| single | 是否单行显示 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击通告触发 | - |
| leftClick | 点击左侧图标触发 | - |
| rightClick | 点击右侧图标触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| icon | 左侧图标 |
| more | 右侧更多图标 |
