const AdminModel = require('../models/AdminModel');

exports.CreateAdmin = (req, res) => {
    const admin = {
        email: req.body.email,
    };

    AdminModel.create(admin, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in creating admin',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Admin created successfully',
                data: data,
            });
        }
    });
};

exports.GetAdmins = (req, res) => {
    AdminModel.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in getting admins',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Admins get successfully',
                data: data,
            });
        }
    });
};

exports.isAdmin = (req, res, next) => {
    const email = req.body.email;

    AdminModel.findOne({ email: email }, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in finding admin',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Admin found successfully',
                data: data,
            });
        }
    });
};
