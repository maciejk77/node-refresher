var http = require('http');

var makeRequest = function(message) {
  var message = "Here's looking at you, kid";
  var options = {
    host: 'localhost', port: 8080, path: '/', method: 'POST'
  };

  var request = http.request(options, function(response) {
    response.on('data', function() {
      console.log(data);
    });
  });

  request.write(message);
  request.end();
}

makeRequest("Here's looking at you, kid.");

module.exports = makeRequest;