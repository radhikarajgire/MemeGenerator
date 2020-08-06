import React, {useContext} from 'react';
import './Meme.css';

import {StateContext} from '../../context';


function Meme(props) {

    const {setSelectedMemeSrc} = useContext(StateContext);

    function clickHandler(e) {
        setSelectedMemeSrc(e.target.src);
    }

     return (
            <div className='MemeContainer'>
                <img onClick={clickHandler} src={props.pic} />
            </div>               
     )
}

export default Meme;