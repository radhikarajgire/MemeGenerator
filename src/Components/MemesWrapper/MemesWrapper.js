import React, { useState, useEffect, useContext } from 'react';
import './MemesWrapper.css';
import Meme from "../Meme/Meme"
import {StateContext} from '../../context';


function MemesWrapper() {

    const {memes} = useContext(StateContext);

     return (
        <div>
            <h3>Select meme</h3>
            <div className="MemeCollection">        
                <div className="MemesWrapper">
                        {memes.map((meme) => (<Meme pic={meme.url} />)) }
                </div>
            </div>
        </div>         
     )
}

export default MemesWrapper;