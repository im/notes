const fs = require('fs-extra')
const { BASE_TEMPLATE_PATH, OUTPUT_PATH, NOTE_IMAGE_PATH, OUTPUT_IMAGE_PATH } = require('./constant')
const getData = require('./data')
const MD5 = require('./md5')
const cache = require('./cache')
const commit = require('./commit')
const FS = require('fs')
const path = require('path')

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
    if (process.argv[2] === 'clear') {
        fs.removeSync(OUTPUT_PATH)
        fs.mkdirpSync(OUTPUT_PATH)
    }
}

const moveNoteImg = () => {

    const dirs = FS.readdirSync(NOTE_IMAGE_PATH).filter(v => v != '.DS_Store')
    dirs.forEach(dir => {
        const dirPath = path.join(NOTE_IMAGE_PATH, dir)
        try {
            const files = FS.readdirSync(dirPath)
            files.forEach(fileName => {
                const inputPath = path.join(dirPath,fileName)
                const names = fileName.split('.')
                const hash = MD5(names[0]) + '.' + names[1]
                const outputPath = path.join(OUTPUT_IMAGE_PATH,dir,hash)
                fs.copySync(inputPath, outputPath, { overwrite: true })
            })
        } catch (err) {
            console.log('err: ', err)
        }
    })

}

const createNote = (notes) => {
    notes.forEach(({ output, content }) => {
        fs.outputFileSync(output, content)
    })
}

module.exports = () => {
    initOutputDir()
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
            if (!cacheNotes[note.id]) {
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