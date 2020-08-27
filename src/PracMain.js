import React, { Component } from 'react';
import PracSub from './PracSub';


class PracMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { product:'butter', qty: 3 }, 
        { product: 'chicken', qty: 4 }
      ]
    }

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    console.log(product)
    this.setState( st => ({
      products: [...st.products, product ]
    }) )
  }

  render() {

    return(
      <div>
        <h1>Shopping Basket</h1>
        <PracSub 
          addProduct={this.addProduct}
        />
        <ul>
          { this.state.products.map(el => (
            <li> 
              {el.product}: {el.qty} // It must be strings, can't be OBJECT!!!
            </li>
          ) )}
        </ul>
        
      </div>
    )
  }
}

export default PracMain;