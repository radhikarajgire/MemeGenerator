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
            <form>
                <input type="file"/>
                <button type="submit">Upload</button>
            </form>
            <button onClick={clickGenerate}>Preview</button>
            <button onClick={clickSave}>Save</button>
                      
        </div>
    )
}

export default Buttons