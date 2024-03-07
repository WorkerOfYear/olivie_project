import React from "react";
import Avatar from "react-avatar";
import Dropdown from "react-bootstrap/Dropdown";

import { MY_RESUME } from "../../routes";
import "./AccDropdown.css";

const AccDropdown = ({ logout }) => {
  return (
    <Dropdown className="profile" drop={"down-centered"}>
      <Dropdown.Toggle className="dropdown-toggle" as={"span"}>
        <div className="profile-icon-wrapper"><Avatar size="40" round={true} name="Test User" /></div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>
          <span>Test User</span>
        </Dropdown.Header>
        <Dropdown.Item className="dropdown-item" href="#">Profile</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href={MY_RESUME}>My resume</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">My vacancies</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className="dropdown-item" onClick={() => logout}>Log out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AccDropdown;
