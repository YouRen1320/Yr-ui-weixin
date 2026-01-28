# Button 按钮

按钮组件，支持自定义大小、颜色、形状等常用样式，不仅保留了微信小程序原生 Button 的所有功能，还进行了丰富的扩展。

## 基础使用

```html
<yr-ui-button text="默认按钮"></yr-ui-button>
<yr-ui-button type="success">success</yr-ui-button>
<yr-ui-button type="warning">warning</yr-ui-button>
<yr-ui-button type="danger">danger</yr-ui-button>
<yr-ui-button type="purple">purple</yr-ui-button>
<yr-ui-button type="link" color="#465CFF">链接 link</yr-ui-button>
```

## 禁用状态

```html
<yr-ui-button disabled>禁用按钮</yr-ui-button>
<yr-ui-button disabled loading>禁用按钮</yr-ui-button>
<yr-ui-button disabled disabledBackground="#F8F8F8" disabledColor="#CCCCCC">禁用按钮</yr-ui-button>
```

## 按钮形状

```html
<!-- 方形 -->
<yr-ui-button radius="0">方形按钮</yr-ui-button>
<!-- 圆形 -->
<yr-ui-button radius="96rpx">圆形按钮</yr-ui-button>
```

## 按钮大小

```html
<yr-ui-button btn-size="medium">medium</yr-ui-button>
<yr-ui-button type="warning" btn-size="small">small</yr-ui-button>
<yr-ui-button type="danger" btn-size="mini">mini</yr-ui-button>
```

## 自定义样式

```html
<!-- 朴素按钮 -->
<yr-ui-button plain color="#465CFF" borderColor="#465CFF">默认大小</yr-ui-button>
<!-- 自定义宽高和字体大小 -->
<yr-ui-button type="purple" width="224rpx" height="84rpx" :size="28">小型按钮</yr-ui-button>
<!-- 渐变按钮 -->
<yr-ui-button background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)" border-width="0">渐变按钮</yr-ui-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 样式类型 | string | primary | success, warning, danger, link, purple, gray |
| background | 按钮背景色，当传入值时 `type` 失效 | string | - | - |
| text | 按钮显示文本 | string | - | - |
| color | 按钮字体颜色 | string | #fff | - |
| disabledBackground | 按钮禁用背景色 | string | - | - |
| disabledColor | 按钮禁用字体颜色 | string | - | - |
| borderWidth | 边框宽度 | string | 1px | - |
| borderColor | 边框颜色 | string | - | - |
| btnSize | 按钮大小，优先级高于 width 和 height | string | - | medium, small, mini |
| width | 宽度 | string | 100% | - |
| height | 高度 | string | - | - |
| size | 字体大小，单位 rpx | number/string | 0 | - |
| bold | 是否加粗 | boolean | false | - |
| margin | 外边距 | string | 0 | - |
| radius | 圆角 | string | - | - |
| plain | 是否镂空 | boolean | false | - |
| disabled | 是否禁用 | boolean | false | - |
| loading | 是否显示 loading | boolean | false | - |
| formType | 用于 form 组件，点击分别会触发 form-type 的 submit/reset 事件 | string | - | submit, reset |
| openType | 微信开放能力 | string | - | contact, share, getPhoneNumber, getUserInfo, launchApp, openSetting, feedback, chooseAvatar, agreePrivacyAuthorization, getRealtimePhoneNumber |
| appParameter | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 | string | - | - |
| hoverStopPropagation | 指定是否阻止本节点的祖先节点出现点击态 | boolean | false | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 | string | en | - |
| sessionFrom | 会话来源，open-type="contact"时有效 | string | - | - |
| sendMessageTitle | 会话内消息卡片标题，open-type="contact"时有效 | string | - | - |
| sendMessagePath | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 | string | - | - |
| sendMessageImg | 会话内消息卡片图片，open-type="contact"时有效 | string | - | - |
| showMessageCard | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 | boolean | false | - |
| phoneNumberNoQuotaToast | 是否调用手机号快速验证，open-type="getphonenumber"时有效 | boolean | true | - |
| index | 索引值，点击事件中会返回 | number/string | 0 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `{ index: number }` |
| getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效 | `detail` |
| contact | 客服消息回调，open-type="contact"时有效 | `detail` |
| getphonenumber | 获取用户手机号回调，open-type="getPhoneNumber"时有效 | `detail` |
| error | 当使用开放能力时，发生错误的回调，open-type="launchApp"时有效 | `detail` |
| opensetting | 在打开授权设置页后回调，open-type="openSetting"时有效 | `detail` |
| chooseavatar | 当用户选择头像之后的回调，open-type="chooseAvatar"时有效 | `detail` |
| launchapp | 打开 APP 成功的回调，open-type="launchApp"时有效 | `detail` |
| agreeprivacyauthorization | 用户同意隐私协议事件回调，open-type="agreePrivacyAuthorization"时有效 | `detail` |
| getrealtimephonenumber | 手机号实时验证回调，open-type="getRealtimePhoneNumber"时有效 | `detail` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容，设置了 `text` 属性时无效 |
