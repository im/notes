---
title: iframe 报错 Refused to display 'URL' in a frame because it set 'X-Frame-Options' to 'DENY'
date: 2021-05-09
tags:
  - 常见问题 
 
---

# iframe 报错 Refused to display 'URL' in a frame because it set 'X-Frame-Options' to 'DENY'
[https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options)

X-Frame-Options 有三个值:

* DENY
表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。

* SAMEORIGIN
表示该页面可以在相同域名页面的 frame 中展示。

* ALLOW-FROM uri
表示该页面可以在指定来源的 frame 中展示。

换一句话说，如果设置为 DENY，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为 SAMEORIGIN，那么页面就可以在同域名页面的 frame 中嵌套。

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

