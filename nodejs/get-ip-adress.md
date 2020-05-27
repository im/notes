

# 获取ip地址

#### 代码

```js
// getIPAdress.js
const interfaces = require('os').networkInterfaces();
module.exports = () => {
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
```



#### 使用

```js
const getIPAdress = require('getIPAdress')
getIPAdress() // => 192.168.169.11
```