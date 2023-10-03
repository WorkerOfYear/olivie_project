import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

const MapboxAutocomplete = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 10,
  });

  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  useEffect(() => {
    // Функция для выполнения запроса к Mapbox Geocoding API
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=
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
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Введите адрес"
        value={searchText}
        onChange={handleSearchChange}
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.place_name}</li>
        ))}
      </ul>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="300px"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken="
pk.eyJ1IjoianVsaWV0dHdpbiIsImEiOiJjbG43amQydmIweWMwMmtwZnN3ZzE3OHA4In0.3zvwgivCfshT2YPd991nQg"
      >
        {/* Добавьте другие компоненты Mapbox, такие как маркеры или слои, здесь */}
      </ReactMapGL>
    </div>
  );
};

export default MapboxAutocomplete;
