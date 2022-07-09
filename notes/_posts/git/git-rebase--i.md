---
title: git rebase -i
date: 2022-07-08 09:40:19
tags:
  - git 
 
---



## 变基时有六个命令可用：

* pick
pick只是意味着包括提交。重新进行命令时，重新安排pick命令的顺序会更改提交的顺序。如果选择不包括提交，则应删除整行。

* reword
该reword命令与相似pick，但是使用后，重新设置过程将暂停并为您提供更改提交消息的机会。提交所做的任何更改均不受影响。

* edit
如果您选择edit提交，则将有机会修改提交，这意味着您可以完全添加或更改提交。您还可以进行更多提交，然后再继续进行变基。这使您可以将大型提交拆分为较小的提交，或者删除在提交中所做的错误更改。

* squash
该命令使您可以将两个或多个提交合并为一个提交。提交被压缩到其上方的提交中。Git使您有机会编写描述这两个更改的新提交消息。

* fixup
这类似于squash，但是要合并的提交已丢弃其消息。提交仅合并到其上方的提交中，并且较早提交的消息用于描述这两个更改。

* exec
这使您可以对提交运行任意的Shell命令。

<!--more-->

## 准备
```bash
# 我们初始化一个项目
git init

# 制造一些提交
touch base.txt
git add .
git commit -m "add base"

touch 1.txt
git add .
git commit -m "add 1"

touch 2.txt
git add .
git commit -m "add 2"

touch 3.txt
git add .
git commit -m "add 3"

touch 4.txt
git add .
git commit -m "add 4"

touch 5.txt
git add .
git commit -m "add 5"


## 查看现在的提交
git log
commit a75ed742838ebc1ef1073502623478f73e1ec21f
Author: 
Date:   Wed Mar 4 10:02:51 2020 +0800

    add 5

commit 8b485bb4768b2abf8f6400dcba069f1a650ed5ec
Author: 
Date:   Wed Mar 4 09:59:27 2020 +0800

    add 4

commit 63ce9fb010da550c668aca66758c45fbfad46e2b
Author:
Date:   Wed Mar 4 09:59:04 2020 +0800

    add 3

commit 9cd34c4d42f52cfb40026dae613c8ad29d7cbc66
Author: 
Date:   Wed Mar 4 09:58:45 2020 +0800

    add 2

commit 77bd0eb1a97e1676367ea236c1c47c155eaa8430
Author: 
Date:   Wed Mar 4 09:58:23 2020 +0800

    add 1
```

现在我们已经有了一些，提交了，接下来开始练习

## pick 更改提交顺序、删除提交
pick只是意味着包括提交。重新进行命令时，重新安排pick`命令的顺序会更改提交的顺序。如果选择不包括提交，则应删除整行。

::假定，我们现在要改变提交 5.txt 和 4.txt 的顺序，该怎么操作::

更改涉及到了两次提交，最早提交次数为2（4.txt是倒数第二次提交）

1. 告诉git 我要改变倒数第2次后的提交

```bash
git rebase -i HEAD~2
```

**接着，git给你一个文本，告诉你我知道了，你说的这些可以有以下操作**

下面是执行命令后的样子

```bash
pick 8b485bb add 4
pick a75ed74 add 5

# Rebase 63ce9fb..a75ed74 onto 63ce9fb (2 command(s))
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
~
~
~
```

解释：我们刚刚执行的命令中 HEAD~2代表选择离HEAD最近的两条提交
下面注释的是提示，我们不需要管，只要专注前两行就ok

2. 把 第一行 和 第二行 交换顺序

**小技巧：这个是vi编辑器，首先Esc ，进入命令模式，移动到第一行 按dd,本行就被剪切，pick a75ed74 add 5就变成了第一行，接着按 p刚刚剪切的就成了第二行，快速交换顺序**

不会用vi建议百度篇教程学习一哈

变成下面的样子

```bash
pick a75ed74 add 5
pick 8b485bb add 4
```

接着 Esc,:wq 保存退出
成功！

git log查看，4 和 5 的顺序改变了
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA4MTkzNTQxLTQzOTMucG5n.png](/notes/note_images/DD22777A-951D-4394-B53E-E27B677FD8EF-2755-00001C591C5454CE/0e12e7b7392dec4587cbdef39e16347a.png)

## 假定，我们现在要删除 某一个提交，该怎么操作
我们来删除 add 4 的那条提交

```bash
git rebase -i HEAD~2
```

出现如下

```bash
pick a75ed74 add 5
pick 8b485bb add 4

