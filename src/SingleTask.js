import React from 'react';


function SingleTask(props) {
  console.log(props)
  return(
    <li>{props.task}</li>
  )
}


export default SingleTask;
