import React, { Component } from 'react';


class SingleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>
          <input
            type='text'
            value={this.state.task}
            name='task'
            placeholder='task'
            onChange={this.handleChange}
          >
          </input>
        </label>
        <button>Submit</button>

      </form>
    )
  }

}

export default SingleForm;