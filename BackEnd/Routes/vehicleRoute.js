const express = require ('express');
const router = express.Router();
const vehicleController = require('../Controllers/vehicleControll');


module. exports = function () {
router.post('/create', vehicleController.createVehicle);
router.get('/',vehicleController.getAllVehicles);
router.get('/:id',vehicleController.getProductsCanDeliveryByVehicle);

return router;
}