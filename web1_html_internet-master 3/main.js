let http = require("http");
let fs = require("fs");
var url = require("url");

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let title = queryData.id;

  console.log(url.parse(_url, true));

  fs.readFile(`data/${queryData.id}`, "utf8", function (err, description) {
    let template = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JAVASCRIPT</a></li>
            </ul>
            <h2>${title}</h2>
            <p>
                ${description}
            </p>
        </body>
        </html>
    `;
    response.writeHead(200);
    response.end(template);
  });
});

app.listen(3000);
