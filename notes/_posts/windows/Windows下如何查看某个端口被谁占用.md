---
title: Windows下如何查看某个端口被谁占用
date: 2022-07-05
tags:
  - windows 
 
---


开始—->运行—-> `cmd` ，或者是 `window+R` 组合键，调出命令窗口。


```shell
netstat -ano
```


```shell
netstat -aon|findstr "8081"
```


```shell
tasklist|findstr "9088"
```


强制（/F参数）杀死 pid 为 9088 的所有进程包括子进程（/T参数）：

```shell
taskkill /T /F /PID 9088
```


