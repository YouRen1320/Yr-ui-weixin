# Textarea 多行输入框

多行输入框组件，支持自适应高度、字数统计、必填校验等功能。

## 基础使用

```html
<yr-ui-textarea placeholder="请输入内容"></yr-ui-textarea>
```

## 带标题与必填

```html
<yr-ui-textarea label="标题" required placeholder="请输入内容"></yr-ui-textarea>
```

## 字数统计与双向绑定

```html
<yr-ui-textarea isCounter placeholder="请输入内容" model:value="{{text}}"></yr-ui-textarea>
```

## 带边框与圆角

```html
<view class="yr-ui-textarea__box">
  <yr-ui-textarea textareaBorder radius="{{24}}" border-color="#FFB703" background-color="#f8f8f8" placeholder="请输入内容"></yr-ui-textarea>
</view>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| required | 是否为必填项 | boolean | false | - |
| label | 左侧标题 | string | - | - |
| autoHeight | 是否自动增高 | boolean | false | - |
| placeholder | 占位文本 | string | - | - |
| value | 输入框值 | string | - | - |
| disabled | 是否禁用 | boolean | false | - |
| maxlength | 最大输入长度 | number | 140 | - |
| cursorSpacing | 光标与键盘的距离 | number | 0 | - |
| showConfirmBar | 是否显示键盘上方带有”完成“按钮那一栏 | boolean | true | - |
| height | 输入框高度 | string | 200rpx | - |
| minHeight | 最小高度 | string | 30rpx | - |
| flexStart | 标题与输入框是否顶端对齐 | boolean | false | - |
| size | 字体大小，单位 rpx | number | 32 | - |
| color | 字体颜色 | string | #333 | - |
| textareaBorder | 是否显示 textarea 边框 | boolean | false | - |
| borderTop | 是否显示上边框 | boolean | true | - |
| borderBottom | 是否显示下边框 | boolean | true | - |
| radius | 圆角值 | number/string | 0 | - |
| trim | 是否自动去除两端空格 | boolean | true | - |
| isCounter | 是否显示字数统计 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入框内容发生变化时触发 | `value` |
| focus | 输入框聚焦时触发 | `detail` |
| blur | 输入框失去焦点时触发 | `detail` |
| confirm | 点击完成时触发 | `detail` |
| linechange | 行数变化时触发 | `detail` |
