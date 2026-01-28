# Checkbox 复选框

复选框组件，用于多项选择。

## 基础使用

```html
<yr-ui-checkbox-group name="checkbox" model:value="{{vals}}" bindchange="change">
  <yr-ui-label>
    <view class="yr-ui-align__center">
      <yr-ui-checkbox value="1"></yr-ui-checkbox>
      <text class="yr-ui-text">选中</text>
    </view>
  </yr-ui-label>
  <yr-ui-label>
    <view class="yr-ui-align__center">
      <yr-ui-checkbox value="2"></yr-ui-checkbox>
      <text class="yr-ui-text">未选中</text>
    </view>
  </yr-ui-label>
</yr-ui-checkbox-group>
```

## 列表布局

```html
<yr-ui-checkbox-group>
  <yr-ui-label wx:for="{{items}}" wx:key="index">
    <yr-ui-list-cell>
      <view class="yr-ui-align__center">
        <yr-ui-checkbox checked="{{item.checked}}" value="{{item.value}}" color="#FFB703"></yr-ui-checkbox>
        <text class="yr-ui-text">{{item.name}}</text>
      </view>
    </yr-ui-list-cell>
  </yr-ui-label>
</yr-ui-checkbox-group>
```

## 仅显示对号

```html
<yr-ui-checkbox isCheckMark checkMarkColor="#FF2B2B" scaleRatio="{{1.3}}" value="1"></yr-ui-checkbox>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 选项值 | string/number | - | - |
| checked | 是否选中 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| color | 选中背景颜色 | string | - | - |
| borderColor | 未选中时边框颜色 | string | #ccc | - |
| borderRadius | 圆角值 | string | 50% | - |
| isCheckMark | 是否只展示对号，无边框背景 | boolean | false | - |
| checkMarkColor | 对号颜色 | string | #fff | - |
| scaleRatio | 缩放比例 | number/string | 1 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中状态变化时触发 | `{ checked: boolean, value: any }` |
