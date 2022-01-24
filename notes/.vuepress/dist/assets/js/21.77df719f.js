(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{476:function(t,s,e){t.exports=e.p+"assets/img/clapping.e797bef1.gif"},542:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("繁體中文 | "),a("RouterLink",{attrs:{to:"/en/2020/01/25/intro-to-vuepress-blog-theme-and-plugin/"}},[t._v("English")])],1),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("我是 VuePress Core Team 的成員 Billy。除了 VuePress 核心以外，我負責官方部落格套件與主題的開發。")]),t._v(" "),a("p",[t._v("如果你不知道 VuePress， 他是一個由 Vue 的作者尤雨溪建立的靜態網站生成器，簡單又輕量，以 markdown 為中心，其特點是能在 markdown 裡使用 Vue，被許多用戶用來撰寫技術文件。如果想進一步了解，你可以參考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 官方文件"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ulivz.com/2019/06/09/intro-to-vuepress-1-x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ULIVZ 的文章"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.smashingmagazine.com/2019/08/vuepress-documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ben Hong 的文章"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("在過去 VuePress 只提供預設的文檔主題，然而你可以透過它開發各種靜態網站，除了文件以外，我最常看到的大概非部落格莫屬。而我們在今天正式移除官方部落格套件與主題的 WIP 狀態。")]),t._v(" "),a("p",[t._v("我將在這篇貼文中做快速簡介，不會深入細節，如果你有興趣更深入了解，你可在看完之後去讀官方文件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方部落格主題"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress-plugin-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方部落格套件"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"vuepress-theme-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-blog"}},[t._v("#")]),t._v(" @vuepress/theme-blog")]),t._v(" "),a("h3",{attrs:{id:"範例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#範例"}},[t._v("#")]),t._v(" 範例")]),t._v(" "),a("p",[t._v("呃其實，我的部落格，你現在所看到的就是一個範例了。你可在我的部落個到處遊蕩一下。")]),t._v(" "),a("h3",{attrs:{id:"快速開始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速開始"}},[t._v("#")]),t._v(" 快速開始")]),t._v(" "),a("p",[t._v("我知道從頭建起一個專案總是很麻煩無聊，尤其是對於一個新接觸的技術。VuePress Core Team 內已經針對這點做討論，會盡快提供官方腳手架 Cli。在這篇文章裡，你可以暫時先使用我事先準備好的"),a("a",{attrs:{href:"https://github.com/billyyyyy3320/vuepress-blog-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("template"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/billyyyyy3320/vuepress-blog-template.git "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone template")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vuepress-blog-template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安裝依賴")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 運行在 localhost:8080")]),t._v("\n")])])]),a("p",[t._v("打開 localhost:8080，相信你已經看到一個現成的部落格了。")]),t._v(" "),a("h3",{attrs:{id:"寫一篇貼文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#寫一篇貼文"}},[t._v("#")]),t._v(" 寫一篇貼文")]),t._v(" "),a("p",[t._v("第一步：建立檔案")]),t._v(" "),a("p",[t._v("預設情況下，所有貼文都必須放在 "),a("code",[t._v("_posts")]),t._v(" 資料夾內，而檔名格式為"),a("code",[t._v("日期-標題.md")]),t._v("，例如"),a("code",[t._v("2020-01-25-intro-to-vuepress-official-blog-plugin-and-theme.md")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└── _posts\n    ├── ...\n    └── 2020-01-25-intro-to-vuepress-official-blog-plugin-and-theme.md\n")])])]),a("p",[t._v("第二步：Front matter")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front matter"),a("OutboundLink")],1),t._v(" 是用於指定個別檔案的變數，格式是上下兩行三個"),a("code",[t._v("-")]),t._v("，中間使用"),a("code",[t._v("yaml")]),t._v("語法。必須寫在 Markdown 的最上方，在這主題裡，是各篇貼文的重要資訊：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VuePress 官方預設部落格主題\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-01-20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" Vue\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" VuePress\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" JavaScript\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("summary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 有了靜態網站生成器，建立自己的部落格其實很簡單，如果你會寫Vue，VuePress是個很好的選擇，即便你沒用過Vue，你也可以直接套用開箱及用的主題。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n")])])]),a("p",[t._v("只有 "),a("code",[t._v("title")]),t._v(" 是你必填的，是貼文的標題與 Html title。")]),t._v(" "),a("p",[t._v("第三步：內文")]),t._v(" "),a("p",[t._v("在 Markdown 裡，當然是用 Markdown 語法囉，基本上常見的 Markdown 語法在這都適用。")]),t._v(" "),a("blockquote",[a("p",[t._v("Markdown 是一種輕量級標記式語言，創始人為約翰·格魯伯（John Gruber）。它允許人們「使用易讀易寫的純文字格式編寫文件，然後轉換成有效的 XHTML(或者 HTML)文件」。")])]),t._v(" "),a("p",[t._v("那 Markdown 我就不多贅述了，而內文就由你自由發揮了。")]),t._v(" "),a("h3",{attrs:{id:"增加互動與能見度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加互動與能見度"}},[t._v("#")]),t._v(" 增加互動與能見度")]),t._v(" "),a("p",[t._v("相信你要部落格，就是要給人看的吧，VuePress 作為一個靜態網站生成器已經做了許多優化。這個主題還提供了以下配置，\n以下配置都要寫在"),a("code",[t._v(".vuepress/config.js")]),t._v("的"),a("code",[t._v("themeConfig")]),t._v("裡。")]),t._v(" "),a("blockquote",[a("p",[t._v("以下配置都不是必要配置，請針對你的需求去選擇。")])]),t._v(" "),a("ul",[a("li",[t._v("Sitemap")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sitemap")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://billyyyyy3320.com/"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在"),a("code",[t._v("hostname")]),t._v("裡填下你部落格的網址，"),a("code",[t._v("sitemap.xml")]),t._v("就會在你執行 build 指令時產生，就那麼簡單，剩下的交給搜尋引擎爬蟲去爬他吧。如果你想要自己提交，他就在"),a("code",[t._v("dist")]),t._v("資料夾底下。")]),t._v(" "),a("ul",[a("li",[t._v("Web Feed 訂閱")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("feed")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("canonical_base")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://billyyyyy3320.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("canonical_base")]),t._v(" 是必填的，跟前面 Sitemap 一樣，在"),a("code",[t._v("canonical_base")]),t._v("裡填下你部落格的網址，就那麼簡單。預設使用 Rss，但也有提供 Atom 和 JSON feed。")]),t._v(" "),a("ul",[a("li",[t._v("留言")])]),t._v(" "),a("p",[t._v("預設提供了兩個選擇：")]),t._v(" "),a("p",[t._v("\b1. "),a("a",{attrs:{href:"https://vssue.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vssue"),a("OutboundLink")],1),t._v(": 基於 issue 的留言服務")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("comment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Which service you'd like to use")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vssue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The owner's name of repository to store the issues and comments.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("owner")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The name of repository to store the issues and comments.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("repo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your repo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The clientId & clientSecret introduced in OAuth2 spec.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clientId")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your clientId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("clientSecret")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your clientSecret'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://disqus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disqus"),a("OutboundLink")],1),t._v(": 線上留言服務平台")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("comment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Which service you'd like to use")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disqus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The owner's name of repository to store the issues and comments.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("shortname")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("配置完後，留言板會自動在每篇文章最底部生成。")]),t._v(" "),a("ul",[a("li",[t._v("Email 訂閱")])]),t._v(" "),a("p",[t._v("預設整合了"),a("a",{attrs:{href:"https://mailchimp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mailchimp"),a("OutboundLink")],1),t._v("來提供 Email 訂閱。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("newsletter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("endpoint")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("提供"),a("code",[t._v("endpoint")]),t._v("就會啟用功能，至於怎麼取得"),a("code",[t._v("endpoint")]),t._v("參考"),a("a",{attrs:{href:"https://vuepress-plugin-mailchimp.billyyyyy3320.com/#config",target:"_blank",rel:"noopener noreferrer"}},[t._v("這裡"),a("OutboundLink")],1),t._v("，我有做圖片說明。")]),t._v(" "),a("h3",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),a("p",[t._v("靜態網頁的部署非常簡單，VuePress 官方文件裡有針對各服務的"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("指南"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在這裡以我使用的"),a("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),a("OutboundLink")],1),t._v("做範例，")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把這個部落個推上你的Github")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去 Netlify 然後登入")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 點擊New site from git")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 選擇 Github")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 選擇你的部落格repo")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把 Build command 改成 vuepress build blog")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把 Publish directory 改成 blog/.vuepress/dist")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按下 Deploy site")]),t._v("\n")])])]),a("p",[t._v("就醬。")]),t._v(" "),a("img",{staticClass:"align-center",attrs:{src:e(476)}}),t._v(" "),a("h2",{attrs:{id:"vuepress-plugin-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-blog"}},[t._v("#")]),t._v(" @vuepress/plugin-blog")]),t._v(" "),a("p",[t._v("想必你有疑惑，部落格 套件 跟 主題 差在哪裡？")]),t._v(" "),a("p",[t._v("簡單來講，一個有畫面，一個沒畫面。我們把必要的部落格功能拆出來集成到套件裡，目的是希望它能被重複利用，讓所有想打造部落格主題的開發者更快上手，更專注於介面的開發。")]),t._v(" "),a("p",[t._v("前面所提到的預設部落格主題，其實是可以被客製化的，通過"),a("code",[t._v("palette.styl")]),t._v(" 或是 "),a("code",[t._v("index.stly")]),t._v("，甚至是 VuePress 的繼承主題功能。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/config/palette.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Palette"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/config/#styling",target:"_blank",rel:"noopener noreferrer"}},[t._v("Styling in VuePress docs"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/inheritance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Theme Inheritance"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("但是如果你想改的範圍更大，上述方法無法滿足你的話，歡迎你打造你的部落格主題，拓展 VuePress 社群。這時候你就可以使用這個套件，一定會幫你省去許多麻煩。")]),t._v(" "),a("p",[t._v("想寫一個主題，請先詳讀"),a("a",{attrs:{href:"https://vuepress.vuejs.org/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何寫一個 VuePress 主題"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"使用-vuepress-plugin-blog-的主題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vuepress-plugin-blog-的主題"}},[t._v("#")]),t._v(" 使用 @vuepress/plugin-blog 的主題")]),t._v(" "),a("p",[t._v("即使之前都還表明還在開發階段，還是有些開發者已經利用這個套件開發部落格主題：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-theme-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-blog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-reco"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wensonsmith/vuepress-theme-seeker",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-seeker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/z3by/vuepress-theme-modern-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-modern-blog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/yuchanns/vuepress-theme-yuchanns",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-yuchanns"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"功能介紹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介紹"}},[t._v("#")]),t._v(" 功能介紹")]),t._v(" "),a("p",[t._v("所以說，到底有什麼開箱及用的功能：")]),t._v(" "),a("ul",[a("li",[t._v("自定義分類")])]),t._v(" "),a("p",[t._v("依照目錄分類文章，像是預設的部落格主題選擇讓使用者把文章都放在"),a("code",[t._v("_posts")]),t._v("底下，會把他們都視為貼文列在"),a("code",[t._v("/")]),t._v("。你可以自定義目錄，甚至你想要多個目錄，一個"),a("code",[t._v("writings")]),t._v("一個"),a("code",[t._v("photography")]),t._v("也行。")]),t._v(" "),a("p",[t._v("此外，這個套件也提供 Front matter 分類，像是預設的部落格主題讓使用者在 front matter 定義每篇文章的 tag 來將它分門別類，一樣你可以自定義，你也可以有多個 Front matter 分類，例如："),a("code",[t._v("location")]),t._v(" "),a("code",[t._v("category")]),t._v("之類。")]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[t._v("符合部落格風格的 Permalink")])]),t._v(" "),a("p",[t._v("原本所有 Markdown 檔案會被 VuePress 依照檔名與資料夾名產生對應的 URL，例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n└── _posts\n    ├── 2018-4-4-intro-to-vuepress.md\n    └── 2019-6-8-intro-to-vuepress-next.md\n\n# 會產生\n\n/_posts/2018-4-4-intro-to-vuepress.html\n/_posts/2019-6-8-intro-to-vuepress-next.html\n")])])]),a("p",[t._v("有了這個套件，你能讓他變的更部落格：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/2018/04/04/intro-to-vuepress/\n/2019/06/08/intro-to-vuepress-next/\n")])])]),a("hr"),t._v(" "),a("ul",[a("li",[t._v("分頁功能")])]),t._v(" "),a("p",[t._v("當文章一多，想必你會想將文章分頁。透過這個套件，你只需要設定一頁要幾篇文章，不必自己動手動腦來實現。")]),t._v(" "),a("p",[t._v("而且我們也提供了兩個 UI 組件可以讓你直接使用，當然涉及 UI 絕對不是強制的，你可以透過 Client Api 取得分頁資料來決定你自己的呈現方式。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("接下來的功能就是提供我稍早所提到的簡單"),a("a",{attrs:{href:"#%E5%A2%9E%E5%8A%A0%E4%BA%92%E5%8B%95%E8%88%87%E8%83%BD%E8%A6%8B%E5%BA%A6"}},[t._v("增加互動與能見度")]),t._v("的方法。")]),t._v(" "),a("ul",[a("li",[t._v("Sitemap")])]),t._v(" "),a("p",[t._v("在輸出目錄產生 sitemap.xml")]),t._v(" "),a("ul",[a("li",[t._v("留言")])]),t._v(" "),a("p",[t._v("整合了"),a("a",{attrs:{href:"https://disqus.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Disqus"),a("OutboundLink")],1),t._v(" 與 "),a("a",{attrs:{href:"https://vssue.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vssue"),a("OutboundLink")],1),t._v("。\n並且提供了一個方便的組件 - "),a("code",[t._v("<Comment/>")]),t._v("，讓你可以在任何你想要置入留言板的地方插入。")]),t._v(" "),a("ul",[a("li",[t._v("訂閱")])]),t._v(" "),a("p",[t._v("Web Feed 訂閱，在輸出目錄產生 "),a("code",[t._v("rss.xml")]),t._v(" or "),a("code",[t._v("feed.atom")]),t._v(" or "),a("code",[t._v("feed.json")]),t._v("。\nEmail 訂閱，結合"),a("a",{attrs:{href:"https://mailchimp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mailchimp"),a("OutboundLink")],1),t._v("，並且如同留言一樣提供了一個現成的組件 - "),a("code",[t._v("<SimpleNewsletter/>")]),t._v("，由你選擇他該呈現在哪裡。")]),t._v(" "),a("h2",{attrs:{id:"結語"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#結語"}},[t._v("#")]),t._v(" 結語")]),t._v(" "),a("p",[t._v("如果你有任何讓 VuePress 部落格套件與主題更好的想法，直接開個 issue 來討論吧。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-theme-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-blog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuepressjs/vuepress-plugin-blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-blog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);