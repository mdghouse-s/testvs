const express = require('express');
const data= require('../data/seed.json')
const router = express.Router();

const products= data.products;

router.get('/',(req,resp)=>{
    resp.status(200).json(products);
})

module.exports=router;