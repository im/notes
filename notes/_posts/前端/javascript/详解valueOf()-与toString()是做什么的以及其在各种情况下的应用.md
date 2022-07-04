---
title: 详解valueOf() 与toString()是做什么的以及其在各种情况下的应用
date: 2021-12-01
tags:
  - 前端 
  - javascript 
 
---



各种引用对象都继承或最终继承于 Object ，使用着Object的原型，所以它们不管何时都有 toString() 和 valueOf() 方法，只不过有些类型的原型重写了这两个方法，比如 Function 实例的原型就重写了 toString() 方法，按照原型链的规则，如果方法和属性在原型链的各原型中有重名，则优先使用最近的方法和属性。

---

先看看常用的引用类型重写了这两个方法的情况

* Function 重写了 toString()
* Date 重写了 toString() 也重写了 valueOf()
* Array 重写了 toString()

<!--more-->


对于不同的引用对象，使用的toString()也不一定相同
我们来看看其对三个最常见的引用对象的处理。



很简单，就是function本身的样子

```js
let fn = function () {}
console.log(fn == 'function () {}') //true
//上一篇讲到如果用双等号的一边是引用类型
//（除了Date直接用toString（）转换）则先将元素进行valueOf()转换，再把它用toString()转换后进行比较
//https://blog.csdn.net/weixin_42476799/article/details/89296873
```

```js
let fn = function() { console.log(1) }
console.log(fn == 'function() { console.log(1) }')//true
```

这时候问题来了

```js
let fn = function() { console.log(1)}//这边末尾大括号前缺了个空格
console.log(fn == 'function() { console.log(1) }')//它是true呢还是false呢
```

结果是false
也就是说function进行了toString()转换后与我们书写的function完全一样，多个空格少个空格都不行

```js
let fn = function() {//没有空格
console.log(1)
}
console.log(fn == 'function() {\nconsole.log(1)\n}')//它是true呢还是false呢
```

false,这又是为什么呢，因为toString()时会把注释也给加进去。。

```js
let fn = function() {//没有空格
console.log(1)
}
console.log(fn == 'function() {//没有空格\nconsole.log(1)\n}')//true
```

所以现在可以得出结论了function对象的toString()到底做了些什么呢，把我们写function内容完完全全复制成为了字符串。
如果你觉得写一些\n什么的麻烦，可以试试es6的``,也就是模板字符串。比如：

```js
let fn = function() {//没有空格
console.log(1)
}
console.log(fn == `function() {//没有空格
console.log(1)
}`)//true
```



我们先来看一下 Array 是怎样的

```js
let arr = [1,2,3,4,5,2,1,5,2,1,5]
console.log(arr == '1,2,3,4,5,2,1,5,2,1,5')//true
```

它就简单多了我们再来看看它会不会出现function那种要与原函数写得完全一样

```js
var arr = [1,2,3,4,5,2,1,5,2, 1,5]
console.log(arr == '1,2,3,4,5,2,1,5,2,1,5')//true
```

所以就可以得出结论了arr.toString()就是将每个元素用逗号隔开类似于arr.join(’,’)



```js
let date = new Date('1998-02-23')
console.log(date == 'Mon Feb 23 1998 08:00:00 GMT+0800 (中国标准时间)')//true
```

它也比较直接，只要你传的值是它能解析的日期格式，toString()后给你的是和上边格式一样的字符串



```js
let obj1 = {},obj2 = {name:'name'}
console.log(obj2 == '[object Object]')//true
console.log(obj1 == '[object Object]')//true
```

Object不管写成啥样，都会变成’[object Object]'这个字符串




```js
let fn = function () {}
console.log(fn.valueOf() === fn)//true
```

也就是说fn.valueOf()返回的是fn本身。是不是很无聊。



```js
let arr = [1,2,3,4,5,2,1,5,2, 1,5]
console.log(arr.valueOf() === arr)//Array也是返回自身
```



```js
let obj = {}
console.log(obj.valueOf() === obj)//Object也是返回自身
```



难道date也是返回自身吗

```js
let date = new Date('1998-02-23')
console.log(date.valueOf() === date)//false
```

前文提到，三个常用的引用对象中只有Date重写了valueOf()方法，那肯定有它的独到之处，我们来看看它是什么

```js
let date = new Date('1998-02-23')
console.log(date.valueOf() === 888192000000 )//true
```

原来它是返回从 1970 年 1 月 1 日午夜开始计的毫秒数。

我们现在知道了这四个引用对象用上toString和valueOf后会变成啥样，但我们还不知道它们各自在什么时候使用
那我们来看看

从上一篇中我们发现，双等号一边如果是引用类型的话首先会使用valueOf(),再使用toString()

```js
let arr = []
arr.toString = function () { console.log('arrtoString') return this}
arr.valueOf = function () { console.log('arrvalueOf') return this }
console.log(arr)//直接返回arr本身，不进行转换
alert(arr)//只用toString
Number(arr)//先用valueOf再用toString
String(arr)//只用toString
console.log(+arr)//先用valueOf再用toString
```

```js
let fn = function(){}
fn.toString = function () { console.log('fntoString') return this}
fn.valueOf = function () { console.log('fnvalueOf') return this}
console.log(fn)//先用toString再用valueOf
alert(fn)//用toString
Number(fn)//先用valueOf再用toString
String(fn)//只用toString
console.log(+fn)//先用valueOf再用toString
```

```js
let date = new Date()
date.toString = function () { console.log('datetoString') return this}
date.valueOf = function () { console.log('datevalueOf') return this}
console.log(date)//执行两次toString(),不太明白
alert(date)//用一次toString
Number(date)//先用valueOf再用toString
String(date)//只用toString
console.log(+date)//先用valueOf再用toString
```

```js
let obj = {}
obj.toString = function () { console.log('objtoString') return this}
obj.valueOf = function () { console.log('objvalueOf') return this}
console.log(obj)//直接展现，不用任何转换
alert(obj)//用一次toString
Number(obj)//先用valueOf再用toString
String(obj)//只用toString
console.log(+obj)//先用valueOf再用toString
```

所以可以得出结论了，

* console.log()直接打印的话中除了object直接打印、date执行两次toString,其余都toString再用valueOf,
* alert(),String()中都只使用了toString()，
* 如果需要进行运算，都是先进行valueOf再toString
* 总而言之，与数字、运算有关的用valueOf优先,其他都是toString优先