# Rebase 575fd8b..bb2a77d onto 575fd8b (1 command(s))
# .....略
```

我们删除 第二行

接着 Esc,:wq 保存退出
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA0MTMwLTY1NjExOS5wbmc.png](/notes/note_images/50CEB8D0-A8C3-4CE4-8C76-7DB27CB1EBAD-2755-00001C65D4170AED/3afbb1c129e896b7047ba780f056df89.png)

git log查看，4 和 5 的顺序改变了
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA0MzE2LTc3MzYwMC5wbmc.png](/notes/note_images/97B6E275-34A7-4845-B476-4730E543B677-2755-00001C66D53190C7/eaa99f3f3d9a0ee1f3475cea0ba6b2b8.png)

## record 修改提交消息(提交内容不变)
该reword命令与相似pick，但是使用后，重新设置过程将暂停并为您提供更改提交消息的机会。提交所做的任何更改均不受影响。

**假定，我们现在要 修改某个提交的消息，该怎么操作**
修改一下 add 2 的提交消息

git log 查看 add 2 距离 HEAD 有多少的距离，得：3

```bash
git rebase -i HEAD~3
```

出现如下

```bash
pick 9cd34c4 add 2
pick 63ce9fb add 3
pick 575fd8b add 5

# Rebase 77bd0eb..575fd8b onto 77bd0eb (3 command(s))
# .... 略
```

我们只需要修改 第一行 add 2 ，其余保持不变

```bash
r 9cd34c4 add 2
pick 63ce9fb add 3
pick 575fd8b add 5

# Rebase 77bd0eb..575fd8b onto 77bd0eb (3 command(s))
# .... 略
```

r 是 record简写

接着 Esc,:wq 保存退出

git会说 开始执行，接着弹出一个编辑窗口

```bash
add 2

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Mar 4 09:58:45 2020 +0800
#
# interactive rebase in progress; onto 77bd0eb
# Last command done (1 command done):
#    r 9cd34c4 add 2
# Next commands to do (2 remaining commands):
#    pick 63ce9fb add 3
#    pick 575fd8b add 5
# You are currently editing a commit while rebasing branch 'master' on '77bd0eb'.
#
# Changes to be committed:
#       new file:   2.txt
#
```

我们就可以修改 add 2 了

下面的注释是对当前状态的一些说明

大致是说，上一次执行的命令 是 `r 9cd34c4 add 2`

下面还有两条命令

当前命令改变的committed的文件 是 2.txt 等等

**修改 add 2**

```bash
add 2 ~ new comment
```

接着 Esc,:wq 保存退出

成功
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA1OTEzLTE2Mzk3Ny5wbmc.png](/notes/note_images/C88EBAC2-77A7-4AE9-9EAD-53F5F76306F4-2755-00001C7C65B2151E/28647b388aa269ed77d12aedcc50e588.png)

git log查看, 消息 “add 2” 变为了 “add 2 ~ new comment”
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA4MTkzODEzLTE4OTI4My5wbmc.png](/notes/note_images/A313E83F-B0C1-484F-9775-ADE848006612-2755-00001C8015543A99/111214b3613532476676b2a7f165ab3d.png)


::只要不动pick的 顺序，就代表什么都不做::

## edit修改提交
如果您选择edit提交，则将有机会修改提交，这意味着您可以完全添加或更改提交。您还可以进行更多提交，然后再继续进行变基。这使您可以将大型提交拆分为较小的提交，或者删除在提交中所做的错误更改。

**假定 我想要在两个提交之间 再加提交，怎么办**
假定，我们要在 add 3 和 add 5 之间 添加一条提交

```bash
git rebase -i HEAD~2
```

```bash
pick 6934312 add 3
pick 5ce6dde add 5

# Rebase 7f9d45d..5ce6dde onto 7f9d45d (2 command(s))
# ....
```

修改为

```bash
e 6934312 add 3
pick 5ce6dde add 5
```

接着 Esc,:wq 保存退出

有如下

```bash
$ git rebase -i HEAD~2
Stopped at 6934312135c150bf74bead26e371df1443273ca4... add 3
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue


xxxxxx MINGW32 ~/Desktop/git-demo (master|REBASE-i 1/2)
```

可以看到，我们的master分支多了REBASE-i 1/2

我们尝试做一些修改，给3.txt 增加一些内容，然后提交

```bash
git add 3.txt

