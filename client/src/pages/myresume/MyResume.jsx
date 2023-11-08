import React, { useState } from "react";
import { GrFormAdd } from "react-icons/gr";

import "./MyResume.css";
import CreateResumeForm from "../../components/createresume/CreateResumeForm";

const MyResume = () => {
  const [showCreate, setShowCreate] = useState(false);

  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  return (
    <div className="container">
      <div className="my-resume">
        <span>My resume</span>
        <a href="#">
          <button
            className="create-btn shadow-secondary"
            onClick={handleShowCreate}
          >
            Create resume <GrFormAdd />
          </button>
          <CreateResumeForm show={showCreate} handleClose={handleCloseCreate} />
        </a>
      </div>
      <div className="no-resume">You don't have resume!</div>
    </div>
  );
};

export default MyResume;
