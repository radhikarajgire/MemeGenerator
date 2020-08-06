import React, {createContext, useState, useEffect} from 'react';

export const StateContext = createContext({});

const ContextProvider = ({ children }) => {
  const [memes, setMemes] = useState([]);
  const [selectedMemeSrc, setSelectedMemeSrc] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => {
        const allMemes = json.data.memes.slice(0, 90);
        setMemes(allMemes);
      })
      .catch((error) => console.log(error.message));
  });

  return (
    <StateContext.Provider value={{ memes, selectedMemeSrc, setSelectedMemeSrc }}>
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;