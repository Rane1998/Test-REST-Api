import React , {Component} from 'react';

class Header extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>

<nav className="navbar navbar-dark bg-primary  navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ABC Hardware</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/delivery">Vehicles</a>
        <a className="nav-link active" aria-current="page" href="/product">Products</a>
        <a className="nav-link" href="/create-product">Add Product</a>
        <a className="nav-link" href="/create-delivery">Add Vehicle</a>
        
      </div>
    </div>
  </div>
</nav>

</div>
        )
    }
}

export default Header;