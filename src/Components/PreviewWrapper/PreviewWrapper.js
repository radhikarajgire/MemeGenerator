import React, { useContext } from 'react';

import './PreviewWrapper.css';
import { StateContext } from '../../context';

function PreviewWrapper() {
  const { selectedMemeSrc } = useContext(StateContext);
  const { imgData } = useContext(StateContext);

  return (
    <div className="PreviewWrapper">
      {<img alt="meme" src={imgData ? imgData : selectedMemeSrc} />}
    </div>
  );
}

export default PreviewWrapper;
