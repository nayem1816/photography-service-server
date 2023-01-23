const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const ProductModel = mongoose.model('products', productSchema);

module.exports = ProductModel;
