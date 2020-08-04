import React from 'react';
import './Meme.css';


function Meme(props) {
    function clickHandler() {
        console.log("clicked");
    }

     return (
            <div className='MemeContainer'>
                <img onClick={clickHandler} src={props.pic} />
            </div>               
     )
}

export default Meme;