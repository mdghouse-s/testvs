const express = require('express');
const path = require('path');


const app = express();

app.get(['/', '/home'], (req, resp) => {
    resp.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contacts', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'contacts.html'));
});


app.use((req, res, next) => {
    console.log("Middle ware 1 request");
    next();
    console.log("Middle ware 1 response");
})

app.use((req, res, next) => {
    console.log("404")
    res.sendFile(path.join(__dirname, '404.html'));
})

//app object has built in http server
app.listen(4000, (err) => {
    if (err) {
        return console.log('error starting : ' + err.message)
    }

    console.log('Server started at port 4000');
})