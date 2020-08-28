import React, { Component } from 'react';


class Box extends Component {



  deleteBox = () => {
    // const { delete, id } = this.props; - cannot DESTRUCTURE function passed in props!!!!!!
    
    this.props.delete(this.props.id)
  }

  render() {
    const { width, height, backgroundColor } = this.props;
    const style = {width, height, backgroundColor}

    return(
      <div>
        <div style={ style } ></div>
        <button onClick={ this.deleteBox }>Delete</button>
      </div>
    )
  }
}

export default Box;