import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Top promo bar */}
      <div className="header__promo">
        <span>FREE SHIPPING ON US ORDERS OVER $100</span>
      </div>

      {/* Main nav */}
      <div className="header__main">
        <div className="header__left">
          <button className="header__menu" aria-label="menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="header__logo">D1</div>
        </div>

        <div className="header__right">
          <button className="header__cta">GET STARTED</button>
          <div className="header__cart">
            {/* Inline SVG cart icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="header__cart-icon"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="header__cart-badge">1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
