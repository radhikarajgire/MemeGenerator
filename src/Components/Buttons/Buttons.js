import React, { useContext } from 'react';

import './Button.css';
import { StateContext } from '../../context';

function Buttons() {
  const { setImgData } = useContext(StateContext);

  function onUpload(e) {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      console.log('data recorded');
    }
  }

  function clickGenerate() {
    console.log('Picture generated');
  }

  function onDownload() {
    console.log('Picture downloaded');
  }

  return (
    <div className="ButtonWrapper">
      <input type="file" className="custom-file-input" onChange={onUpload} />
      <button onClick={clickGenerate}>Preview</button>
      <button onClick={onDownload}>Download</button>
    </div>
  );
}

export default Buttons;
