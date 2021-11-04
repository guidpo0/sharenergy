import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

function Navbar({ links }) {
  return (
    <nav>
      <div className="topnav">
        {
          links.map(({ link, text }) => (
            <Link
              to={link}
              className="topnav-link"
            >
              {text}
            </Link>
          ))
        }
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navbar;
