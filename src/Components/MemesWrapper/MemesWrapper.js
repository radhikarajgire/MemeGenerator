import React, { useState, useEffect } from 'react';
import './MemesWrapper.css';
import Meme from "../Meme/Meme"


function MemesWrapper() {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(json => {
        const fiveMemes = json.data.memes.slice(0,90);
        setMemes(fiveMemes) 
        })
        .catch((error) => console.log(error.message));
    })

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