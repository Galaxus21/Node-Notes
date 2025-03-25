const express = require('express');
const app = express();

// const http = require('http');

app.use('/add-user',(req, res, next)=>{
    res.send("<form action='/user' method='post'><input type='text' name='user'/><button type='submit'>submit</button></form>")
})

app.use('/user', (req, res, next)=>{
    const data = req.body;
    res.redirect('/');   //Redirects to a different page.
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello from Express !!!</h1>');
})

app.listen(3000)

// const server = http.createServer(app);
// server.listen(3000);