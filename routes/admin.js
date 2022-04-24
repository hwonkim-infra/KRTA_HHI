const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin_HEX');
const adminControllerHEXChange = require('../controllers/admin_HEXChange');

const suppleFilesController = require('../controllers/admin_Supples');

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





/* Supple Files */
// /admin/add-file => GET


// /admin/files => GET
router.get('/add-file', suppleFilesController.getAddFile);

// /admin/add-file => POST
router.post('/add-Supple', suppleFilesController.postAddFile);

router.get('/edit-File/:Id', suppleFilesController.getEditFile);



router.post('/edit-file', suppleFilesController.postEditFile);

router.post('/delete-file', suppleFilesController.postDeleteFile);

// router.get('/TCF/EUTCF', TCFController.getEUTCF);



module.exports = router;