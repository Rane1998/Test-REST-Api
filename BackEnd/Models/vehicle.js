const mongoose = require ("mongoose");

const vehicleSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
        trim:true
    },
    owner:{
        type:String,
        required:true,
        trim:true
    },
  
    description:{
        type:String,
        required:true,
        trim:true
    },
    products:[{type:mongoose.Schema.Types.ObjectId, required:false,ref:'products'}]

})

const Vehicle = mongoose.model('vehicles', vehicleSchema);
module.exports = Vehicle;