const CheckoutModel = require('../models/CheckoutModel');

exports.CreateCheckout = (req, res) => {
    const checkout = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        product: req.body.product,
    };

    CheckoutModel.create(checkout, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in creating checkout',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Checkout created successfully',
                data: data,
            });
        }
    });
};

exports.GetCheckouts = (req, res) => {
    CheckoutModel.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in getting checkouts',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Checkouts get successfully',
                data: data,
            });
        }
    });
};

exports.UpdateCheckout = (req, res) => {
    const id = req.params.id;
    const status = req.body.status;

    CheckoutModel.findByIdAndUpdate(id, { status }, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in updating checkout',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Checkout updated successfully',
                data: data,
            });
        }
    });
};

exports.GetCheckoutByEmail = (req, res) => {
    const email = req.params.email;

    CheckoutModel.find({ email }, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in getting checkout by email',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Checkout get by email successfully',
                data: data,
            });
        }
    });
};
