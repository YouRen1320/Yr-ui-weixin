# Alert 警告提示

警告提示，用于页面中展示重要的提示信息。

## 基础使用

```html
<yr-ui-alert title="这是一条提示信息"></yr-ui-alert>
```

## 不同类型

```html
<yr-ui-alert type="success" isLeft title="成功提示"></yr-ui-alert>
<yr-ui-alert type="warn" isLeft title="警告提示"></yr-ui-alert>
<yr-ui-alert type="clear" isLeft title="错误提示"></yr-ui-alert>
```

## 带描述信息

```html
<yr-ui-alert type="info" isLeft title="提示标题" desc="这里是详细描述信息..."></yr-ui-alert>
```

## 可关闭

```html
<yr-ui-alert closable title="可关闭的提示" bindclose="onClose"></yr-ui-alert>
```

## 自定义图标

```html
<yr-ui-alert type="info" isLeft spacing title="自定义图标">
  <yr-ui-icon name="info" size="{{48}}" color="#fff"></yr-ui-icon>
</yr-ui-alert>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 提示类型 | string | - | info, success, warn, waiting, clear |
| background | 背景颜色 | string | - | - |
| padding | padding值 | string | 20rpx 32rpx | - |
| marginTop | margin-top | number | 0 | - |
| marginBottom | margin-bottom | number | 0 | - |
| radius | 圆角 | string | 16rpx | - |
| iconColor | 图标颜色 | string | #fff | - |
| iconSize | 图标大小 | number | 22 | - |
| closable | 是否可关闭 | boolean | false | - |
| closeColor | 关闭图标颜色 | string | #fff | - |
| closeSize | 关闭图标大小 | number | 22 | - |
| isLeft | 是否自定义左侧内容 | boolean | false | - |
| spacing | 是否有间距 (isLeft=true) | boolean | false | - |
| title | 标题 | string | - | - |
| color | 标题颜色 | string | #fff | - |
| size | 标题大小 | string | 14px | - |
| desc | 描述信息 | string | - | - |
| descColor | 描述信息颜色 | string | #fff | - |
| descSize | 描述信息大小 | string | 12px | - |
| single | 描述信息是否单行显隐 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击组件触发 | - |
| close | 关闭组件触发 | - |
| leftClick | 点击左侧内容触发 | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义左侧内容 (isLeft=true) |
