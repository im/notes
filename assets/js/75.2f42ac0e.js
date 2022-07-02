(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{519:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html5的文件离线储存怎么使用-工作原理是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html5的文件离线储存怎么使用-工作原理是什么"}},[t._v("#")]),t._v(" HTML5的文件离线储存怎么使用，工作原理是什么？")]),t._v(" "),s("p",[t._v("HTML5离线存储存储功能非常强大，它的作用是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，自动更新缓存数据。")]),t._v(" "),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理：")]),t._v(" "),s("p",[t._v("HTML5的离线存储是基于一个新建的.appcache文件的，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。")]),t._v(" "),s("h2",{attrs:{id:"怎么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么用"}},[t._v("#")]),t._v(" 怎么用：")]),t._v(" "),s("p",[t._v("首先，在html页面头部加入一个manifest的属性:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("HTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("manifest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cache.manifest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后书写cache.manifest文件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("CACHE MANIFEST\n\nCACHE:\njs/app.js\ncss/style.css\n\nNETWORK:\nresourse/logo.png\n\nFALLBACK:\n/ /offline.html\n")])])]),s("p",[t._v("manifest （即 .appcache 文件）文件是简单的文本文件，可分为三个部分：")]),t._v(" "),s("h2",{attrs:{id:"cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" CACHE ：")]),t._v(" "),s("p",[t._v("在此标题下列出的文件将在首次下载后进行缓存。（由于包含manifest文件的页面将被自动离线存储，所以不需要把页面自身也列出来）")]),t._v(" "),s("h2",{attrs:{id:"network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" NETWORK ：")]),t._v(" "),s("p",[t._v("在此标题下列出的文件需要与服务器的连接，且不会被缓存，离线时无法使用。 \n可以使用 “*” 来指示所有其他资源/文件都需要因特网连接：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NETWORK: *\n")])])]),s("p",[t._v("如果在CACHE和NETWORK中有一个相同的资源，那么这个资源还是会被离线存储，也就是说CACHE的优先级更高。")]),t._v(" "),s("h2",{attrs:{id:"fallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback"}},[t._v("#")]),t._v(" FALLBACK：")]),t._v(" "),s("p",[t._v("在此标题下列出的文件规定当页面无法访问时的回退页面。比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问offline.html。")]),t._v(" "),s("h2",{attrs:{id:"浏览器是怎么对html5的离线储存资源进行管理和加载的呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是怎么对html5的离线储存资源进行管理和加载的呢"}},[t._v("#")]),t._v(" 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？")]),t._v(" "),s("p",[t._v("在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。\n离线的情况下，浏览器就直接使用离线存储的资源。")])])}),[],!1,null,null,null);a.default=n.exports}}]);