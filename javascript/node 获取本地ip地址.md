# node 获取本地ip地址

## node 获取内网ip

```jsx
function getLocalIP() {
    const os = require('os');
    const ifaces = os.networkInterfaces();
    let locatIp = '127.0.0.1';
    try {
        Object.keys(ifaces).forEach((item) => {
            ifaces[item].forEach((networkData) => {
                if (networkData.address !== '127.0.0.1' && networkData.family === 'IPv4' && !networkData.internal) {
                    locatIp = networkData.address;
                }
            });
        });
    } catch (e) {
        console.log(e);
    }
    return locatIp;
}
```

#前端/JavaScript