const MD5 = require('./md5')
const fs = require('fs-extra')
const { CACHE_PATH } = require('./constant')
module.exports = {

    get: () => {
        const content = fs.readJsonSync(CACHE_PATH) || {}
        return content
    },

    set: (notes) => {
        const json = {}
        notes.forEach(note => {
            const hash = MD5(note.title + note.timer)
            json[note.id] = hash
        })
        fs.outputJsonSync(CACHE_PATH,json)
    },
}