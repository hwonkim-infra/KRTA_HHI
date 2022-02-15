const mongoose = require('mongoose');

/* const slug = require('mongoose-slug-generator');
const domPurifier = require('dompurify');
const { JSDOM } = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

const stripHtml = require('string-strip-html');

//initialize slug
mongoose.plugin(slug);
 */

const documentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    timeCreated: {
        type: Date,
        default: () => Date.now(),
    },
    img: {
        type: String,
        default: 'placeholder.jpg',
    }
    /* ,
    slug: { type: String, slug: 'title', unique: true, slug_padding_size: 2 }, */
});



module.exports = mongoose.model('Document', documentSchema);