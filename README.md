# Yr-ui Weixin

<p align="center">
  <img src="https://img.shields.io/npm/v/yr-ui-weixin.svg" alt="npm version">
  <img src="https://img.shields.io/npm/l/yr-ui-weixin.svg" alt="license">
</p>

<p align="center">
  <a href="#english">English</a> | <a href="#chinese">简体中文</a>
</p>

<span id="english"></span>

## English

Yr-ui is a beautiful, flexible, and efficient UI component library for WeChat Mini Programs. It provides a rich set of components to help developers quickly build high-quality mini-program applications.

### ✨ Features

- **Rich Components**: Includes Basic, Form, Navigation, Feedback, Layout, and more.
- **Beautiful Design**: Follows modern UI design specifications with outstanding visual effects.
- **Out of the Box**: Easy to use with detailed documentation and examples.
- **NPM Support**: Supports npm installation for easy dependency management.

### 📦 Installation

#### Method 1: Install via npm (Recommended)

Run the following command in your mini-program project root:

```bash
npm install yr-ui-weixin
```

After installation, click **Tools -> Build npm** in the WeChat Developer Tools.

#### Method 2: Download Source Code

Download the project code directly and copy the `components/yr-ui` directory to your project's `components` directory.

### 🚀 Quick Start

#### 1. Global Configuration (Optional)

Import global configuration in `app.js` (some components rely on this):

```javascript
import yrUi from 'yr-ui-weixin/yr-ui-app.js'
// Or if you copied the source code
// import yrUi from './components/yr-ui/common/yr-ui-app.js'

wx.yrUi = yrUi
```

#### 2. Import Components

You can import components in `app.json` (Global) or `page.json` (Page).

**Example: Import Button Component**

```json
{
  "usingComponents": {
    "yr-ui-button": "yr-ui-weixin/yr-ui-button/yr-ui-button"
  }
}
```

#### 3. Use Components

Use the component directly in your WXML file:

```html
<yr-ui-button text="Default Button" bindclick="handleClick"></yr-ui-button>
```

#### 4. Style Configuration

Yr-ui uses CSS variables to control theme colors. You can override them in `app.wxss`:

```css
page {
  --yr-ui-primary: #465CFF;    /* Primary Color */
  --yr-ui-success: #09BE4F;    /* Success Color */
  --yr-ui-warning: #FFB703;    /* Warning Color */
  --yr-ui-danger: #FF2B2B;     /* Danger/Error Color */
}
```

### 📚 Documentation

Detailed documentation: [Yr-ui Docs](https://docs.yr-ui.cn) (Coming Soon)

---

<span id="chinese"></span>

## 简体中文

Yr-ui 是一款美观、灵活、高效的微信小程序 UI 组件库。它提供了丰富的组件，帮助开发者快速构建高品质的小程序应用。

### ✨ 特性

- **丰富的组件**：包含 基础、表单、导航、操作、布局 等多种类型的组件。
- **美观的设计**：遵循现代 UI 设计规范，视觉效果出众。
- **开箱即用**：简单易用，详细的文档和示例。
- **支持 npm**：支持 npm 安装，方便管理依赖。

### 📦 安装

#### 方式一：通过 npm 安装 (推荐)

在你的小程序项目根目录下执行：

```bash
npm install yr-ui-weixin
```

安装完成后，请在开发者工具中点击 **Tools (工具) -> Build npm (构建 npm)**。

#### 方式二：下载源码

直接下载本项目代码，将 `components/yr-ui` 目录拷贝到你的项目 `components` 目录下。

### 🚀 快速上手

#### 1. 全局配置 (可选)

在 `app.js` 中引入全局配置（部分组件依赖此配置）：

```javascript
import yrUi from 'yr-ui-weixin/yr-ui-app.js'
// 或者如果是拷贝的源码
// import yrUi from './components/yr-ui/common/yr-ui-app.js'

wx.yrUi = yrUi
```

#### 2. 引入组件

你可以在 `app.json` (全局) 或 `page.json` (页面) 中引入需要的组件。

**示例：引入 Button 按钮组件**

```json
{
  "usingComponents": {
    "yr-ui-button": "yr-ui-weixin/yr-ui-button/yr-ui-button"
  }
}
```

#### 3. 使用组件

在页面的 WXML 文件中直接使用：

```html
<yr-ui-button text="默认按钮" bindclick="handleClick"></yr-ui-button>
```

#### 4. 样式配置

Yr-ui 使用 CSS 变量来控制主题颜色。你可以在 `app.wxss` 中定义全局主题：

```css
page {
  --yr-ui-primary: #465CFF;    /* 主色 */
  --yr-ui-success: #09BE4F;    /* 成功色 */
  --yr-ui-warning: #FFB703;    /* 警告色 */
  --yr-ui-danger: #FF2B2B;     /* 危险/错误色 */
}
```

### 📚 文档

详细文档请参考：[Yr-ui 文档](https://docs.yr-ui.cn) (待上线)

## 📄 License

MIT
