# Poster 海报绘制

海报绘制组件，传入 JSON 数据生成海报。

## 基础使用

```html
<yr-ui-poster id="generator" width="{{560}}" height="{{980}}" bindready="ready"></yr-ui-poster>
```

```javascript
Page({
  ready() {
    // 组件初始化完成
  },
  generate() {
    const poster = this.selectComponent("#generator")
    const posterData = {
      texts: [
        { type: 'text', text: 'Yr-ui', x: 20, y: 50, size: 30, color: '#333' }
      ],
      imgs: [
        { type: 1, imgResource: '', x: 0, y: 0, width: 100, height: 100 }
      ],
      // ... blocks, lines, qrcode
    }
    poster.generatePoster(posterData, (res) => {
      if(res) {
        // res 为生成的海报图片路径
        this.saveImage(res)
      }
    })
  },
  saveImage(path) {
    const poster = this.selectComponent("#generator")
    poster.saveImage(path)
  }
})
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | Number/String | 750 | 画布宽度，单位rpx |
| height | Number/String | 1024 | 画布高度，单位rpx |
| pixelRatio | Number/String | 2 | 像素比率，用于提高清晰度 |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindready | canvas 初始化完成时触发 | - |

## 方法介绍

通过 `this.selectComponent` 获取组件实例后调用。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| generatePoster | 生成海报 | `params` (Object): 海报数据配置<br>`callback` (Function): 回调函数，返回图片路径 |
| saveImage | 保存图片到相册 | `filePath`: 图片路径 |

### params 配置项

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| texts | Array | 文本数组 |
| imgs | Array | 图片数组 |
| blocks | Array | 矩形块数组 |
| lines | Array | 线条数组 |
| qrcode | Array | 二维码数组 |

具体配置细节请参考官方示例或 issue 讨论，通常包含 x, y, width, height, color, size, zIndex 等属性。
