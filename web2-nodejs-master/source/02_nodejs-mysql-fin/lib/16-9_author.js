var db = require('./db');
var template = require('./template.js');

exports.home = function(request, response) {
    db.query(`SELECT * FROM topic`, function(error, topics) {
        db.query(`SELECT * FROM author`, function(error2, authors) {
            var tag = '<table>';
            var i = 0;
            while(i < authors.length) {
                tag += `
                    <tr>
                        <td>${authors[i].name}</td>
                        <td>${authors[i].profile}</td>
                        <td>update</td>
                        <td>delete</td>
                    </tr>
                `;
                i++;
            }
            tag += '</table>';

            var title = 'author';
            var list = template.list(topics);
            var html = template.HTML(title, list,
                `
                ${tag}
                <style>
                    table {
                        border-collapse: collapse;
                    }
                    td {
                        border: 1px solid black;
                    }
                </style>
                `,
                `<a href="/create">create</a>`
            );
            response.writeHead(200);
            response.end(html);
        });
    });
}
