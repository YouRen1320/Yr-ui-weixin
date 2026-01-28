# Input 输入框

输入框组件，增强了原生 input 组件，内置常用布局样式，支持标签、清除按钮、双向绑定等功能。

## 基础使用

```html
<yr-ui-input placeholder="请输入用户名"></yr-ui-input>
<yr-ui-input label="标题" borderTop placeholder="请输入文本"></yr-ui-input>
```

## 密码框

```html
<yr-ui-input placeholder="请输入密码" password="{{password}}">
  <yr-ui-icon name="{{password?'invisible':'visible'}}" color="#B2B2B2" bindclick="change"></yr-ui-icon>
</yr-ui-input>
```

## 带清除按钮与双向绑定

```html
<yr-ui-input label="标题" clearable model:value="{{text}}"></yr-ui-input>
```

## 必填项与禁用状态

```html
<yr-ui-input required label="标题" placeholder="必填项"></yr-ui-input>
<yr-ui-input disabled label="标题" placeholder="禁用状态"></yr-ui-input>
```

## 右侧按钮或左侧图标

```html
<!-- 右侧按钮 -->
<yr-ui-input label="验证码" placeholder="请输入验证码">
  <yr-ui-button type="gray" width="200rpx" height="64rpx" size="{{28}}" text="获取验证码"></yr-ui-button>
</yr-ui-input>

<!-- 左侧图标 -->
<yr-ui-input placeholder="请输入手机号">
  <view class="yr-ui-left__icon" slot="left">
    <yr-ui-icon name="mobile" color="#333"></yr-ui-icon>
  </view>
</yr-ui-input>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| required | 是否为必填项 | boolean | false | - |
| label | 左侧标题 | string | - | - |
| clearable | 是否显示清除按钮 | boolean | false | - |
| focus | 获取焦点 | boolean | false | - |
| placeholder | 占位文本 | string | - | - |
| name | 输入框名称 | string | - | - |
| value | 输入框值 | string | - | - |
| type | 输入类型 | string | text | text, digit, number, idcard |
| password | 是否为密码输入 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| readonly | 是否只读 | boolean | false | - |
| maxlength | 最大输入长度 | number | 140 | - |
| size | 字体大小，单位 rpx | number | 0 (默认32) | - |
| color | 字体颜色 | string | #333 | - |
| inputBorder | 是否显示 input 边框 | boolean | false | - |
| isFillet | 是否显示圆角 | boolean | false | - |
| radius | 自定义圆角值 | number | 8 | - |
| borderTop | 是否显示上边框 | boolean | false | - |
| borderBottom | 是否显示下边框 | boolean | true | - |
| borderColor | 边框颜色 | string | - | - |
| trim | 是否自动去除两端空格 | boolean | true | - |
| textAlign | 文本对齐方式 | string | left | left, center, right |
| backgroundColor | 背景颜色 | string | #FFFFFF | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入框内容发生变化时触发 | `value` |
| focus | 输入框聚焦时触发 | `detail` |
| blur | 输入框失去焦点时触发 | `detail` |
| confirm | 点击完成按钮时触发 | `detail` |
| click | 点击输入框时触发（当 disabled=true 时不会触发） | `{ name: string }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 输入框右侧内容（例如按钮、图标） |
| left | 输入框左侧内容（例如图标） |
