---
title: Git 常用命令
date: 2022-07-06
tags:
  - git 
 
---



```bash
git checkout [file_name]
```


```bash
git checkout --track origin/[branch_name]
```


```bash

git branch -r

git branch -a
```


```bash
git branch --set-upstream-to=origin/[branch_name] [branch_name]
```


```bash
git cherry-pick [commit_id]
```


```bash

git log -3 -—stat
```


```bash
git log --oneline --graph 
```


```bash
git show [commit_id] -—stat
```


```bash
git chekout [file_name]
```


```bash
git push -—set-upstream origin [branch_nam]
```



	* 获取此次提交的commit_id 
	* 切换到需要合并的分支 

```bash
git cherry-pick [commit_id]
```


```bash
git fetch -—all // fetch所有分支上的内容，也可以选择只备份一部分内容  
git reset -—hard origin/master // 重置本地分支（这里master要修改为对应的分支名）  
git pull 
```


```bash
git clone ssh://git@github.com:im/im.github.io.git
```


```bash
git init
```


```bash
git status
```


```bash
git diff
```


```bash
git diff HEAD^ / HEAD -- ./lib
```


```bash
git add . / add * ...
```


```bash
git commit -m ‘xxx’
```


```bash
git commit -amend -m ‘xxx’

add 和 commit 合为一步

git commit -am ‘xxx’
```


```bash
git log
```


```bash
git show <commit>
```


```bash
git blame <file>
```


```bash
git branch
```


```bash
git checkout <branch>
```


```bash
git branch <new-branch>
```


```bash
git branch --track <new> <remote>
```


```bash
git branch -d <branch>
```


```bash
git tag <tag-name>
```


```bash
git remote -v
```


```bash
git remote show <remote>
```


```bash
git remote add <remote> <url>
```


```bash
git fetch <remote>
```


```bash
git pull <remote> <branch>
```


```bash
git push <remote> <branch>
```


```bash
git push <remote> --delete <branch>
```


```bash
git push --tags
```


```bash
git merge <branch>
```


```bash
git rebase <branch>
```


```bash
git rebase --abort 解决矛盾后继续执行 rebase  git rebase --continue 使用 mergetool 解决冲突

git mergetool
```


```bash
git add <resolve-file>

git rm <resolved-file>
```


```bash
git reset --hard HEAD
```


```bash
git reset --hard <commit>
```


```bash
git reset <commit>
```


```bash
git reset --merge <commit>
```


```bash
git reset --keep <commit>
```


```bash
git checkout HEAD <file>
```


```bash
git revert <commit>
```


