// Reading from the request and writting to a file

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  var newFile = fs.createWriteStream('test_copy.md');
  request.pipe(newFile);

  request.on('end', function() {
    response.end('uploaded!');
  });

  
}).listen(8080);
console.log('Listening on port 8008...');