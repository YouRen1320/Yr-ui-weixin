# Card 卡片

卡片组件，用于展示信息。

## 基础使用

```html
<yr-ui-card title="标题" tag="标签" src="/icon.png">
  <view class="content">内容区域</view>
</yr-ui-card>
```

## 通栏模式

```html
<yr-ui-card full padding="20rpx">
  <view class="content">通栏内容</view>
</yr-ui-card>
```

## 推荐布局

```html
<yr-ui-card headerLine="{{false}}" showBorder>
  <image src="/banner.png" mode="widthFix"></image>
  <view class="title">标题内容</view>
</yr-ui-card>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| margin | 外边距 | string | 0 32rpx | - |
| full | 是否通栏 | boolean | false | - |
| showBorder | 是否显示边框 (圆角失效) | boolean | false | - |
| radius | 圆角值 | string | 16rpx | - |
| shadow | 阴影样式 | string | ... | - |
| src | 头部图标地址 | string | - | - |
| title | 标题 | string | - | - |
| tag | 标签文字 | string | - | - |
| headerLine | 是否显示头部线条 | boolean | true | - |
| footerLine | 是否显示内容与底部线条 | boolean | false | - |
| padding | 头部 padding | string | 20rpx 20rpx | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击触发 | `{ index }` |
