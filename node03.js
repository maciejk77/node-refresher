
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200); 
  response.write('Dog is running'); 
  setTimeout(function() {
    response.write(' Dog is done!');
    response.end();
  }, 5000); // Time delay 5 seconds
}).listen(8080); 
console.log('listening on port 8080...');

