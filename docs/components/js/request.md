# Request 网络请求

基于 `wx.request` 封装的网络请求库，支持拦截器、取消请求、全局配置等功能。

文件路径：`components/yr-ui/yr-ui-request/index.js`。

## 基础使用

在 `app.js` 或需要的地方引入并挂载。

```javascript
// app.js
import http from './components/yr-ui/yr-ui-request/index.js'

// 初始化配置
http.create({
  host: 'https://api.example.com',
  header: {
    'content-type': 'application/json'
  }
})

// 挂载到 wx 对象
wx.http = http
```

### 发起请求

```javascript
// GET
wx.http.get('/api/user/info', {
  data: { id: 1 }
}).then(res => {
  console.log(res)
})

// POST
wx.http.post('/api/user/update', {
  data: { name: 'yr-ui' },
  showLoading: true // 显示 loading
}).then(res => {
  console.log(res)
})
```

## 拦截器

```javascript
// 请求拦截
wx.http.interceptors.request.use((config) => {
  // 添加 token
  config.header.Authorization = 'Bearer xxx'
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
wx.http.interceptors.response.use((response) => {
  // 统一处理响应逻辑
  if (response.statusCode === 200) {
    return response.data
  }
  return Promise.reject(response)
}, (err) => {
  return Promise.reject(err)
})
```

## API

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| create(config) | 初始化实例配置 | `config`: 全局配置对象 |
| get(url, config) | 发起 GET 请求 | `url`: 接口地址, `config`: 请求配置 |
| post(url, config) | 发起 POST 请求 | `url`: 接口地址, `config`: 请求配置 |
| request(config) | 发起万能请求 | `config`: 包含 url, method 等 |
| all(requests) | 并发请求 | `requests`: Promise 数组 |
| abort(cancelToken) | 取消请求 | `cancelToken`: 请求时传入的 cancelToken 标识 |

### config 配置项

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| host | String | - | 接口域名 |
| url | String | - | 接口路径 |
| method | String | GET | 请求方法 |
| data | Object | {} | 请求参数 |
| header | Object | {} | 请求头 |
| timeout | Number | - | 超时时间 |
| showLoading | Boolean | false | 是否显示 loading |
| loadingText | String | '请稍候...' | loading 文本 |
| brief | Boolean | false | 是否只返回 data 数据 (resolve(res.data)) |
| cancelToken | String | - | 取消请求的标识 |
