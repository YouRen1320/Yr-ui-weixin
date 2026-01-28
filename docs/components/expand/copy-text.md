# CopyText 长按复制

长按复制组件，用于复制关键文本信息，可扩展其他功能按钮。

## 基础使用

`yr-ui-copy-text` 组件默认长按文本即可触发简单的复制提示或操作菜单。

```html
<yr-ui-copy-text text="长按文本复制"></yr-ui-copy-text>
```

## 自定义复制内容

通过 `value` 属性设置实际复制的内容，`text` 仅为显示文本。

```html
<yr-ui-copy-text text="长按文本复制" value="https://doc.yr-ui.cn"></yr-ui-copy-text>
```

## 扩展按钮与菜单方向

支持配置 `buttons` 扩展按钮，以及通过 `direction` 设置菜单弹出方向。

```html
<!-- 扩展按钮 -->
<yr-ui-copy-text text="示例文本" buttons="{{['回复','评论']}}" bindclick="btnClick"></yr-ui-copy-text>

<!-- 菜单方向: top, bottom, left, right -->
<yr-ui-copy-text direction="bottom" text="示例文本"></yr-ui-copy-text>
```

## 属性介绍

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | String | - | 显示的文本内容 |
| value | String | - | 实际复制到剪贴板的内容，不传则使用 text |
| size | String/Number | 28 | 字体大小，单位rpx |
| fontWeight | String/Number | 400 | 字体粗细 |
| color | String | #181818 | 字体颜色 |
| background | String | transparent | 背景颜色 |
| showBtn | Boolean | true | 是否显示默认的“复制”按钮 |
| direction | String | top | 菜单弹出方向，可选值：top, bottom, left, right |
| zIndex | String/Number | 1001 | 菜单层级 z-index |
| removeCopy | Boolean | false | 是否移除默认的“复制”按钮（仅在有 buttons 时有效，若想完全禁用复制功能需自行处理逻辑，此属性主要用于替换默认复制按钮） |
| buttons | Array | [] | 扩展按钮列表，如 `['回复', '评论']` |

## 事件介绍

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| bindcopy | 复制成功时触发 | `{ text: "显示文本", value: "复制内容" }` |
| bindclick | 点击扩展按钮时触发 | `{ index: 按钮索引, text: "按钮文本" }` |
