const Product = require('../Models/product');

const createProduct = async (req,res) => { //add Product
if (req.body) {
    const product = new Product (req.body);
    product.save().then(data => {
        res.status(200).send ({data:data});
    })
    .catch(error => {
        res.status(500).send({error: error. message})
    });
}

}

const getAllProducts = async (req,res) => {   //View all products

    await Product.find({}).then(data => {
        res.status(200).send({data:data});   
    })
    .catch(error => {
        res.status(500).send ({error:error.message})
    });
}





module.exports = {
    createProduct,getAllProducts
};