import React from 'react';
import Header from './Components/Header/header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateProduct from './Components/Products/createProducts';
import CreateVehicle from './Components/Vehicles/createVehicle';
import Vehicles from './Components/Vehicles/vehicles';
import Products from './Components/Products/products';

const App = () => { 
return(
    <div>
    <Router>
        <Header/>
        <section>
            <Switch>
                <Route path = "/create-product" component = {CreateProduct}/>
                <Route path = "/create-delivery" component = {CreateVehicle}/>
                <Route path = "/delivery" component = {Vehicles} exact/>
                <Route path = "/:id" component = {Products}/>


              
            </Switch>
        </section>

    </Router>
</div>
);
}

export default App;