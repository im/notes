const exec = require('child_process').execSync
const chalk = require('chalk')

module.exports = (notes) => {
    const note = notes[0]

    const messge = note.title

    exec('git add .')
    chalk.green('git add .')
    exec(`git commit -m ${messge}`)
    chalk.green(`git commit -m ${messge}`)
    exec(`git pull`)
    chalk.green('git pull')
}