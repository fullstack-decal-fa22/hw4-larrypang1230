import React from 'react';
import Color from './Color';

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color handleClick={props.handleClick} color = "red"> </Color>
          <Color handleClick={props.handleClick} color = "pink"> </Color>
          <Color handleClick={props.handleClick} color = "blue"> </Color>
          <Color handleClick={props.handleClick} color = "green"> </Color>
      </div>
    );
}

export default Menu;