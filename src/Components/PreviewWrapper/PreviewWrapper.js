import React, {useContext} from "react"

import "./PreviewWrapper.css"
import {StateContext} from '../../context';

function PreviewWrapper() {
    const {selectedMemeSrc} = useContext(StateContext);
    const {imgData} = useContext(StateContext);

    return (
      <div className="PreviewWrapper">
        {<img src={imgData ? imgData : selectedMemeSrc} alt="selected meme" />}
      </div>
    );
}

export default PreviewWrapper