# CSS 基础样式

yr-ui 提供了一套基础的 CSS 样式库 `yr-ui-css`，包含了常用的布局、文字、颜色、边框等实用类名。

文件路径：`components/yr-ui/yr-ui-css/yr-ui.wxss`。

## 使用方式

在 `app.wxss` 中引入：

```css
@import './components/yr-ui/yr-ui-css/yr-ui.wxss';
```

## 常用类名

### 文字颜色

| 类名 | 说明 |
| --- | --- |
| .fs-color__primary | 主色 |
| .fs-color__success | 成功色 |
| .fs-color__warning | 警告色 |
| .fs-color__danger | 危险色 |
| .fs-color__title | 标题色 #181818 |
| .fs-color__section | 正文色 #333333 |
| .fs-color__subtitle | 副标题色 #7F7F7F |
| .fs-color__label | 标签色 #B2B2B2 |

### 字体大小

| 类名 | 说明 |
| --- | --- |
| .fs-size__24 ... .fs-size__64 | 24rpx 至 64rpx |
| .fs-size__h1 | 44rpx (font-weight: 500) |
| .fs-size__h2 | 36rpx (font-weight: 500) |
| .fs-size__h3 | 32rpx |

### 字体粗细

| 类名 | 说明 |
| --- | --- |
| .fs-weight__normal | 400 |
| .fs-weight__500 | 500 |
| .fs-weight__bold | bold |

### 文本对齐

| 类名 | 说明 |
| --- | --- |
| .fs-align__left | 左对齐 |
| .fs-align__center | 居中对齐 |
| .fs-align__right | 右对齐 |

### 边距 (Margin)

| 类名 | 说明 |
| --- | --- |
| .fs-m0 ... .fs-m30 | margin: 0 ~ 30rpx |
| .fs-mt0 ... .fs-mt30 | margin-top |
| .fs-mr0 ... .fs-mr30 | margin-right |
| .fs-mb0 ... .fs-mb30 | margin-bottom |
| .fs-ml0 ... .fs-ml30 | margin-left |
| .fs-mx0 ... .fs-mx30 | margin-left & margin-right |
| .fs-my0 ... .fs-my30 | margin-top & margin-bottom |

### 其他

| 类名 | 说明 |
| --- | --- |
| .fs-safe__area | 底部安全区域 |
| .fs-full | width: 100% |
| .fs-disabled | opacity: 0.5 |
| .fs-cell__thin | 0.5px 细边线 (bottom) |
