const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})

const Category = mongoose.model('Category', categorySchema, 'Categories')
module.exports = Category