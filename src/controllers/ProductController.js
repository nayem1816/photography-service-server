const ProductModel = require('../models/ProductModel');

exports.CreateProduct = (req, res) => {
    const product = {
        title: req.body.title,
        image: req.body.image,
        price: parseInt(req.body.price),
        description: req.body.description,
    };

    ProductModel.create(product, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in creating product',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Product created successfully',
                data: data,
            });
        }
    });
};

exports.GetProducts = (req, res) => {
    ProductModel.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in getting products',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Products get successfully',
                data: data,
            });
        }
    });
};

exports.DeleteProduct = (req, res) => {
    const id = req.params.id;

    ProductModel.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in deleting product',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Product deleted successfully',
                data: data,
            });
        }
    });
};

exports.UpdateProduct = (req, res) => {
    const id = req.params.id;

    const product = {
        title: req.body.title,
        image: req.body.image,
        price: parseInt(req.body.price),
        description: req.body.description,
    };

    ProductModel.findByIdAndUpdate(id, product, (err, data) => {
        if (err) {
            res.status(500).json({
                status: 'fail',
                message: 'Error in updating product',
                data: err,
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Product updated successfully',
                data: data,
            });
        }
    });
};
