var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Rnrwls9194@@',
    database : 'opentutorials'
});
db.connect();
module.exports = db;
