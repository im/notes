(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{458:function(a,s,t){"use strict";t.r(s);var n=t(18),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"创建-ssh-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-ssh-key"}},[a._v("#")]),a._v(" 创建 SSH Key")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tangxiaomiemail@gmail.com"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/.ssh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" id_rsa.pub\n")])])]),t("p",[a._v("如果一切顺利的话，可以在用户主目录里找到 .ssh 目录，里面有 "),t("code",[a._v("id_rsa")]),a._v(" 和 "),t("code",[a._v("id_rsa.pub")]),a._v(" 两个文件，这两个就是 SSH Key 的秘钥对，id_rsa 是私钥，不能泄露出去，id_rsa.pub 是公钥，可以放心地告诉任何人.")]),a._v(" "),t("h2",{attrs:{id:"全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[a._v("#")]),a._v(" 全局配置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tangxiaomi"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tangxiaomiemail@gmail.com"')]),a._v("\n")])])]),t("h2",{attrs:{id:"非全局配置-删除-global"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非全局配置-删除-global"}},[a._v("#")]),a._v(" 非全局配置 "),t("code",[a._v("删除 --global")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config  user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tangxiaomi"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config  user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tangxiaomiemail@gmail.com"')]),a._v("\n")])])]),t("h2",{attrs:{id:"查看配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看配置"}},[a._v("#")]),a._v(" 查看配置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.name\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.email\n")])])]),t("h2",{attrs:{id:"取消全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消全局配置"}},[a._v("#")]),a._v(" 取消全局配置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global --unset user.name\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global --unset user.email\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.name    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#(查看)全局配置账户是否已经移除")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config --global user.email   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#(查看)全局配置邮箱是否已经移除")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);