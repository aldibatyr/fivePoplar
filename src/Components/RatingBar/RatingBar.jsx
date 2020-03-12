import React, { useContext } from 'react';
import './RatingBar.scss';
import { Context } from '../../Context/Context';
import styled from 'styled-components';

const BarWrapper = styled.div`
  position: relative;
  height: 20px;
  border: 1px solid yellow;
  border-radius: 2px;
  width: 200px;
`;

const Bar = styled.div`
width: ${props => props.width};
background: #D6D60880;
height: 20px;
position: absolute;
text-align: right;
color: white;
padding-right: 3px;
border-radius: 2px;
font-size: 0.8rem;
color: white;
display: flex;
justify-content: flex-end;
align-items: center;
`;




const RatingBar = () => {

  const context = useContext(Context);

  return (
    <div className="rating-box">
    <BarWrapper>
      <Bar width={`${context.selected.vote_average * 10}%`}>
        <span>{context.selected.vote_average * 10}%</span>
      </Bar>
      
    </BarWrapper>
    <p>Based on {context.selected.vote_count} counts</p>
    </div>
  )
}

export default RatingBar
