// Hello World first Node server

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200); // OK status code in header
  response.write('Hello to the World!'); // response body
  response.end(); // closing the connection
}).listen(8080); // listening on port 8080
console.log('listening on port 8080...');

// run node node02.js in the command line
// check website under http://localhost:8080