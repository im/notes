---
title: Flex 布局教程：实例篇
date: 2021-12-01
tags:
  - 前端 
  - css 
 
---

# Flex 布局教程：实例篇
[[Flex 布局教程：语法篇]] 介绍了Flex布局的语法，今天介绍常见布局的Flex写法。

你会看到，不管是什么布局，Flex往往都可以几行命令搞定。

![bg2015071327.png](/notes/note_images/9FDCA9B1-1689-4A7A-B73F-C7CD0673B260-82216-00013B99E5837699/bg2015071327.png)
我只列出代码，详细的语法解释请查阅 [[Flex 布局教程：语法篇]]。我的主要参考资料是 [Landon Schropp](http://davidwalsh.name/flexbox-dice) 的文章和 [Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/) 。
<!--more-->
## 一、骰子的布局

骰子的一面，最多可以放置9个点。

![bg2015071328.png](/notes/note_images/B9327FF5-53D1-48B6-8112-54858AB2EAD9-82216-00013B99E56F3461/bg2015071328.png)
下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到 [codepen](http://codepen.io/LandonSchropp/pen/KpzzGo) 查看Demo。

![bg2015071329.png](/notes/note_images/6F187474-2CE9-4956-BFB1-57542F68BC2B-82216-00013B99E55A3EA3/bg2015071329.png)
如果不加说明，本节的HTML模板一律如下。

```
<div class="box">
  <span class="item"></span>
</div>
```

上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。

### 1.1 单项目

首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。

![bg2015071301.png](/notes/note_images/D0DE2CD3-858A-4C13-9DF7-712D00E2FB07-82216-00013B99E54485B6/bg2015071301.png)

```
.box {
  display: flex;
}
```

设置项目的对齐方式，就能实现居中对齐和右对齐。

![bg2015071302.png](/notes/note_images/16D7F759-37E9-49C2-9C2C-AA845BF13DE6-82216-00013B99E52E2265/bg2015071302.png)

```
.box {
  display: flex;
  justify-content: center;
}
```

![bg2015071303.png](/notes/note_images/4A38CF2D-68AF-483C-A38D-DE596A046209-82216-00013B99E51859DC/bg2015071303.png)

```
.box {
  display: flex;
  justify-content: flex-end;
}
```

设置交叉轴对齐方式，可以垂直移动主轴。

![bg2015071304.png](/notes/note_images/425ED93B-2B41-4356-A0B6-87C679DB3BE9-82216-00013B99E5038564/bg2015071304.png)

```
.box {
  display: flex;
  align-items: center;
}
```

![bg2015071305.png](/notes/note_images/E9E2D3BD-1BDD-4D9D-83A5-7997811C75C1-82216-00013B99E4EB52F0/bg2015071305.png)

```
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

![bg2015071306.png](/notes/note_images/979B6A58-B2E8-4DF8-ACC1-A6D9EA610057-82216-00013B99E4D10523/bg2015071306.png)

```
.box {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
```

![bg2015071307.png](/notes/note_images/9EF8DC98-1AA0-476A-8668-BCDE1D5D89E2-82216-00013B99E4BA7271/bg2015071307.png)

```
.box {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
```

### 1.2 双项目

![bg2015071308.png](/notes/note_images/9805EAA8-E191-443D-9A2C-D0FFF813FC69-82216-00013B99E4A66DAE/bg2015071308.png)

```
.box {
  display: flex;
  justify-content: space-between;
}
```

![bg2015071309.png](/notes/note_images/67EAECDB-6A37-4BCC-B19C-5B14988D82B7-82216-00013B99E490E351/bg2015071309.png)
 
```
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

![bg2015071310.png](/notes/note_images/2317F724-292D-45B2-A7FD-E3599A83D986-82216-00013B99E479A8C1/bg2015071310.png)
 
```
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
```

![bg2015071311.png](/notes/note_images/40D4ABF4-C2AD-44FA-9CCE-A23448AB0A6D-82216-00013B99E4642FB7/bg2015071311.png)
 
```
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
```

![bg2015071312.png](/notes/note_images/E93CE06C-D34E-4DE1-BE04-678806D909BC-82216-00013B99E44CB4BF/bg2015071312.png)
 
```
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}
```

![bg2015071313.png](/notes/note_images/BA48AAA4-C094-4EE7-8D73-C498144052C5-82216-00013B99E4371415/bg2015071313.png)
 
```
.box {
  display: flex;
  justify-content: space-between;
}

.item:nth-child(2) {
  align-self: flex-end;
}
```

### 1.3 三项目

![bg2015071314.png](/notes/note_images/E284042C-CCAA-492E-A88B-7D73AFDEEAE5-82216-00013B99E4216841/bg2015071314.png)
 
```
.box {
  display: flex;
}

.item:nth-child(2) {
  align-self: center;
}

.item:nth-child(3) {
  align-self: flex-end;
}
```

### 1.4 四项目

![bg2015071315.png](/notes/note_images/8678117E-0F65-4692-BDB7-CD49F3489AB6-82216-00013B99E40A69F6/bg2015071315.png)
 
```
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
```

![bg2015071316.png](/notes/note_images/418E6CD1-E732-4588-833F-2326CD3FFCE2-82216-00013B99E3F4A218/bg2015071316.png)
HTML代码如下。

 
```
<div class="box">
  <div class="column">
    <span class="item"></span>
    <span class="item"></span>
  </div>
  <div class="column">
    <span class="item"></span>
    <span class="item"></span>
  </div>
</div>
```

CSS代码如下。

 
```
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
```

### 1.5 六项目

![bg2015071317.png](/notes/note_images/8BE4F130-DACD-42D6-83B3-8CFCE80704F6-82216-00013B99E3D3B2A8/bg2015071317.png)
 
```
.box {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

![bg2015071318.png](/notes/note_images/A3447330-F63F-4FA0-A4BC-C73DA0E464F3-82216-00013B99E3BEDB3A/bg2015071318.png)
 
```
.box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
}
```

![bg2015071319.png](/notes/note_images/5D085D54-34FF-4669-B354-1AA7CAE4774F-82216-00013B99E3AC5E9C/bg2015071319.png)
HTML代码如下。

 
```
<div class="box">
  <div class="row">
    <span class="item"></span>
    <span class="item"></span>
    <span class="item"></span>
  </div>
  <div class="row">
    <span class="item"></span>
  </div>
  <div class="row">
     <span class="item"></span>
     <span class="item"></span>
  </div>
</div>
```

CSS代码如下。

 
```
.box {
  display: flex;
  flex-wrap: wrap;
}

.row{
  flex-basis: 100%;
  display:flex;
}

.row:nth-child(2){
  justify-content: center;
}

.row:nth-child(3){
  justify-content: space-between;
}
```

### 1.6 九项目

![bg2015071320.png](/notes/note_images/2812AE1F-C9B2-494E-B770-CF3A30461A48-82216-00013B99E398B9EF/bg2015071320.png)
 
```
.box {
  display: flex;
  flex-wrap: wrap;
}
```

## 二、网格布局

### 2.1 基本网格布局

最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。

![bg2015071321.png](/notes/note_images/FDE8F6D2-C94D-4B80-84B1-C5F467B160F7-82216-00013B99E3869E76/bg2015071321.png)
HTML代码如下。

 
```
<div class="Grid">
  <div class="Grid-cell">...</div>
  <div class="Grid-cell">...</div>
  <div class="Grid-cell">...</div>
</div>
```

CSS代码如下。

 
```
.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}
```

### 2.2 百分比布局

某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。

![bg2015071322.png](/notes/note_images/13EEA164-E44F-4787-8934-B5818C87F8BA-82216-00013B99E3740D7B/bg2015071322.png)
HTML代码如下。

 
```
<div class="Grid">
  <div class="Grid-cell u-1of4">...</div>
  <div class="Grid-cell">...</div>
  <div class="Grid-cell u-1of3">...</div>
</div>
```

  
```
.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}

.Grid-cell.u-full {
  flex: 0 0 100%;
}

.Grid-cell.u-1of2 {
  flex: 0 0 50%;
}

.Grid-cell.u-1of3 {
  flex: 0 0 33.3333%;
}

.Grid-cell.u-1of4 {
  flex: 0 0 25%;
}
```

## 三、圣杯布局

[圣杯布局](https://en.wikipedia.org/wiki/Holy_Grail_%28web_design%29) （Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

![bg2015071323.png](/notes/note_images/EDC836E7-A804-46E9-B6AC-51CDB85BEAA2-82216-00013B99E35FEB54/bg2015071323.png)
HTML代码如下。

  
```
<body class="HolyGrail">
  <header>...</header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-content">...</main>
    <nav class="HolyGrail-nav">...</nav>
    <aside class="HolyGrail-ads">...</aside>
  </div>
  <footer>...</footer>
</body>
```

CSS代码如下。

 
```
.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header,
footer {
  flex: 1;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}

.HolyGrail-content {
  flex: 1;
}

.HolyGrail-nav, .HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
}

