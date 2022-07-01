const exec = require('child_process').execSync
const chalk = require('chalk')

module.exports = (notes) => {
    console.log('notes: ', notes)
    const note = notes[0]

    const messge = note.title

    exec('git add .')
    console.log('git add .')
    exec(`git commit -m ${messge}`)
    console.log(`git commit -m ${messge}`)
    exec(`git pull`)
    console.log('git pull')
}