---
title: 修改 hosts
date: 2022-07-21 08:41:41
tags:
  - 操作系统 
  - macos 
 
---


## Windows系统
打开目录：`C:/Windows/System32/drivers/etc/`
找到 hosts 文件，使用管理员模式打开记事本
将 hosts 文件拖到管理员模式下的记事本中，然后在文件尾部添加以下文本：

```
151.101.0.133 raw.githubusercontent.com
```

保存文件（可能还要重启一下计算机？），就解决了。

## Mac OS 系统
打开终端（Terminal），默认位置在 启动台 --> 其它 --> 终端
在终端中，输入以下命令，使用 vim 修改 hosts 文件（会要求输入计算机密码）：

```
sudo vi /etc/hosts
```

确保输入法为英文模式，按一下键盘上的 i 键
使用方向键，将光标移动至文本尾部，然后再文件尾部添加以下文本：

```
151.101.0.133 raw.githubusercontent.com
```

按一下esc，然后输入 `:wq!`,然后回车
关闭终端，问题解决。

