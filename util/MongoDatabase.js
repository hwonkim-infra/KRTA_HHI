// connections/fast.js
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://hwKimDB:H5VRAUk2Zd2BYegH@cluster0.jbnnb.mongodb.net/CMS?retryWrites=true&w=majority";


const conn = mongoose.createConnection(process.env.MONGODB_URI);
conn.model('User', require('../schemas/user'));

module.exports = conn;