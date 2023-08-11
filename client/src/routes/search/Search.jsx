import React, { useState } from "react";
import "./Search.css";
import CustomInput from "../../components/UI/input/CustomInput";
import CustomButton from "../../components/UI/button/CustomButton";
import SearchService from "../../API/SearchService";

const Search = () => {
  const [whoInput, setWhoInput] = useState("");
  const [whereInput, setWhereInput] = useState("");

  const callSearchRequest = (e) => {
    e.preventDefault();
    const response = SearchService.getAll(whoInput, whereInput);
    console.log(response);
  };

  return (
    <div className="search">
      <main className="main">
        <div className="container">
          <form className="search__form">
            <CustomInput
              value={whoInput}
              onChange={(e) => setWhoInput(e.target.value)}
              type="text"
              className="search__what"
              placeholder="WHO    like guitarist..."
            />
            <CustomInput
              value={whereInput}
              onChange={(e) => setWhereInput(e.target.value)}
              type="text"
              className="search__where"
              placeholder="WHERE   like city, state..."
            />
            <CustomButton className="search__btn" onClick={callSearchRequest}>
              Search
            </CustomButton>
          </form>
          <div className="under-search">
            <div className="post__row">
              <button className="post-resume">Post your resume</button>
              <button className="post-vacancy">Post your vacancy</button>
            </div>
            <div className="content">
              <label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ornare lectus sit amet est placerat in. Sit amet nisl purus in
                mollis nunc sed. Pellentesque massa placerat duis ultricies
                lacus sed. Consequat interdum varius sit amet mattis vulputate
                enim. Mauris in aliquam sem fringilla ut morbi tincidunt augue
                interdum. Porta lorem mollis aliquam ut porttitor leo. Etiam
                erat velit scelerisque in dictum non consectetur a erat.
                Scelerisque viverra mauris in aliquam sem fringilla ut. At quis
                risus sed vulputate odio ut enim blandit.
              </label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
