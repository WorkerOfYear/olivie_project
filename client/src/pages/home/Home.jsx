import React from "react";

import "./Home.css";
import SearchBar from "../../components/UI/searchbar/SearchBar";


const Search = () => {
  return (
    <div className="container">
      <div className="home">
        <SearchBar />
        <div className="under-search">
          <div className="post__row">
            <button className="post-resume">POST RESUME</button>
            <button className="post-vacancy">POST VACANCY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
