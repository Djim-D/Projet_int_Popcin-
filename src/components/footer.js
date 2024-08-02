import React from 'react';
import popcinélogo from '../assets/logo.png';
import tmdbLogo from '../assets/tmdb.svg';
import '../styles/components/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-left">
          <img src={popcinélogo} alt="Popciné Logo" className="footer-logo" />
          <p>Chaque film, une découverte</p>
        </div>
        <div className="footer-right">
          <img src={tmdbLogo} alt="TMDB Logo" className="tmdb-logo" />
        </div>
      </div>
      <div className="footer-center">
          <ul className="footer-menu">
            <li><a href="/">Accueil</a></li>
            <li><a href="/categories">Catégories</a></li>
            <li><a href="/about">À propos</a></li>
          </ul>
        </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Popciné</p>
      </div>
    </footer>
  );
};

export default Footer;
