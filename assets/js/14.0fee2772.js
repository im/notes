(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{458:function(a,t,s){"use strict";s.r(t);var e=s(19),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mac-设置环境变量-path-的几种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-设置环境变量-path-的几种方法"}},[a._v("#")]),a._v(" Mac 设置环境变量 path 的几种方法")]),a._v(" "),s("p",[a._v("Mac系统的环境变量，加载顺序为：")]),a._v(" "),s("ol",[s("li",[a._v("系统\n"),s("ul",[s("li",[a._v("/etc/profile")]),a._v(" "),s("li",[a._v("/etc/paths")])])])]),a._v(" "),s("p",[s("code",[a._v("/etc/profile")]),a._v(" 和 "),s("code",[a._v("/etc/paths")]),a._v(" 是系统级别的，系统启动就会加载")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("用户\n"),s("ul",[s("li",[a._v("~/.bash_profile")]),a._v(" "),s("li",[a._v("~/.bash_login")]),a._v(" "),s("li",[a._v("~/.profile")]),a._v(" "),s("li",[a._v("~/.bashrc")])])])]),a._v(" "),s("p",[a._v("按照从前往后的顺序读取，如果 "),s("code",[a._v("~/.bash_profile")]),a._v(" 文件存在，则后面的几个文件就会被忽略不读了，如果 "),s("code",[a._v("~/.bash_profile")]),a._v(" 文件不存在，才会以此类推读取后面的文件。"),s("code",[a._v("~/.bashrc")]),a._v(" 没有上述规则，它是 "),s("code",[a._v("bash shell")]),a._v(" 打开的时候载入的")]),a._v(" "),s("p",[a._v("如果没特殊说明,设置PATH的语法都为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>\n")])])]),a._v(" "),s("h2",{attrs:{id:"全局设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局设置"}},[a._v("#")]),a._v(" 全局设置")]),a._v(" "),s("p",[a._v("下面的几个文件设置是全局的，修改时需要root权限")]),a._v(" "),s("ol",[s("li",[s("p",[s("code",[a._v("/etc/paths")]),a._v(" （全局建议修改这个文件 ）\n编辑 "),s("code",[a._v("paths")]),a._v("，将环境变量添加到 "),s("code",[a._v("paths")]),a._v(" 文件中 ，一行一个路径\nHint：输入环境变量时，不用一个一个地输入，只要拖动文件夹到 Terminal 里就可以了。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("/etc/profile")]),a._v(" （建议不修改这个文件 ）\n全局（公有）配置，不管是哪个用户，登录时都会读取该文件。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("/etc/bashrc")]),a._v(" （一般在这个文件中添加系统级环境变量）\n全局（公有）配置，"),s("code",[a._v("bash shell")]),a._v(" 执行时，不管是何种方式，都会读取此文件。")])]),a._v(" "),s("li")]),a._v(" "),s("ul",[s("li",[a._v("创建一个文件：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo touch /etc/paths.d/mysql\n")])])]),s("ul",[s("li",[a._v("用 vim 打开这个文件（如果是以 "),s("code",[a._v("open -t")]),a._v(" 的方式打开，则不允许编辑）：")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo vim /etc/paths.d/mysql\n")])])]),s("ul",[s("li",[a._v("编辑该文件，键入路径并保存（关闭该 "),s("code",[a._v("Terminal")]),a._v(" 窗口并重新打开一个，就能使用 mysql 命令了）")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/usr/local/mysql/bin\n")])])]),s("p",[a._v("据说，这样可以自己生成新的文件，不用把变量全都放到 "),s("code",[a._v("paths")]),a._v(" 一个文件里，方便管理。")]),a._v(" "),s("h2",{attrs:{id:"单个用户设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单个用户设置"}},[a._v("#")]),a._v(" 单个用户设置")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("~/.bash_profile")]),a._v(" （任意一个文件中添加用户级环境变量）\n（注：Linux 里面是 "),s("code",[a._v(".bashrc")]),a._v(" 而 Mac 是 "),s("code",[a._v(".bash_profile")]),a._v("）\n若bash shell是以login方式执行时，才会读取此文件。该文件仅仅执行一次!默认情况下,他设置一些环境变量\n设置命令别名"),s("code",[a._v("alias ll=’ls -la’")])])]),a._v(" "),s("p",[a._v("设置环境变量：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export PATH=/opt/local/bin:/opt/local/sbin:$PATH\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[a._v("~/.bashrc")]),a._v(" 同上")])]),a._v(" "),s("p",[a._v("如果想立刻生效，则可执行下面的语句：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ source 相应的文件\n")])])]),s("p",[a._v("一般环境变量更改后，重启后生效。")])])}),[],!1,null,null,null);t.default=v.exports}}]);