const fs = require('fs')

var filename = 'notes.txt'
fs.writeFileSync(filename, "test 2")
fs.appendFileSync(filename, "\ntest ok")