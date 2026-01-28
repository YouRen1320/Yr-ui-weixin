# Utils 工具类

yr-ui 提供了一系列常用的 JS 工具函数。

文件路径：`components/yr-ui/yr-ui-utils/index.js`。

## 使用方式

```javascript
import utils from '@/components/yr-ui/yr-ui-utils/index.js'

const val = utils.trim(' abc ')
```

## 方法列表

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| titleCase | 英文首字母大写 | `value` (String) |
| compressLetter | 压缩连续字母 (aabbc -> 2a2b1c) | `value` (String), `ignoreCase` (Boolean) |
| sleep | 同步等待 (阻塞) | `millisecond` (Number) |
| trim | 去除左右空格 | `value` (String) |
| trimAll | 去除所有空格 | `value` (String) |
| replaceAll | 替换所有匹配字符串 | `text`, `repstr`, `newstr` |
| numberFormatter | 手机号脱敏 (中间4位变*) | `num` (String) |
| moneyFormatter | 金额千分位格式化 | `money` (String/Number) |
| dateFormatter | 日期格式化 | `date`, `format` (e.g. 'y-m-d h:i:s'), `type` (1-4), `isMs` |
| formatTimeAgo | 格式化为多久之前 (如: 1分钟前) | `date`, ... |
| rgbToHex | RGB 转 Hex | `r`, `g`, `b` |
| hexToRGB | Hex 转 RGB | `hex` |
| unique | 生成唯一标识 (随机数) | `n` (位数, 默认6) |
| getUUID | 生成 UUID | - |
| distinctArray | 数组合并去重 | `arr1`, `arr2` |
| getDateTimeSlot | 获取日期时间段 (今天/昨天/本周等) | `type` (1-5) |
| getUrlParam | 获取 URL 参数对象 | `url` |
| debounce | 防抖函数 | `func`, `wait`, `immediate` |
| throttle | 节流函数 | `func`, `wait`, `type` |
| getRandomHexColor | 获取随机十六进制颜色 | - |
| convertCurrency | 人民币转大写 | `money` |
