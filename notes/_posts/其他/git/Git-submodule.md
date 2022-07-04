---
title: Git submodule
date: 2021-12-01
tags:
  - 其他 
  - git 
 
---



```bash
git submodule add -b [指定分支] [仓库地址] [路径]

example:
git submodule add -b icarus https://github.com/im/hexo-theme.git themes/icarus
```

命令执行完成，会在当前工程根路径下生成一个名为 `.gitmodules` 的文件，其中记录了子模块的信息。


```bash
[submodule "themes/icarus"]
    path = themes/icarus
    url = https://github.com/im/hexo-theme.git
    branch = icarus
```


```bash
git submodule update
```


`submodule` 的删除稍微麻烦点：首先，要在 `.gitmodules` 文件中删除相应配置信息。然后，执行 `git rm –cached` 命令将子模块所在的文件从 `git` 中删除。


```bash
git submodule update --init --recursive
```


```bash
git submodule foreach git status
```


```bash
git submodule update --remote
```


