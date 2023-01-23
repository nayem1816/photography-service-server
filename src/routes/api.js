const express = require('express');
const ProductController = require('../controllers/ProductController');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.post('/add-product', ProductController.CreateProduct);
router.get('/get-products', ProductController.GetProducts);
router.delete('/delete-product/:id', ProductController.DeleteProduct);
router.put('/update-product/:id', ProductController.UpdateProduct);
router.get('/get-product/:id', ProductController.GetProductById);

// Admin Routes
router.post('/add-admin', AdminController.CreateAdmin);
router.get('/get-admins', AdminController.GetAdmins);
router.post('/is-admin', AdminController.isAdmin);

module.exports = router;
