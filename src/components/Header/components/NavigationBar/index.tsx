import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const NavigationBar = () => {
  return (
    <nav className='navigationBar'>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/works">Works</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;