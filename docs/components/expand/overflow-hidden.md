# OverflowHidden 内容超出隐藏

内容超出隐藏组件，主要用于文本内容超出隐藏功能，支持展开/收起。

## 基础使用

```html
<yr-ui-overflow-hidden text="{{text}}"></yr-ui-overflow-hidden>
```

## 限制行数与展开收起

通过 `rows` 设置显示行数，配合插槽实现自定义展开收起按钮。

```html
<yr-ui-overflow-hidden text="{{text}}" rows="{{isHidden?2:1000}}">
  <view bindtap="change">{{isHidden?'展开':'收起'}}</view>
</yr-ui-overflow-hidden>
```

## 渐变隐藏

设置 `type="2"` 开启渐变隐藏效果。

```html
<yr-ui-overflow-hidden type="2" height="200rpx" gradientColor="#FFFFFF" visible="{{visible}}" text="{{text}}">
</yr-ui-overflow-hidden>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | - | 显示的文本内容 |
| type | String/Number | 1 | 隐藏类型，1：按行数隐藏，2：按高度渐变隐藏 |
| rows | String/Number | 1 | 显示行数 (type=1时生效) |
| width | String | 100% | 容器宽度 |
| height | String | auto | 容器高度 (type=2时需设置具体高度) |
| padding | String | 0 | 容器内边距 |
| align | String | left | 文本对齐方式 |
| background | String | transparent | 背景颜色 |
| size | String/Number | 32 | 字体大小，单位rpx |
| color | String | #333333 | 字体颜色 |
| fontWeight | String/Number | normal | 字体粗细 |
| overflow | String | ellipsis | 文本溢出处理方式 (type=1时生效) |
| gradientColor | String | #FFFFFF | 渐变遮罩颜色 (type=2时生效) |
| visible | Boolean | false | 是否显示渐变遮罩 (type=2时生效) |
| param | String/Number | 0 | 自定义参数，点击回调中返回 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindclick | 点击组件内容时触发 | `{ param }` |
