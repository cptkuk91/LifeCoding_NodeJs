var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var auth = require('../lib/auth');

router.get('/', function(request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if(fmsg.success) {
        feedback = '<div style="color:blue;">' + fmsg.success[0] + '</div>'
    } else if(fmsg.error) {
        feedback = '<div style="color:red;">' + fmsg.error[0] + '</div>'
    }
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
        `
        ${feedback}
        <h2>${title}</h2>${description}
        <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
        `,
        `<a href="/topic/create">create</a>`,
        auth.statusUI(request, response)
    );
    response.send(html);
});

module.exports = router;
