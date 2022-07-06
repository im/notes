(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{458:function(a,s,t){"use strict";t.r(s);var r=t(18),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"恢复修改过的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复修改过的文件"}},[a._v("#")]),a._v(" 恢复修改过的文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("file_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"获取远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支"}},[a._v("#")]),a._v(" 获取远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout --track origin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("branch_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[a._v("#")]),a._v(" 查看分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看远程分支")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch -r\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看本地和远程分支")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch -a\n")])])]),t("h3",{attrs:{id:"本地分支关联远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地分支关联远程分支"}},[a._v("#")]),a._v(" 本地分支关联远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch --set-upstream-to"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("origin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("branch_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("branch_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"合并某一次提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并某一次提交"}},[a._v("#")]),a._v(" 合并某一次提交")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("commit_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"查看最近3条更新日志-并且简单显示修改的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看最近3条更新日志-并且简单显示修改的文件"}},[a._v("#")]),a._v(" 查看最近3条更新日志，并且简单显示修改的文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看最近3条更新日志，并且简单显示修改的文件 ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log -3 -—stat\n")])])]),t("h3",{attrs:{id:"命令行看提交记录图形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行看提交记录图形"}},[a._v("#")]),a._v(" 命令行看提交记录图形")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log --oneline --graph \n")])])]),t("h3",{attrs:{id:"查看指定提交的内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看指定提交的内容"}},[a._v("#")]),a._v(" 查看指定提交的内容")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" show "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("commit_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -—stat\n")])])]),t("h3",{attrs:{id:"恢复修改过的文件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#恢复修改过的文件-2"}},[a._v("#")]),a._v(" 恢复修改过的文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" chekout "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("file_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"本地分支推送到远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地分支推送到远程分支"}},[a._v("#")]),a._v(" 本地分支推送到远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push -—set-upstream origin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("branch_nam"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"合并某一次提交到指定分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并某一次提交到指定分支"}},[a._v("#")]),a._v(" 合并某一次提交到指定分支")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("* 获取此次提交的commit_id \n* 切换到需要合并的分支 \n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("commit_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h3",{attrs:{id:"远程分支覆盖本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程分支覆盖本地分支"}},[a._v("#")]),a._v(" 远程分支覆盖本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch -—all // fetch所有分支上的内容，也可以选择只备份一部分内容  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset -—hard origin/master // 重置本地分支（这里master要修改为对应的分支名）  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull \n")])])]),t("h3",{attrs:{id:"clone-远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone-远程仓库"}},[a._v("#")]),a._v(" clone 远程仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone ssh://git@github.com:im/im.github.io.git\n")])])]),t("h3",{attrs:{id:"初始化本地-git-仓库-新建仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化本地-git-仓库-新建仓库"}},[a._v("#")]),a._v(" 初始化本地 git 仓库（新建仓库）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n")])])]),t("h3",{attrs:{id:"查看当前版本状态-是否修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前版本状态-是否修改"}},[a._v("#")]),a._v(" 查看当前版本状态（是否修改）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" status\n")])])]),t("h3",{attrs:{id:"显示所有未添加至-index-的变更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示所有未添加至-index-的变更"}},[a._v("#")]),a._v(" 显示所有未添加至 index 的变更")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v("\n")])])]),t("h3",{attrs:{id:"比较与上一个版本的差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#比较与上一个版本的差异"}},[a._v("#")]),a._v(" 比较与上一个版本的差异")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" HEAD^ / HEAD -- ./lib\n")])])]),t("h3",{attrs:{id:"增加更改过的文件至-index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加更改过的文件至-index"}},[a._v("#")]),a._v(" 增加更改过的文件至 index")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" / "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" * "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("h3",{attrs:{id:"提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[a._v("#")]),a._v(" 提交")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m ‘xxx’\n")])])]),t("h3",{attrs:{id:"合并上一次提交-用于反复修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并上一次提交-用于反复修改"}},[a._v("#")]),a._v(" 合并上一次提交（用于反复修改）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -amend -m ‘xxx’\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" 和 commit 合为一步\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -am ‘xxx’\n")])])]),t("h3",{attrs:{id:"显示日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示日志"}},[a._v("#")]),a._v(" 显示日志")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log\n")])])]),t("h3",{attrs:{id:"显示某个提交的详细内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示某个提交的详细内容"}},[a._v("#")]),a._v(" 显示某个提交的详细内容")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" show "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"在每一行显示-commit-号-提交者-最早提交日期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在每一行显示-commit-号-提交者-最早提交日期"}},[a._v("#")]),a._v(" 在每一行显示 commit 号,提交者,最早提交日期")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" blame "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"显示本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示本地分支"}},[a._v("#")]),a._v(" 显示本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch\n")])])]),t("h3",{attrs:{id:"切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[a._v("#")]),a._v(" 切换分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"新建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[a._v("#")]),a._v(" 新建分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("new-branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"创建新分支跟踪远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建新分支跟踪远程分支"}},[a._v("#")]),a._v(" 创建新分支跟踪远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch --track "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("new"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"删除本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除本地分支"}},[a._v("#")]),a._v(" 删除本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"给当前分支打标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给当前分支打标签"}},[a._v("#")]),a._v(" 给当前分支打标签")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" tag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("tag-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"列出远程分支详细信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列出远程分支详细信息"}},[a._v("#")]),a._v(" 列出远程分支详细信息")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote -v\n")])])]),t("h3",{attrs:{id:"显示某个分支信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示某个分支信息"}},[a._v("#")]),a._v(" 显示某个分支信息")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote show "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"添加一个新的远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加一个新的远程仓库"}},[a._v("#")]),a._v(" 添加一个新的远程仓库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("url"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"获取远程分支-但不更新本地分支-另需-merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支-但不更新本地分支-另需-merge"}},[a._v("#")]),a._v(" 获取远程分支，但不更新本地分支，另需 merge")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" fetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"获取远程分支-并更新本地分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程分支-并更新本地分支"}},[a._v("#")]),a._v(" 获取远程分支，并更新本地分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"推送本地更新到远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送本地更新到远程分支"}},[a._v("#")]),a._v(" 推送本地更新到远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"删除一个远程分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除一个远程分支"}},[a._v("#")]),a._v(" 删除一个远程分支")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --delete "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"推送本地标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送本地标签"}},[a._v("#")]),a._v(" 推送本地标签")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push --tags\n")])])]),t("h3",{attrs:{id:"合并分支到当前分支-存在两个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支到当前分支-存在两个"}},[a._v("#")]),a._v(" 合并分支到当前分支，存在两个")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"合并分支到当前分支-存在一个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支到当前分支-存在一个"}},[a._v("#")]),a._v(" 合并分支到当前分支，存在一个")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"回到执行-rebase-之前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回到执行-rebase-之前"}},[a._v("#")]),a._v(" 回到执行 rebase 之前")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase --abort 解决矛盾后继续执行 rebase  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" rebase --continue 使用 mergetool 解决冲突\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" mergetool\n")])])]),t("h3",{attrs:{id:"使用冲突文件解决冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用冲突文件解决冲突"}},[a._v("#")]),a._v(" 使用冲突文件解决冲突")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("resolve-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("resolved-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"将当前版本重置为-head-用于-merge-失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将当前版本重置为-head-用于-merge-失败"}},[a._v("#")]),a._v(" 将当前版本重置为 HEAD（用于 merge 失败）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard HEAD\n")])])]),t("h3",{attrs:{id:"将当前版本重置至某一个提交状态-慎用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将当前版本重置至某一个提交状态-慎用"}},[a._v("#")]),a._v(" 将当前版本重置至某一个提交状态（慎用！）")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"将当前版本重置至某一个提交状态-代码不变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将当前版本重置至某一个提交状态-代码不变"}},[a._v("#")]),a._v(" 将当前版本重置至某一个提交状态，代码不变")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"重置至某一状态-保留版本库中不同的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置至某一状态-保留版本库中不同的文件"}},[a._v("#")]),a._v(" 重置至某一状态，保留版本库中不同的文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --merge "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"重置至某一状态-重置变化的文件-代码改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重置至某一状态-重置变化的文件-代码改变"}},[a._v("#")]),a._v(" 重置至某一状态，重置变化的文件，代码改变")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --keep "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"丢弃本地更改信息并将其存入特定文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#丢弃本地更改信息并将其存入特定文件"}},[a._v("#")]),a._v(" 丢弃本地更改信息并将其存入特定文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout HEAD "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h3",{attrs:{id:"撤销提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#撤销提交"}},[a._v("#")]),a._v(" 撤销提交")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" revert "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("commit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);