import React from 'react';
import logo from '../images/logo.png';
import './Header.css';
import Navbar from './Navbar';

function Header() {
  const links = [
    { link: '/graficos/1', text: 'Gráficos' },
  ];

  function showNavbar() {
    const topNavbar = document.querySelector('.topnav');
    const nav = document.querySelector('nav');
    if (topNavbar) {
      if (topNavbar.className === 'topnav') {
        topNavbar.className += ' responsive';
      } else {
        topNavbar.className = 'topnav';
      }
    }
    if (nav) {
      if (nav.className === '') {
        nav.className += ' responsive';
      } else {
        nav.className = '';
      }
    }
  }

  return (
    <header>
      <div className="title-container">
        <img
          src={logo}
          alt="website logo"
          className="header-logo"
        />
        <h1 className="header-title">Sharenergy</h1>
        <button type="button" className="header-navbar-button" onClick={showNavbar}>
          <div className="navbar-button-bar bar-1" />
          <div className="navbar-button-bar bar-2" />
          <div className="navbar-button-bar bar-3" />
        </button>
      </div>
      <Navbar links={links} />
    </header>
  );
}

export default Header;
