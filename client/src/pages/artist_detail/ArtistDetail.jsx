import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";

import "./ArtistDetail.css";
import { mockArtists } from "../../API/mock/mockArtists";
import ArtistTabs from "../../components/UI/artisttabs/ArtistTabs";

const Artist_detail = () => {
  const [artist, setArtist] = useState();
  const { artist_id } = useParams();

  useEffect(() => {
    setArtist(mockArtists[artist_id - 1]);
    // fetchArtist().then((output) => setData(output));
  }, []);

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
              <Image src={artist.photo_url} />
            <h2 className="photo-text">{artist.artist_name}</h2>
            </div>
          </div>
          <div className="tab-wrapper">
            <ArtistTabs artist={artist}/>
          </div>
        </div>
      ) : (
        <p>Not Information</p>
      )}
    </div>
  );
};

export default Artist_detail;
