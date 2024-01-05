import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./ArtistsCards.css";
import SearchService from "../../API/SearchService";
import { mockArtists } from "../../API/mock/mockArtists";
import SearchBar from "../../components/searchbar/SearchBar";
import Cards from "../../components/cards/Cards";
import Filter from "../../components/ filter/Filter";
import { IArtist } from "types/types";
import { useAppSelector } from "store/hooks";
import {
  selectActivity,
  selectAddress,
  selectRadius,
} from "store/searchReducer";

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

  // useEffect(() => {
  //   fetchArtists().then((output) => {
  //     output ? setData(output) : setData(mockArtists);
  //   });
  // }, []);

  // const fetchArtists = async () => {
  //   try {
  //     let result;
  //     if (who === "" && where === "") {
  //       result = await SearchService.getAll();
  //     } else {
  //       result = await SearchService.getArtistByInput(who, where);
  //     }
  //     return result;
  //   } catch (err) {
  //     console.error("Ошибка при запросе к API:", err);
  //   }
  // };

  return (
    <div className="container">
      <div className="artist">
        <SearchBar activity={activity} radius={radius} address={address} />
        <Filter />
        {artists != null ? <Cards artists={artists} /> : <p>No results</p>}
      </div>
    </div>
  );
};

export default Artist;
