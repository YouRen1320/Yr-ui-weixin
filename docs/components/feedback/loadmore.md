# LoadMore 加载更多

上拉加载更多状态显示。

## 基础使用

```html
<yr-ui-loadmore state="{{state}}"></yr-ui-loadmore>
```

## 自定义样式

```html
<yr-ui-loadmore 
  state="{{state}}" 
  activeColor="#FFB703" 
  color="#FFB703" 
  iconColor="rgba(255, 183, 3, .2)">
</yr-ui-loadmore>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| height | 高度 | number | 100 | - |
| state | 状态 | number | 2 | 1:上拉加载, 2:正在加载, 3:没有更多 |
| initText | 状态1文字 | string | 上拉加载 | - |
| text | 状态2文字 | string | 正在加载... | - |
| noneText | 状态3文字 | string | 没有更多了 | - |
| color | 文字颜色 | string | #7F7F7F | - |
| activeColor | 加载图标高亮颜色 | string | - | - |
| direction | 排列方向 | string | row | row, col |
