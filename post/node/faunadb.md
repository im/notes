---
title: faunadb
---

# faunadb 

[官网地址](https://fauna.com/)

## 什么是FaunaDB？   

FaunaDB是一个无服务器的云数据库，可以为您提供无处不在的低延迟访问应用数据，而不会牺牲数据的正确性。它消除了用于手动处理数据异常，安全性和扩展的应用程序代码层，为您创建更友好的开发体验，并为您的用户提供更好的应用体验。



> 以下所有代码基于nodejs


## 创建数据库

![创建数据库](../../images/faunadb/create.png)

## 创建集合（Collections)

> 我把这种数据集合理解为一张数据表， 所有的增删改查都在这张表上操作

#### 创建秘钥（secret）

`每个秘钥对应一个数据库，你可以创建多个数据库`

![创建秘钥](../../images/faunadb/create-secret.png)

#### 获取秘钥  

![获取秘钥](../../images/faunadb/get-secret.png)

#### 初始化集合（Collections）

安装 fauna 提供的nodejs 模块 [faunadb npm](https://www.npmjs.com/package/faunadb)

```bash
npm install faunadb -S
```

创建一个名叫 `posts` 的集合

```js
const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
    secret: FAUNADB_SECRET // 刚才创建好的秘钥
})
client.query(q.CreateCollection({ name: 'posts' }))
```

::: tip
做完这一步就可以对这个集合（表）里做增删改查的操作了 
[官方文档](https://docs.fauna.com/fauna/current/tutorials/crud#update)
::: 

## 操作数据

> 在操作集合数据之前，得先创建一个 faunadb client

``` js
const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({
    secret: FAUNADB_SECRET // 刚才创建好的秘钥
})
```


#### 添加数据

```js
const data = {
    title: "faunadb 入门",
    author: "tangxiaomi",
    tag: ["node"],
    content: "添加数据"
}
const post = {
    data
}
client.query(q.Create(q.Collection('posts'), post)).then(ret => {
    console.log('ret: ', ret);
}).catch(error => {
    console.log('error: ', error);
})
```

![添加数据](../../images/faunadb/add.png)

::: danger 踩坑预警
在同一个数据库，删除除一个集合，再以相同名称创建这个集合，不能再次往里面添加数据， 不知道是不是我操作不对，还是设计如此 ， 有待深究 。。 😀😀
:::

#### 删除数据

```js
// DATA_ID 当前数据id
client.query(q.Delete(q.Ref(q.Collection("posts"), DATA_ID))).then(ret => {
    console.log('ret: ', ret);
}).catch(error => {
    console.log('error: ', error);
})
```

#### 修改数据

```js
// DATA_ID 当前数据id
client.query(q.Update(q.Ref(q.Collection("posts"), DATA_ID),{ data: { tags: ["pet", "cute"] } })).then((ret) => {
    // 将这条数据的 tags 修改成 ["pet", "cute"]
    console.log(ret)
})
```

#### 创建索引

```js
client.query(q.CreateIndex({ name: "all_posts",
      source: q.Collection("posts")).then((ret) => {
    console.log(ret)
})
// 在标题上创建一个索引
client.query(q.CreateIndex({ name: "posts_by_title",
      source: q.Collection("posts"),
      terms: [{ field: ["data", "title"] }] })).then((ret) => {
    console.log(ret)
})
```

#### 查询数据

* 通过索引查询

```js
// DATA_ID 当前数据id
client.query(q.Paginate(q.Match(q.Ref("indexes/all_posts")))).then((ret) => {
    // 将这条数据的 tags 修改成 ["pet", "cute"]
    console.log(ret)
})
```

* 通过id查询

```js
// DATA_ID 当前数据id
client.query(q.Get(q.Ref(q.Collection("posts"), DATA_ID))).then((ret) => {
    // 将这条数据的 tags 修改成 ["pet", "cute"]
    console.log(ret)
})
```

#### 替换数据

```js
// DATA_ID 当前数据id
client.query(
    q.Replace(
      q.Ref(q.Collection("posts"), DATA_ID),
      { data: { title: "My dog and other marvels" } }))
  .then((ret) => console.log(ret))
```