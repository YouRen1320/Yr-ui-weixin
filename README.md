# Yr-ui 快速上手

使用 Yr-ui 前，请确保你已经学习并熟练使用过 [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/) 。

### 安装

#### 方式一 ：通过 npm 安装

<div class="yr-ui-sub__text">使通过 npm 安装，需要先安装npm包，然后构建npm，<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html" target="_blank">详见</a> 。</div>

``` js
npm install yr-ui-weixin
```

#### 方式二 ：通过下载代码

#### 方式三 ：选择需要的模块引入

### 如何使用

按照以下的方式使用组件，以 `Button` 为例，其它组件在对应的文档页查看。

<div class="yr-ui-doc__card">
 <div class="yr-ui-doc__title">第一种：在页面json文件中引入</div>

```json
{
  "usingComponents": {
    "yr-ui-button": "yr-ui-weixin/yr-ui-button/yr-ui-button"
  }
}
```

</div>

<div class="yr-ui-doc__card yr-ui-mbtm">
 <div class="yr-ui-doc__title">第二种：在根目录app.json文件中全局引入</div>

```json
{
  "usingComponents": {
    "yr-ui-button": "yr-ui-weixin/yr-ui-button/yr-ui-button"
  }
}
```

</div>

### 使用组件

引入组件后，可以在 页面 中直接使用组件

``` html
<yr-ui-button text="默认按钮"></yr-ui-button>
```
