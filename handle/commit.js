const exec = require('child_process').execSync
const chalk = require('chalk')

module.exports = (notes) => {
    const { title, updateDate } = notes[0]

    const messge = `Update Note: ${title} Update time: ${updateDate}`
    console.log('messge: ', messge)

    exec('git add .')
    // console.log('git add .')
    exec(`git commit -m "${messge}"`)
    // console.log(`git commit -m ${messge}`)
    exec(`git pull`)

    // exec(`git push origin master`)

    // console.log(`Submission to Github successful, update time: ${updateDate} update notes:${title}`)
}