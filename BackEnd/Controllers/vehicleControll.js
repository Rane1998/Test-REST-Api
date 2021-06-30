const Vehicle = require('../Models/vehicle');


const createVehicle = async (req,res) => {  // Add Delivery Vehicle
    if (req.body){
        const vehicle = new Vehicle (req.body);
        await vehicle.save().then (data => {
            res.status(200).send({data:data});
        })
        .catch(error => {
            res.status(500).send ({error:error.message})
        });       
}
}

const getAllVehicles = async (req,res) => {    // View all the delivery Vehicles

    await Vehicle.find({}).populate('products','code name amount inStock ').then(data => {
        res.status(200).send({data:data});   
    })
    .catch(error => {
        res.status(500).send ({error:error.message})
    });
}


const getProductsCanDeliveryByVehicle = async (req,res) => {
    if(req.params && req.params.id){
     await Vehicle.findById(req.params.id).populate('products','code name amount inStock ').then(data =>{
        res.status(200).send({products:data.products});   
     }) .catch(error => {
        res.status(500).send ({error:error.message})
    });

    }
}











module.exports = {
    createVehicle,
    getAllVehicles,
    getProductsCanDeliveryByVehicle,
    
};