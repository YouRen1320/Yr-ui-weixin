# SwiperDot 轮播图指示点

自定义轮播图指示点组件。

## 基础使用

```html
<swiper bindchange="onChange">...</swiper>
<yr-ui-swiper-dot items="{{items}}" current="{{current}}"></yr-ui-swiper-dot>
```

## 自定义样式

```html
<yr-ui-swiper-dot items="{{items}}" current="{{current}}" styles="{{styles}}"></yr-ui-swiper-dot>
```

```js
Page({
  data: {
    styles: {
      background: 'rgba(255,255,255,.5)',
      activeBackground: '#fff',
      width: 20,
      activeWidth: 40
    }
  }
})
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| items | 数据列表 | array | [] | - |
| type | 类型 | number | 1 | - |
| current | 当前索引 | number | 0 | - |
| styles | 样式对象 | object | {} | {width, activeWidth, background...} |
| field | 数据对象字段名 | string | - | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击指示点触发 | `{ index }` |
