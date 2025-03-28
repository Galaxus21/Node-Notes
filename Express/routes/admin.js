const express = require('express');
const path = require('path');

const router = express.Router()   //It's like a mini express app.


// /admin/add-user
router.get('/add-user',(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'))
    // __dirname is a global variable which holds the absolute path to the project folder.
    // ..(sys)../NodeJS/Express/routes
    /*
        path.join() builds the path in a way so it runs both on windows(which uses '\' (backward slash))
        and mac (which uses '/' for the path).
    */
});

router.post('/add-user', (req, res, next)=>{
    const data = req.body;
    console.log(data);
    res.redirect('/');
});

module.exports = router;  //Router is a valid middleware function