const express = require('express');
const path = require('path');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

/*
    If get method is used, it will handle only the '/' path strictly,
    and won't trigger for other paths that start with '/' .
*/

module.exports = router;
