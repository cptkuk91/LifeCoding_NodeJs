let http = require("http");
let fs = require("fs");
var url = require("url");

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;

  console.log(url.parse(_url, true));

  // 경로가 루트라면 기존 코드를 실행
  if (pathname === "/") {
    if (queryData.id === undefined) {
      let title = "Welcom";
      const description = "Hello";

      fs.readdir("./data", (err, fileList) => {
        let list = "<ul>";
        let i = 0;
        while (i < fileList.length) {
          list =
            list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
          i += 1;
        }
        list = list + "</ul>";
        let template = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
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
    } else {
      fs.readdir("./data", (err, fileList) => {
        let list = "<ul>";
        let i = 0;
        while (i < fileList.length) {
          list =
            list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
          i += 1;
        }
        list = list + "</ul>";
        fs.readFile(
          `data/${queryData.id}`,
          "utf8",
          function (err, description) {
            let title = queryData.id;
            let template = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                <h2>${title}</h2>
                <p>
                    ${description}
                </p>
            </body>
            </html>
        `;
            response.writeHead(200);
            response.end(template);
          }
        );
      });
    }
  } else {
    // 없는 경로라면 404를 실행
    response.writeHead(404);
    response.end("Not Found");
  }
});

app.listen(3000);
