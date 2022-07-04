const fs = require('fs-extra')
const { BASE_TEMPLATE_PATH, OUTPUT_PATH, NOTE_IMAGE_PATH, OUTPUT_IMAGE_PATH } = require('./constant')
const getData = require('./data')
const MD5 = require('./md5')
const cache = require('./cache')
const commit = require('./commit')

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
        const cacheNotes = cache.get()
        const results = notes.map(note => {
            const tags = note.tags.filter(Boolean)
            const name = note.title.replace(/\s+/g, '-')
            const output = OUTPUT_PATH + '/' + tags.join('/') + '/' + name + '.md'
            const hash = MD5(note.title + note.timer)
            if (cacheNotes[note.id] && cacheNotes[note.id] != hash) {
                changes.push(note)
            }
            return {
                ...note,
                content: compile(BASE_TEMPLATE_PATH, note),
                output
            }
        })

        cache.set(results)

        createNote(results)
        changes.length && commit(changes)
    })

}