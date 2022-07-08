---
title: git 添加 ssh key
date: 2022-07-08 09:36:26
tags:
  - git 
 
---


##  创建 SSH Key
```bash
ssh-keygen -t rsa -C "tangxiaomiemail@gmail.com"
cd ~/.ssh
cat id_rsa.pub
```

如果一切顺利的话，可以在用户主目录里找到 .ssh 目录，里面有 `id_rsa` 和 `id_rsa.pub` 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人.

## 全局配置
```bash
git config --global user.name "tangxiaomi"
git config --global user.email "tangxiaomiemail@gmail.com"
```

## 非全局配置 `删除 --global`
```bash
git config  user.name "tangxiaomi"
git config  user.email "tangxiaomiemail@gmail.com"
```

## 查看配置
```bash
git config --global user.name
git config --global user.email
```

## 取消全局配置
```bash
git config --global --unset user.name
git config --global --unset user.email

git config --global user.name    #(查看)全局配置账户是否已经移除
git config --global user.email   #(查看)全局配置邮箱是否已经移除
```

