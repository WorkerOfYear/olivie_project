import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

import "./Header.css";
import Logo from "../../../static/img/Logo.svg";
import UserService from "../../../API/UserService";

export const Header = () => {
  const [cookie, setCookie] = useCookies(["user_id"]);

  // console.log(cookie.user_id)

  // useEffect(() => {
  //   fetchUser().then((data) => setUser(data));
  // }, []);

  // const fetchUser = async () => {
  //   try {
  //     const result = await UserService.showLogin();
  //     return result.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const logoutUser = async () => {
    await UserService.logout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>
          <ul className="header__nav">
            <li>
              <button>ARTIST</button>
            </li>
            <li>
              <button>VACANCY</button>
            </li>
            <li>
              <button>ABOUT</button>
            </li>
          </ul>
          {cookie.user_id ? (
            <div>
              <h2>Hello</h2>
              <h2>{cookie.user_id.name}</h2>
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div className="signin-signup">
              <button className="signin_btn">SIGN IN</button>
              <button className="signup_btn">SIGN UP</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
