import React, { Component } from 'react';


class BoxForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val)
    this.setState({ [name]: val})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state);
    for (let i in this.state) {
      this.setState({[i]: ''})
    }
  }

  render() {

    return(
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='width'>
          <input 
            type='text'
            name='width'
            id='width'
            placeholder='width'
            onChange={ this.handleChange }
            value={ this.state.width}
          >
          </input>
        </label>
        <label htmlFor='height'>
          <input 
            type='text'
            name='height'
            id='height'
            placeholder='height'
            onChange={ this.handleChange }
            value={ this.state.height }
          >
          </input>
        </label>
        <label htmlFor='backgroundColor'>
          <input 
            type='text'
            name='backgroundColor'
            id='backgroundColor'
            placeholder='backgroundColor'
            onChange={ this.handleChange }
            value={ this.state.backgroundColor }
          >
          </input>
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

export default BoxForm;

