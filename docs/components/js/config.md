# Config 全局配置

`yr-ui-config` 用于组件属性的全局配置，可统一设置组件的默认属性，优先级：`全局配置文件 props < 直接设置组件 props`。

## 配置说明

配置文件路径：`components/yr-ui/yr-ui-config/index.js`。

支持配置的组件包括：`yr-ui-button`、`yr-ui-icon`、`yr-ui-text`、`yr-ui-input`、`yr-ui-list-cell`、`yr-ui-section`、`yr-ui-white-space`、`yr-ui-wing-blank`、`yr-ui-number` 等。

## 示例代码

```javascript
const fuiConfig = {
  // 组件名称，小驼峰命名
  fuiButton: {
    height: '96rpx',
    size: 32,
    radius: '16rpx'
  },
  fuiIcon: {
    size: 64,
    unit: 'rpx'
  },
  // ... 其他组件配置
  color: {
    primary: '#465CFF',
    success: '#09BE4F',
    // ...
  }
}

export default fuiConfig
```

## 全局方法

`yr-ui-config` 中还挂载了一些全局方法以供组件内部使用：

| 方法名 | 说明 |
| --- | --- |
| app.rpx2px(value) | rpx 转 px |
| app.toast(text, icon) | 消息提示 |
| app.modal(title, content, callback, ...) | 模态框 |
| app.href(url, isMain) | 页面跳转 |
