---
title: JavaScript里的循环方法：forEach，for-in，for-of
date: 2022-07-05
tags:
 
---


JavaScript诞生已经有20多年了，我们一直使用的用来循环一个数组的方法是这样的：

```js
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
```

自从JavaScript5起，我们开始可以使用内置的 [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法：

```js
myArray.forEach(function (value) {
  console.log(value);
});
```

写法简单了许多，但也有短处：你不能中断循环(使用break语句或使用return语句。

JavaScript里还有一种循环方法：for–in。
for-in 循环实际是为循环**enumerable**对象而设计的：

```js
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// 输出:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

你也可以用它来循环一个数组：
```js
for (var index in myArray) {    // 不推荐这样
  console.log(myArray[index]);
}
```

不推荐用for-in来循环一个数组，因为，不像对象，数组的index跟普通的对象属性不一样，是重要的数值序列指标。
总之，for–in是用来循环带有字符串key的对象的方法。


JavaScript6里引入了一种新的循环方法，它就是for-of循环，它既比传统的for循环简洁，同时弥补了forEach和for-in循环的短板。
我们看一下它的for-of的语法：

```js
for (var value of myArray) {
  console.log(value);
}
```

for-of的语法看起来跟for-in很相似，但它的功能却丰富的多，它能循环很多东西。




```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

我们可以使用const来替代let，这样它就变成了在循环里的不可修改的静态变量。

```js
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```



```js
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```



```js
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```



```js
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]
```



```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```



循环一个DOM collections，比如NodeList，之前我们讨论过 [如何循环一个NodeList](http://www.webhek.com/foreach-queryselectorall-nodelist) ，现在方便了，可以直接使用for-of循环：

```js
// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```



for–of循环并不能直接使用在普通的对象上，但如果我们按对象所拥有的属性进行循环，可使用内置的Object.keys()方法：

```js
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```



我们可循环一个生成器( [generators](https://www.webhek.com/en-US/docs/Web/JavaScript/Reference/Statements/function*) ):

```js
function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}
```



