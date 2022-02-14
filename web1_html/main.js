let http = require("http");
let fs = require("fs");
var url = require("url");

function templateHTML(title, list, body) {
  return `
  <!DOCTYPE html>
  <html>
      <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
      </head>
  <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = "<ul>";
  var i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}>${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + "</ul>";
  return list;
}

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  console.log(url.parse(_url, true));

  // 경로가 루트라면 기존 코드를 실행
  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", (err, filelist) => {
        let title = "Welcome";
        let description = "Hello Node.js";
        let list = templateList(filelist);
        let template = templateHTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", (error, filelist) => {
        fs.readFile(`data/${queryData.id}`, "utf-8", (err, description) => {
          let title = queryData.id;
          let list = templateList(filelist);
          let template = templateHTML(
            title,
            list,
            `<h2>${title}</h2><p>${description}</p>`
          );
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    // 없는 경로라면 404를 실행
    response.writeHead(404);
    response.end("Not Found");
  }
});

app.listen(3000);
