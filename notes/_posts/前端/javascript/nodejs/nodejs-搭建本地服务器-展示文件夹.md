---
title: nodejs 搭建本地服务器 展示文件夹
date: 2021-12-01
tags:
  - 前端 
  - javascript/nodejs 
 
---


```js
const express = require('express')
const http = require('http')
const app = express()
const port = 80
var serveIndex = require('serve-index')

app.use(express.static('../'))
app.use(serveIndex('../'))

function getIPAdress() {
    let interfaces = require('os').networkInterfaces()
    for (var devName in interfaces) {
        var iface = interfaces[devName]
        for (var i = 0; i < iface.length; i++) {
            let alias = iface[i]
            if (
                alias.family === 'IPv4' &&
                alias.address !== '127.0.0.1' &&
                !alias.internal
            ) {
                // console.log(alias.address);

                return alias.address
            }
        }
    }
}

var server = http.createServer(app)

server.listen(port, () => {
    console.log(`Example app listening at http://${getIPAdress()}:${port}`)
})
```


