import React , {Component} from 'react';
import axios from 'axios';

const initialState = {
    code:'',
    productName:'',
    amount:0,
    inStock:0

}

class CreateProduct extends Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialState;

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        let product = {
            code:this.state.code,
            name:this.state.productName,
            amount:this.state.amount,
            inStock:this.state.inStock,
        }
        axios.post('http://localhost:5000/product/create', product).then(response => {
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
                <h2>Add Product</h2><br></br>
                <form onSubmit = {this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="code" className="form-label">Product Code</label>
    <input type="text" 
    className="form-control" 
    id="code" 
    name = "code"
    value = {this.state.code}
    onChange ={this.onChange}
     />
   </div>
  
   <div className="mb-3">
    <label htmlFor="productName" className="form-label">Product Name</label>
    <input type="text" 
    className="form-control" 
    id="productName" 
    name = "productName"
    value = {this.state.productName}
    onChange ={this.onChange}
     />
   </div>

  <div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount</label>
    <input type="number" 
    className="form-control" 
    id="amount" 
    name = "amount" 
    value ={this.state.amount}
    onChange ={this.onChange}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="inStock" className="form-label">In Stock</label>
    <input type="number" 
    className="form-control" 
    id="inStock" 
    name = "inStock" 
    value ={this.state.inStock}
    onChange ={this.onChange}
    />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        )
    }
}


export default CreateProduct;