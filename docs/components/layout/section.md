# Section 标题栏

标题栏组件，主要用于文章、列表详情等标题展示。

## 基础使用

```html
<yr-ui-section title="标题"></yr-ui-section>
```

## 带装饰线和描述

```html
<yr-ui-section title="标题" isLine descr="描述信息"></yr-ui-section>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | - | 标题内容 |
| size | Number/String | 32 | 标题字体大小 |
| color | String | #181818 | 标题颜色 |
| fontWeight | Number/String | 600 | 标题粗细 |
| descr | String | - | 描述信息 |
| descrSize | Number/String | 28 | 描述信息字体大小 |
| descrColor | String | #B2B2B2 | 描述信息颜色 |
| descrTop | Number/String | 12 | 描述信息距离标题的间距 |
| isLine | Boolean | false | 是否显示左侧装饰线 |
| lineWidth | String | 2px | 装饰线宽度 |
| lineColor | String | - | 装饰线颜色 |
| lineCap | String | circle | 装饰线端点形状 |
| lineRight | Number/String | 16 | 装饰线距离标题的间距 |
| background | String | transparent | 背景颜色 |
| padding | String | 0 32rpx | 内边距 |
| marginTop | Number/String | 0 | 上外边距 |
| marginBottom | Number/String | 0 | 下外边距 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindclick | 点击组件触发 | `{ title }` |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 默认插槽 (通常不使用，内容由属性控制，但组件开启了 multipleSlots) |
| right | 右侧内容插槽 |
