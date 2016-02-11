// Piping data from one file to another, reading and writting streams

var fs = require('fs');

var file = fs.createReadStream('readme.md');
var newFile = fs.createWriteStream('readme_copy.md');

file.pipe(newFile);