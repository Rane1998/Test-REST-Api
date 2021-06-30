const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const bodyParser = require ("body-parser");
const productRoute = require ('../BackEnd/Routes/productRoute');
const vehicleRoute = require ('../BackEnd/Routes/vehicleRoute');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());


const PORT  = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL, {   // connect database
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}, (error) => {
    if (error) {
        console.log('Error in Database:',error.message);
    }
});

mongoose.connection.once('open', () => {  // Message once the connection is established
console.log('Database Connected');
});

app.route('/').get((req,res)=> {
    res.send('Hi from the API');
});

app.use('/product',productRoute()); // Routes for products

app.use('/delivery',vehicleRoute()); // Routes for deliveries


app.listen(PORT,() => {        // Start the app
    console.log(`Server running on PORT ${PORT}`);
});