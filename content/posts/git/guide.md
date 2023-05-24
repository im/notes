---
title:  Git 命令手册 📖
date: "2023-05-23"
tags: ["git"]
---

这是一份 Git 命令的快速查找手册，包含了 Git 的常用命令和基本用法。快速找到你需要的命令和用法，让你的 Git 使用更加轻松自如。

## 🚀 初始化

- `git init` : 初始化一个 Git 仓库。
- `git clone <URL>` : 克隆一个远程 Git 仓库。

## 📝 添加与提交

- `git add <file>` : 将文件添加到暂存区。
- `git add .` : 将所有修改添加到暂存区。
- `git commit -m "<message>"` : 提交变更并附上提交信息。
- `git commit -a` : 跳过暂存区，直接提交所有变更。

## 🌿 分支和合并

- `git branch` : 列出当前仓库的所有分支。
- `git branch <branch>` : 创建一个新分支。
- `git checkout <branch>` : 切换到一个分支。
- `git checkout -b <branch>` : 创建一个新的分支并立即切换到该分支。
- `git merge <branch>` : 合并指定分支到当前分支。
- `git merge --no-ff <branch>` : 强制 Git 创建一个新的合并提交，即使当前分支可以通过快进合并到指定分支。

## 🔀 推送与拉取

- `git pull` : 从远程仓库拉取代码。
- `git push` : 将本地分支的更改推送到远程仓库。
- `git push -u <remote> <branch>` : 第一次推送分支时，使用此命令将本地分支推送到远程仓库。
- `git fetch <remote>` : 从远程仓库拉取变更，但不自动合并它们。
- `git fetch --all` : 从远程仓库拉取所有分支的变更，但不自动合并它们。
- `git push <remote> --delete <branch>` : 从远程仓库删除指定分支。

## 🔎 查看日志

- `git log` : 查看提交日志。
- `git log --oneline` : 查看简洁的提交日志。
- `git log --graph --oneline` : 查看提交日志并显示分支合并图。
- `git blame <file>` : 显示指定文件的每一行是由谁添加的。

## ❌ 撤销与修改

- `git checkout <file>` : 用仓库中的文件替换工作目录中的文件，从而撤消最近的修订。
- `git reset HEAD <file>` : 取消已暂存文件。
- `git reset HEAD~` : 返回上一个commit版本，并将文件修改保留在工作目录。
- `git reset <commit>` : 恢复指定提交的状态，同时将工作区和暂存区的修改移回到工作区。
- `git reset --hard` : 取消所有本地修改，并恢复到最近的提交状态。
- `git clean -f` : 删除未被跟踪的文件。

## 🎨 其他命令

- `git status` : 显示工作目录下已提交和未提交的修改。
- `git diff` : 显示工作目录和本地仓库之间的差异。
- `git stash` : 将工作目录中的未提交修改保存到一个栈中。
- `git stash apply` : 恢复最新的stash，并将内容应用于工作区。
- `git stash list` : 显示所有的stash记录。
- `git stash pop` : 删除最新的stash，并将其应用于工作区。
- `git stash drop` : 删除最新的stash。
- `git remote add <name> <url>` : 将一个新远程仓库添加到当前 Git 仓库中。
- `git remote -v` : 显示当前仓库的所有远程仓库及其 URL。
- `git tag` : 列出已经存在的标签。
- `git tag <tagname>` : 新建一个标签，默认为HEAD，用于后续推送到远程仓库。
- `git push origin <tagname>` : 将指定标签推送到远程仓库。
- `git push origin --tags` : 将所有标签推送到远程仓库。
- `git show <commit>` : 显示指定提交的信息。

这就是我们的 Git 命令手册，如果你有任何疑问或建议，请在评论区留言。希望这份手册能为你在 Git 使用中提供帮助！ 🌟