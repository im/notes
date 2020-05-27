---
title: Array
---

# Array


## every()

回调函数的每一次返回都为 true 值，返回 true ，否则返回 false。

### 语法
```js
arr.every(callback)
```

### 参数

* callback  
用来测试每个元素的函数，它可以接收三个参数：
    - element  
    用于测试的当前值。
    - index可选  
    用于测试的当前值的索引。
    - array可选  
    调用 every 的当前数组。


<iframe height="303" style="width: 100%;" scrolling="no" title="arr.every" src="//codepen.io/tangxiaomi/embed/xxKQXzB/?height=303&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tangxiaomi/pen/xxKQXzB/'>arr.every</a> by 糖小米 .
  (<a href='https://codepen.io/tangxiaomi'>@tangxiaomi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## some()

回调函数的第一次返回为 true 值，直接返回 true ，所有的元素都 为false 才会返回false

### 语法
```js
arr.some(callback)
```

### 参数

* callback  
用来测试每个元素的函数，它可以接收三个参数：
    - element  
    用于测试的当前值。
    - index可选  
    用于测试的当前值的索引。
    - array可选  
    调用 every 的当前数组。

<iframe height="265" style="width: 100%;" scrolling="no" title="array.some" src="//codepen.io/tangxiaomi/embed/wvwQrEd/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tangxiaomi/pen/wvwQrEd/'>array.some</a> by 糖小米 .
  (<a href='https://codepen.io/tangxiaomi'>@tangxiaomi</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>