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
      lists: [
        {
          title:'Title here...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'vacuum', id: uuid()}
          ]
        }
       ],

    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleEditTitle = this.handleEditTitle.bind(this);
    this.handleToggleTitle = this.handleToggleTitle.bind(this);
  }

  handleAddTask(obj) {
    const { newTask, listID, taskID } = obj;
    const newLists = this.state.lists.map(list => {
      if (list.listID === listID) {
        return { ...list, tasks: [...list.tasks, {task: newTask, id: taskID}]};
      } else {
        return list;
      }
    })
    this.setState({ lists: newLists })
  }
  
  handleDelete(obj) {
    const { taskID, listID } = obj;

    this.setState(st => ({
      lists: st.lists.map(list => (
        list.listID === listID ? {...list, tasks: list.tasks.filter(task => taskID !== task.id)} : list 
      ))
    }))
  }

  handleUpdateTask(obj) {
    const { listID, taskID } = obj;
    const newTask = obj.task;
    
    this.setState( st => ({
      lists: st.lists.map(list => (
        list.listID === listID ? 
        {...list, 
          tasks: list.tasks.map(task => (
            task.id === taskID ? 
            {...task, task: newTask } : 
            task
          )) } : 
        list
      ))
    }))
  }

  handleEditTitle(title, id) {
    console.log('handleEditTitle', title, id)
    this.setState( st => ({
      lists: st.lists.map(el => el.listID === id ? { ...el, title:title, titleCompleted: true }: el )
    }) 
    )
  }

  handleToggleTitle(id) {
    console.log('handleToggleTitle', id)
    this.setState( st => ({
      lists: st.lists.map(el => (
        el.listID === id ? 
        { ...el, titleCompleted: false } :
         el 
        )
      )
    })
    )
  }

  render() {


    return (
      <div className='main-container'>
        <div className='singleList-container'>
          <TitleForm 
            title={this.state.lists[0].title}
            editTitle={this.handleEditTitle}
            titleCompleted={this.state.lists[0].titleCompleted}
            key={this.state.lists[0].listID}
            id={this.state.lists[0].listID}
            toggleTitleForm={this.handleToggleTitle}
          />
          <SingleList 
            tasks={this.state.lists[0].tasks}
            listID={this.state.lists[0].listID}
            deleteTask={this.handleDelete}
            updateTask={this.handleUpdateTask}
            // completed={this.handleCompleted}
          />
          <SingleForm 
            addTask={this.handleAddTask}
            listID={this.state.lists[0].listID}
          />
        </div>
      </div>
    );
  }
}


export default ListContainer;