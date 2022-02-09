// const path = require('path');
const express = require('express');
const router = express.Router();

const Data = require('../util/data.json');
const DataKR = require('../util/dataKR.json');




router.get('/', (req, res) => {  
  res.render('dashboard', {
    Title: 'Heavy Certification Board',
    path: '/',
    data: Data
  });  
});

router.get('/EU', (req, res) => {  
  res.render('dashboard', {
    Title: 'Heavy Certification Board',
    path: '/EU',
    data: Data
  });  
});



router.get('/KR', (req, res) => {  
  res.render('dashboard_KR', {
    Title: 'Heavy Certification Board',
    path: '/',
    data: DataKR
  });  
});

router.get('/KRTAIndex', (req, res) => {
  res.render('KRTAIndex', {    
    path: '/',
    Title: 'Korea Type Approval'
  });
});

module.exports = router;
