# Theme 主题配置

yr-ui 通过 CSS 变量 (`yr-ui-theme.wxss`) 来管理全局主题色，支持自定义主题。

文件路径：`components/yr-ui/yr-ui-theme/yr-ui-theme.wxss`。

## 使用方式

在 `app.wxss` 中引入：

```css
@import './components/yr-ui/yr-ui-theme/yr-ui-theme.wxss';
```

## 变量列表

你可以通过修改这些变量来全局改变组件库的颜色风格。

### 行为相关颜色

```css
--yr-ui-color-primary: #465CFF;  /* 主色 */
--yr-ui-color-success: #09BE4F;  /* 成功 */
--yr-ui-color-warning: #FFB703;  /* 警告 */
--yr-ui-color-danger: #FF2B2B;   /* 危险 */
--yr-ui-color-purple: #6831FF;   /* 紫色 */
```

### 文字颜色

```css
--yr-ui-color-title: #181818;    /* 标题 */
--yr-ui-color-section: #333333;  /* 正文 */
--yr-ui-color-subtitle: #7F7F7F; /* 副标题 */
--yr-ui-color-label: #B2B2B2;    /* 标签/描述 */
--yr-ui-color-minor: #CCCCCC;    /* 次要/禁用 */
```

### 间距与圆角

```css
--yr-ui-border-radius-sm: 16rpx;
--yr-ui-border-radius-base: 24rpx;
--yr-ui-spacing-row-base: 24rpx;
--yr-ui-spacing-col-base: 16rpx;
```

更多变量请查看源文件。
