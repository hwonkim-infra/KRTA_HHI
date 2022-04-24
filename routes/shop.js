const express = require('express');
const shopController = require('../controllers/shop_HEX');
const shopWEXController = require('../controllers/shop_WEX');
const shopFileController = require('../controllers/shop_Supples');


// const TCFController = require('../controllers/TCFpages')

const router = express.Router();


router.get('/', shopController.getIndex);

router.get('/HEXs', shopController.getProducts);

router.get('/HEXs/delete');

router.get('/HEXs/:productId', shopController.getReport);
router.get('/HEXs/:productId/:origin', shopController.getChangeModelReport);


router.get('/index_WEX', shopWEXController.getIndex);
router.get('/WEXs/:productId', shopWEXController.getReport);

router.get('/Index_Supple', shopFileController.getIndex);
router.get('/SuppleFiles/:fileId', shopFileController.getReport);



module.exports = router;