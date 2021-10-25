import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="website logo"
        className="header-logo"
      />
      <h1 className="header-title">Sharenergy</h1>
      <button type="button" className="header-navbar-button">
        <div className="navbar-button-bar bar-1" />
        <div className="navbar-button-bar bar-2" />
        <div className="navbar-button-bar bar-3" />
      </button>
    </header>
  );
}

export default Header;
