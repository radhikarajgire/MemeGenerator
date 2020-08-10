import React, { useState, useContext } from 'react';

import './Button.css' ;
import {StateContext} from '../../context';


function Buttons() {

    const [picture, setPicture] = useState(null);
    const {imgData, setImgData} = useContext(StateContext);
    
    function onUpload(e) {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
            console.log("data recorded")
          }
    };

    function clickGenerate() {
        console.log("Picture generated")
    };

    function onDownload() {
        console.log("Picture downloaded")
    };

    return (
        <div className="ButtonWrapper">            
            <input type="file" class="custom-file-input" onChange={onUpload} />
            <button onClick={clickGenerate}>Preview</button>
            <button onClick={onDownload}>Download</button>
                      
        </div>
    )
}

export default Buttons