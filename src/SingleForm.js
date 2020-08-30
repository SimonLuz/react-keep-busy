import React, { Component } from 'react';
import uuid from 'uuid/v4';


class SingleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      id: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value, id: uuid() })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({ task: '' });
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'></label>
        <input
          type='text'
          value={this.state.task}
          name='task'
          placeholder='task'
          onChange={this.handleChange}
        >
        </input>
        <button>Submit</button>

      </form>
    )
  }

}

export default SingleForm;