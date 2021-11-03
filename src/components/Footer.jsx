import React from 'react';
import instagramIcon from '../images/icons/instagram.png';
import facebookIcon from '../images/icons/facebook.png';
import linkedinIcon from '../images/icons/linkedin.png';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <img
        src={instagramIcon}
        alt="instagram icon"
        className="footer-icon"
      />
      <img
        src={linkedinIcon}
        alt="linkedin icon"
        className="footer-icon"
      />
      <img
        src={facebookIcon}
        alt="facebook icon"
        className="footer-icon"
      />
    </footer>
  );
}

export default Footer;
