import React, { useContext } from 'react';

import './Button.css';
import { StateContext } from '../../context';

function Buttons() {
  const {
    setImgData,
    memes,
    currentMemeIdx,
    inputs,
    setInputs,
    setSelectedMemeSrc,
    setLoading,
  } = useContext(StateContext);

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

  const querifyObj = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return '?' + params.join('&');
  };

  function clickGenerate() {
    setLoading(true);
    const currentMeme = memes[currentMemeIdx];

    const obj = {
      username: 'Beerios',
      password: 'letmeusethis',
      template_id: currentMeme.id,
    };
    const arr = inputs.map((v, idx) => `boxes[${idx}][text]=${v}`).join('&');
    const clearedInputs = inputs.map((v) => '');

    fetch(`https://api.imgflip.com/caption_image${querifyObj(obj)}&${arr}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setSelectedMemeSrc(res.data.url);
      });
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
