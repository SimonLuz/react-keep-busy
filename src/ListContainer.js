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
        },
        {
          title:'Title 2 ...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'Clean floor', id: uuid()}
          ]
        },
        {
          title:'Title 3 ...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'Clean floor', id: uuid()}
          ]
        },
        {
          title:'Title 4 ...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'Clean floor', id: uuid()}
          ]
        },
        {
          title:'Title 5 ...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'Clean floor', id: uuid()}
          ]
        },
        {
          title:'Title 6 ...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'Clean floor', id: uuid()}
          ]
        },
        {
          title:'Title 7 ...',
          titleCompleted: true,
          listID: uuid(),
          tasks: [
            { task: 'Clean floor', id: uuid()}
          ]
        }
       ],
       rotateY: 0,

    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleEditTitle = this.handleEditTitle.bind(this);
    this.handleToggleTitle = this.handleToggleTitle.bind(this);
  }

  static defaultProps = {
    cellWidth: 210,
    cellHeight: 140, 
    margin: 10,
    backgroundColors: ['green', 'blue', 'red', 'black', 'maroon', 'orangered', 'navy']
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

  handleCarousel(dir, deg) {
    const res = this.state.rotateY + deg * dir;
    this.setState({ rotateY: res})
  }

  render() {
    let rotateY;
    const carouselData = {
      numOfCells: this.state.lists.length,
      width: this.props.cellWidth ,
      degree: 360 / this.state.lists.length,
      translateZ: function() { 
        return Math.round((this.width / 2) / Math.tan(Math.PI / this.numOfCells))
      },
      rotateY: function() {
        rotateY = rotateY + this.degree;
      }
    }

    const lists = this.state.lists.map((list, i) => {
      rotateY = i * carouselData.degree;
      const style = {
        backgroundColor: `${this.props.backgroundColors[i]}`,
        width: `${this.props.cellWidth - (2 * this.props.margin)}px`,
        minHeight: `${this.props.cellHeight - (2 * this.props.margin)}px`,
        transform:
          `rotateY(${rotateY}deg) 
          translateZ(${carouselData.translateZ()}px)`,
        left: `${this.props.margin}px`, 
        top: `${this.props.margin}px` 
      }
      // var tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );

      return(
      <div className=' carousel-cell' style={style}>
        {/* <div className='singleList-container'>
          <TitleForm 
            title={list.title}
            editTitle={this.handleEditTitle}
            titleCompleted={list.titleCompleted}
            key={list.listID}
            id={list.listID}
            toggleTitleForm={this.handleToggleTitle}
          />
          <SingleList 
            tasks={list.tasks}
            listID={list.listID}
            deleteTask={this.handleDelete}
            updateTask={this.handleUpdateTask}
            // completed={this.handleCompleted}
          />
          <SingleForm 
            addTask={this.handleAddTask}
            listID={list.listID}
          />
        </div>
         */}
      </div>
      )
    })



    return (
      <div className='main-container'>
        <div className='carousel-scene' style={{
          width:`${this.props.cellWidth}px`,
          height: `${this.props.cellHeight}px`,
          
          }}>
          <div className='carousel-carousel' 
            style={
              {transform:`translateZ(-${carouselData.translateZ()}px) 
              rotateY(${this.state.rotateY}deg)`}
            }
          >
            { lists } 
          </div>
        </div>
        <div className='button-container'>
          <button className='button-left' onClick={() => this.handleCarousel(-1, carouselData.degree)}>left</button>
          <button className='button-right' onClick={() => this.handleCarousel(1, carouselData.degree)}>right</button>
        </div>
      </div>
    );
  }
}


export default ListContainer;