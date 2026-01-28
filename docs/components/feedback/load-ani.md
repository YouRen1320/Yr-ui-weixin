# LoadAni 加载动画

扩展的加载动画组件。

## 基础使用

```html
<yr-ui-load-ani></yr-ui-load-ani>
```

## 不同类型

```html
<yr-ui-load-ani type="{{2}}"></yr-ui-load-ani>
<yr-ui-load-ani type="{{3}}"></yr-ui-load-ani>
<yr-ui-load-ani type="{{4}}"></yr-ui-load-ani>
<yr-ui-load-ani type="{{5}}"></yr-ui-load-ani>
```

## 自定义颜色

```html
<yr-ui-load-ani color="#FFB703"></yr-ui-load-ani>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 动画类型 | number | 1 | 1, 2, 3, 4, 5 |
| color | 颜色 | string | - | - |
| isFixed | 是否固定显示 | boolean | false | - |
