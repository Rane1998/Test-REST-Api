const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({

    code:{
        type:String,
        required:true,
       
    },

    name:{
        type:String,
        required:true,
        trim:true
    },

    amount:{
        type: Number,
        required:true,
    },
    inStock:{
        type: Number,
        required:true,
    },

    vehicles:[{type:mongoose.Schema.Types.ObjectId, required:false,ref:'vehicles'}]

    
});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;