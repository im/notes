---
title: vue3.0 是如何变快的？
date: 2021-12-01
tags:
  - 前端 
  - vue3 
 
---



> Vue2中的虚拟 `dom` 是进行全量的对比
> Vue3新增了静态标记` (PatchFlag) `
> 在与上次虚拟节点进行对比时候,只对比带有 `patch flash` 的节点
> 并且可以通过 `flag` 的信息得知当前节点要对比的具体内容

<!--more-->

![20210120113952295.png](/notes/note_images/1F02B128-59E5-44C9-B8C4-F4F75A06E2E1-2755-000067453F1DD80C/20210120113952295.png)

[vue2.0 代码转换](https://template-explorer.vuejs.org/#%3Cdiv%20id%3D%22app%22%3E%7B%7B%20msg%20%7D%7D%3C%2Fdiv%3E)
[vue3.0代码转换](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3EHello%20World!%3C%2Fdiv%3E%22%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22filename%22%3A%22Foo.vue%22%2C%22prefixIdentifiers%22%3Afalse%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22compatConfig%22%3A%7B%22MODE%22%3A3%7D%2C%22whitespace%22%3A%22condense%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%7D%7D)


```html
<div>
  <p>我是段落</p>
  <p>我是段落</p>
  <p>我是段落</p>
  <span>{{msg}}</span>
</div>

```

```js
function render() {
  with(this) {
    return _c('div', [_c('p', [_v("我是段落")]), _c('p', [_v("我是段落")]), _c('p', [
      _v("我是段落")
    ]), _c('span', [_v(_s(msg))])])
  }
}
```


```html
<div>
  <p>我是段落</p>
  <p>我是段落</p>
  <p>我是段落</p>
  <span>{{msg}}</span>
</div>
```

```js
import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("p", null, "我是段落"),
    _createVNode("p", null, "我是段落"),
    _createVNode("p", null, "我是段落"),
    _createVNode("span", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ]))
}
// Check the console for the AST
```


> Vue2中无论元素是否参与更新,每次都会重新创建,然后渲染
> Vue3对于不参加更新的元素,会做静态提升,只会被创建一次,在渲染时直接**复用**第一次创建的,以达到性能提升,速度变快…

```html
<div>
  <p>我是段落</p>
  <p>我是段落</p>
  <p>我是段落</p>
  <span>{{msg}}</span>
</div>

```

```js
import { createVNode as _createVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createBlock as _createBlock } from "vue"

const _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "我是段落", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "我是段落", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "我是段落", -1 /* HOISTED */)

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _createVNode("span", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
  ]))
}

// Check the console for the AST
```


> 默认情况onClick会被视为动态绑定,所以每次都会去追踪它的变化
> 但是因为是统一和函数,所以没有追踪变化,直接缓存起来复用即可

```html
<div>
  <button @onclick="myFn">按钮</button>
</div>
```

未开启事件监听缓缓存

```js
function render() {
  with(this) {
    return _c('div', [_c('button', {
      on: {
        "onclick": myFn
      }
    }, [_v("按钮")])])
  }
}
```

开启事件监听缓存

```js
import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createBlock("div", null, [
    _createVNode("button", {
      onOnclick: _cache[1] || (_cache[1] = (...args) => (_ctx.myFn && _ctx.myFn(...args)))
    }, "按钮", 32 /* HYDRATE_EVENTS */)
  ]))
}

// Check the console for the AST

```


