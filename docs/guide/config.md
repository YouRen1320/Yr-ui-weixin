# 全局配置

yr-ui 提供了全局配置功能，可以统一设置组件的默认属性值。

## 配置文件

全局配置文件位于 `components/yr-ui/yr-ui-config/index.js`。

## 配置优先级

组件属性优先级如下：

```text
直接设置组件 props > 全局配置文件 props > 组件默认值
```

## 支持配置的组件

目前支持全局配置的组件包括：

- `yr-ui-button` 按钮
- `yr-ui-icon` 图标
- `yr-ui-text` 文本
- `yr-ui-input` 输入框
- `yr-ui-list-cell` 列表项
- `yr-ui-section` 标题栏
- `yr-ui-white-space` 上下间距
- `yr-ui-wing-blank` 左右间距
- `yr-ui-number` 数字

## 主题颜色配置

```js
const color = {
  primary: '#465CFF',   // 主色
  success: '#09BE4F',   // 成功色
  warning: '#FFB703',   // 警告色
  danger: '#FF2B2B',    // 危险色
  purple: '#6831FF',    // 紫色
  link: '#465CFF'       // 链接色
}
```

## 组件配置示例

### Button 按钮

```js
const fuiConfig = {
  fuiButton: {
    height: '96rpx',
    size: 32,
    radius: '16rpx'
  }
}
```

### Icon 图标

```js
const fuiConfig = {
  fuiIcon: {
    size: 64,
    unit: 'rpx'
  }
}
```

### Input 输入框

```js
const fuiConfig = {
  fuiInput: {
    labelSize: 32,
    labelColor: '#333',
    size: 32,
    color: '#333'
  }
}
```

## 全局方法

配置文件还提供了一些全局方法：

### rpx2px

将 rpx 单位转换为 px：

```js
import fuiConfig from '/components/yr-ui/yr-ui-config/index'

const pxValue = fuiConfig.rpx2px(200) // 将 200rpx 转为 px
```

### toast

显示轻提示：

```js
fuiConfig.toast('操作成功')
fuiConfig.toast('操作成功', 'success') // 带图标
```

### modal

显示模态框：

```js
fuiConfig.modal('提示', '确定要删除吗？', (confirm) => {
  if (confirm) {
    // 用户点击确定
  }
}, true) // showCancel = true
```

### href

页面跳转：

```js
fuiConfig.href('/pages/detail/detail') // 普通页面
fuiConfig.href('/pages/index/index', true) // tabBar 页面
```

## 自定义配置

修改 `yr-ui-config/index.js` 文件中的配置项即可自定义全局配置：

```js
const fuiConfig = {
  fuiButton: {
    height: '88rpx',    // 自定义按钮高度
    size: 30,           // 自定义字体大小
    radius: '12rpx'     // 自定义圆角
  },
  // ... 其他配置
}
```
