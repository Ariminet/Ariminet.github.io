import React from 'react';
import LogoImgFooter from '../assets/img/logobot.png';
import '../assets/scss/Footer.scss';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <Link to="/" aria-label="Runit">
        <img src={LogoImgFooter} alt="" className="logo-footer" />
      </Link>
    </div>
  );
};

export default Footer;
