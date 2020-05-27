# Array



#### every()

回调函数的每一次返回都为 true 值，返回 true ，否则返回 false。

##### 语法
```js
arr.every(callback)
```

##### 参数

* callback  
用来测试每个元素的函数，它可以接收三个参数：
    - element  
      用于测试的当前值。
    - index可选  
      用于测试的当前值的索引。
    - array可选  
      调用 every 的当前数组。

```js
function isBelowThreshold(currentValue, index, array) {
    console.log('array: ', array); // [ 1, 30, 39, 29, 10, 13 ]
    console.log('index: ', index); // 0,1,2,3
    console.log('currentValue: ', currentValue); // 1, 30 , 39.....
    return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true

var array1 = [1, 30, 39, 29, 50, 13];
console.log(array1.every(isBelowThreshold)); // false 这里面有个 50
```



#### some()

回调函数的第一次返回为 true 值，直接返回 true ，所有的元素都 为false 才会返回false

##### 语法
```js
arr.some(callback)
```

##### 参数

* callback  
用来测试每个元素的函数，它可以接收三个参数：
    - element  
      用于测试的当前值。
    - index可选  
      用于测试的当前值的索引。
    - array可选  
      调用 every 的当前数组。

```js
function isBelowThreshold(currentValue, index, array) {
    return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.some(isBelowThreshold)); // true

var array1 = [1, 30, 39, 40, 10, 13];
console.log(array1.some(isBelowThreshold)); // 就算里面有一个值大于40 也会返回true
```

