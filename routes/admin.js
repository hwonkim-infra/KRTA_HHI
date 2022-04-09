const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin_HEX');
const adminControllerHEXChange = require('../controllers/admin_HEXChange');

const pagesController = require('../controllers/pages_Supple');

const adminWEXController = require('../controllers/admin_WEX');


const router = express.Router();

// /admin/add-HEX => GET
router.get('/add-HEX', adminController.getAddProduct);

// /admin/HEXs => GET
router.get('/HEXs', adminController.getProducts);

// /admin/add-HEX => POST
router.post('/add-HEX', adminController.postAddProduct);
router.get('/edit-HEX/:Id', adminController.getEditProduct);

router.post('/edit-HEX', adminController.postEditProduct);
router.post('/delete-HEX', adminController.postDeleteProduct);


// HEX Change Model
// /admin/add-HEX => GET
router.get('/add-HEXChange/:originId', adminControllerHEXChange.getAddChangeModel);


// /admin/add-HEX => POST
router.post('/add-HEXChange', adminControllerHEXChange.postAddChangeModel);
router.get('/edit-HEXChange/:Id', adminControllerHEXChange.getEditChangeModel);

router.post('/edit-HEXChange', adminControllerHEXChange.postEditChangeModel);
router.post('/delete-HEXChange', adminControllerHEXChange.postDeleteChangeModel);




// Wheel Exca Routing
// /admin/add-WEX => GET
router.get('/add-WEX', adminWEXController.getAddProduct);

// /admin/WEXs => GET
router.get('/WEXs', adminWEXController.getProducts);

// /admin/add-WEX => POST
router.post('/add-WEX', adminWEXController.postAddProduct);
router.get('/edit-WEX/:Id', adminWEXController.getEditProduct);

router.post('/edit-WEX', adminWEXController.postEditProduct);
router.post('/delete-WEX', adminWEXController.postDeleteProduct);





/* Common PAGES */
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