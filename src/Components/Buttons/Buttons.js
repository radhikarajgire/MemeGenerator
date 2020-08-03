import React from 'react';

import './Button.css' ;

function Buttons() {

    function clickUpload() {
        console.log("Picture uploaded")
    };

    function clickGenerate() {
        console.log("Picture uploaded")
    };

    function clickSave() {
        console.log("Picture generated")
    };

    return (
        <div className="ButtonWrapper">            
            <button onClick={clickUpload}>Upload</button>
            <button onClick={clickGenerate}>Preview</button>
            <button onClick={clickSave}>Save</button>
                      
        </div>
    )
}

export default Buttons