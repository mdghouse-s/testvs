const express=require('express');
const bodyParser=require('body-parser');
const path = require('path');
const productsRouter=require('./routes/products')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'))
app.set('view engine',)

app.use('/products',productsRouter);

app.listen(4000,(err)=>{
    if(err){
        return console.log('Error : ' + err.message);
    }
    console.log('Server Started at 4000')
})


