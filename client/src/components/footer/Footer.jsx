import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="choose_lang">
        <DropdownButton
          as={ButtonGroup}
          size="sm"
          variant="light"
          title="English"
        >
          <Dropdown.Item eventKey="1">English</Dropdown.Item>
          <Dropdown.Item eventKey="2">Spanish</Dropdown.Item>
          <Dropdown.Item eventKey="3">French</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="roots">
        <span>Copyright © 2023. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
