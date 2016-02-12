var hello = require('./hello.js');
var bye = require('./goodbye.js');

hello();
bye.goodbye();

// Calling goodbye method in one line
// require('./goodbye.js').goodbye();