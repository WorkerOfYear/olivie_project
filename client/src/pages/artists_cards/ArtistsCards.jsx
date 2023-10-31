import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./ArtistsCards.css";
import SearchService from "../../API/SearchService";
import { mockArtists } from "../../API/mock/mockArtists";
import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/Cards";

const Artist = () => {
  const location = useLocation();
  const [data, setData] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const who = searchParams.get("who");
  const where = searchParams.get("where");

  useEffect(() => {
    fetchArtists().then((output) => {
      output ? setData(output) : setData(mockArtists);
    });
  }, []);

  const fetchArtists = async () => {
    try {
      let result;
      if (who === "" && where === "") {
        result = await SearchService.getAll();
      } else {
        result = await SearchService.getArtistByInput(who, where);
      }
      return result;
    } catch (err) {
      console.error("Ошибка при запросе к API:", err);
    }
  };

  return (
    <div className="container">
      <div className="artist">
        <SearchBar who={who} where={where} />
        {data != null ? <Cards artists={data} /> : <p>No results</p>}
      </div>
    </div>
  );
};

export default Artist;
