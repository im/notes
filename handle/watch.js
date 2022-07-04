const fs = require('fs')
const debounce = require('./debounce')
const generate = require('./generate')

const { DB_PATH, DELAY_TIME } = require('./constant')
const debounceGenerate = debounce(generate, DELAY_TIME)

fs.watchFile(DB_PATH, () => {
    debounceGenerate()
})

// generate()