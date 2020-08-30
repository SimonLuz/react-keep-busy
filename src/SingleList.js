import React, { Component } from 'react';
import SingleForm from './SingleForm';
import SingleTask from './SingleTask';
import uuid from 'uuid/v4';


class SingleList extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      tasks: '',
    }

  } */

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
            /> 
          )}
        </ul>
      </div>
    )
  }

}

export default SingleList;