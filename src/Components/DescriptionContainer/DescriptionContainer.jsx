import React, { useContext, useState, useEffect } from 'react';
import './Description.scss';
import { Context } from '../../Context/Context';
import config from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const DescriptionContainer = () => {

  const context = useContext(Context);
  const [videoId, setVideoId] = useState('');


  return (
    <div className='description-container'>
      <h1>{context.selected.title}</h1>
      <span className="overview">{context.selected.overview}</span>
      <div className="rating">
        <b className="rating-value">{context.selected.vote_average}</b> based on {context.selected.vote_count} votes
      </div>
      <div className="controls-wrapper">
        <div className="button-wrapper first">
          <button type="submit">
            <FontAwesomeIcon icon={faHeart} size='2x' />
          </button>
        </div>
        <div className="button-wrapper">
          <button type="submit">
            <FontAwesomeIcon icon={faStar} size='2x' />
          </button>
        </div>
        <div className="button-wrapper">
          <button type="submit">
            <FontAwesomeIcon icon={faBookmark} size='2x' />
          </button>
        </div>
      </div>
      <div className="next-prev-controls">
        <button onClick={() => context.setIndex(context.index - 1)}>previous</button>
        <button onClick={() => context.setIndex(context.index + 1)}>next</button>
      </div>




    </div>
  )
}

export default DescriptionContainer
