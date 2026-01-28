# Badge 徽章

徽章组件，可自定义颜色、已读未读状态、红点等。

## 基础使用

```html
<!-- 基础用法 -->
<yr-ui-badge value="1"></yr-ui-badge>
<yr-ui-badge type="success" value="2"></yr-ui-badge>
<yr-ui-badge type="warning" value="3"></yr-ui-badge>
<yr-ui-badge type="danger" value="4"></yr-ui-badge>
<yr-ui-badge type="purple" value="5"></yr-ui-badge>

<!-- 自定义颜色 -->
<yr-ui-badge value="6" background="#eee" color="#333"></yr-ui-badge>

<!-- 红点模式 -->
<yr-ui-badge dot></yr-ui-badge>
```

## 绝对定位

通常用于图标右上角的消息提示。

```html
<view class="yr-ui-item__img-box">
  <image class="yr-ui-item__img" src="/static/images/common/icon_tabbar_3x.png" mode="widthFix"></image>
  <!-- max属性控制最大显示数值 -->
  <yr-ui-badge absolute type="danger" value="{{200}}" max="{{99}}"></yr-ui-badge>
</view>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 显示内容 | string/number | - | - |
| max | 最大值，超过最大值显示 `${max}+`，仅当 value 为数字时有效 | number/string | -1 | - |
| type | 样式类型 | string | primary | success, warning, danger, purple, white |
| background | 背景色，如果设置背景则 type 失效 | string | - | - |
| color | 字体颜色 | string | #FFFFFF | - |
| dot | 是否显示为圆点 | boolean | false | - |
| marginTop | margin-top 值，单位 rpx | string/number | 0 | - |
| marginLeft | margin-left 值，单位 rpx | string/number | 0 | - |
| marginRight | margin-right 值，单位 rpx | string/number | 0 | - |
| absolute | 是否绝对定位 | boolean | false | - |
| top | 绝对定位 top 值 | string | -8rpx | - |
| right | 绝对定位 right 值 | string | -18rpx | - |
| scaleRatio | 缩放比例 | number | 1 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击 badge 时触发 | - |
