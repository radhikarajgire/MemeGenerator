import React, { useContext } from 'react';
import './EditorWrapper.css';

import { StateContext } from '../../context';

function EditorWrapper() {
  const { inputs } = useContext(StateContext);
  return (
    <div className="EditorWrapper">
      {inputs.map((_, idx) => (
        <input key={idx} type="text" />
      ))}
    </div>
  );
}

export default EditorWrapper;
