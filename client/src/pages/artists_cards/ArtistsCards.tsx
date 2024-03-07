import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchService from "../../API/SearchService";
import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/CardsList";
import Filter from "../../components/ filter/Filter";
import { IArtist } from "types/types";

import "./ArtistsCards.css";

const Artist = () => {
  const [artists, setArtists] = useState<IArtist[] | null>(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const address = String(searchParams.get("address"));
  const radius = Number(searchParams.get("radius"));
  const activity = String(searchParams.get("activity"));

  useEffect(() => {
    fetchArtists();
  }, [location]);

  const fetchArtists = () => {
    SearchService.searchArtists(address, radius, activity).then(
      (res: IArtist[] | null) => {
        setArtists(res);
      }
    );
  };

  return (
    <div className="container">
      <div className="artist">
        <SearchBar activity={activity} radius={radius} address={address} />
        <Filter />
        {artists != null ? (
          <Cards artists={artists} />
        ) : (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "50px",
              fontSize: "24px",
            }}
          >
            No results
          </p>
        )}
      </div>
    </div>
  );
};

export default Artist;
