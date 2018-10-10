var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname,'01-process.js'),'utf-8',(err,contents)=>{
    console.log(contents)
});