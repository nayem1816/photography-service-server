const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.post('/add-product', ProductController.CreateProduct);
router.get('/get-products', ProductController.GetProducts);

module.exports = router;
