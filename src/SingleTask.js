import React from 'react';


function SingleTask(props) {

  return(
    <div>
      <button>Edit</button>
      <button onClick={ () => props.delete(props.id) }>X</button>
      <li>{props.task}</li>
    </div>
  )
}


export default SingleTask;
