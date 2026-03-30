import React from "react";
import "./Navbar.scss";
import TransparentBtn from "../../ui/transparentbtn/TransparentBtn";
import navbar__logo from "../../assets/swipe_logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container container">
        <img src={navbar__logo} alt="navbar__logo" />

        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#About" className="navbar__link">
              About
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Features" className="navbar__link">
              Features
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Pricinggo" className="navbar__link">
              Pricing
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Team" className="navbar__link">
              Team
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Faq" className="navbar__link">
              FAQ
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Feedback" className="navbar__link">
              Feedback
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Blog" className="navbar__link">
              Blog
            </a>
          </li>
          <li className="navbar__item">
            <a href="#Contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>

        <TransparentBtn className="navbar__btn" title={"Buy now"} />
      </nav>
    </header>
  );
};

export default Navbar;
