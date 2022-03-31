const Product = require('../models/product_HEX');


exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'All Products',
                path: '/products'
            });

        })
        .catch(err => console.log(err));
};

exports.getReport = (req, res, next) => {
    const prodId = req.params.productId;
    console.log("🚀 ~ file: shop_HEX.js ~ line 19 ~ prodId", req.params)
    Product.findById(prodId)
        .then(product => {

            res.render('shop/HEXoutput', {
                product: product,
                pageTitle: product.model_name,
                path: '/HEXs'
            });
        })
        .catch(err => {
            console.log(err);
        })
};



exports.getIndex = (req, res, next) => {
    Product.find()
        .then(products => {
            res.render('shop/index', {
                prods: products,
                pageTitle: 'Specs',
                path: '/'
            });

        })
        .catch(err => console.log(err));

};