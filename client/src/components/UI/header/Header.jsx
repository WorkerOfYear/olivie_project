import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__ellipse"></div>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">LOGO</div>
          <ul className="header__nav">
            <li>nav1</li>
            <li>nav2</li>
            <li>nav3</li>
            <li>nav4</li>
          </ul>
          <button className="header__signin-signup">Sign in | Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
