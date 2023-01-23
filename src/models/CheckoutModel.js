const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String },
        product: { type: Object, required: true },
        status: { type: String, default: 'pending' },
        createdAt: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

const CheckoutModel = mongoose.model('checkout', CheckoutSchema);

module.exports = CheckoutModel;
