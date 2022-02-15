// product fetching model from MySQL DB
const db = require('../util/TCFdatabase');


module.exports = class EUTCF {
    constructor(Doc_No, Item, Date, name) {
        this.Doc_No = Doc_No;
        this.Item = Item;
        this.Date = Date;
        this.name = name;
    }

    save() {
        return db.execute('INSERT INTO `TCF`.`TCF Index` (Doc_No, Item, Date, name) VALUES (?, ?, ?, ?)', [this.Doc_No, this.Item, this.Date, this.name]);
    };


    static deleteById(id) {
        return db.execute('DELETE FROM products WHERE products.id=?', [id])
    };

    static fetchAll() { // promise. rather a callback
        return db.execute('SELECT * FROM TCF.`TCF Index`');
    }

    // new static method to load a single product
    static findById(id) { // a callback will be executed once find the product here.
        return db.execute('SELECT * FROM products WHERE products.id=?', [id])
    }



};