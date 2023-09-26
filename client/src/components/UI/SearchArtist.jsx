import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchArtist = () => {
  const [whoInput, setWhoInput] = useState("");
  const [whereInput, setWhereInput] = useState("");
  const navigate = useNavigate();

  return (
    <form className="search__form">
      <input
        value={whoInput}
        onChange={(e) => setWhoInput(e.target.value)}
        type="text"
        className="search__what"
        placeholder="WHO    like guitarist..."
      />
      <input
        value={whereInput}
        onChange={(e) => setWhereInput(e.target.value)}
        type="text"
        className="search__where"
        placeholder="WHERE   like city, state..."
      />
      <button
        className="search__btn"
        onClick={() =>
          navigate(`/artist/search?who=${whoInput}&where=${whereInput}`)
        }
      >
        Search
      </button>
    </form>
  );
};

export default SearchArtist;
