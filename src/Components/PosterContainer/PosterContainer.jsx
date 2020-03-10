import React, { useContext } from 'react';
import './PosterContainer.scss';
import { Context } from '../../Context/Context';
import config from '../../config';
const PosterContainer = () => {

  const context = useContext(Context)
  return (
    <div className='poster-container'>
      <img src={`${config.IMAGE_PATH}/w300${context.selected.poster_path}`} alt=""/>
    </div>
  )
}

export default PosterContainer
