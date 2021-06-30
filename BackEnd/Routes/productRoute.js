const express = require ('express');
const router = express.Router();
const productController = require('../Controllers/productControll');


module. exports = function () {
router.post('/create', productController.createProduct);
router.get('/',productController.getAllProducts);
return router;
}