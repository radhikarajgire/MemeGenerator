import React, { useContext } from 'react';
import './MemesWrapper.css';
import Meme from '../Meme/Meme';
import { StateContext } from '../../context';
import Loader from 'react-loader-spinner';

function MemesWrapper() {
  const { memes } = useContext(StateContext);

  return (
    <div className="MemesSection">
      Choose Popular Memes
      <div className="MemeCollection">
        <div className="MemesWrapper">
          {memes.length >= 90 ? (
            memes.map((meme, idx) => (
              <Meme key={idx} pic={meme.url} idx={idx} />
            ))
          ) : (
            <Loader type="Circles" color="#1ab188" height={150} width={150} />
          )}
        </div>
      </div>
    </div>
  );
}

export default MemesWrapper;
