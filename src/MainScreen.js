import React, { Component } from 'react';
import SingleList from './SingleList';
import SingleForm from './SingleForm';
import uuid from 'uuid/v4';
import './MainScreen.css';


class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [ ],

    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    // this.handleCompleted = this.handleCompleted.bind(this);
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

/*   handleCopleted(id) {
  
  }  */

  render() {
    /* const singleList = this.state.tasks.map(el => (
      <SingleList 
        tasks={el.task}
      />
    )) */

    return (
      <div className='main-container'>
        <div className='singleList-container'>
          <div className='SingleList-title'>
            <h1> Home Works <span>A simple React List App</span></h1>
          </div>
          <SingleList 
            tasks={this.state.tasks}
            // title='Home Works'
            deleteTask={this.handleDelete}
            updateTask={this.handleUpdateTask}
            // completed={this.handleCompleted}
          />
          <SingleForm 
            addTask={this.handleAddTask}
          />
        </div>
      </div>
      

    );
  }
}


export default MainScreen;