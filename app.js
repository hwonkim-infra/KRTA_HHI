const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error404 = require('./controllers/error');

const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://localhost:27017/HHI_KRTA?retryWrites=true&w=majority";



app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//     multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
// );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, 'images')));




app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(error404.get404page);




mongoose
    .connect(MONGODB_URI)
    .then(result => {
        app.listen(3000);
    })
    .catch(error => {
        console.log(error);
    });