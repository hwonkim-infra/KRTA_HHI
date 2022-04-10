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
    
    Product.findById(prodId)
        .then(product => {
            res.render('shop/HEXoutput', {
                product: product,
                pageTitle: product.model_name,
                path: '/HEXs',
            });
        })
        .then(()=>{console.log(origin);})
        .catch(err => {
            console.log(err);
        })
};

exports.getChangeModelReport = (req, res, next) => {
    const prodId = req.params.productId;
    const originId = req.params.origin;
    const Ids = [prodId, originId];
    
    Product.find().where('_id').in(Ids)
        .then(([originProd, product]) => {
            console.log('origin:', originProd);
            console.log('product:', product);

            res.render('shop/HEXoutput', {
                product: product,
                pageTitle: product.model_name,
                path: '/HEXs',
                origin: originProd,
            });
        })
        .catch(err => {
            console.log(err);
        });

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