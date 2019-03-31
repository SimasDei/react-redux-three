import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img className="App-logo" src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
