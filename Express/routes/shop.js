const express = require('express');


const router = express.Router();

router.get('/',(req, res, next)=>{
    res.send('<h1>Hello from Express !!!</h1>');
});

/*If get method is used, it will handle only the '/' path strictly,
and won't trigger for other paths.*/

module.exports = router;
