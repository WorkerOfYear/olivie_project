import React, { FC, useEffect, useState } from "react";

import Suggestions from "./suggestions/Suggestions";
import { ISuggestion } from "types/types";
import { useAppDispatch } from "store/hooks";
import { set_address } from "store/searchReducer";

interface WhereInputProps {
  where?: string;
}

const WhereInput: FC<WhereInputProps> = ({ where }) => {
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ISuggestion[] | null>(null);
  const [selectedSuggestion, setSelectedSuggestion] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (where !== undefined) {
      setValue(where);
      dispatch(set_address(value));
    }
  }, []);

  useEffect(() => {
    dispatch(set_address(value));

    if (value !== selectedSuggestion) {
      fetchSuggestions();
    }
  }, [value]);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions(null);
  };

  return (
    <>
      <div
        className="where_input_wrapper"
        tabIndex={1}
        onFocus={() => {
          setShowSuggestions(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowSuggestions(false);
          }
        }}
      >
        <input
          value={value}
          onChange={handleOnChange}
          type="text"
          className="search__where"
          placeholder="WHERE   like city, state..."
        />
        <div className="where_suggestions">
          {suggestions && showSuggestions && (
            <Suggestions
              suggestions={suggestions}
              onClick={handleSuggestionClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default WhereInput;
