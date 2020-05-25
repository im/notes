# chrome调试

## *console*

```jsx
console.log("打印字符串"); // 在控制台打印自定义字符串
console.error("我是个错误"); // 在控制台打印自定义错误信息
console.info("我是个信息"); // 在控制台打印自定义信息
console.warn("我是个警告"); // 在控制台打印自定义警告信息
console.debug("我是个调试"); // 在控制台打印自定义调试信息
cosole.clear(); // 清空控制台（这个下方截图中没有）
```

![](chrome%E8%B0%83%E8%AF%95/console.png)

## 格式化输出

```jsx
console.log("%s年", 2016); // %s表示字符串
console.log("%d年%d月", 2016, 11); // %d表示整数
console.log("%f", 3.1415926); // %f小数
console.log("%o",console); // %o表示对象
console.log("%c自定义样式", "font-size: 30px;color: #00f");
console.log("%c我是%c自定义样式", "font-size: 20px; color: green", "font-size: 10px; color: red");
```

![](chrome%E8%B0%83%E8%AF%95/style.png)
## DOM输出

```jsx
var ul = document.getElementsByTagName("ul");
console.dirxml(ul);
```

![](chrome%E8%B0%83%E8%AF%95/dom.png)

## 对象输出

```jsx
var o = {
    name: "Lily",
    age: 18
};
console.dir(o);
```

![](chrome%E8%B0%83%E8%AF%95/object.png)

> 对于多个对象的集合，可以这样，输出更清晰：  

```jsx
var stu = [{
    name: "Bob",
    age: 13,
    hobby:"playing"
},{
    name: "Lucy",
    age: 14,
    hobby: "reading"
},{
    name: "Jane",
    age: 11,
    hobby: "shopping"
}];
console.table(stu);
```

![](chrome%E8%B0%83%E8%AF%95/table.png)

## 成组输出

```jsx
//建立一个参数组
console.group("start"); // 引号里是组名，自己起
console.log("sub1");
console.log("sub1");
console.log("sub1");
console.groupEnd("end");
```

![](chrome%E8%B0%83%E8%AF%95/group.png)

## 函数计数和跟踪

```jsx
function fib(n){
    //输出前n个斐波那契数列值
    if (n == 0) return;
    console.count("调用次数");
    //放在函数里，每当这句代码运行输出所在函数执行次数
    console.trace();
    //显示函数调用轨迹(访问调用栈）
    var a = arguments[1] || 1;
    var b = arguments[2] || 1;
    console.log("fib=" + a);
    [a, b] = [b, a + b];
    fib(--n, a, b);
}
fib(6);
```

![](chrome%E8%B0%83%E8%AF%95/count.png)
## 计时

```jsx
console.time(); //计时开始
fib(100); // 用上述函数计算100个斐波那契数
console.timeEnd(); // 计时结束并输出时长
```

![](chrome%E8%B0%83%E8%AF%95/time.png)

## 断言

> js中断言语句，当第一个表达式或参数为true时候什么也不发生，为false时报错，虽然会报错但是不会终止程序执行  

```jsx
console.assert(true, '我错了');
console.assert(false, '我真的错了');
```

![](chrome%E8%B0%83%E8%AF%95/assert.png)
## debugger

> 单步调试就是点一下，执行一句程序，并且可以查看当前作用域可见的所有变量和值。而debugger就是告诉程序在那里停下来进行单步调试，俗称断点。  
![](chrome%E8%B0%83%E8%AF%95/debugger.png)

#前端/chrome