import React, { useState, useContext, useEffect } from 'react';
import './MainView.scss';

import PosterContainer from '../PosterContainer/PosterContainer';
import DescriptionContainer from '../DescriptionContainer/DescriptionContainer';
import { Context } from '../../Context/Context';

const MainView = () => {

  const context = useContext(Context);


  useEffect(() => {
    if (context.movies !== []) {
      context.setSelected(context.movies[context.index])
    }
  },[context.index])


  return (
    <main>
      <DescriptionContainer />
      <PosterContainer />
    </main>
  )
}

export default MainView
