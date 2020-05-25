# JavaScript  Code Smell

* **不应该在 generators 以外的地方定义 yield**

```
**不符合**
```

```
```jsx
function foo() {
  for (var i = 0; i < 5; i++) {
    yield i * 2;
  }
}
```
```

```
**符合**
```

```
```jsx
function * foo() {
  for (var i = 0; i < 5; i++) {
    yield i * 2;
  }
}
```
```

* **函数返回值不应该是固定的**

```
**不符合**
```

```
```jsx
function foo(a) {
    let b = 12
    if (a) {
        return b
    }
    return b
}
```
```

* **变量应该明确声明**

```
**不符合**
```

```
```jsx
function foo（）{
	i = 1;  不符合规范  i 是一个全局的定义
  for（j = 0; j <array.length; j ++）{  j 也是一个全局的定义
     ...
  }
}
```
```

```
**符合规范**
```

```
```jsx
function * foo() {
  for (var i = 0; i < 5; i++) {
    yield i * 2;
  }
}
```
```

* **保留关键字不应该用于标识符**

```
> `await` `class` `const` `enum` `export` `extends` `implements` `import` `interface` `let` `package` `private` `protected` `public` `static` `super` `yield`
```

```
**不符合**
```

```
```jsx
var package = document.getElementsByName("foo");
var someData = { package: true };
```
```

```
**符合**
```

```
```jsx
var elements = document.getElementsByName("foo");
```
```

* **不应使用八进制值**

```
> 以零开头的整数文字是八进制而不是十进制值。虽然完全支持使用八进制值，但大多数开发人员都没有使用它们的经验。它们可能无法识别八进制值，而是将它们误认为是十进制值。
```

```
**不符合**
```

```
```jsx
var myNumber = 010;   8 
```

```
 如果在严格模式下 使用八进制会报错
"use strict";
var myNumber = 010;   Octal literals are not allowed in strict mode.
```
```

```
**符合**
```

```
```jsx
var myNumber = 8;
```
```

* **使用switch应该使用break结束判断**

```
> 如果在使用switch时未明确break，则会继续执行下面的判断语句。
虽然这有时是故意的，但通常会导致意外的错误。
```

```
**不符合**
```

```
```jsx
switch (myVariable) {
  case 1:
    foo();
    break;
  case 2:   执行了这个 还会继续执行default 里面的方法
    doSomething();
  default:
    doSomethingElse();
    break;
}
```
```

```
**符合**
```

```
```jsx
switch (myVariable) {
  case 1:
    foo();
    break;
  case 2:
    doSomething();
    break;
  default:
    doSomethingElse();
    break;
}
```
```

* **不应该在“for”循环终止条件中使用等式运算符**

```
**不符合**
```

```
```jsx
for (var i = 1; i != 10; i += 2) {  这个循环从9 直接就到 11， 会导致无限循环
  ...
}
```
```

```
**符合**
```

```
```jsx
for (var i = 1; i <= 10; i += 2) {
  ...
}
```
```

* **条件执行的单行应该用缩进表示**

```
**不符合**
```

```
```jsx
if (condition)   这样写执行没什么问题， 但是可读性极差
doTheThing();
```

```
doTheOtherThing();
somethingElseEntirely();
```

```
foo();
```
```

```
**符合**
```

```
```jsx
if (condition)
  doTheThing();
```

```
doTheOtherThing();
somethingElseEntirely();
```

```
foo();
```
```

* **新的条件判断应该从新的一行开始写**

```
**不符合**
```

```
```jsx
if (condition1) {
   ...
} if (condition2) {   Noncompliant
  ...
}
```
```

```
**符合**
```

```
```jsx
if (condition1) {
   ...
} else if (condition2) {
  ...
}
```

```
 Or:
```

```
if (condition1) {
   ...
}
```

```
if (condition2) {
  ...
}
```
```

* **不应该重复赋值**

```
**不符合**
```

```
```jsx
a = b;
c = a;
b = c;  这个时候 c 是等于 b 的  
```
```

```
**符合规范**
```

```
```jsx
a = b;
c = a;
```
```

* **定义的变量或者方法应该使用**

```
**不符合**
```

```
```jsx
function getLength(a, b, c) {
  const strings = [];   这个数组定义的定义的作用是啥 ？
  strings.push(a);
  strings.push(b);
  strings.push(c);
```

```
  return a.length + b.length + c.length;
}
```
```

```
**符合规范**
```

```
```jsx
function getLength(a, b, c) {
  return a.length + b.length + c.length;
}
```
```

* **数组的索引应该为数字**

