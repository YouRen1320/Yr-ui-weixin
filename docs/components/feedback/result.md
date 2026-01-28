# Result 结果页

操作结果反馈页。

## 基础使用

```html
<yr-ui-result type="success" title="操作成功" descr="详细描述信息..."></yr-ui-result>
```

## 不同状态

```html
<yr-ui-result type="warning" title="警告提示"></yr-ui-result>
<yr-ui-result type="fail" title="操作失败"></yr-ui-result>
<yr-ui-result type="waiting" title="等待处理"></yr-ui-result>
```

## 自定义插槽内容

```html
<yr-ui-result title="自定义内容">
  <view class="content">...</view>
</yr-ui-result>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | - | success, warning, fail, waiting |
| title | 标题 | string | - | - |
| descr | 描述 | string | - | - |
| paddingTop | 顶部间距 | number | 96 | - |
| iconColor | 图标颜色 | string | #fff | - |
| background | 图标背景色 | string | - | - |
| scaleRatio | 图标缩放比例 | number | 1 | - |
| size | 标题字体大小 | number | 44 | - |
| color | 标题颜色 | string | - | - |
| descrSize | 描述字体大小 | number | 32 | - |
| descrColor | 描述字体颜色 | string | - | - |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义下方内容 |
