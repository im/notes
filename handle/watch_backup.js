const chokidar = require('chokidar')
const fs = require('fs')
// const debounce = require('./debounce')
// const generate = require('./generate')

const { DB_PATH, DELAY_TIME } = require('./constant')
// const debounceGenerate = debounce(generate, DELAY_TIME)

// const watcher = chokidar.watch('/Users/mi/Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/database.sqlite', {
//     ignored: /(^|[\/\\])\../,
//     persistent: true,
// })
// const log = console.log.bind(console)
// Add event listeners.
// watcher
//     .on('add', path => log(`File ${path} has been added`))
//     .on('all', path => log(`File ${path} has been alll`))
//     .on('change', path => log(`File ${path} has been changed`))
//     .on('unlink', path => log(`File ${path} has been removed`))

fs.watchFile(DB_PATH, () => {
    console.log(111)
})