```
**不符合**
```

```
```jsx
let arr = [];
arr[0] = 'a';
arr['name'] = 'bob';
arr[1] = 'foo';
```
```

```
**符合**
```

```
```jsx
let obj = {
  name: 'bob',
  arr: ['a', 'foo']
};
```
```

* **不应在数组上使用“delete”**

```
> delete运算符可用于从任何对象中删除属性。
数组是对象，因此也可以在这里使用delete运算符，但如果是，则数组中将留下一个位置，这个索引不会被删除，数组的长度是不会变的。
正确的方法应该是使用：`splice`  `pop` `shift`
```

```
**不符合**
```

```
```jsx
var myArray = ['a', 'b', 'c', 'd'];
```

```
delete myArray[2];   ['a', 'b', undefined, 'd']
console.log(myArray[2]);  undefined
console.log(myArray.length);  4
```
```

```
**符合**
```

```
```jsx
var myArray = ['a', 'b', 'c', 'd'];
```

```
removed = myArray.splice(2, 1);   ['a', 'b', 'd']
console.log(myArray[2]);  'd'
console.log(myArray.length);  3
```
```

* **变量和函数不应该重复声明**

```
**不符合**
```

```
```jsx
var a = 'foo';
function a() {}
console.log(a);    "foo"
```

```
function myFunc(arg) {
  var arg = "event";  这个参数申明被覆盖掉了
}
```

```
fun();  "bar"
```

```
function fun() {
  console.log("foo");
}
```

```
fun();  "bar"
```

```
function fun() {   重复声明覆盖了上面的函数
  console.log("bar");
}
```

```
fun();  "bar"
```
```

```
**符合**
```

```
```jsx
var a = 'foo';
function otherName() {}
console.log(a);
```

```
function myFunc(arg) {
  var newName = "event";
}
```

```
fun();  "foo"
```

```
function fun() {
  console.log("foo");
}
```

```
fun();  "foo"
```

```
function printBar() {
  console.log("bar");
}
```

```
printBar();  "bar"
```
```

* **多行块应该用大括号括起来**

```
**不符合**
```

```
```jsx
function a() {
    console.log('a: ', a);
}
function b(){
    console.log('b: ', b);
}
```

```
if (false) 
    a()
    b()  这里还是会执行
```

```
function c(i) {
    console.log('i: ', i);
}
```

```
for (let i = 0; i<9; i++)
    console.log(i);
    c(i)  这里会报错  拿不到i
```
```

```
**符合**
```

```
```jsx
function a() {
    console.log('a: ', a);
}
function b(){
    console.log('b: ', b);
}
```

```
if (false) {
    a()
    b() 
}
```

```
function c(i) {
    console.log('i: ', i);
}
```

```
for (let i = 0; i<9; i++) {
    console.log(i);
    c(i) 
}
```
```

* **判断中不应该存在完全相同的代码**

```
**不符合**
```

```
```jsx
switch (i) {
  case 1:
    doFirstThing();
    doSomething();
    break;
  case 2:
    doSomethingDifferent();
    break;
  case 3:   跟上面一模一样
    doFirstThing();
    doSomething();
    break;
  default:
    doTheRest();
}
```

```
if (a >= 0 && a < 10) {
  doFirstThing();
  doTheThing();
}
else if (a >= 10 && a < 20) {
  doTheOtherThing();
}
else if (a >= 20 && a < 50) {
  doFirstThing();
  doTheThing();    跟上面一模一样
}
else {
  doTheRest();
}
```
```

```
**符合**
```

```
```jsx
switch (i) {
  case 1:
  case 3:
    doFirstThing();
    doSomething();
    break;
  case 2:
    doSomethingDifferent();
    break;
  default:
    doTheRest();
}
```

```
if ((a >= 0 && a < 10) || (a >= 20 && a < 50)) {
  doFirstThing();
  doTheThing();
} else if (a >= 10 && a < 20) {
  doTheOtherThing();
} else {
  doTheRest();
}
```
```

* **参数如果有默认值应该放在最后**

```
**不符合**
```

```
```jsx
function multiply(a = 1, b) {
  return a*b;
}
```

```
var x = multiply(42);   这里会返回NaN
```
```

```
**符合**
```

```
```jsx
function multiply(b, a = 1) {
  return a*b;
}
```

```
var x = multiply(42);  42
```
```

[https://rules.sonarsource.com/javascript/type/Code Smell/RSPEC-1751](https://rules.sonarsource.com/javascript/type/Code%20Smell/RSPEC-1751)


#前端/JavaScript