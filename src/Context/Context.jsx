import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState({});
  const [index, setIndex] = useState(0);

  const fetchItems = async (url) => {
    const apiData = await fetch(url);
    const apiJson = await apiData.json();
    setItems(apiJson.results);
  };

  return (
    <div>
      <Context.Provider
        value={{ items, fetchItems, selected, setSelected, index, setIndex }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;
