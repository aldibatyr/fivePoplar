import React, { createContext, useReducer, useState, useEffect } from 'react'
import config from './config';

const initialState = {
  items: [],
  searchTerm: '',
  selectedItem: {},

};

const store = createContext(initialState);

const {Provider} = store;

const StateProvider = ({children}) => {


  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'getMovies' :
        const newState = {
          ...state,
          items: 
        }

      default:
        console.log('defaulttttt');
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>
};

export {store, StateProvider};

