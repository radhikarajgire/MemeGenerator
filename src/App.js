import React from 'react';

import './App.css';
import Button from "./Components/Button/Button"
import ImageSmall from "./Components/ImageSmall/ImageSmall"

function App() {
  return (
    <div className="App">
      <div className="Header">Epic Meme Generator</div>
      <div className="Main">
        <div className="PanelsWrapper">
          <div className="Panel" style={{color: 'white'}}>Preview Panel</div>
          <div className="Panel">
            <div className="InputWrapper">Space for Input Fields
              <div className="TextInput"></div>
              <div className="TextInput"></div>
            </div>
            <div className="ButtonWrapper">
              <Button name="UPLOAD"/>
              <Button name="GENERATE"/>
              <Button name="EXPORT"/>
            </div>            
          </div>          
        </div>
        <div className="MemesWrapper">
              <ImageSmall />
              <ImageSmall />
              <ImageSmall />
              <ImageSmall />
              <ImageSmall />
              <ImageSmall />             
        </div>
      </div>
      <div className="Footer"></div>    
    </div>
  );
}

export default App;
