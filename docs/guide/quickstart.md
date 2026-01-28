# 快速上手

本节将介绍如何在微信小程序中使用 yr-ui 组件库。

## 引入组件

### 方式一：页面级引入

在页面的 `json` 文件中引入组件：

```json
{
  "usingComponents": {
    "yr-ui-button": "/components/yr-ui/yr-ui-button/yr-ui-button"
  }
}
```

### 方式二：全局引入

在根目录 `app.json` 文件中全局引入：

```json
{
  "usingComponents": {
    "yr-ui-button": "components/yr-ui/yr-ui-button/yr-ui-button"
  }
}
```

## 使用组件

引入组件后，可以在页面中直接使用：

```html
<yr-ui-button text="默认按钮"></yr-ui-button>
```

## 示例

### 基础按钮

```html
<yr-ui-button text="主要按钮" type="primary"></yr-ui-button>
<yr-ui-button text="成功按钮" type="success"></yr-ui-button>
<yr-ui-button text="警告按钮" type="warning"></yr-ui-button>
<yr-ui-button text="危险按钮" type="danger"></yr-ui-button>
```

### 朴素按钮

```html
<yr-ui-button text="朴素按钮" type="primary" plain></yr-ui-button>
```

### 禁用按钮

```html
<yr-ui-button text="禁用按钮" disabled></yr-ui-button>
```
