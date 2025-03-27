const express = require('express');

const router = express.Router()   //It's like a mini express app.



router.get('/add-user',(req, res, next)=>{
    res.send("<form action='/user' method='post'><input type='text' name='user'/><button type='submit'>submit</button></form>")
});

router.post('/user', (req, res, next)=>{
    const data = req.body;
    console.log(data);
    res.redirect('/');
});

module.exports = router;