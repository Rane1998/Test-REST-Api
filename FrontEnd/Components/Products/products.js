import React, { Component } from 'react';
import axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
   
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/delivery/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ products: response.data.products })
    })
    .catch(error => {
      alert(error.message)
    })

  
  }

  render() {
    return (
      <div className="container">
          <br></br>
        <h1> Products can be delivered</h1>
        <br></br>
        {this.state.products.length > 0 && this.state.products.map((item, index) => (
          <div key={index} className="card mb-3">
            <div className="p-3">
              <h6>Product Code: {item.code}</h6>
              <h6>Product Name: {item.name}</h6>
              <h6>Amount: {item.amount}</h6>
              <h6>In the stock: {item.inStock}</h6>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Products;