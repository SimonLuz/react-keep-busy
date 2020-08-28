import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid/v4';


class BoxList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxes:  [
        {
        width: 40,
        height: 80,
        backgroundColor: 'yellow',
        id: uuid(),
        }
      ],
      ready: false,
    };
    this.handleAddBox = this.handleAddBox.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // MUST BE this syntax, with this.setState(st => ({ ... }))
  handleAddBox(box) {
    const ready = !this.state.ready;
    box.id = uuid();
    this.setState(st => ({
      boxes: [...st.boxes, box],
      ready: ready
    }))
  }
  // Cannot be this syntax: this.setState(st => ( ... )), new box is rendered TWICE!!!!
/*   handleAddBox(box) {
    console.log(box)
    const ready = !this.state.ready;
    this.setState(st => (
      st.boxes = [...st.boxes, box],
      st.ready = ready
    ))
  } */

  handleDelete(id) {
    const newState = this.state.boxes.filter(el => el.id !== id);
    this.setState({ boxes: newState });
  }

  render() {

    return(
      <div>
        <h1>Tu BoxList.js</h1>
        <BoxForm addBox={ this.handleAddBox } />
        
        <h1>Tu Boxes</h1>
        { this.state.boxes.map(el => (
          <Box 
            width={ `${el.width}px` }
            height={ `${el.height}px` }
            backgroundColor={ el.backgroundColor }
            key={el.id}
            id={el.id}
            delete={ this.handleDelete }
          /> 
        )) }
        
      </div>
    )
  }
}

export default BoxList;