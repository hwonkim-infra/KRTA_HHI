const TCF = require('../models/TCFmodel');


exports.getEUTCF = (req, res, next) => {
    TCF.fetchAll() // 1st element: arg.data. 2nd element: 
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('TCF/EUTCF', {
                index: rows,
                pageTitle: 'EU TCF',
            })
        })
        .catch(err => {
            console.log(err);
        });
};




exports.getNoiseTD = (req, res, next) => {
    TCF.fetchAll() // 1st element: arg.data. 2nd element: 
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('TCF/EUTCF', {
                index: rows,
                pageTitle: 'EU TCF',
                path: '/'
            })
        })
        .catch(err => {
            console.log(err);
        });
};


exports.getProducts = (req, res, next) => {
    Product.fetchAll() // 1st element: arg.data. 2nd element: 
        .then(([rows, fieldData]) => {

            res.render('shop/product-list', {
                prods: rows,
                pageTitle: 'All Products',
                path: '/products'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId) // 1st element: arg.data. 2nd element: 
        .then(([product]) => {
            res.render('shop/product-detail', {
                product: product[0],
                pageTitle: 'Product Detail',
                path: '/product'
            });
        })
        .catch(err => {
            console.log(err);
        });

};

exports.getIndex = (req, res, next) => {
    Product.fetchAll() // 1st element: arg.data. 2nd element: 
        .then(([rows, fieldData]) => {
            res.render('shop/index', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        // prods: products,
        pageTitle: 'Your Cart',
        path: '/cart'
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;

    console.log(prodId);
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        // prods: products,
        pageTitle: 'Your Order',
        path: '/order'
    });
};


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        prods: products,
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};