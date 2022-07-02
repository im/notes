(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{487:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"从-event-loop-角度解读-vue-nexttick-源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-event-loop-角度解读-vue-nexttick-源码"}},[t._v("#")]),t._v(" 从 Event Loop 角度解读 Vue NextTick 源码")]),t._v(" "),a("h2",{attrs:{id:"解读背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解读背景"}},[t._v("#")]),t._v(" 解读背景")]),t._v(" "),a("ol",[a("li",[t._v("在学习 "),a("strong",[t._v("vue")]),t._v(" 源码，"),a("strong",[t._v("nextTick")]),t._v(" 方法借助了浏览器的 "),a("strong",[t._v("event loop")]),t._v(" 事件循环做到了异步更新。")]),t._v(" "),a("li",[t._v("在公司面试的时候，笔试题最喜欢出关于 "),a("strong",[t._v("JavaScript")]),t._v(" 运行机制，"),a("strong",[t._v("Promise/A+")]),t._v(" 等关于 "),a("strong",[t._v("event loop")]),t._v(" 线程的题目。")]),t._v(" "),a("li",[t._v("学会 "),a("strong",[t._v("nextTick")]),t._v(" 原理帮助定位 "),a("strong",[t._v("BUG")]),t._v(" , 使用 "),a("strong",[t._v("Vue")]),t._v(" 会更加灵活。")])]),t._v(" "),a("h2",{attrs:{id:"什么是-event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-event-loop"}},[t._v("#")]),t._v(" 什么是 event loop")]),t._v(" "),a("p",[a("img",{attrs:{src:"/notes/note_images/EAB69C4D-1AAC-4153-A1FE-C492361811CF-2755-0000819DFEFF1BC5/640.gif",alt:"640.gif"}})]),t._v(" "),a("ol",[a("li",[t._v("先执行同步阻塞任务，同步任务会等待上一个执行完毕以后执行下一个，当同步任务执行完毕，再执行异步任务，遇到异步任务会将异步任务的回调函数注册在异步任务队列里。注意，如果主线程上没有同步任务会直接调用异步任务的微任务。")]),t._v(" "),a("li",[t._v("执行宏任务，遇到微任务将都添加到微任务队列里。")]),t._v(" "),a("li",[t._v("开始执行微任务队列，当宏任务执行完后执行微任务队列，直到微任务队列全部执行完，微任务队列为空。")]),t._v(" "),a("li",[t._v("执行宏任务，如果在执行宏任务期间有微任务，将微任务添加到微任务队列里，执行完宏任务之后执行微任务，直到微任务队列全部执行完。")]),t._v(" "),a("li",[t._v("继续执行宏任务队列。")])]),t._v(" "),a("p",[a("strong",[t._v("重复2, 3, 4，5……直到宏微任务为空。")])]),t._v(" "),a("h2",{attrs:{id:"nexttick-的实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-的实现原理"}},[t._v("#")]),t._v(" $nextTick 的实现原理")]),t._v(" "),a("p",[t._v("从字面意思理解，"),a("strong",[t._v("next")]),t._v(" 下一个，"),a("strong",[t._v("tick")]),t._v(" 滴答（钟表）来源于定时器的周期性中断（输出脉冲），一次中断表示一个 "),a("strong",[t._v("tick")]),t._v("，也被称做一个“时钟滴答”），"),a("strong",[t._v("nextTick")]),t._v(" 顾名思义就是下一个时钟滴答。看源码，在 "),a("strong",[t._v("Vue 2.x")]),t._v(" 版本中，"),a("strong",[t._v("nextTick")]),t._v(" 在 "),a("strong",[t._v("src\\core\\util")]),t._v(" 中的一个单独的文件 "),a("strong",[t._v("next-tick.js")]),t._v(" ，可见 "),a("strong",[t._v("nextTick")]),t._v(" 的重要性，虽然短短 "),a("strong",[t._v("200")]),t._v(" 多行，尤大却单独创建一个文件去维护。\n接下来我们来看整个文件。")]),t._v(" "),a("ol",[a("li",[t._v("声明了三个全局变量，"),a("strong",[t._v("callbacks: [] ，pending: Boolean，timerFunc: undefined")]),t._v("。")]),t._v(" "),a("li",[t._v("声明了一个函数 "),a("strong",[t._v("flushCallbacks")]),t._v("。")]),t._v(" "),a("li",[t._v("一堆 **if，else if **判断。")]),t._v(" "),a("li",[t._v("抛出了一个函数 "),a("strong",[t._v("nextTick")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"nexttick-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nexttick-函数"}},[t._v("#")]),t._v(" nextTick 函数")]),t._v(" "),a("p",[a("img",{attrs:{src:"/notes/note_images/6A30712E-461B-40A9-BDD4-F0884470CC81-2755-0000819DFE089A99/640.png",alt:"640.png"}})]),t._v(" "),a("ol",[a("li",[t._v("声明一个局部变量 "),a("strong",[t._v("_resolve")]),t._v(" 。")]),t._v(" "),a("li",[t._v("把所有回调函数压进 "),a("strong",[t._v("callbacks")]),t._v(" 中，以栈的形式的存储所有 "),a("strong",[t._v("callback")]),t._v("。")]),t._v(" "),a("li",[t._v("当 "),a("strong",[t._v("pending")]),t._v(" 为 "),a("strong",[t._v("false")]),t._v(" 时，执行 "),a("strong",[t._v("timerFunc")]),t._v(" 函数。")]),t._v(" "),a("li",[t._v("当没有 "),a("strong",[t._v("callback")]),t._v(" 的时候，返回一个 "),a("strong",[t._v("Promise")]),t._v(" 的调用方式，可以用 "),a("strong",[t._v(".then")]),t._v(" 接收。")])]),t._v(" "),a("h2",{attrs:{id:"timerfunc-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timerfunc-函数"}},[t._v("#")]),t._v(" timerFunc 函数")]),t._v(" "),a("p",[t._v("我们开始说了，timerFunc 为全局变量，现在调用 timerFunc ，timerFunc 是什么时候被赋值为一个函数，并且函数里执行代码又是什么？")]),t._v(" "),a("p",[a("img",{attrs:{src:"/notes/note_images/60F127E0-3442-48A8-A43F-1F22B9E6FADA-2755-0000819DFDCE9DB6/640.png",alt:"640.png"}})]),t._v(" "),a("p",[t._v("我们看到，这段判断代码总共有四个分支，四个分支里对 timerFunc 有不同的赋值，我们先来看第一个分支。")]),t._v(" "),a("h3",{attrs:{id:"promise-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-分支"}},[t._v("#")]),t._v(" Promise 分支")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Promise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("timerFunc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushCallbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In problematic UIWebViews, Promise.then doesn't completely break, but")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it can get stuck in a weird state where callbacks are pushed into the")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// microtask queue but the queue isn't being flushed, until the browser")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// needs to do some other work, e.g. handle a timer. Therefore we can")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "force" the microtask queue to be flushed by adding an empty timer.')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isIOS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("noop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  isUsingMicroTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("判断环境是否支持 Promise 并且 "),a("strong",[t._v("Promise")]),t._v(" 是否为原生。")]),t._v(" "),a("li",[t._v("使用 "),a("strong",[t._v("Promise")]),t._v(" 异步调用 "),a("strong",[t._v("flushCallbacks")]),t._v(" 函数。")]),t._v(" "),a("li",[t._v("当执行环境是 "),a("strong",[t._v("iPhone")]),t._v(" 等，使用 "),a("strong",[t._v("setTimeout")]),t._v(" 异步调用 "),a("strong",[t._v("noop")]),t._v(" ，"),a("strong",[t._v("iOS")]),t._v(" "),a("strong",[t._v("中在一些异常的webview")]),t._v(" 中，"),a("strong",[t._v("promise")]),t._v(" 结束后任务队列并没有刷新所以强制执行 "),a("strong",[t._v("setTimeout")]),t._v(" 刷新任务队列。")])]),t._v(" "),a("h3",{attrs:{id:"mutationobserver-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver-分支"}},[t._v("#")]),t._v(" MutationObserver 分支")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isIE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" MutationObserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MutationObserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PhantomJS and iOS 7.x")]),t._v("\n  MutationObserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object MutationObserverConstructor]'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use MutationObserver where native Promise is not available,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. PhantomJS, iOS7, Android 4.4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (#6466 MutationObserver is unreliable in IE11)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MutationObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushCallbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" textNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("textNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("characterData")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("timerFunc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    textNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("counter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  isUsingMicroTask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("对非IE浏览器和是否可以使用 "),a("strong",[t._v("HTML5")]),t._v(" 新特性 "),a("strong",[t._v("MutationObserver")]),t._v(" 进行判断。")]),t._v(" "),a("li",[t._v("实例一个 "),a("strong",[t._v("MutationObserver")]),t._v(" 对象，这个对象主要是对浏览器 "),a("strong",[t._v("DOM")]),t._v(" 变化进行监听，当实例化 "),a("strong",[t._v("MutationObserver")]),t._v(" 对象并且执行对象 "),a("strong",[t._v("observe")]),t._v("，设置 "),a("strong",[t._v("DOM")]),t._v(" 节点发生改变时自动触发回调。")]),t._v(" "),a("li",[t._v("把 "),a("strong",[t._v("timerFunc")]),t._v(" 赋值为一个改变 "),a("strong",[t._v("DOM")]),t._v(" 节点的方法，当 "),a("strong",[t._v("DOM")]),t._v(" 节点发生改变，触发 "),a("strong",[t._v("flushCallbacks")]),t._v(" 。（这里其实就是想用利用 "),a("strong",[t._v("MutationObserver")]),t._v(" 的特性进行异步操作）")])]),t._v(" "),a("h3",{attrs:{id:"setimmediate-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setimmediate-分支"}},[t._v("#")]),t._v(" setImmediate 分支")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" setImmediate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setImmediate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fallback to setImmediate.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Technically it leverages the (macro) task queue,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but it is still a better choice than setTimeout.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("timerFunc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flushCallbacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("判断 "),a("strong",[t._v("setImmediate")]),t._v(" 是否存在，"),a("strong",[t._v("setImmediate")]),t._v(" 是高版本 "),a("strong",[t._v("IE")]),t._v(" （IE10+） 和 "),a("strong",[t._v("edge")]),t._v(" 才支持的。")]),t._v(" "),a("li",[t._v("如果存在，传入 "),a("strong",[t._v("flushCallbacks")]),t._v(" 执行 "),a("strong",[t._v("setImmediate")]),t._v(" 。")])]),t._v(" "),a("h3",{attrs:{id:"settimeout-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-分支"}},[t._v("#")]),t._v(" setTimeout 分支")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("else {\n  // Fallback to setTimeout.\n  timerFunc = () => {\n    setTimeout(flushCallbacks, 0)\n  }\n}\n")])])]),a("ol",[a("li",[t._v("当以上所有分支异步 "),a("strong",[t._v("api")]),t._v(" 都不支持的时候，使用 "),a("strong",[t._v("macro")]),t._v(" "),a("strong",[t._v("task")]),t._v(" （宏任务）的 "),a("strong",[t._v("setTimeout")]),t._v(" 执行 "),a("strong",[t._v("flushCallbacks")]),t._v(" 。")])]),t._v(" "),a("h3",{attrs:{id:"执行降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行降级"}},[t._v("#")]),t._v(" 执行降级")]),t._v(" "),a("p",[t._v("我们可以发现，给 timerFunc 赋值是一个降级的过程。为什么呢，因为 Vue 在执行的过程中，执行环境不同，所以要适配环境。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/notes/note_images/4E0A01FA-9305-4366-9CE0-FE135DF8A2EB-2755-0000819DFD81A385/640.png",alt:"640.png"}})]),t._v(" "),a("p",[t._v("这张图便于我们更清晰的了解到降级的过程。")]),t._v(" "),a("h2",{attrs:{id:"flushcallbacks-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flushcallbacks-函数"}},[t._v("#")]),t._v(" flushCallbacks 函数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function flushCallbacks () {\n  pending = false\n  const copies = callbacks.slice(0)\n  callbacks.length = 0\n  for (let i = 0; i < copies.length; i++) {\n    copies[i]()\n  }\n}\n")])])]),a("p",[t._v("循环遍历，按照 "),a("strong",[t._v("队列")]),t._v(" 数据结构 "),a("strong",[t._v("“先进先出”")]),t._v(" 的原则，逐一执行所有 "),a("strong",[t._v("callback")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("到这里就全部讲完了，"),a("strong",[t._v("nextTick")]),t._v(" 的原理就是利用 "),a("strong",[t._v("Event")]),t._v(" "),a("strong",[t._v("loop")]),t._v(" 事件线程去异步重新渲染，分支判断首要选择 "),a("strong",[t._v("Promise")]),t._v(" 的原因是当同步JS代码执行完毕，执行栈清空会首先查看 "),a("strong",[t._v("micro")]),t._v(" "),a("strong",[t._v("task")]),t._v(" （微任务）队列是否为空，不为空首先执行微任务。在我们 "),a("strong",[t._v("DOM")]),t._v(" 依赖数据发生变化的时候，会异步重新渲染 "),a("strong",[t._v("DOM")]),t._v(" ，但是比如像 "),a("strong",[t._v("echarts")]),t._v(" ，"),a("strong",[t._v("canvas")]),t._v("……这些 "),a("strong",[t._v("Vue")]),t._v(" 无法在初始状态下收集依赖的 "),a("strong",[t._v("DOM")]),t._v(" ，我们就需要手动执行 "),a("strong",[t._v("nextTick")]),t._v(" 方法使其重新渲染。")])])}),[],!1,null,null,null);s.default=e.exports}}]);