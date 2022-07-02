const { DB_PATH, DB_QUERY_NOTES, BASE, IMAGE_DIR_NAME } = require('./constant')

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(DB_PATH, {})
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

const getTags = (content) => {
    let arr = []
    content.replace(/(\n)[ \t]*(\#[^\s#].*)/g, ($1,$2,p) => {
        arr = p.split('#')
    })
    const tags = arr.map(item => {
        return item.trim().replace('/', ',')
    }).filter(Boolean)
    return tags.join(',').split(',')
}

const hideTags = (content) => {
    return content.replace(/(\n)[ \t]*(\#[^\s#].*)/g, '')
}

const formatLink = (notes) => {
    notes.forEach((item) => {
        const content = item.content
        item.content = content.replace(/\[\[.*?\]\]/gi, (match) => {
            const title = match ? match.replace(/\[\[/gi, '').replace(/\]\]/gi, '') : ''
            const note = notes.filter(note => note.title.trim() === title.trim())[0]
            if (note) {
                const name = note.title.replace(/\s+/g, '-')
                const path = `[${note.title}](/notes/${note.updateDate.replace(/\-/g, '/')}/${name}/)\n`
                return path
            }
            return match
        })
    })

    return notes
}

const formatContent = (content) => {
    content = content.replace(/\[image:(.+?)\]/gi, (match,url) => {
        const data = url.split('/')
        const uuid = data[0] || ''
        const imageName = data[1] || ''
        const path = BASE + IMAGE_DIR_NAME + '/' + uuid + '/' + imageName
        return `![${imageName}](${path})`
    })
    return hideTags(content)
}

const formatDate = (dtnum) => {
    const hour = 3600
    const year = 365.25 * 24 * hour
    const offset = year * 31 + hour * 6
    return format((dtnum + offset) * 1000)
}

module.exports = () => {
    return new Promise((resolve, reject) => {
        try {
            db.all(DB_QUERY_NOTES, (err, rows) => {
                if (err) console.log(err)
                const notes = []
                rows.forEach((item) => {
                    const { ZTITLE, ZTEXT, ZCREATIONDATE, ZMODIFICATIONDATE,ZUNIQUEIDENTIFIER } = item
                    const tags = getTags(ZTEXT)
                    const note = {
                        title: ZTITLE.trim(),
                        content: formatContent(ZTEXT),
                        createDate: formatDate(ZCREATIONDATE),
                        timer: ZMODIFICATIONDATE,
                        updateDate: formatDate(ZMODIFICATIONDATE),
                        id: ZUNIQUEIDENTIFIER,
                        tags
                    }
                    note.title && notes.push(note)
                })
                resolve(formatLink(notes))
            })
        } catch (err) {
            reject(err)
        }
    })
}