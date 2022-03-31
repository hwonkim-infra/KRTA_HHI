const mongoose = require('mongoose');

const Page = require('../models/pages');

exports.getAddPage = (req, res, next) => {
    res.render('admin/Supplements', {
        pageTitle: 'Add Page',
        path: '/admin/add-page',
        editing: false
    });
};

exports.postAddPage = (req, res, next) => {

    const page = new Page({
        title: req.body.title,
        description: req.body.description,

    });
    page
        .save()
        .then(result => {
            console.log(result);
            console.log('Created Page');
            res.redirect('admin/pages');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditPage = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('admin/pages');
    }
    const pageId = req.params.pageId;
    Page.findById(pageId)
        .then(page => {
            if (!page) {
                return res.redirect('/pages');
            }
            res.render('admin/edit-page', {
                pageTitle: 'Edit Page',
                path: '/admin/edit-page',
                editing: editMode,
                page: page
            });
        })
        .catch(err => console.log(err));
};

exports.postEditPage = (req, res, next) => {
    const pageId = req.body.pageId;


    Page.findById(pageId)
        .then(page => {
            page.title = req.body.title;
            page.description = req.body.description;

            return page.save();
        })
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('pages');
        })
        .catch(err => console.log(err));
};

exports.getPages = (req, res, next) => {
    Page.find()
        .then(pages => {
            res.render('shop/pages', {
                pages: pages,
                pageTitle: 'Admin Pages',
                path: '/pages'
            });
        })
        .catch(err => console.log(err));
};

exports.postDeletePage = (req, res, next) => {
    const pageId = req.body.pageId;
    Page.findByIdAndRemove(pageId)
        .then(() => {
            console.log('DESTROYED PRODUCT');
            res.redirect('/admin/pages');
        })
        .catch(err => console.log(err));
};

exports.getReport = (req, res, next) => {
    Page.find()
        .then(pages => {
            res.render('shop/pagesOutput', {
                pages: pages,
                pageTitle: 'Admin Pages',
                path: '/pages'
            });
        })
        .catch(err => console.log(err));
};