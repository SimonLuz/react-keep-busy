import React, { Component } from 'react';


class SingleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this)
    const res = e.target.value;
    this.setState({ value: res })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`You typed: ${this.state.value}`);
    this.setState({ value: ' ' })
  }

  render() {

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type='text' 
            value={this.state.value} 
            onChange={ this.handleChange }
            >
          </input>
          <button>Submit!</button>  
        </form>
      </div>
    );
  }
}


export default SingleList;