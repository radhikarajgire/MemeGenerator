import React, { useContext } from 'react';
import './EditorWrapper.css';

import { StateContext } from '../../context';

function EditorWrapper() {
  const { inputs, setInputs } = useContext(StateContext);

  const updateInputs = (e, idx) => {
    const value = e.target.value || '';
    setInputs(
      inputs.map((c, i) => {
        return idx === i ? value : c;
      })
    );
  };

  return (
    <div className="EditorWrapper">
      {inputs.map((input, idx) => (
        <input
          key={idx}
          type="text"
          onChange={(e) => updateInputs(e, idx)}
          value={input}
        />
      ))}
    </div>
  );
}

export default EditorWrapper;
