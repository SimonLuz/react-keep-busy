import React, { Component } from 'react';
import SingleTask from './SingleTask';


class SingleList extends Component {

  render() {
    const { title, tasks } = this.props;

    return(
      <div>
        <h3>{title}</h3>
        <ul>
          {tasks.map(el => <SingleTask 
            task={el.task} 
            key={el.id}
            delete={this.props.deleteTask}
            id={el.id}
            updateTask={this.props.updateTask}
            /> 
          )}
        </ul>
      </div>
    )
  }

}

export default SingleList;