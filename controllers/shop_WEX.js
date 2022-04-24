const Product = require('../models/product_WEX');



exports.getReport = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then(product => {

            res.render('shop/WEXoutput', {
                product: product,
                pageTitle: product.model_name,
                path: '/WEXs'
            });
        })
        .catch(err => {
            console.log(err);
        })
};



exports.getIndex = (req, res, next) => {
    Product.find().sort({ _id: 1 })
        .then(products => {
            res.render('shop/indexWEX', {
                prods: products,
                pageTitle: 'Wheel EX List',
                path: '/'
            });

        })
        .catch(err => console.log(err));

};