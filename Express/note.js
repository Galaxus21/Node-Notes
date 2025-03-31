/* 
    Templating Engine / View Engine - 
        Helps produce Dynamic HTML content to send as a response.
        Some examples are : pug, ejs, handlebars.
        To install them all at once - npm install ejs pug express-handlebars
     
*/

/* ........................To Setup handlebars...................................
const expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/', 
    defaultLayout: 'main-layout',
    extname: 'hbs' //Applies to only layout file.
}));
app.set('view engine', 'hbs'); //The extension for handlebars template will also be the same(hbs).
*/

/* .......................To Setup pug...........................
app.set('view engine', 'pug'); //Sets the default engine as pug.
app.set('views', 'views');  // Used to set the path of the templates, by default it is 'views'.
*/

/* ...........Used in a middleware func to send a html file as response.................

res.sendFile(path.join(rootDir,'views', 'shop.html'))
    
res.sendFile(path.join(__dirname, '..','views', 'shop.html'))

__dirname is a global variable which holds the absolute path to the project folder.
..(sys)../NodeJS/Express/routes

    path.join() builds the path in a way so it runs both on windows(which uses '\' (backward slash))
    and mac (which uses '/' for the path).
*/
