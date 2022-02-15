const express = require('express');
const shopController = require('../controllers/shop');
// const TCFController = require('../controllers/TCFpages')

const router = express.Router();


router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/delete');

router.get('/products/:productId', shopController.getReport);



module.exports = router;