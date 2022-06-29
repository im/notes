---
title: mac在命令行启动Chrome
date: 2022-06-28
tags:
  - macos
summary: 
comment:
  title: 
---

命令行输入：`open ~/.bash_profile`，回车

在文件中添加如下配置：

```sh
#将"Google\ Chrome"添加到环境变量中
export PATH="/Applications/Google\ Chrome.app/Contents/MacOS":$PATH
#给命令"Google\ Chrome"起别名chrome
alias chrome="Google\ Chrome"
```

命令行输入：`source ~/.bash_profile`回车

在命令行输入 `chrome`，回车，此时就可以打开浏览器
