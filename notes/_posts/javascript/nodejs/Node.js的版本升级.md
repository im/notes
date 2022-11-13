---
title: Node.js的版本升级
date: 2022-11-13 15:46:38
tags:
  - javascript 
  - nodejs 
 
---



## 查看本地node版本
```js
node -v
```

## 安装n模块
```js
npm install -g n（mac需要在命令的前面加上sudo）
```

## 升级到指定的版本/最新版本，升级之前，可以执行n ls（查看可以升级的版本）
```js
n 8.10.1（版本号）
或者你可以安装最新的稳定版本
n stable
```

## 安装完成以后，检查一下是否升级成功
```js
node -v
```


