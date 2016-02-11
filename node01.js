// Blocking code

var contents = fs.readFileSync('/etc/hosts');
console.log(contents);
console.log('Doing something else');

// Non Blocking code

fs.readFile('etc/hosts', function(err, contents) {
  console.log(contents);
});
console.log('Doing something else');

// Callback alternate syntax

var callback = function(err, contents) {
  console.log(contents);
};
fs.ReadFile('etc/hosts', callback);
fs.ReadFile('etc/another-host', callback);