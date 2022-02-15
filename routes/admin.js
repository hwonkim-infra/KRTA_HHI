const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const pagesController = require('../controllers/pages');


const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);



router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);



/* PAGES */
// /admin/add-page => GET
router.get('/add-page', pagesController.getAddPage);

router.get('/pagesOutput', pagesController.getReport);


// /admin/pages => GET
router.get('/pages', pagesController.getPages);

// /admin/add-page => POST
router.post('/add-page', pagesController.postAddPage);

router.get('/edit-page/:pageId', pagesController.getEditPage);



router.post('/edit-page', pagesController.postEditPage);

router.post('/delete-page', pagesController.postDeletePage);

// router.get('/TCF/EUTCF', TCFController.getEUTCF);



module.exports = router;