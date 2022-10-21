import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    
    const [posts, setPosts] = useState([])
    const handleClick = (color) => {
        setPosts ([<Block color={color}></Block>,...posts]);
    }

    return (
        <div>
            <Menu handleClick = {handleClick}></Menu>
            {posts}
        </div>
    );
}

export default Feed;