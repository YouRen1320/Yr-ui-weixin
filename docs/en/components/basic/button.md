# Button

Button component, supports custom size, color, shape, and other common styles. It not only retains all the functions of the WeChat Mini Program native Button, but also provides rich extensions.

## Basic Usage

```html
<yr-ui-button text="Default Button"></yr-ui-button>
<yr-ui-button type="success">success</yr-ui-button>
<yr-ui-button type="warning">warning</yr-ui-button>
<yr-ui-button type="danger">danger</yr-ui-button>
<yr-ui-button type="purple">purple</yr-ui-button>
<yr-ui-button type="link" color="#465CFF">Link</yr-ui-button>
```

## Disabled State

```html
<yr-ui-button disabled>Disabled</yr-ui-button>
<yr-ui-button disabled loading>Disabled</yr-ui-button>
<yr-ui-button disabled disabledBackground="#F8F8F8" disabledColor="#CCCCCC">Disabled</yr-ui-button>
```

## Button Shape

```html
<!-- Square -->
<yr-ui-button radius="0">Square Button</yr-ui-button>
<!-- Round -->
<yr-ui-button radius="96rpx">Round Button</yr-ui-button>
```

## Button Size

```html
<yr-ui-button btn-size="medium">medium</yr-ui-button>
<yr-ui-button type="warning" btn-size="small">small</yr-ui-button>
<yr-ui-button type="danger" btn-size="mini">mini</yr-ui-button>
```

## Custom Style

```html
<!-- Plain Button -->
<yr-ui-button plain color="#465CFF" borderColor="#465CFF">Default Size</yr-ui-button>
<!-- Custom Width, Height and Font Size -->
<yr-ui-button type="purple" width="224rpx" height="84rpx" :size="28">Small Button</yr-ui-button>
<!-- Gradient Button -->
<yr-ui-button background="linear-gradient(300deg, #6831FF 0%, #465CFF 100%)" border-width="0">Gradient Button</yr-ui-button>
```

## API

### Props

| Property | Description | Type | Default | Options |
| --- | --- | --- | --- | --- |
| type | Style type | string | primary | success, warning, danger, link, purple, gray |
| background | Button background color, overrides `type` if provided | string | - | - |
| text | Button displayed text | string | - | - |
| color | Button font color | string | #fff | - |
| disabledBackground | Button background color when disabled | string | - | - |
| disabledColor | Button font color when disabled | string | - | - |
| borderWidth | Border width | string | 1px | - |
| borderColor | Border color | string | - | - |
| btnSize | Button size, higher priority than width and height | string | - | medium, small, mini |
| width | Width | string | 100% | - |
| height | Height | string | - | - |
| size | Font size, unit rpx | number/string | 0 | - |
| bold | Whether to bold | boolean | false | - |
| margin | Margin | string | 0 | - |
| radius | Border radius | string | - | - |
| plain | Whether to be plain | boolean | false | - |
| disabled | Whether to disable | boolean | false | - |
| loading | Whether to show loading | boolean | false | - |
| formType | Used for form component, click will trigger form-type submit/reset event respectively | string | - | submit, reset |
| openType | WeChat open capability | string | - | contact, share, getPhoneNumber, getUserInfo, launchApp, openSetting, feedback, chooseAvatar, agreePrivacyAuthorization, getRealtimePhoneNumber |
| appParameter | Parameters passed to APP when opening APP, valid when open-type=launchApp | string | - | - |
| hoverStopPropagation | Specify whether to prevent the ancestor node of this node from appearing in the click state | boolean | false | - |
| lang | Specify the language of the returned user information, zh_CN Simplified Chinese, zh_TW Traditional Chinese, en English | string | en | - |
| sessionFrom | Session source, valid when open-type="contact" | string | - | - |
| sendMessageTitle | Message card title in the session, valid when open-type="contact" | string | - | - |
| sendMessagePath | Message card click jump mini program path in the session, valid when open-type="contact" | string | - | - |
| sendMessageImg | Message card image in the session, valid when open-type="contact" | string | - | - |
| showMessageCard | Whether to display the message card in the session. Set this parameter to true, the user entering the customer service session will display the "Mini Program to send" prompt in the lower right corner, clicking it can quickly send the mini program message, valid when open-type="contact" | boolean | false | - |
| phoneNumberNoQuotaToast | Whether to call mobile number quick verification, valid when open-type="getphonenumber" | boolean | true | - |
| index | Index value, returned in click event | number/string | 0 | - |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| click | Triggered when button is clicked | `{ index: number }` |
| getuserinfo | When the user clicks the button, the obtained user information appears, the detail data of the callback is consistent with wx.getUserInfo return, valid when open-type="getUserInfo" | `detail` |
| contact | Customer service message callback, valid when open-type="contact" | `detail` |
| getphonenumber | Get user mobile number callback, valid when open-type="getPhoneNumber" | `detail` |
| error | Callback when an error occurs when using ability, valid when open-type="launchApp" | `detail` |
| opensetting | Callback after opening the authorization setting page, valid when open-type="openSetting" | `detail` |
| chooseavatar | Callback after the user chooses an avatar, valid when open-type="chooseAvatar" | `detail` |
| launchapp | Callback when opening APP successfully, valid when open-type="launchApp" | `detail` |
| agreeprivacyauthorization | User agrees to privacy agreement event callback, valid when open-type="agreePrivacyAuthorization" | `detail` |
| getrealtimephonenumber | Mobile number real-time verification callback, valid when open-type="getRealtimePhoneNumber" | `detail` |

### Slots

| Slot Name | Description |
| --- | --- |
| default | Button content, invalid when `text` property is set |
