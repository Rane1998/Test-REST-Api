import React , {Component} from 'react';
import axios from 'axios';

class Vehicles extends Component {
    constructor (props) {
        super(props);
       
        this.state = {
            vehicles: []
        }
    }

componentDidMount() {
axios.get('http://localhost:5000/delivery/').then (response => {
   this.setState({vehicles:response.data.data})
})
}


navigateProductPage(e, vehicleId) 
{
window.location=`/${vehicleId}`;
}




    render() {
        return(
            <div className = "container">
                <br></br>
                    <h2> Vehicles </h2>
                    
                    {this.state.vehicles.length>0 && this.state.vehicles.map((item,index) => (
                        <div key = {index} className = "card  mb-3">
                            <div className="p-3" onClick = {e =>this.navigateProductPage(e,item._id)}>
                            <h5>Vehicle Type: {item.type}</h5>
                            <h6>Vehicle Owner: {item.owner}</h6>
                            <h6>Description: {item.description}</h6>
                           
                            </div>
                            </div>
                    ))}
            </div>
        )
    }
}


export default Vehicles;