const express = require('express');
const path = require('path');

const rootDir = require('../helper/path');
const admin = require('../routes/admin');

const router = express.Router();

router.get('/',(req, res, next)=>{
    const products = admin.products;

    res.render('shop',{
        prods: products, 
        title: 'Shop', 
        path:'/', 
        hasProducts: products.length>0, 
        activeShop: true, 
        productCSS: true
    })

    // res.sendFile(path.join(rootDir,'views', 'shop.html'))
    
    // res.sendFile(path.join(__dirname, '..','views', 'shop.html'))

    // __dirname is a global variable which holds the absolute path to the project folder.
    // ..(sys)../NodeJS/Express/routes
    /*
        path.join() builds the path in a way so it runs both on windows(which uses '\' (backward slash))
        and mac (which uses '/' for the path).
    */

});

/*
    If get method is used, it will handle only the '/' path strictly,
    and won't trigger for other paths that start with '/' .
*/

module.exports = router;
