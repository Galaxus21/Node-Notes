/* 
    Templating Engine / View Engine - 
        Helps produce Dynamic HTML content to send as a response.
        Some examples are : pug, ejs, handlebars.
        To install them all at once - npm install ejs pug express-handlebars
     
*/

/* To Setup handlebars
app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/', 
    defaultLayout: 'main-layout',
    extname: 'hbs' //Applies to only layout file.
}));
app.set('view engine', 'hbs'); //The extension for handlebars template will also be the same(hbs).
*/

/* To Setup pug
app.set('view engine', 'pug'); //Sets the default engine as pug.
app.set('views', 'views');  // Used to set the path of the templates, by default it is 'views'.
*/