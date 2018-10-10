const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express();

//static middleware of express to serve static pages 
app.use(express.static(path.join(__dirname,'public'),{maxAge:'1d'}))
//middleware for \admin route ?? check whether it works
app.use('/adm/**',express.static(path.join(__dirname,'admin'),{maxAge:'2d'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use((req,resp,next)=>{
    console.log(req.body);
    console.log(req.cookies);
    resp.cookie('mycookie','Got my cookie');
    resp.status(200).json(req.body)
    
    //next();
})

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname,'public', '404.html'));
})



//app object has built in http server
app.listen(4000, (err) => {
    if (err) {
        return console.log('error starting : ' + err.message)
    }

    console.log('Server started at port 4000');
})