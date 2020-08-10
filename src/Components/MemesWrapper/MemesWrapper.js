import React, { useContext } from 'react';
import './MemesWrapper.css';
import Meme from '../Meme/Meme';
import { StateContext } from '../../context';

function MemesWrapper() {
  const { memes } = useContext(StateContext);

  return (
    <div>
      <h3>Select meme</h3>
      <div className="MemeCollection">
        <div className="MemesWrapper">
          {memes.map((meme, idx) => (
            <Meme key={idx} pic={meme.url} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemesWrapper;
