const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{
        title: 'Add Product', 
        path: '/admin/add-product', 
        // activeAddProduct: true, 
        // formsCSS: true, 
        // productCSS: true
    })
}

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('shop',{
            prods: products, 
            title: 'Shop', 
            path:'/', 
            // hasProducts: products.length>0, 
            // activeShop: true, 
            // productCSS: true
        })
    })

    // res.sendFile(path.join(rootDir,'views', 'shop.html'))
    
    // res.sendFile(path.join(__dirname, '..','views', 'shop.html'))

    // __dirname is a global variable which holds the absolute path to the project folder.
    // ..(sys)../NodeJS/Express/routes
    /*
        path.join() builds the path in a way so it runs both on windows(which uses '\' (backward slash))
        and mac (which uses '/' for the path).
    */

}