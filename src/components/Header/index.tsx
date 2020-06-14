import React from 'react';

import {ReactComponent as ReactLogo} from '../../assets/logo2.svg'
import NavigationBar from './components/NavigationBar'

import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <ReactLogo />
      <NavigationBar />
    </header>
  );
}

export default Header;