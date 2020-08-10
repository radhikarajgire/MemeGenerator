import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';

import './PreviewWrapper.css';
import { StateContext } from '../../context';

function PreviewWrapper() {
  const { selectedMemeSrc, imgData, loading } = useContext(StateContext);

  return (
    <div className="PreviewWrapper">
      {loading ? (
        <Loader type="Circles" color="#1ab188" height={150} width={150} />
      ) : (
        <img alt="meme" src={imgData ? imgData : selectedMemeSrc} />
      )}
    </div>
  );
}

export default PreviewWrapper;
