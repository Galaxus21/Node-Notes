const express = require('express');
const path = require('path');

const productsController = require('../controllers/products')

const router = express.Router();

router.get('/',productsController.getProducts);

/*
    If get method is used, it will handle only the '/' path strictly,
    and won't trigger for other paths that start with '/' .
*/

module.exports = router;
