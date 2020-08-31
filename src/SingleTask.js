import React, { Component } from 'react';


class SingleTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isShowing: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleForm() {
    this.setState({ isShowing: !this.state.isShowing })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTask({ task: this.state.task, id: this.props.id });
    this.setState({ isShowing: !this.state.isShowing })
  }

  render() {
    let result;
    if (this.state.isShowing) {  
      result = (
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={this.handleChange}
            name='task'
            value={this.state.task}
          />
          <button>Save</button>
        </form>
      );
    } else {
      result = (
        <div>
          <button onClick={ this.toggleForm }>Edit</button>
          <button onClick={ () => this.props.delete(this.props.id) }>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
      return result;
    
  }
  
}


export default SingleTask;
