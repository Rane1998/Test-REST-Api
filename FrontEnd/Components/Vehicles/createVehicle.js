import React , {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    type:'',
    owner:'',
    description:'',
   
    products:[],
    options:[],
    selectedProducts:[]
}


class CreateVehicle extends Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onProductSelect = this.onProductSelect.bind(this)
        this.state = initialState;
    }

    componentDidMount(){
        axios.get('http://localhost:5000/product/').then(response => {
            this.setState({products:response.data.data}, () => {
                let data = [];
                    this.state.products.map((item,index) => {
                        let product = {
                            value:item._id,
                            label:item.name
                        }
                        data.push(product)
                    });
                    this.setState({options:data});
            })
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onProductSelect(e){
        this.setState({selectedProducts:e ? e.map(item => item.value) :[] });
    }

    onSubmit(e) {
        e.preventDefault();
        let vehicle = {
            type:this.state.type,
            owner:this.state.owner,
            description:this.state.description,
           
            products:this.state.selectedProducts

        }
        axios.post('http://localhost:5000/delivery/create', vehicle).then(response => {
            alert('Data inserted successfully')
        })
        .catch(error => {
            console.log(error.message)
            alert(error.message)
        })
    }


    render() {
        return(
            <div className = "container">
<br></br>
                <h2>Add Vehical </h2><br></br>
                <form onSubmit = {this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="type" className="form-label">Vehicle Type</label>
    <input type="text" 
    className="form-control" 
    id="type" 
    name = "type"
    value = {this.state.type}
    onChange ={this.onChange}
     />
   </div>
  
   <div className="mb-3">
    <label htmlFor="owner" className="form-label">Vehicle Owner</label>
    <input type="text" 
    className="form-control" 
    id="ownerr" 
    name = "owner"
    value = {this.state.owner}
    onChange ={this.onChange}
     />
   </div>

   <div className="mb-3">
  <label htmlFor="description" className="form-label">Description</label>
  <textarea className="form-control"
   id="description" 
   rows="3" 
   name = "description"
    value = {this.state.description}
        onChange ={this.onChange} > 
        </textarea>   

  </div>


  
Products
<Select
    options = {this.state.options}
    onChange = {this.onProductSelect}
    className = "basic-multi-select"
    isMulti
/>
<br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        )
    }
}


export default CreateVehicle;