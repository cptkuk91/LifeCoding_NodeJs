let testfolder =  './../data';
let fs = require('fs');

fs.readdir(testfolder, (err, fileList) => {
    console.log(fileList);
})
