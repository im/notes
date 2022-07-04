(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{469:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Homebrew是一款Mac OS平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。\n援引 "),t("a",{attrs:{href:"https://links.jianshu.com/go?to=http%3A%2F%2Fbrew.sh%2F",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方"),t("OutboundLink")],1),a._v(" 的一句话：又提示缺少套件啦？别担心，Homebrew 随时守候。Homebrew —— OS X 不可或缺的套件管理器。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("/usr/bin/ruby -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("brew --prefix"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf Cellar\n$ brew prune\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" ls-files"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -r Library/Homebrew Library/Aliases Library/Formula Library/Contributions\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf .git\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/Library/Caches/Homebrew\n")])])]),t("ul",[t("li",[t("p",[a._v("安装任意包\n$ brew install "),t("packageName")],1)]),a._v(" "),t("li",[t("p",[a._v("示例：安装node\n$ brew install node")])]),a._v(" "),t("li",[t("p",[a._v("卸载任意包\n$ brew uninstall "),t("packageName")],1)]),a._v(" "),t("li",[t("p",[a._v("示例：卸载git\n$ brew uninstall git")])]),a._v(" "),t("li",[t("p",[a._v("查询可用包\n$ brew search "),t("packageName")],1)]),a._v(" "),t("li",[t("p",[a._v("查看已安装包列表\n$ brew list")])]),a._v(" "),t("li",[t("p",[a._v("查看任意包信息\n$ brew info "),t("packageName")],1)]),a._v(" "),t("li",[t("p",[a._v("更新Homebrew\n$ brew update")])]),a._v(" "),t("li",[t("p",[a._v("查看Homebrew版本\n$ brew -v")])]),a._v(" "),t("li",[t("p",[a._v("Homebrew帮助信息\n$ brew -h")])])]),a._v(" "),t("p",[a._v("在Mac OS X 10.11系统以后，/usr/local/等系统目录下的文件读写是需要系统root权限的，以往的Homebrew安装如果没有指定安装路径，会默认安装在这些需要系统root用户读写权限的目录下，导致有些指令需要添加sudo前缀来执行，比如升级Homebrew需要：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" brew update\n")])])]),t("p",[a._v("如果你不想每次都使用sudo指令，你有两种方法可以选择:")]),a._v(" "),t("ol",[t("li",[a._v("对/usr/local 目录下的文件读写进行root用户授权")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v(" /usr/local\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("示例：")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R gaojun /usr/local\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("（推荐）安装Homebrew时对安装路径进行指定，直接安装在不需要系统root用户授权就可以自由读写的目录下")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("install path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);