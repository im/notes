---
title: Mac怎么刷新DNS缓存
date: 2022-07-02
tags:
  - 其他 
 
---

# Mac怎么刷新DNS缓存

命令行输入：`open ~/.bash_profile`，回车

在文件中添加如下配置：

```sh
export PATH="/Applications/Google\ Chrome.app/Contents/MacOS":$PATH
alias chrome="Google\ Chrome"
```

命令行输入：`source ~/.bash_profile`回车

在命令行输入 `chrome`，回车，此时就可以打开浏览器


