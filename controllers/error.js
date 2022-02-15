exports.get404page = (req, res, next) => {
    res.status(404).render('404', { // still a normal middleware. 
        pageTitle: 'Page Not Found'
    });
};