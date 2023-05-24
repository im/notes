const shell = require('shelljs')

shell.exec('git add .')

shell.exec(`git commit -m "commit at ${new Date().toISOString()}"`)
