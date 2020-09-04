import React, { Component } from 'react';
import SingleList from './SingleList';
import SingleForm from './SingleForm';
import TitleForm from './TitleForm';
import uuid from 'uuid/v4';
import './ListContainer.css';


class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title:'Title here...',
          titleCompleted: true,
          id: uuid(),
        }
       ],

    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleEditTitle = this.handleEditTitle.bind(this);
    this.handleToggleTitle = this.handleToggleTitle.bind(this);
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

  handleEditTitle(title, id) {

    console.log('handleEditTitle', title, id)
    this.setState( st => ({
      tasks: st.tasks.map(el => el.id === id ? { ...el, title:title, titleCompleted: true }: el )
    }) 
    )
  }

  handleToggleTitle(id) {
    console.log('handleToggleTitle', id)
    this.setState( st => ({
      tasks: st.tasks.map(el => el.id === id ? { ...el, titleCompleted: false } : el )
    })
    )
  }

  render() {
  
    return (
      <div className='main-container'>
        <div className='singleList-container'>
          <TitleForm 
            title={this.state.tasks[0].title}
            editTitle={this.handleEditTitle}
            titleCompleted={this.state.tasks[0].titleCompleted}
            key={this.state.tasks[0].id}
            id={this.state.tasks[0].id}
            toggleTitleForm={this.handleToggleTitle}
          />
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


export default ListContainer;