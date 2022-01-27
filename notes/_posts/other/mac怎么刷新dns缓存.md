---
title: Mac怎么刷新DNS缓存
date: 2022-01-26
tags:
summary: 
comment:
  title: 
---


请使用以下 “终端” 命令来还原 DNS 缓存设置：

```sh
sudo killall -HUP mDNSResponder
```


