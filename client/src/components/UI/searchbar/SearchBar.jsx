import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import { TbListSearch } from "react-icons/tb";

import "./SearchBar.css";
import search_icon from "../../../static/img/Icon/Search.svg";
import { ARTISTSCARDS_ROUTE } from "../../../routes";
import SearchModal from "../searchmodal/SearchModal";

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

  function handleSuggestionClick(suggestion) {
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
    <form className="search__form">
      <div className="who_input_wrapper">
        <input
          value={whoInput}
          onChange={(e) => setWhoInput(e.target.value)}
          type="text"
          className="search__what"
          placeholder="WHO    like guitarist..."
        />
      </div>

      <div className="where_input_wrapper">
        <button
          className="search__burger"
          onClick={(e) => {
            e.preventDefault();
            setModalShow(true);
          }}
        >
          <TbListSearch />
        </button>
        <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
        <div
          tabIndex={-1}
          onBlur={() => {
            console.log("Blur");
            setShowSuggestions(false);
          }}
          onFocus={() => {
            console.log("Focus");
            setShowSuggestions(true);
          }}
        >
          <input
            value={whereInput}
            onChange={handleSearchChange}
            type="text"
            className="search__where"
            id="where_input"
            placeholder="WHERE   like city, state..."
          />
          {suggestions && (
            <div className="suggestions_wrapper">
              <ListGroup
                className="where_suggestions"
                id="where_suggestions"
                style={{ zIndex: 1000 }}
              >
                {suggestions.map((suggestion) => (
                  <Button
                    variant="light"
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion.place_name)}
                  >
                    {suggestion.place_name}
                  </Button>
                ))}
              </ListGroup>
            </div>
          )}
        </div>
      </div>

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
    </form>
  );
};

export default SearchBar;
