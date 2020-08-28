import React, { Component } from 'react';


class SingleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: val })
  }

  handleSubmit(e) {
    e.preventDefault();
    for (let i in this.state) {
      this.setState({ [i]: ''})
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor='password'>
            <input
              id='password'
              type='password'
              placeholder='password'
              value= { this.state.password }
              name='password'
              onChange={ this.handleChange }
            >
            </input>
          </label>
          <label htmlFor='text'>
            <input 
              id='text'
              type='text' 
              value={this.state.value} 
              onChange={ this.handleChange }
              placeholder='value'
              name='value'
              >
            </input>
          </label>
          <label htmlFor='email'>
            <input 
              id='email'
              type='email'
              placeholder='email'
              value={ this.state.email }
              name='email'
              onChange={ this.handleChange }
            />
          </label>

          <button>Submit!</button>  
        </form>
      </div>
    );
  }
}


export default SingleList;