const fs = require('fs-extra')
const { BASE_TEMPLATE_PATH, OUTPUT_PATH, NOTE_IMAGE_PATH, OUTPUT_IMAGE_PATH } = require('./constant')
const getData = require('./data')
const MD5 = require('./md5')
const commit = require('./commit')
let cache = {}

const compile = (tplFile,data) => {
    let content = fs.readFileSync(tplFile, 'utf8')

    return content.replace(/\${(\w+)}/gi, (match, name) => {
        if (name === 'tags' && data[name]) {
            const tags = data[name] || []
            let str = ''
            tags.forEach(tag => {
                if (tag) {
                    str += `  - ${tag} \n`
                }
            })
            return str
        }
        return data[name] ? data[name] : ''
    })
}

const initOutputDir = () => {
    fs.removeSync(OUTPUT_PATH)
    fs.mkdirpSync(OUTPUT_PATH)
}

const moveNoteImg = () => {
    fs.copySync(NOTE_IMAGE_PATH,OUTPUT_IMAGE_PATH)
}

const createNote = (notes) => {
    notes.forEach(({ output, content }) => {
        fs.outputFileSync(output, content)
    })
}

module.exports = () => {
    // initOutputDir()
    moveNoteImg()

    const getNotes = getData()
    getNotes.then(notes => {
        const changes = []

        const results = notes.map(note => {
            const tags = note.tags.filter(Boolean)
            const output = OUTPUT_PATH + '/' + tags.join('/') + '/' + note.title + '.md'
            const hash = MD5(note.title + note.timer)
            if (note.title === 'test') {
                console.log(' note.timer: ', note.timer, hash, cache[note.id])
                if (cache[note.id] && cache[note.id] != hash) {
                    changes.push(note)
                }
                cache[note.id] = hash
            }

            return {
                ...note,
                content: compile(BASE_TEMPLATE_PATH, note),
                output
            }
        })

        createNote(results)
        changes.length && commit(changes)
    })

}