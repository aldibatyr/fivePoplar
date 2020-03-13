import React, { useContext, useRef, useEffect } from 'react';
import './PosterContainer.scss';
import { Context } from '../../Context/Context';
import config from '../../config';
import gsap from 'gsap';

const PosterContainer = () => {

  const context = useContext(Context)

  let tl = gsap.timeline();

  useEffect(() => {
    tl.from('.poster-container', 1, {
      width: 0,
      x: 200,
      
      ease: 'expo.inOut'
    })
    .from('.poster', 1, {
      scale: 1.2,
      ease: 'power4.out'
    }, '-=0.5')
  }, [context.index])




  // const image = config.IMAGE_PATH'/w300/'context.selected.poster_path;
  return (
    <div className='poster-container'>
      <img className='poster' src={`${config.IMAGE_PATH}/w300/${context.selected.poster_path}`} alt=""/>
    </div>
  )
}

export default PosterContainer
