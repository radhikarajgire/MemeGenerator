import React from 'react';

import './App.css';
import Button from  './Components/Button/Button' ;
import ImageSmall from './Components/ImageSmall/ImageSmall';

function App() {
  return (
    <div className="App">
      <div className="Header">Epic Meme Generator</div>
        <div className="Main">
              <div className = "buttonWrapper">
                < Button name="Upload"/>
                <Button name="Generate" />
                <Button name="Export" />
              </div>
          <ImageSmall/>
          <ImageSmall/>
        </div>    
    </div>
  );
}

export default App;
