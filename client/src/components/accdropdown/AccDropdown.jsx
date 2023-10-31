import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { MY_RESUME } from "../../routes";

import "./AccDropdown.css";

const AccDropdown = ({logout}) => {
  const [showAccDropdown, setShowAccDropdown] = useState(false);

  return (
    <div
      className="profile"
      onMouseEnter={() => setShowAccDropdown(true)}
      onMouseLeave={() => setShowAccDropdown(false)}
    >
      <div className="profile-icon-wrapper">
        <VscAccount />
      </div>
      {showAccDropdown && (
        <div className="account-dropdown">
          <ul className="account-menu">
            <li><button>Profile</button></li>
            <li><button><a href={MY_RESUME}>My resume</a></button></li>
            <li><button>Settings</button></li>
            <li><button onClick={() => logout}>Log out</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccDropdown;