git commit -m "edit 3.txt"
[detached HEAD 7262a57] edit 3.txt
 1 file changed, 1 insertion(+)
```

接着，我们继续 rebase

```bash
git rebase --continue
Successfully rebased and updated refs/heads/master.
```

git log 查看，在 add 5 和 add 3 中间 增加了我们刚刚的修改
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTEzMDU2LTczMjkzMS5wbmc.png](/notes/note_images/CE3CC106-3F49-4880-A9A3-AC0D7487B34B-2755-00001C993D10676B/a2cc68868bb16b9106c6d9d84b11c578.png)

**假定 我想要单纯的修改这次提交内容和消息，怎么办**

参照上面的做到这一步，我们选择提交的方式 加一个参数 git commit --amend修改

```bash
git add 3.txt

git commit --amend

# 这样 就不会在多出一次提交
# 本次对 3.txt的修改会记录 到  add 3  这次提交记录中
```

接着结束这次 rebase

```bash
git rebase --continue
Successfully rebased and updated refs/heads/master.
```

## squash合并提交
squash

该命令使您可以将两个或多个提交合并为一个提交。提交被压缩到其上方的提交中。Git使您有机会编写描述这两个更改的新提交消息。

**假定，我想合并某几个提交，怎么办**

如下
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTIzODIyLTY3NTQyMy5wbmc.png](/notes/note_images/A08A71EA-8B00-4810-9340-3FE86FB7701F-2755-00001CA471ACA90E/e25629cc975c91477385843c1b32bd45.png)

我们合并 add 5 和 add 3

```bash
git rebase - i HEAD~2
```

```bash
pick 6934312 add 3
pick 6fa47e4 add 5

# Rebase 7f9d45d..6fa47e4 onto 7f9d45d (2 command(s))
```

修改为

```bash
pick 6934312 add 3
s 6fa47e4 add 5
```

接着 Esc,:wq 保存退出

开始执行变更

然后 在弹出来的编辑框里 写提交信息

```bash
# This is a combination of 2 commits.
# The first commit's message is:

add 3

# This is the 2nd commit message:

add 5

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Mar 4 09:59:04 2020 +0800
#
# interactive rebase in progress; onto 7f9d45d
# Last commands done (2 commands done):
#    pick 6934312 add 3
#    s 6fa47e4 add 5
# No commands remaining.
# You are currently editing a commit while rebasing branch 'master' on '7f9d45d'.
#
# Changes to be committed:
#       new file:   3.txt
#       new file:   5.txt
```

我们可以修改提交消息，默认是把两个消息都合并

接着 Esc,:wq 保存退出

git log查看，合并成功
![aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTI0NjU3LTUwMDk0MC5wbmc.png](/notes/note_images/68AE8D9D-F8FC-4FF0-B3A9-0E0B23C80F57-2755-00001CB127ED3354/581cee4a8fc8fb365468bd1ef6efd619.png)


## fixup合并提交，只保留较早的提交信息
这类似于squash，但是要合并的提交已丢弃其消息。提交仅合并到其上方的提交中，并且较早提交的消息用于描述这两个更改。

最后两次提交

```bash
git rebase -i HEAD~2
```

```bash
pick 7f9d45d add 2 ~ new comment
pick 311adc9 add 3

# Rebase 77bd0eb..311adc9 onto 77bd0eb (2 command(s))
#  ----------------------
# 变更为
# -----------------------

pick 7f9d45d add 2 ~ new comment
f 311adc9 add 3

# 保存
```

## exec 执行任意shell命令
```bash
git rebase -i HEAD~3


# 弹出编辑框
pick 81fe4d0 添加test2.txt和test3.txt
pick 77bd0eb add 1
pick e7c68b8 add 2 ~ new comment

# Rebase 258a059..e7c68b8 onto 258a059 (3 command(s))

# ----------------
# 加一行 命令
# ---------------
x echo "Hello is echo do ......."
pick 81fe4d0 添加test2.txt和test3.txt
pick 77bd0eb add 1
pick e7c68b8 add 2 ~ new comment


## 执行了我们刚刚键入的命令
Executing: echo "Hello is echo do ......."
Hello is echo do .......
Successfully rebased and updated refs/heads/master.

```

其他
```bash
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```

## drop
删除提交
用法与 p,r,e,s,f,x 一致

## 命令写错了怎么办
看提示
```bash
You can fix this with 'git rebase --edit-todo'.
# 用 git rebase --edit--todo  来重新编辑命令
```

