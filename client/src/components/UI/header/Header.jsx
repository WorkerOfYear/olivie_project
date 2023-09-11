import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__ellipse"></div>
      <div className="container">
        <div className="header__row">
          <div className="header__logo"><a href="/">LOGO</a></div>
          <ul className="header__nav">
            <li>Artist</li>
            <li>Vacancy</li>
            <li>About</li>
          </ul>
          <div className="header__signin-signup">
            <a href="/login"><button className="signin_btn">Sign in</button></a>
            <a href="/register"><button className="signup_btn">Sign up</button></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
