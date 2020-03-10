import React from 'react';
import logo from '../../Assets/FivePoplarLogo.svg';

const Navigation = (props) => {
  return (
    <nav>
      <div className="navigation-wrapper">

        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <button className="menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="20" viewBox="0 0 37 20">
            <g id="Group_1" data-name="Group 1" transform="translate(-1104.5 -51.5)">
              <line id="Line_1" data-name="Line 1" x2="30" transform="translate(1110.5 52.5)" fill="none" stroke="#f2f2f2" strokeLinecap="round" strokeWidth="2" />
              <line id="Line_2" data-name="Line 2" x2="35" transform="translate(1105.5 58.5)" fill="none" stroke="#f2f2f2" strokeLinecap="round" strokeWidth="2" />
              <line id="Line_3" data-name="Line 3" x2="30" transform="translate(1110.5 64.5)" fill="none" stroke="#f2f2f2" strokeLinecap="round" strokeWidth="2" />
              <line id="Line_4" data-name="Line 4" x2="35" transform="translate(1105.5 70.5)" fill="none" stroke="#f2f2f2" strokeLinecap="round" strokeWidth="2" />
            </g>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navigation
