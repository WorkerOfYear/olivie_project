import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

import "./SearchBar.css";
import { ARTISTSCARDS_ROUTE } from "../../../routes";
import Button from "react-bootstrap/esm/Button";

const SearchBar = () => {
  const [whoInput, setWhoInput] = useState("");
  const [whereInput, setWhereInput] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setWhereInput(text);
  };

  const handleSuggestionClick = (suggestion) => {
    setWhereInput(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions(null);
  };

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
        <input
          value={whereInput}
          onBlur={handleBlur}
          onFocus={() => setShowSuggestions(true)}
          onChange={handleSearchChange}
          type="text"
          className="search__where"
          id="where_input"
          placeholder="WHERE   like city, state..."
        />
        {suggestions && showSuggestions && (
          <div className="suggestions_wrapper">
            <ListGroup
              className="where_suggestions"
              id="where_suggestions"
              style={{ zIndex: 1000 }}
            >
              {suggestions.map((suggestion) => (
                <Button variant="light">
                  <ListGroup.Item
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion.place_name)}
                  >
                    {suggestion.place_name}
                  </ListGroup.Item>
                </Button>
              ))}
            </ListGroup>
          </div>
        )}
      </div>

      <button
        className="search__btn"
        onClick={() =>
          navigate(
            ARTISTSCARDS_ROUTE + `/search?who=${whoInput}&where=${whereInput}`
          )
        }
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
