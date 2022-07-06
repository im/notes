---
title: Homebrew介绍和使用
date: 2022-07-05
tags:
  - macos 
 
---



Homebrew是一款Mac OS平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。
援引 [官方](https://links.jianshu.com/go?to=http%3A%2F%2Fbrew.sh%2F) 的一句话：又提示缺少套件啦？别担心，Homebrew 随时守候。Homebrew —— OS X 不可或缺的套件管理器。

<!--more-->




```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```



```bash
$ cd `brew --prefix`
$ rm -rf Cellar
$ brew prune
$ rm `git ls-files`
$ rm -r Library/Homebrew Library/Aliases Library/Formula Library/Contributions
$ rm -rf .git
$ rm -rf ~/Library/Caches/Homebrew
```


* 安装任意包
$ brew install <packageName>

* 示例：安装node
$ brew install node

* 卸载任意包
$ brew uninstall <packageName>

* 示例：卸载git
$ brew uninstall git

* 查询可用包
$ brew search <packageName>

* 查看已安装包列表
$ brew list

* 查看任意包信息
$ brew info <packageName>

* 更新Homebrew
$ brew update

* 查看Homebrew版本
$ brew -v

* Homebrew帮助信息
$ brew -h



在Mac OS X 10.11系统以后，/usr/local/等系统目录下的文件读写是需要系统root权限的，以往的Homebrew安装如果没有指定安装路径，会默认安装在这些需要系统root用户读写权限的目录下，导致有些指令需要添加sudo前缀来执行，比如升级Homebrew需要：
```bash
$ sudo brew update
```
如果你不想每次都使用sudo指令，你有两种方法可以选择:
1. 对/usr/local 目录下的文件读写进行root用户授权
```bash
$ sudo chown -R $USER /usr/local
```

2. 示例：
```bash
$ sudo chown -R gaojun /usr/local
```

3. （推荐）安装Homebrew时对安装路径进行指定，直接安装在不需要系统root用户授权就可以自由读写的目录下
```bash
<install path> -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```


