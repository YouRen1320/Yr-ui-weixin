# Grid 宫格

宫格组件，用于展示图标与标题。

## 基础使用

```html
<yr-ui-grid>
  <yr-ui-grid-item wx:for="{{items}}" wx:key="index" index="{{index}}" bindclick="handleClick">
    <view class="content">
      <image src="/icon.png" class="icon"></image>
      <text>Grid</text>
    </view>
  </yr-ui-grid-item>
</yr-ui-grid>
```

## 自定义列数与边框

```html
<yr-ui-grid columns="{{4}}" showBorder="{{false}}">
  <yr-ui-grid-item>...</yr-ui-grid-item>
</yr-ui-grid>
```

## API

### Grid Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| columns | 每行显示个数 | number | 3 | - |
| showBorder | 是否显示边框 | boolean | true | - |
| borderColor | 边框颜色 (nvue有效) | string | #EEEEEE | - |
| square | 是否正方形显示 | boolean | true | - |

### GridItem Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| highlight | 是否有点击效果 | boolean | true | - |
| backgroundColor | 背景颜色 | string | transparent | - |
| index | 索引值 | number | 0 | - |

### Grid Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击宫格项触发 | `{ index }` |

### GridItem Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击宫格项触发 | `{ index }` |
