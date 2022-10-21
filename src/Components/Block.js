import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    const background = {backgroundColor: props.color}
    return (
        <div>
            <div className="post" style={background}></div>
            <div className="caption"></div>
        </div>
    );
}

export default Block;