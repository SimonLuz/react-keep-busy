import React, { Component } from 'react';


class PracSub extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: '',
      qty: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    console.log(`this is ${name}: ${ val}`)
    this.setState({ [name]: val})
  }

  handleSubmit(e) {

  }

  render() {

    return(
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='product'>Product
          <input 
            id='product'
            value={ this.state.product }
            name='product'
            onChange={ this.handleChange }
            placeholder='Product'
          />
        </label>
        <label htmlFor='qty'>Quantity
          <input 
            name='qty'
            id='qty'
            value={ this.state.qty }
            onChange={ this.handleChange }
            placeholder='Quantity'
          >
          </input>
        </label>
      </form>
    )
  }
}

export default PracSub;