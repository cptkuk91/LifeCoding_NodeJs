var http = require('http');
http.createServer(function(request, response) {
    response.end('Cookie!!');
}).listen(3000);
