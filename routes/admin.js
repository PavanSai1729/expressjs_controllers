const path = require('path');

const express = require('express');

const productsController = require("../controllers/product.js");

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddproduct);


// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

