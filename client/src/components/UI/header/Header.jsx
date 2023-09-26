import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

import "./header.css";
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
      <div className="header__ellipse"></div>
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <a href="/">LOGO</a>
          </div>
          <ul className="header__nav">
            <li>Artist</li>
            <li>Vacancy</li>
            <li>About</li>
          </ul>
          {cookie.user_id ? (
            <div>
              <h2>Hello</h2>
              <h2>{cookie.user_id.name}</h2>
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div className="header__signin-signup">
              <a href="/login">
                <button className="signin_btn">Sign in</button>
              </a>
              <a href="/register">
                <button className="signup_btn">Sign up</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
