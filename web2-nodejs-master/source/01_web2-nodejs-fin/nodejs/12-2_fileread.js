var fs = require('fs');
fs.readFile('sample.txt', function(err, data) {
    console.log(data);
});
