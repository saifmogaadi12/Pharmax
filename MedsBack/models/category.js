const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = mongoose.Schema({
    name_category: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true});

const Categorys = mongoose.model('category', categoriesSchema);

module.exports =  Categorys