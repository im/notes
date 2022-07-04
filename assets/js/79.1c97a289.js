(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{523:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("setTimeout(fn,time): 等待time时间后执行fn\nsetInterval(fn,time):  每隔time时间执行fn")]),t._v(" "),n("p",[t._v("我们希望setInterval是每隔一段时间自动执行，但是实际应用中，setInterval并不会按照我们预想的那样，它通常存在如下两个缺点。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("1. 在执行的时候可能会跳过指定时间间隔\n2. 多个定时器函数会立刻执行\n")])])]),n("p",[t._v("我们就实际场景来说一下这两个缺陷")]),t._v(" "),n("p",[t._v("首先明确一个概念，定时器的时间间隔指的是什么？\n它不是指函数的执行时间，而是函数"),n("strong",[t._v("被推入到消息队列的时间")]),t._v("。\n也就是说每隔time时间，fn就会被放入消息队列中，而不是执行。另外何时执行取决于何时被主线程的事件循环取到")]),t._v(" "),n("p",[t._v("另外，如果前一个任务没有被执行，也就是还处于消息队列中怎么办呢？ 浏览器规定**：只有当前消息队列中不存在该任务，才会将下一个任务推进去**")]),t._v(" "),n("p",[n("img",{attrs:{src:"/notes/note_images/C87638F5-0A0F-4371-B6E6-352AC9CBFA75-2755-0000327219F92BD7/20200609111645389.png",alt:"20200609111645389.png"}})]),t._v(" "),n("p",[t._v("我们分析一下上面的情况，")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("* 隔了100ms之后，将t1推进去，因为js栈中主进程还没有执行完，所以t1这时候等待执行，\n* 又过了100ms，t1已经执行，t2被压入队列中\n* 又过了100ms，t1还没执行完，t2还存在在消息队列中，所以t3根据规定不能被压入队列中\n")])])]),n("p",[t._v("所以这时候你就会发现，t1 、 t2是连续执行的，他们之间没有时间间隔，满足不了我们的需求。")]),t._v(" "),n("p",[t._v("而我们可以用setTimeout模拟来弥补这两个缺陷。")]),t._v(" "),n("p",[t._v("可以这么理解：\nsetTimeout执行后会立刻将fn放入到消息队列中，而setInterval每次在放入之前都会判断消息队列中存不存在上一个任务。")]),t._v(" "),n("p",[t._v("setTimeout的执行机制，也就是浏览器的事件循环机制，setTimeout是一个宏任务，当js栈空了，就会依次执行宏任务。")]),t._v(" "),n("p",[t._v("代码实现：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//.....")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("在一个定时器执行完以前不会插入另一个定时器\n确保了每个函数执行的等待时间间隔")])])}),[],!1,null,null,null);s.default=e.exports}}]);