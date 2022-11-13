---
title: Mac怎么刷新DNS缓存
date: 2022-11-13 15:46:22
tags:
  - macos 
 
---


请使用以下“终端”命令来还原 DNS 缓存设置：

```bash
sudo killall -HUP mDNSResponder
```

