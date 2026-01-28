# 安装

## 环境要求

- 微信开发者工具：建议使用最新稳定版
- 小程序基础库：建议 2.20.0 及以上

## 安装方式

### 方式一：通过 npm 安装

使用 npm 安装，需要先安装 npm 包，然后构建 npm，[详见微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)。

```bash
# 暂未发布
npm install yr-ui-weixin
```

### 方式二：通过下载代码

通过 [GitHub](https://github.com/yr-ui/yr-ui-weixin) 或者 [yr-ui官网](https://www.yr-ui.cn/) 下载代码，然后将 `components/yr-ui/` 目录拷贝到自己的项目中。

```bash
# GitHub
git clone https://github.com/yr-ui/yr-ui-weixin.git

# 注：会员代码请从官网个人中心订单处下载
```

### 方式三：选择需要的模块引入

下载 yr-ui 的代码，在 `components/yr-ui/` 目录下找到需要的组件拷贝到自己的项目中。

## 目录结构

```text
components/
└── yr-ui/
    ├── yr-ui-button/          # 按钮组件
    │   ├── yr-ui-button.js
    │   ├── yr-ui-button.json
    │   ├── yr-ui-button.wxml
    │   └── yr-ui-button.wxss
    ├── yr-ui-icon/            # 图标组件
    ├── yr-ui-config/          # 全局配置
    └── ...                  # 其他组件
```

## 注意事项

1. 组件路径需要根据实际项目结构调整
2. 部分组件依赖其他组件，请确保相关依赖组件也已引入
3. 建议将整个 `yr-ui` 目录拷贝到项目中使用
