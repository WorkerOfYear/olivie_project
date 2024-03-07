import React, { FC } from "react";

import { IArtists } from "types/types";

import CustomCard from "./CustomCard";

import "./Cards.css";

const CardsList: FC<IArtists> = ({ artists }) => {
  return (
    <div className="artist_cards">
      {artists.map((artist) => (
        <CustomCard artist={artist} key={artist.id} />
      ))}
    </div>
  );
};

export default CardsList;
