import React from 'react';

import './Button.css' ;

function Buttons() {

    function clickGenerate() {
        console.log("Picture uploaded")
    };

    function clickSave() {
        console.log("Picture generated")
    };

    return (
        <div className="ButtonWrapper">            
            <input type="file" class="custom-file-input" />
            <button onClick={clickGenerate}>Preview</button>
            <button onClick={clickSave}>Download</button>
                      
        </div>
    )
}

export default Buttons