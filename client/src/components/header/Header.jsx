import React, { useEffect, useState } from "react";
// import { CookiesProvider, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import "./Header.css";
import Logo from "../../static/img/Logo.svg";
import UserService from "../../API/UserService";
import {
  ARTISTSCATEGORIES_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../../routes";
import AccDropdown from "../accdropdown/AccDropdown";

export const Header = () => {
  // const [cookie, setCookie] = useCookies(["user_id"]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // fetchUser().then((data) =>
    //   data ? setUser(data) : setUser({ name: "artem" })
    // );
    setUser(true);
  }, []);

  // const fetchUser = async () => {
  //   const result = await UserService.showLogin();
  //   if (result) {
  //     return result.data;
  //   }
  // };

  const logoutUser = async () => {
    // await UserService.logout();
    // window.location.href = "/";
    setUser(false);
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
              <button onClick={() => navigate(ARTISTSCATEGORIES_ROUTE)}>
                ARTIST
              </button>
            </li>
            <li>
              <button>VACANCY</button>
            </li>
            <li>
              <button>ABOUT</button>
            </li>
          </ul>
          {user ? (
            <AccDropdown logout={logoutUser} />
          ) : (
            <div className="signin-signup">
              <button
                className="signin_btn"
                onClick={() => {
                  navigate(LOGIN_ROUTE);
                }}
              >
                SIGN IN
              </button>
              <button
                className="signup_btn"
                onClick={() => {
                  navigate(REGISTER_ROUTE);
                }}
              >
                SIGN UP
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
