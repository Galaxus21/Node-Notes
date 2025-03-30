const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const admin = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/', 
    defaultLayout: 'main-layout',
    extname: 'hbs' //Applies to only layout file.
}));
app.set('view engine', 'hbs'); //The extension for handlebars template will also be the same(hbs).
/*
app.set('view engine', 'pug'); //Sets the default engine as pug.
app.set('views', 'views');  // Used to set the path of the templates, by default it is 'views'.
*/

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));  //Directly forwards the public folder to the file system(read access only)


app.use('/admin',admin.routes) // '/admin' filters the path that starts with admin.
app.use(shopRoutes)

app.use('/',(req, res, next)=>{    //We can remove the path too, as it is the default.
    res.status(404).render('404',{title:'Page not found'})
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))    //We can chain the send method with status,setHeader,etc...
})
app.listen(3000);