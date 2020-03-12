import React, { useContext, useState, useEffect } from 'react';
import './Description.scss';
import { Context } from '../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import RatingBar from '../RatingBar/RatingBar';
import gsap from 'gsap';

const DescriptionContainer = () => {

  const [state, setstate] = useState('')

  const context = useContext(Context);

  let tl = gsap.timeline();

  useEffect(() => {
    tl.from(".title-wrapper h1", 1.2, {
      y: 100,
      opacity: 0,
      skewY: 7,
      skewX: 10,
      ease: "expo.out",
    })
    .from(".overview", 0.5, {
      y: 100,
      opacity: 0,
      skewY: 7,
      // ease: "expo.out",
    }, "-=1")
  }, [context.index])

  return (
    <div className='description-container'>
      <div className="title-wrapper">
        <h1>{context.selected.title}</h1>
      </div>
      <div className="overview-wrapper">
        <span className="overview">{context.selected.overview}</span>
      </div>
      <RatingBar />
      <div className="next-prev-controls">
        <div className="button-wrapper">
          <button onClick={() => context.setIndex(context.index - 1)}>previous</button>
        </div>
        <div className="button-wrapper">
          <button onClick={() => context.setIndex(context.index + 1)}>next</button>
        </div>


      </div>




    </div>
  )
}

export default DescriptionContainer
