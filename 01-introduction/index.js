var http = require("http");

// All non blocking calls
//Create web server
const server = http.createServer();

//server is an event emitter instance
server.on('request',function(req,res){
    res.writeHead(200,{//send resp code and other headers
                'Content-type':'text/html'
    });
    res.end("Hello Node and Express - Event emitter")
});

server.listen(3000);

server.on('listening', function(err){
    if(err){
        console.log("error starting server");
        console.log(err.message);
        process.exit(1);
    }
    console.log("Server started on port 3000");
})