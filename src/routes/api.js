const express = require('express');
const ProductController = require('../controllers/ProductController');
const AdminController = require('../controllers/AdminController');
const CheckoutController = require('../controllers/CheckoutController');

const router = express.Router();

// Product Routes
router.post('/add-product', ProductController.CreateProduct);
router.get('/get-products', ProductController.GetProducts);
router.delete('/delete-product/:id', ProductController.DeleteProduct);
router.put('/update-product/:id', ProductController.UpdateProduct);
router.get('/get-product/:id', ProductController.GetProductById);

// Admin Routes
router.post('/add-admin', AdminController.CreateAdmin);
router.get('/get-admins', AdminController.GetAdmins);
router.post('/is-admin', AdminController.isAdmin);

// Checkout Routes
router.post('/add-checkout', CheckoutController.CreateCheckout);
router.get('/get-checkouts', CheckoutController.GetCheckouts);
router.put('/update-checkout/:id', CheckoutController.UpdateCheckout);
router.get('/get-checkout/:email', CheckoutController.GetCheckoutByEmail);

module.exports = router;
