const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,resp)=>{
    console.log(req.url);
   // console.log(req.headers);
  //  resp.end('Home');

    let file = 'index.html';
    
    switch(req.url){
        case '/':
            file='index.html';
            break;
        case '/contacts.html':
            file='contacts.html'
            break;
    }

    fileStream = fs.createReadStream(path.join(__dirname,file));
    fileStream.pipe(resp);
})

server.listen(3000,()=>console.log("server started"))