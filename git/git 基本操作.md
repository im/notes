

# git 基本操作

* 创建SSH Key

```bash
ssh-keygen -t rsa -C "tangxiaomimail@163.com"
cd ~/.ssh
cat id_rsa.pub
```

如果一切顺利的话，可以在用户主目录里找到 .ssh 目录，里面有 `id_rsa` 和  `id_rsa.pub` 两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人.

* 本地添加

```bash
git remote add origin git@github.com:im/demo.git
```

* 推送到远程库

```bash
git push -u origin master
```

`由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。`

* 修改远程仓库地址

```bash
# 第一种
git remote origin set-url '要替换的url'

# 第二种
git remote rm origin
git remote add origin '要替换的url'

# 第三种
直接修改config文件
```

* 直接修改config文件将一个分支完全覆盖另一个分支

```bash
git push origin 覆盖分支:被覆盖分支 -f
# 将master分支覆盖dev分支
git push origin master:dev -f
```

* 查看未推送(git push)到远程代码库的(git commit)提交

```bash
# 查看到未传送到远程代码库的提交次数
git status

# 查看到未传送到远程代码库的提交描述/说明
git cherry -v

# 查看到未传送到远程代码库的提交详情
git log master ^origin/master
```

* 远程代码覆盖本地

```
git fetch --all
git reset --hard origin/master
```

* 全局配置

```bash
git config --global user.name "tangxiaomi"
git config --global user.email "tangxiaomimail@163.com"
```

* 非全局配置 `删除 --global`

```bash
git config  user.name "tangxiaomi"
git config  user.email "tangxiaomimail@163.com"
```

* 查看配置

```bash
git config --global user.name
git config --global user.email
```

* 取消全局配置

```bash
git config --global --unset user.name
git config --global --unset user.email

git config --global user.name    #(查看)全局配置账户是否已经移除
git config --global user.email   #(查看)全局配置邮箱是否已经移除
```

* git 合并某个提交commit到指定的分支上

`有时候我们希望只合并某个分支上的某次修改commit到指定的分支上.那么就可以使用cherry-pick命令来操作了.`

```bash
git log  # 查看提交的信息,记住commit id.

git checkout # 要修改的分支

git cherry-pick # 某个commit id, 把某个commit id的提交合并到当前分支.
```

* 创建分支

```bash
git checkout -b dev # 创建dev分支，然后切换到dev分支

# 上面这一条命令相当于底下这两条
$ git branch dev # 创建分支dev
$ git checkout dev # 切换到dev分支
```

* 关联分支

```bash
git branch --set-upstream-to=origin/dev # 将本地分支跟远程分支关联起来
```

* 查看分支

```bash
git branch
```

* 合并分支

```bash
git merge dev
```

* 删除分支

```bash
git branch -d dev
```

### 远程仓库版本回退方法

> `如果你在本地做了错误提交, 需要还原`  

* 找到要回退的版本的commit id

```bash
git reflog
```

* 回退版本

```bash
git reset --hard `commit id`
```

`如果你的错误提交已经推送到自己的远程分支了，那么就需要回滚远程分支了.`

* 回退本地分支

```bash
git reflog
git reset --hard `commit id`
```

* 强制推送到远程分支

```bash
git push -f
```

> 注意：本地分支回滚后，版本将落后远程分支，必须使用强制推送覆盖远程分支，否则无法推送到远程分支  
`由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。`

* 查看最近三条更新日志，并且简单显示修改的文件

```bash
git log -3 --stat
```

* 查看某一次提交的内容

```bash
git show [commit_id] --stat
```

* 恢复修改的文件

```bash
git checkout file_name
```
