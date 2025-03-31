const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error404')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));  //Directly forwards the public folder to the file system(read access only)


app.use('/admin',adminRoutes) // '/admin' filters the path that starts with admin.
app.use(shopRoutes)

app.use('/',errorController.get404)
app.listen(3000);