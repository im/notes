(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{522:function(o,e,t){"use strict";t.r(e);var i=t(19),l=Object(i.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("p",[o._v("都是保存在浏览器端，且同源的。")]),o._v(" "),t("ul",[t("li",[o._v("cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。")]),o._v(" "),t("li",[o._v("存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。")]),o._v(" "),t("li",[o._v("数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。")]),o._v(" "),t("li",[o._v("作用域不同，sessionStorage"),t("strong",[o._v("不在")]),o._v("不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。")]),o._v(" "),t("li",[o._v("Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。")]),o._v(" "),t("li",[o._v("Web Storage 的 api 接口使用更方便。")])])])}),[],!1,null,null,null);e.default=l.exports}}]);