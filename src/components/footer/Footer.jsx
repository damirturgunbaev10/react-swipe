import React from 'react';
import './Footer.scss';
import Decor from "../../assets/swipe_footer_decor.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        
        <hr className="footer__divider" />

        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__logo">
              <span className="footer__logo-text">swipe</span>
              <span className="footer__logo-dot"></span>
            </div>
            
            <div className="footer__info">
              <p className="footer__location">Tashkent, Uzbekistan</p>
              <a href="mailto:hello.craftengine@gmail.com" className="footer__email">
                hello.craftengine@gmail.com
              </a>
              <p className="footer__author">
                Made with ❤️ by Damir 🇺🇿
              </p>
            </div>

            <p className="footer__copyright">
              © Swipe. All rights reserved. Powered by React
            </p>
          </div>

          <div className="footer__right">
            <nav className="footer__nav">
              <div className="footer__nav-col">
                <a href="#About">About</a>
                <a href="#Features">Features</a>
                <a href="#Pricing">Pricing</a>
                <a href="#Team">Team</a>
              </div>
              <div className="footer__nav-col">
                <a href="#FAQ">FAQ</a>
                <a href="#Feedback">Feedback</a>
                <a href="#Blog">Blog</a>
                <a href="#Contact">Contact</a>
              </div>
              <div className="footer__nav-col">
                <a href="https://twitter.com">Twitter</a>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://instagram.com">Instagram</a>
                <a href="#Licensing">Licensing</a>
              </div>
            </nav>

            <div className="footer__decor">
              <img src={Decor} alt="decor" className="footer__spiral" />
            </div>
          </div>
        </div>

        <hr className="footer__divider" />
      </div>
    </footer>
  );
};

export default Footer;