import React, { useContext, useState, useRef, useEffect } from 'react';
import {SocialIcon} from "react-social-icons"

import './Button.css';
import { StateContext } from '../../context';

// code that is commented out is for the future upload feature

function Buttons() {
  const [openModal, setOpenModal] = useState(false);
  const {
    // setImgData,
    imgData,
    memes,
    currentMemeIdx,
    inputs,
    // setInputs,
    setSelectedMemeSrc,
    selectedMemeSrc,
    setLoading,
  } = useContext(StateContext);

  const ref = useRef();
  // const upload = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current.focus();
      ref.current.select();
    }
  }, [openModal]);

  // const reader = new FileReader();

  // function onUpload(e) {
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.addEventListener('load', () => {
  //     setImgData(reader.result);
  //     setSelectedMemeSrc(null);
  //     upload.current.value = '';
  //   });
  //   setInputs(['', '']);
  // }

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

    
      fetch(`https://api.imgflip.com/caption_image${querifyObj(obj)}&${arr}`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          if (res.data) setSelectedMemeSrc(res.data.url);
        });
  }

  return (
    <div className="ButtonWrapper">
      {/* <input
        type="file"
        ref={upload}
        className="custom-file-input"
        onChange={onUpload}
      /> */}
      <button
        disabled={selectedMemeSrc !== null ? false : true}
        onClick={() => {
          if (!imgData) clickGenerate();
          if (selectedMemeSrc) clickGenerate();
        }}
      >
        Generate
      </button>

      <button
        onClick={() => setOpenModal(true)}
        disabled={selectedMemeSrc !== null ? false : true}
      >
        Share
      </button>
      {openModal && (
        <div className="overlay">
          <div className="popup">
            <h2>Share</h2>
            <span onClick={() => setOpenModal(false)} className="close">
              &times;
            </span>
            <input
              ref={ref}
              style={{ width: '70%', textAlign: 'center' }}
              className="content"
              value={selectedMemeSrc}
            />
            <div className="SocialIconsWrapper">
              <SocialIcon network="twitter" url={`http://twitter.com/share?text=${"Check This Out!"}&url=${selectedMemeSrc}` } target="_blank" style={{margin: 5}} />
              <SocialIcon network="facebook" url={`http://www.facebook.com/sharer.php?u=${selectedMemeSrc}`}  target="_blank" style={{margin: 5}} />
              <SocialIcon network="instagram" url="https://instagram.com" target="_blank" style={{margin: 5}} />
              <SocialIcon network="pinterest" url={`http://pinterest.com/pin/create/button/?url=${selectedMemeSrc}&description=${"Check This Out!"}`} target="_blank" style={{margin: 5}} />              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Buttons;
