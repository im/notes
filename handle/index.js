// require('./watch')
const cache = require('./cache')
const generate = require('./generate')
const { DELAY_TIME } = require('./constant')

// cache.clear()

// setInterval(() => {
//     generate()
// }, DELAY_TIME)

generate()
