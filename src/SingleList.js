import React, { Component } from 'react';
import SingleTask from './SingleTask';
import './SingleList.css';


class SingleList extends Component {

  render() {
    const { title, tasks } = this.props;

    return(
      <div className='SingleList'>
        {/* <h1>{title} <span>A simple React List App</span></h1> */}
        <ul>
          {tasks.map(el => <SingleTask 
            task={el.task} 
            key={el.id}
            delete={this.props.deleteTask}
            id={el.id}
            updateTask={this.props.updateTask}
            // completed={this.props.completed}
            /> 
          )}
        </ul>
      </div>
    )
  }

}

export default SingleList;