// e.g http.createServer(function(request, response) {...});
// request => readable stream, response => writable stream

var http = require('http');

/*

http.createServer(function(request, response) {
  response.writeHead(200);
  request.on('readable', function() {
    var chunk = null;
    while(null !== (chunk = request.read())) {
      console.log(chunk.toString()); // toSting required in case it was binary data
      // response.write(chunk);  => this can be written instead line above to send back to the client data got on the request

    };
  });
  request.on('end', function() {
    response.end();
  });
}).listen(8080);
*/

// Writing to the writable stream & reading from the readable stram => .pipe()

http.createServer(function(request, response) {
  response.writeHead(200);
  request.pipe(response);
}).listen(8080);