# git

查看最近3条更新日志，并且简单显示修改的文件 

```bash

# 查看最近3条更新日志，并且简单显示修改的文件 
git log -3 -—stat

```

查看指定提交的内容 

```bash
git show [commit_id] -—stat
```

恢复修改过的文件 

```bash
git chekout [file_name]
```

本地分支推送到远程分支 

```bash
git push -—set-upstream origin [branch_nam]
```

将远程分支拉到本地 

```bash
git checkout —track origin/branch_name
```

合并某一次提交到指定分支 

* 获取此次提交的commit_id 

* 切换到需要合并的分支 


```bash
git cherry-pick [commit_id]
```

远程分支覆盖本地分支 

```bash
git fetch -—all // fetch所有分支上的内容，也可以选择只备份一部分内容  
git reset -—hard origin/master // 重置本地分支（这里master要修改为对应的分支名）  
git pull 
```
