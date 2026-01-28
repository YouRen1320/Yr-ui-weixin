# Lottie 动画

Lottie 动画组件，支持播放 AE 导出的 json 动画。

## 基础使用

```html
<yr-ui-lottie options="{{options}}"></yr-ui-lottie>
```

```js
Page({
  data: {
    options: {
      path: 'https://example.com/animation.json',
      autoplay: true,
      loop: true
    }
  }
})
```

## 动画控制

```html
<yr-ui-lottie options="{{options}}" action="{{action}}"></yr-ui-lottie>
```

```js
this.setData({ action: 'play' }) // play, pause, stop
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 宽度 | number | 600 | - |
| height | 高度 | number | 400 | - |
| options | 动画配置 | object | {} | {path, animationData, autoplay, loop} |
| action | 动画动作 | string | play | play, pause, stop, destroy |
