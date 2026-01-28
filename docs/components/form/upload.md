# Upload 图片上传

图片上传组件，支持单图/多图上传、自动/手动上传、预览、删除等。

## 基础使用

```html
<!-- 自动上传 -->
<yr-ui-upload immediate url="https://example.com/upload" bindsuccess="success"></yr-ui-upload>
```

## 手动上传与回显

```html
<yr-ui-upload fileList="{{fileList}}" url="{{url}}" id="upload" bindsuccess="success"></yr-ui-upload>
<yr-ui-button text="开始上传" bindclick="startUpload"></yr-ui-button>
```

```javascript
// startUpload
this.selectComponent('#upload').start();
```

## 限制数量与大小

```html
<!-- max: 最大数量, size: 单张大小限制(MB) -->
<yr-ui-upload max="{{3}}" size="{{2}}" url="{{url}}"></yr-ui-upload>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| url | 上传接口地址 | string | - | - |
| fileList | 默认显示的图片数组 | array | [] | - |
| max | 最大上传数量 | number | 9 | - |
| size | 单图片大小限制 (MB) | number | 4 | - |
| isAdd | 是否显示添加按钮 | boolean | true | - |
| isDel | 是否允许删除 | boolean | true | - |
| immediate | 选择后是否立即上传 | boolean | false | - |
| callUpload | 是否通过 upload 方法自定义上传 | boolean | false | - |
| name | 上传文件的 key | string | file | - |
| header | 请求头 | object | {} | - |
| formData | 额外参数 | object | {} | - |
| width | 图片框宽度 | string/number | 200 | - |
| height | 图片框高度 | string/number | 200 | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| success | 上传成功 | `detail` |
| error | 上传失败 | `detail` |
| complete | 上传结束 | `detail` |
| delete | 删除图片 | `{ index }` |
| preview | 预览图片 | `{ index, urls }` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| start | 开始上传（非 immediate 模式下） | - |
| upload | 用于 callUpload=true 时，传入返回 Promise 的函数 | `(callback, index)` |
