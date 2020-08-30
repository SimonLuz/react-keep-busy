import React, { Component } from 'react';
import SingleList from './SingleList';
import SingleForm from './SingleForm';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* lists: [
        {
          name: 'Home',
          tasks: []
        }
      ] */
      tasks: []
    }
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState(st => ({
      tasks: [...st.tasks, task]
    }))
  }

  render() {

    return (
      <div>
        <h1> Here we go React!</h1>
        <SingleForm 
          addTask={this.handleAddTask}
        />
        <SingleList 
          tasks={this.state.tasks}
          title='Home Works'
        />
      </div>

    );
  }
}


export default MainScreen;