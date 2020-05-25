# git常用命令
**clone 远程仓库**

```bash
git clone ssh://git@github.com:im/im.github.io.git
```

**初始化本地 git 仓库（新建仓库）**

```bash
git init
```

**查看当前版本状态（是否修改）**

```bash
git status
```

**显示所有未添加至 index 的变更**

```bash
git diff
```

**比较与上一个版本的差异**

```bash
git diff HEAD^ / HEAD -- ./lib
```

**增加更改过的文件至 index**

```bash
git add . / add * ...
```

**提交**

```bash
git commit -m ‘xxx’
```

**合并上一次提交（用于反复修改）**

```bash
git commit -amend -m ‘xxx’

add 和 commit 合为一步

git commit -am ‘xxx’
```

**显示日志**

```bash
git log
```

**显示某个提交的详细内容**

```bash
git show <commit>
```

**在每一行显示 commit 号,提交者,最早提交日期**

```bash
git blame <file>
```

**显示本地分支**

```bash
git branch
```

**切换分支**

```bash
git checkout <branch>
```

**新建分支**

```bash
git branch <new-branch>
```

**创建新分支跟踪远程分支**

```bash
git branch --track <new> <remote>
```

**删除本地分支**

```bash
git branch -d <branch>
```

**给当前分支打标签**

```bash
git tag <tag-name>
```

**列出远程分支详细信息**

```bash
git remote -v
```

**显示某个分支信息**

```bash
git remote show <remote>
```

**添加一个新的远程仓库**

```bash
git remote add <remote> <url>
```

**获取远程分支，但不更新本地分支，另需 merge**

```bash
git fetch <remote>
```

**获取远程分支，并更新本地分支**

```bash
git pull <remote> <branch>
```

**推送本地更新到远程分支**

```bash
git push <remote> <branch>
```

**删除一个远程分支**

```bash
git push <remote> --delete <branch>
```

**推送本地标签**

```bash
git push --tags
```

**合并分支到当前分支，存在两个**

```bash
git merge <branch>
```

**合并分支到当前分支，存在一个**

```bash
git rebase <branch>
```

**回到执行 rebase 之前**

```bash
git rebase --abort 解决矛盾后继续执行 rebase  git rebase --continue 使用 mergetool 解决冲突

git mergetool
```

**使用冲突文件解决冲突**

```bash
git add <resolve-file>

git rm <resolved-file>
```

**将当前版本重置为 HEAD（用于 merge 失败）**

```bash
git reset --hard HEAD
```

**将当前版本重置至某一个提交状态（慎用！）**

```bash
git reset --hard <commit>
```

**将当前版本重置至某一个提交状态，代码不变**

```bash
git reset <commit>
```

**重置至某一状态，保留版本库中不同的文件**

```bash
git reset --merge <commit>
```

**重置至某一状态，重置变化的文件，代码改变**

```bash
git reset --keep <commit>
```

**丢弃本地更改信息并将其存入特定文件**

```bash
git checkout HEAD <file>
```

**撤销提交**

```bash
git revert <commit>
```
