---
title: "🔐 Git SSH 配置教程"
date: "2022-05-09"
categories:
  - 技术教程
tags:
  - Git
  - SSH
description: "本教程将介绍如何在 Git 中配置 SSH，并提供常用的 Git SSH 命令。"
---

Git 是一种非常流行的版本控制工具，它允许开发者在不同的机器上协同工作，并且能够追踪项目的变更。如果你想在 Git 中进行安全的通信，那么 SSH 就是你需要的工具之一。

在本教程中，我们将介绍如何在 Git 中配置 SSH。我们将覆盖以下内容：

1. 生成 SSH 密钥对
2. 添加 SSH 密钥到 GitHub 或 GitLab
3. 使用 SSH 连接到远程 Git 仓库
4. 常用的 Git SSH 命令

## 1. 生成 SSH 密钥对

首先，我们需要生成 SSH 密钥对。在终端中使用下面的命令：

```bash
ssh-keygen -t rsa
```

然后命令行会出现以下信息：

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/you/.ssh/id_rsa):
```

这时候你可以在命令行中按一下回车键，这样默认情况下文件名为 `id_rsa`，然后继续回车并设置一个密码（不需要也可以不设置）。

现在你在家目录下会找到一个 `.ssh` 的文件夹，里面会有两个文件： `id_rsa` 和 `id_rsa.pub`。其中，`id_rsa` 是你的私钥，不能泄露；`id_rsa.pub` 是你的公钥，可以告诉 Git 托管服务商。

## 2. 添加 SSH 密钥到 GitHub 或 GitLab

接下来，我们需要将公钥添加到我们的 Git 托管服务商。以 GitHub 为例，进入你的个人设置，找到 SSH and GPG keys 页面，点击 New SSH key，然后将 `id_rsa.pub` 中的内容复制粘贴到 Key 字段中。

现在，你就可以使用 SSH 与 Git 托管服务商进行安全通信了。

## 3. 使用 SSH 连接到远程 Git 仓库

使用 SSH 连接到远程 Git 仓库的方式和使用 HTTPS 一样。只是将 `https://` 替换成 `ssh://`，那么我们可以在命令行中使用以下命令来克隆一个仓库：

```bash
git clone git@github.com:<username>/<repo>.git
```

如果你想推送一个更改到远程仓库，你可以使用以下命令：

```bash
git push origin master
```

以上命令将在 `origin` 中推送 `master` 分支上的代码。你也可以使用其他分支名称。

## 4. 常用的 Git SSH 命令

一些常用的 Git SSH 命令:

- `git clone git@<host>:<username>/<repo>.git` 克隆远程仓库
- `git push origin master` 推送代码到 master 分支
- `git pull` 从远程仓库拉取代码
- `git remote` 显示远程仓库的信息

恭喜你，现在你已经成功地配置了 Git SSH！现在你可以安全地和远程仓库进行交互了。如果你有任何疑问或问题，请在评论区留言。