# Steps 步骤条

步骤条组件，展示操作流程。

## 引入

```json
{
  "usingComponents": {
    "yr-ui-steps": "/components/yr-ui/yr-ui-steps/yr-ui-steps"
  }
}
```

## 代码演示

### 基础用法

```html
<yr-ui-steps items="{{steps}}" active="{{1}}"></yr-ui-steps>
```

```js
Page({
  data: {
    steps: [
      { title: '步骤1' },
      { title: '步骤2' },
      { title: '步骤3' }
    ]
  }
})
```

### 带描述

```html
<yr-ui-steps items="{{steps}}" active="{{1}}"></yr-ui-steps>
```

```js
Page({
  data: {
    steps: [
      { title: '步骤1', desc: '描述信息' },
      { title: '步骤2', desc: '描述信息' },
      { title: '步骤3', desc: '描述信息' }
    ]
  }
})
```

### 竖向

```html
<yr-ui-steps items="{{steps}}" active="{{1}}" direction="column"></yr-ui-steps>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 步骤条数据 | Array | `[]` |
| active | 当前步骤 | Number | `0` |
| direction | 方向，可选 `row` `column` | String | `row` |
| activeColor | 激活态颜色 | String | `#5B8FF9` |
| titleKey | 标题 key | String | `title` |
| descKey | 描述 key | String | `desc` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击步骤时触发 | `{ index, item }` |
