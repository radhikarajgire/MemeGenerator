import React, {useContext} from "react"

import "./PreviewWrapper.css"
import {StateContext} from '../../context';

function PreviewWrapper() {
    const {selectedMemeSrc} = useContext(StateContext);

    return (
      <div className="PreviewWrapper">
        {selectedMemeSrc && <img src={selectedMemeSrc} alt="selected meme" />}
      </div>
    );
}

export default PreviewWrapper