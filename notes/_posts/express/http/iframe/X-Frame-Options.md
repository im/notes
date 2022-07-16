---
title: X-Frame-Options
date: 2022-07-16 09:27:03
tags:
  - express 
  - http 
  - iframe 
 
---


[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options)

X-Frame-Options 有三个值:

* DENY
表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。

* SAMEORIGIN
表示该页面可以在相同域名页面的 frame 中展示。

* ALLOW-FROM uri
表示该页面可以在指定来源的 frame 中展示。

如果设置为 DENY，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为 SAMEORIGIN，那么页面就可以在同域名页面的 frame 中嵌套。

## express 配置
```js
const helmet = require('helmet');
const app = express();
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }))
```

或者使用：

```js
const frameguard = require('frameguard')
app.use(frameguard({ action: 'SAMEORIGIN' }))
```


> 使用 `<meta>` 标签来设置 X-Frame-Options 是无效的！例如 `<meta http-equiv="X-Frame-Options" content="deny">` 没有任何效果。不要这样用！只有当像下面示例那样设置 HTTP 头 X-Frame-Options 才会生效。

