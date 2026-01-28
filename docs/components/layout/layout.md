# Layout 栅格布局

24 栅格系统，支持 Flex 布局与响应式布局。

## 基础使用

```html
<yr-ui-row>
  <yr-ui-col span="{{12}}">
    <view class="content">col-12</view>
  </yr-ui-col>
  <yr-ui-col span="{{12}}">
    <view class="content">col-12</view>
  </yr-ui-col>
</yr-ui-row>
```

## 间隔与偏移

```html
<yr-ui-row gutter="{{20}}">
  <yr-ui-col span="{{8}}">
    <view class="content">col-8</view>
  </yr-ui-col>
  <yr-ui-col span="{{8}}" offset="{{8}}">
    <view class="content">col-8 offset-8</view>
  </yr-ui-col>
</yr-ui-row>
```

## Flex 布局

```html
<yr-ui-row isFlex justify="center" align="middle">
  <yr-ui-col span="{{6}}">
    <view class="content">center</view>
  </yr-ui-col>
</yr-ui-row>
```

## 响应式布局

```html
<yr-ui-row>
  <yr-ui-col xs="{{24}}" sm="{{12}}" md="{{8}}" lg="{{6}}" xl="{{4}}">
    <view class="content">responsive</view>
  </yr-ui-col>
</yr-ui-row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| isFlex | 是否使用 Flex 布局 | boolean | false | - |
| justify | 水平排列方式 | string | start | start, end, center, space-around, space-between |
| align | 垂直排列方式 | string | top | top, middle, bottom |
| gutter | 栅格间隔 | number | 0 | - |
| marginTop | margin-top 值 | string | 0 | - |
| marginBottom | margin-bottom 值 | string | 0 | - |

### Col Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| span | 栅格占位格数 (0-24) | number | 24 | - |
| offset | 栅格左侧间隔格数 | number | 0 | - |
| pushLeft | 栅格向右移动格数 | number | -1 | - |
| pullRight | 栅格向左移动格数 | number | -1 | - |
| xs | <768px 响应式配置 | number/object | -1 | - |
| sm | ≥768px 响应式配置 | number/object | -1 | - |
| md | ≥992px 响应式配置 | number/object | -1 | - |
| lg | ≥1200px 响应式配置 | number/object | -1 | - |
| xl | ≥1920px 响应式配置 | number/object | -1 | - |
