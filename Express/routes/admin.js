const express = require('express');
const path = require('path');

const rootDir = require('../helper/path'); // \Express

const router = express.Router()   //It's like a mini express app.

const products = [];

// /admin/add-product
router.get('/add-product',(req, res, next)=>{
    res.render('add-product',{title: 'Add Product'})
    
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    
});

router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.routes = router;  //Router is a valid middleware function
module.exports.products = products;