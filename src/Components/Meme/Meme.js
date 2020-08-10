import React, { useContext, useState, useEffect } from 'react';
import './Meme.css';

import { StateContext } from '../../context';

function Meme(props) {
  const { setSelectedMemeSrc, setImgData } = useContext(StateContext);

  function clickHandler(e) {
    setImgData(null);
    setSelectedMemeSrc(e.target.src);
  }

  return (
    <div className="MemeContainer">
      <img onClick={clickHandler} src={props.pic} alt="meme" />
    </div>
  );
}

export default Meme;
