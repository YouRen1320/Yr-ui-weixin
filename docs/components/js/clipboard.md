# Clipboard 复制文本

复制文本工具，主要针对 H5 做兼容，小程序端封装了 `wx.setClipboardData`。

## 基础使用

```javascript
import $yrUi from "@/components/yr-ui/yr-ui-clipboard/index"

// ...
$yrUi.getClipboardData("需要复制的文本", (res) => {
  if (res) {
    wx.showToast({
      title: '复制成功',
      icon: 'none'
    })
  } else {
    // 复制失败
  }
})
```

## 方法介绍

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| getClipboardData | 复制文本到剪贴板 | `data` (String): 需要复制的文本<br>`callback` (Function): 回调函数，参数为 boolean (true: 成功, false: 失败) |
