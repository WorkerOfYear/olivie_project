import React from "react";

import "./Home.css";
import SearchBar from "../../components/searchbar/SearchBar";
import StarsBanner from "../../static/img/stars_banner.png";

const Search = () => {
  return (
    <>
      <div className="container">
        <div className="home">
          <SearchBar />
        </div>
      </div>
      <section id="main_banner">
        <img src={StarsBanner} />
        <div className="under-search">
          <div className="post__row">
            <button className="post-resume">POST RESUME</button>
            <button className="post-vacancy">POST VACANCY</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
