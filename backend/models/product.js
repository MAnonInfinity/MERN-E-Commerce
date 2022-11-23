const mongoose = require('mongoose')

const { ObjectId } = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxLength: 2000
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        maxLength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',  // relating the Product Schema to Category Schema
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    image: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)