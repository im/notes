(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{461:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("p",[s._v("pick\npick只是意味着包括提交。重新进行命令时，重新安排pick命令的顺序会更改提交的顺序。如果选择不包括提交，则应删除整行。")])]),s._v(" "),t("li",[t("p",[s._v("reword\n该reword命令与相似pick，但是使用后，重新设置过程将暂停并为您提供更改提交消息的机会。提交所做的任何更改均不受影响。")])]),s._v(" "),t("li",[t("p",[s._v("edit\n如果您选择edit提交，则将有机会修改提交，这意味着您可以完全添加或更改提交。您还可以进行更多提交，然后再继续进行变基。这使您可以将大型提交拆分为较小的提交，或者删除在提交中所做的错误更改。")])]),s._v(" "),t("li",[t("p",[s._v("squash\n该命令使您可以将两个或多个提交合并为一个提交。提交被压缩到其上方的提交中。Git使您有机会编写描述这两个更改的新提交消息。")])]),s._v(" "),t("li",[t("p",[s._v("fixup\n这类似于squash，但是要合并的提交已丢弃其消息。提交仅合并到其上方的提交中，并且较早提交的消息用于描述这两个更改。")])]),s._v(" "),t("li",[t("p",[s._v("exec\n这使您可以对提交运行任意的Shell命令。")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" base.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add base"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add 1"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add 2"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add 3"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add 4"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add 5"')]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\ncommit a75ed742838ebc1ef1073502623478f73e1ec21f\nAuthor: \nDate:   Wed Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":02:51 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\ncommit 8b485bb4768b2abf8f6400dcba069f1a650ed5ec\nAuthor: \nDate:   Wed Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 09:59:27 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\ncommit 63ce9fb010da550c668aca66758c45fbfad46e2b\nAuthor:\nDate:   Wed Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 09:59:04 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\ncommit 9cd34c4d42f52cfb40026dae613c8ad29d7cbc66\nAuthor: \nDate:   Wed Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 09:58:45 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\ncommit 77bd0eb1a97e1676367ea236c1c47c155eaa8430\nAuthor: \nDate:   Wed Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" 09:58:23 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),t("p",[s._v("现在我们已经有了一些，提交了，接下来开始练习")]),s._v(" "),t("p",[s._v("pick只是意味着包括提交。重新进行命令时，重新安排pick`命令的顺序会更改提交的顺序。如果选择不包括提交，则应删除整行。")]),s._v(" "),t("p",[s._v("::假定，我们现在要改变提交 5.txt 和 4.txt 的顺序，该怎么操作::")]),s._v(" "),t("p",[s._v("更改涉及到了两次提交，最早提交次数为2（4.txt是倒数第二次提交）")]),s._v(" "),t("ol",[t("li",[s._v("告诉git 我要改变倒数第2次后的提交")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~2\n")])])]),t("p",[t("strong",[s._v("接着，git给你一个文本，告诉你我知道了，你说的这些可以有以下操作")])]),s._v(" "),t("p",[s._v("下面是执行命令后的样子")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick 8b485bb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\npick a75ed74 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n~\n~\n~\n")])])]),t("p",[s._v("解释：我们刚刚执行的命令中 HEAD~2代表选择离HEAD最近的两条提交\n下面注释的是提示，我们不需要管，只要专注前两行就ok")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("把 第一行 和 第二行 交换顺序")])]),s._v(" "),t("p",[t("strong",[s._v("小技巧：这个是vi编辑器，首先Esc ，进入命令模式，移动到第一行 按dd,本行就被剪切，pick a75ed74 add 5就变成了第一行，接着按 p刚刚剪切的就成了第二行，快速交换顺序")])]),s._v(" "),t("p",[s._v("不会用vi建议百度篇教程学习一哈")]),s._v(" "),t("p",[s._v("变成下面的样子")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick a75ed74 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\npick 8b485bb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])])]),t("p",[s._v("接着 Esc,:wq 保存退出\n成功！")]),s._v(" "),t("p",[s._v("git log查看，4 和 5 的顺序改变了\n"),t("img",{attrs:{src:"/notes/note_images/DD22777A-951D-4394-B53E-E27B677FD8EF-2755-00001C591C5454CE/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA4MTkzNTQxLTQzOTMucG5n.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA4MTkzNTQxLTQzOTMucG5n.png"}})]),s._v(" "),t("p",[s._v("我们来删除 add 4 的那条提交")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~2\n")])])]),t("p",[s._v("出现如下")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick a75ed74 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\npick 8b485bb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n\n\n\n")])])]),t("p",[s._v("我们删除 第二行")]),s._v(" "),t("p",[s._v("接着 Esc,:wq 保存退出\n"),t("img",{attrs:{src:"/notes/note_images/50CEB8D0-A8C3-4CE4-8C76-7DB27CB1EBAD-2755-00001C65D4170AED/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA0MTMwLTY1NjExOS5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA0MTMwLTY1NjExOS5wbmc.png"}})]),s._v(" "),t("p",[s._v("git log查看，4 和 5 的顺序改变了\n"),t("img",{attrs:{src:"/notes/note_images/97B6E275-34A7-4845-B476-4730E543B677-2755-00001C66D53190C7/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA0MzE2LTc3MzYwMC5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA0MzE2LTc3MzYwMC5wbmc.png"}})]),s._v(" "),t("p",[s._v("该reword命令与相似pick，但是使用后，重新设置过程将暂停并为您提供更改提交消息的机会。提交所做的任何更改均不受影响。")]),s._v(" "),t("p",[t("strong",[s._v("假定，我们现在要 修改某个提交的消息，该怎么操作")]),s._v("\n修改一下 add 2 的提交消息")]),s._v(" "),t("p",[s._v("git log 查看 add 2 距离 HEAD 有多少的距离，得：3")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\n")])])]),t("p",[s._v("出现如下")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick 9cd34c4 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\npick 63ce9fb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npick 575fd8b "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n\n\n")])])]),t("p",[s._v("我们只需要修改 第一行 add 2 ，其余保持不变")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("r 9cd34c4 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\npick 63ce9fb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npick 575fd8b "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n\n\n")])])]),t("p",[s._v("r 是 record简写")]),s._v(" "),t("p",[s._v("接着 Esc,:wq 保存退出")]),s._v(" "),t("p",[s._v("git会说 开始执行，接着弹出一个编辑窗口")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n我们就可以修改 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 了\n\n下面的注释是对当前状态的一些说明\n\n大致是说，上一次执行的命令 是 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("r 9cd34c4 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n下面还有两条命令\n\n当前命令改变的committed的文件 是 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".txt 等等\n\n**修改 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("**\n\n```bash\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ~ new comment\n")])])]),t("p",[s._v("接着 Esc,:wq 保存退出")]),s._v(" "),t("p",[s._v("成功\n"),t("img",{attrs:{src:"/notes/note_images/C88EBAC2-77A7-4AE9-9EAD-53F5F76306F4-2755-00001C7C65B2151E/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA1OTEzLTE2Mzk3Ny5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTA1OTEzLTE2Mzk3Ny5wbmc.png"}})]),s._v(" "),t("p",[s._v("git log查看, 消息 “add 2” 变为了 “add 2 ~ new comment”\n"),t("img",{attrs:{src:"/notes/note_images/A313E83F-B0C1-484F-9775-ADE848006612-2755-00001C8015543A99/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA4MTkzODEzLTE4OTI4My5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA4MTkzODEzLTE4OTI4My5wbmc.png"}})]),s._v(" "),t("p",[s._v("::只要不动pick的 顺序，就代表什么都不做::")]),s._v(" "),t("p",[s._v("如果您选择edit提交，则将有机会修改提交，这意味着您可以完全添加或更改提交。您还可以进行更多提交，然后再继续进行变基。这使您可以将大型提交拆分为较小的提交，或者删除在提交中所做的错误更改。")]),s._v(" "),t("p",[t("strong",[s._v("假定 我想要在两个提交之间 再加提交，怎么办")]),s._v("\n假定，我们要在 add 3 和 add 5 之间 添加一条提交")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~2\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6934312")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npick 5ce6dde "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n\n\n")])])]),t("p",[s._v("修改为")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("e "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6934312")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npick 5ce6dde "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),t("p",[s._v("接着 Esc,:wq 保存退出")]),s._v(" "),t("p",[s._v("有如下")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~2\nStopped at 6934312135c150bf74bead26e371df1443273ca4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nYou can amend the commit now, with\n\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n\nOnce you are satisfied with your changes, run\n\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n\n\nxxxxxx MINGW32 ~/Desktop/git-demo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("REBASE-i "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("可以看到，我们的master分支多了REBASE-i 1/2")]),s._v(" "),t("p",[s._v("我们尝试做一些修改，给3.txt 增加一些内容，然后提交")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".txt\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"edit 3.txt"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("detached HEAD 7262a57"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" edit "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".txt\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("接着，我们继续 rebase")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\nSuccessfully rebased and updated refs/heads/master.\n")])])]),t("p",[s._v("git log 查看，在 add 5 和 add 3 中间 增加了我们刚刚的修改\n"),t("img",{attrs:{src:"/notes/note_images/CE3CC106-3F49-4880-A9A3-AC0D7487B34B-2755-00001C993D10676B/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTEzMDU2LTczMjkzMS5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTEzMDU2LTczMjkzMS5wbmc.png"}})]),s._v(" "),t("p",[t("strong",[s._v("假定 我想要单纯的修改这次提交内容和消息，怎么办")])]),s._v(" "),t("p",[s._v("参照上面的做到这一步，我们选择提交的方式 加一个参数 git commit --amend修改")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".txt\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n\n\n\n")])])]),t("p",[s._v("接着结束这次 rebase")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\nSuccessfully rebased and updated refs/heads/master.\n")])])]),t("p",[s._v("squash")]),s._v(" "),t("p",[s._v("该命令使您可以将两个或多个提交合并为一个提交。提交被压缩到其上方的提交中。Git使您有机会编写描述这两个更改的新提交消息。")]),s._v(" "),t("p",[t("strong",[s._v("假定，我想合并某几个提交，怎么办")])]),s._v(" "),t("p",[s._v("如下\n"),t("img",{attrs:{src:"/notes/note_images/A08A71EA-8B00-4810-9340-3FE86FB7701F-2755-00001CA471ACA90E/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTIzODIyLTY3NTQyMy5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTIzODIyLTY3NTQyMy5wbmc.png"}})]),s._v(" "),t("p",[s._v("我们合并 add 5 和 add 3")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase - i HEAD~2\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6934312")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\npick 6fa47e4 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n\n")])])]),t("p",[s._v("修改为")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6934312")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\ns 6fa47e4 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),t("p",[s._v("接着 Esc,:wq 保存退出")]),s._v(" "),t("p",[s._v("开始执行变更")]),s._v(" "),t("p",[s._v("然后 在弹出来的编辑框里 写提交信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\n\n\n\n\n\n\n\n\n\n\n\n\n")])])]),t("p",[s._v("我们可以修改提交消息，默认是把两个消息都合并")]),s._v(" "),t("p",[s._v("接着 Esc,:wq 保存退出")]),s._v(" "),t("p",[s._v("git log查看，合并成功\n"),t("img",{attrs:{src:"/notes/note_images/68AE8D9D-F8FC-4FF0-B3A9-0E0B23C80F57-2755-00001CB127ED3354/aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTI0NjU3LTUwMDk0MC5wbmc.png",alt:"aHR0cHM6Ly9naXRlZS5jb20vcmVuc2hlbl8wNTIvbXlOb3RlLWltZy9yYXcvbWFzdGVyL2ltYWdlLzIwMjAwMzA0MTI0NjU3LTUwMDk0MC5wbmc.png"}})]),s._v(" "),t("p",[s._v("这类似于squash，但是要合并的提交已丢弃其消息。提交仅合并到其上方的提交中，并且较早提交的消息用于描述这两个更改。")]),s._v(" "),t("p",[s._v("最后两次提交")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~2\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pick 7f9d45d "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ~ new comment\npick 311adc9 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n\n\n\n\n\npick 7f9d45d "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ~ new comment\nf 311adc9 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\n\n\n\n\npick 81fe4d0 添加test2.txt和test3.txt\npick 77bd0eb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npick e7c68b8 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ~ new comment\n\n\n\n\n\n\n\nx "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello is echo do ......."')]),s._v("\npick 81fe4d0 添加test2.txt和test3.txt\npick 77bd0eb "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\npick e7c68b8 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ~ new comment\n\n\n\nExecuting: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello is echo do ......."')]),s._v("\nHello is "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccessfully rebased and updated refs/heads/master.\n\n")])])]),t("p",[s._v("其他")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n\n\n\n\n\n\n\n")])])]),t("p",[s._v("删除提交\n用法与 p,r,e,s,f,x 一致")]),s._v(" "),t("p",[s._v("看提示")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("You can fix this with "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git rebase --edit-todo'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);