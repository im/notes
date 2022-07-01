module.exports = (str) => {
    const crypto = require('crypto')
    var md5sum = crypto.createHash('md5')
    md5sum.update(str)
    str = md5sum.digest('hex')
    return str
}