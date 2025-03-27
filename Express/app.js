const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes) // '/admin' filters the path that starts with admin.
app.use(shopRoutes)

app.use('/',(req, res, next)=>{    //We can remove the path too, as it is the default.
    res.status(404).send('<h3>ERR404: PAGE NOT FOUND.</h3>')    //We can chain the send method with status,setHeader,etc...
})
app.listen(3000);