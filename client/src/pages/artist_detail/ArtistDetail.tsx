import React, { FC, useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";

import { mockArtists } from "API/mock/mockArtists";
import ArtistTabs from "components/artisttabs/ArtistTabs";
import SearchService from "API/SearchService";
import { IArtist } from "types/types";
import { googlePhotoParser } from "utils/utils";
import "./ArtistDetail.css";

const Artist_detail: FC = () => {
  const [artist, setArtist] = useState<IArtist | null>(null);
  const { artist_id } = useParams();

  useEffect(() => {
    fetchArtist();
  }, []);

  const fetchArtist = () => {
    SearchService.getArtistById(artist_id).then((data) => setArtist(data));
  };

  // useEffect(() => {
  // setArtist(mockArtists[artist_id - 1]);
  // fetchArtist().then((output) => setData(output));
  // }, []);

  // const fetchArtist = async () => {
  //   const result = await SearchService.getArtistById(artist_id);
  //   return result;
  // };

  return (
    <div className="container">
      {artist ? (
        <div className="detail">
          <div className="detail__head">
            <div className="photo-wrapper">
              <Image src={googlePhotoParser(artist.photo_url)} />
              <h2 className="photo-text">{artist.artist_name}</h2>
            </div>
          </div>
          <div className="tab-wrapper">
            <ArtistTabs artist={artist} />
          </div>
        </div>
      ) : (
        <p>Not Information</p>
      )}
    </div>
  );
};

export default Artist_detail;
