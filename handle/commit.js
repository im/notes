const exec = require('child_process').execSync
const chalk = require('chalk')

function format (millisecond, template) {
    var res = ''
    try {
        var date = new Date(millisecond)
        var opt = {
            'Y+': date.getFullYear().toString(), // 年
            'm+': (date.getMonth() + 1).toString(), // 月
            'd+': date.getDate().toString(), // 日
            'H+': date.getHours().toString(), // 时
            'M+': date.getMinutes().toString(), // 分
            'S+': date.getSeconds().toString(), // 秒
        }
        template = template || 'YYYY-mm-dd'
        for (var k in opt) {
            var ret = new RegExp('(' + k + ')').exec(template)
            if (ret) {
                template = template.replace(
                    ret[1],
                    ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
                )
            }
        }
        res = template
    } catch (error) {
        console.warn('ERROR formatDate', error)
    }
    return res
}

module.exports = (notes) => {
    const { title, updateDate } = notes[0]

    const messge = `Update Note: ${title}, Update time: ${format(new Date(), 'YYYY-mm-dd HH:MM:SS')}`
    console.log('messge: ', messge)

    exec('git add .')
    // console.log('git add .')
    exec(`git commit -m "${messge}"`)
    // console.log(`git commit -m ${messge}`)
    exec(`git pull`)

    // exec(`git push origin master`)

    // console.log(`Submission to Github successful, update time: ${updateDate} update notes:${title}`)
}