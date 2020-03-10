import React, { createContext, useState } from 'react';

export const Context = createContext(); 


const ContextProvider  = (props) => {

  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState({});
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Context.Provider value={{movies, setMovies, selected, setSelected, index, setIndex}}>
        {props.children}
      </Context.Provider>
    </div>
  )
}

export default ContextProvider;





