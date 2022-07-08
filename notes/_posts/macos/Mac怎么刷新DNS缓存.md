---
title: Mac怎么刷新DNS缓存
date: 2022-07-08 10:39:49
tags:
  - macos 
 
---


请使用以下“终端”命令来还原 DNS 缓存设置：

```
sudo killall -HUP mDNSResponder
```

