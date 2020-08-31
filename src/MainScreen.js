import React, { Component } from 'react';
import SingleList from './SingleList';
import SingleForm from './SingleForm';
import uuid from 'uuid/v4';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // {
        //   task: 'vacuum', 
        //   id: uuid(),
        // }
      ],

    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }

  handleAddTask(task) {
    this.setState(st => ({
      tasks: [...st.tasks, task]
    }))
  }
  
  handleDelete(id) {
    this.setState( st => ({
      tasks: st.tasks.filter(el => el.id !== id) 
    }))
  }

  handleUpdateTask(obj) {
    const { task, id } = obj;
    const newState = this.state.tasks.map(el => el.id === id ? {...el, task: task} : el );
    this.setState({ tasks: newState })
  }

  render() {
    /* const singleList = this.state.tasks.map(el => (
      <SingleList 
        tasks={el.task}
      />
    )) */

    return (
      <div>
        <h1> Here we go React!</h1>
        <SingleForm 
          addTask={this.handleAddTask}
        />
        <SingleList 
          tasks={this.state.tasks}
          title='Home Works'
          deleteTask={this.handleDelete}
          updateTask={this.handleUpdateTask}
        />
      </div>

    );
  }
}


export default MainScreen;