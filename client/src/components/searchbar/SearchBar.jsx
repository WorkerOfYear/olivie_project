import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

import "./SearchBar.css";
import search_icon from "../../static/img/Icon/Search.svg";
import { ARTISTSCARDS_ROUTE } from "../../routes";
import SearchModal from "../searchmodal/SearchModal";
import Suggestions from "../suggestions/Suggestions";

const SearchBar = ({ who, where }) => {
  const [whoInput, setWhoInput] = useState("");
  const [whereInput, setWhereInput] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setWhereInput(text);
  };

  function handleWhereSuggestionClick(suggestion) {
    setWhereInput(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions(null);
  }

  useEffect(() => {
    if (who !== undefined) {
      setWhoInput(who);
    }
    if (where !== undefined) {
      setWhereInput(where);
    }
  }, []);

  useEffect(() => {
    if (whereInput !== selectedSuggestion) {
      // Функция для выполнения запроса к Mapbox Geocoding API
      const fetchSuggestions = async () => {
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${whereInput}.json?access_token=
pk.eyJ1IjoianVsaWV0dHdpbiIsImEiOiJjbG43amQydmIweWMwMmtwZnN3ZzE3OHA4In0.3zvwgivCfshT2YPd991nQg`
          );
          if (response.ok) {
            const data = await response.json();
            console.log(data.features);
            setSuggestions(data.features);
          }
        } catch (error) {
          console.error("Ошибка при запросе к Mapbox Geocoding API:", error);
        }
      };

      // Вызываем функцию для запроса к API при изменении searchText
      fetchSuggestions();
    }
  }, [whereInput]);

  return (
    <div className="search">
      <div className="who_input_wrapper">
        <input
          value={whoInput}
          onChange={(e) => setWhoInput(e.target.value)}
          type="text"
          className="search__what"
          placeholder="WHO    like guitarist..."
        />
      </div>
      <div
        className="where_input_wrapper"
        tabIndex={1}
        onFocus={() => {
          console.log("Focus");
          setShowSuggestions(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowSuggestions(false);
          }
        }}
      >
        <input
          value={whereInput}
          onChange={handleSearchChange}
          type="text"
          className="search__where"
          placeholder="WHERE   like city, state..."
        />
        <div className="where_suggestions">
          {suggestions && showSuggestions && (
            <Suggestions
              suggestions={suggestions}
              handleSuggestionClick={handleWhereSuggestionClick}
            />
          )}
        </div>
      </div>
      <button
        className="location_icon"
        onClick={(e) => {
          e.preventDefault();
          setModalShow(true);
        }}
      >
        <CiLocationOn />
      </button>
      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
      <button
        className="search__btn"
        onClick={(e) => {
          e.preventDefault();
          navigate(
            ARTISTSCARDS_ROUTE + `/search?who=${whoInput}&where=${whereInput}`
          );
        }}
      >
        <img src={search_icon} alt="" />
        <span>SEARCH</span>
      </button>
    </div>
  );
};

export default SearchBar;
