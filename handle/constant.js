const path = require('path')

const dbPath = path.resolve('/Users/mi/Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/database.sqlite')
const queryNotes = 'SELECT * FROM `ZSFNOTE` WHERE `ZTRASHED` LIKE \'0\' AND `ZARCHIVED` LIKE \'0\''
module.exports = {
    IMAGE_DIR_NAME: 'note_images',
    BASE: '/notes/',
    DB_PATH: dbPath,
    NOTE_IMAGE_PATH: path.resolve('/Users/mi/Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/Local Files/Note Images'),
    DB_QUERY_NOTES: queryNotes,
    DELAY_TIME: 60000,
    BASE_TEMPLATE_PATH: path.resolve('tpl/base.md'),
    OUTPUT_PATH: path.resolve('notes/_posts'),
    OUTPUT_IMAGE_PATH: path.resolve('notes/.vuepress/public/note_images')
}