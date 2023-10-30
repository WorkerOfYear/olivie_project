import React from "react";
import { GrFormAdd } from "react-icons/gr";

import "./MyResume.css";

const MyResume = () => {
  return (
    <div className="container">
      <div className="my-resume">
        <span>My resume</span>
        <a href="#">
          <button className="create-btn shadow-secondary">
            Create resume <GrFormAdd />
          </button>
        </a>
      </div>
      <div className="no-resume">You don't have resume!</div>
    </div>
  );
};

export default MyResume;
