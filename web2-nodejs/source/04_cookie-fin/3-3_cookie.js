var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);

// 응답 부분을 주석처리함으로서, 쿠키를 전송하지 않게됐다.
