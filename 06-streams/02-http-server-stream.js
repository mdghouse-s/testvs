const http = require('http');
const fs = require('fs');
const path = require('path');

// const server = http.createServer((req, resp)=>{
//     var contents = fs.readFile(path.join(__dirname,'bigfile.txt'));
//     resp.write('started');
//     resp.end(contents);
// })

const server = http.createServer(streamFun);

const streamFun= function(req,resp){
    fileStream = fs.createReadStream([path.join(__dirname,'bigfile.txt')]);
    fileStream.pipe(resp); 
}

server.listen(3000, ()=>console.log('Server started'));