.HolyGrail-nav {
  /* 导航放到最左边 */
  order: -1;
}
```

如果是小屏幕，躯干的三栏自动变为垂直叠加。

 
```
@media (max-width: 768px) {
  .HolyGrail-body {
    flex-direction: column;
    flex: 1;
  }
  .HolyGrail-nav,
  .HolyGrail-ads,
  .HolyGrail-content {
    flex: auto;
  }
}
```

## 四、输入框的布局

我们常常需要在输入框的前方添加提示，后方添加按钮。

![bg2015071324.png](/notes/note_images/AAD5DE4C-8B87-4E2A-8C98-D723DE6BCA5A-82216-00013B99E34563F9/bg2015071324.png)
HTML代码如下。

 
```
<div class="InputAddOn">
  <span class="InputAddOn-item">...</span>
  <input class="InputAddOn-field">
  <button class="InputAddOn-item">...</button>
</div>
```

CSS代码如下。

 
```
.InputAddOn {
  display: flex;
}

.InputAddOn-field {
  flex: 1;
}
```

## 五、悬挂式布局

有时，主栏的左侧或右侧，需要添加一个图片栏。

![bg2015071325.png](/notes/note_images/17D86B31-9548-4107-AD9A-EC04996BD3B1-82216-00013B99E33194B9/bg2015071325.png)
HTML代码如下。

 
```
<div class="Media">
  <img class="Media-figure" src="" alt="">
  <p class="Media-body">...</p>
</div>
```

CSS代码如下。

 
```
.Media {
  display: flex;
  align-items: flex-start;
}

.Media-figure {
  margin-right: 1em;
}

.Media-body {
  flex: 1;
}
```

### 六、固定的底栏

有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。

![bg2015071326.png](/notes/note_images/BA0315AB-A74C-4E85-A56D-19254D23220A-82216-00013B99E31B6F46/bg2015071326.png)
HTML代码如下。

 
```
<body class="Site">
  <header>...</header>
  <main class="Site-content">...</main>
  <footer>...</footer>
</body>
```

CSS代码如下。

 
```
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
```

### 七，流式布局

每行的项目数固定，会自动分行。

![bg2015071330.png](/notes/note_images/A120B5AF-169E-4F4E-BFED-49AA9FA8B3F3-82216-00013B99E2FF335A/bg2015071330.png)
CSS的写法。

 
```
.parent {
  width: 200px;
  height: 150px;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.child {
  box-sizing: border-box;
  background-color: white;
  flex: 0 0 25%;
  height: 50px;
  border: 1px solid red;
}
```

（完）

[Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

