var http = require("http");

// All non blocking calls
//Create web server
const server = http.createServer(function(req,res){
    //ends the request response cycle
    res.writeHead(200,{//send resp code and other headers
                'Content-type':'text/html'
    });
    res.end("Hello Node and express")
});

server.listen(3000, function(err){
    if(err){
        console.log("error starting server");
        console.log(err.message);
        process.exit(1);
    }
    console.log("Server started on port 3000");
})