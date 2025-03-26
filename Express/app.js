const express = require('express');
const bodyParser = require('body-parser');  //Sometimes we might need to install it seperately.

const app = express();

// const http = require('http');

app.use(bodyParser.urlencoded({extended: false}));  //Doesn't parse Files/JSON

app.use('/add-user',(req, res, next)=>{
    res.send("<form action='/user' method='post'><input type='text' name='user'/><button type='submit'>submit</button></form>")
});

/*
    app.use('/user', (req, res, next)=>{     ----This Middleware executes for both GET, POST and all kinds of request.----
        const data = req.body;
        console.log(data);
        res.redirect('/');   //Redirects to a different page.
    });
*/

app.post('/user', (req, res, next)=>{      //Triggers for only post requests to the route
    const data = req.body;
    console.log(data);
    res.redirect('/');   //Redirects to a different page.
});


app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from Express !!!</h1>');
});

app.listen(3000);

/* 
    const server = http.createServer(app);   Also works !
    server.listen(3000);
*/