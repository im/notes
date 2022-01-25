---
title: 发布npm包时遇到的一些坑
date: 2022-01-25
tags:
  - npm
summary: 
comment:
  title: 
---


## 无法发布到私有包

```
npm ERR! code E402
npm ERR! 402 Payment Required - PUT https://registry.npmjs.org/@tangxiaomi%2fcli - You must sign up for private packages
npm ERR! A complete log of this run can be found in:
```

这个当你的包名为@your-name/your-package时才会出现，原因是当包名以@your-name开头时，npm publish 会默认发布为私有包，但是 npm 的私有包需要付费，所以需要添加如下参数进行发布:

```sh
npm publish --access public
```
