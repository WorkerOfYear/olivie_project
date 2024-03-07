import React from "react";

import StarsBanner from "static/img/stars_banner.png";
import SearchBar from "components/searchbar/SearchBar";

import "./Home.css";

const Search = () => {
  return (
    <>
      <div className="container">
        <div className="home">
          <SearchBar />
        </div>
      </div>
      <div
        id="main_banner"
        style={{ backgroundImage: `url("${StarsBanner}")` }}
      >
        <div className="under-search">
          <div className="post__row">
            <button className="post-resume">POST RESUME</button>
            <button className="post-vacancy">POST VACANCY</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
