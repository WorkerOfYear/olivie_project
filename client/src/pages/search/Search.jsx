import React, { useState } from "react";

import "./Search.css";
import SearchArtist from "../../components/UI/SearchArtist";

const Search = () => {
  return (
    <div className="container">
      <div className="search">
        <SearchArtist />
        <div className="under-search">
          <div className="post__row">
            <button className="post-resume">Post your resume</button>
            <button className="post-vacancy">Post your vacancy</button>
          </div>
          <div className="content">
            <label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
              lectus sit amet est placerat in. Sit amet nisl purus in mollis
              nunc sed. Pellentesque massa placerat duis ultricies lacus sed.
              Consequat interdum varius sit amet mattis vulputate enim. Mauris
              in aliquam sem fringilla ut morbi tincidunt augue interdum. Porta
              lorem mollis aliquam ut porttitor leo. Etiam erat velit
              scelerisque in dictum non consectetur a erat. Scelerisque viverra
              mauris in aliquam sem fringilla ut. At quis risus sed vulputate
              odio ut enim blandit.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
