---
title: Mac怎么刷新DNS缓存
date: 2021-12-01
tags:
  - 其他 
  - macos 
 
---


请使用以下“终端”命令来还原 DNS 缓存设置：

```
sudo killall -HUP mDNSResponder
```


