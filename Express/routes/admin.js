const express = require('express');
const path = require('path');

const productsController = require('../controllers/products')

const router = express.Router()   //It's like a mini express app.

const products = [];

// /admin/add-product
router.get('/add-product',productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);

module.exports = router;  //Router is a valid middleware function
