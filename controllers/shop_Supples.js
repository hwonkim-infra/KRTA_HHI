const Files = require("../models/supple_File");

exports.getIndex = (req, res, next) => {
    Files.find()
        .sort({ _id: 1 })
        .then((docs) => {
            res.render("shop/indexSuppleFiles", {
                files: docs,
                pageTitle: "안전기준 기술문서",
                path: "/",
            });
        })
        .catch((err) => console.log(err));
};

exports.getReport = (req, res, next) => {
    console.log(req.params);
    // const fileId = req.params;
    // console.log("🚀 ~ file: shop_Supples.js ~ line 7 ~ fileId", fileId);
    Files.findById(fileId)
        .then((file) => {
            res.render("shop/SuppleFileOutput", {
                file: file,
                pageTitle: file.Filename,
            });
        })
        .catch((err) => {
            console.log(err);
        });
};