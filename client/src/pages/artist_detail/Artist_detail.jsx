import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Image from "react-bootstrap/Image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useParams } from "react-router-dom";

import "./Artist_detail.css";
import { mockArtists } from "../../API/mock/mockArtists";

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
            </div>
            <h2 className="photo-text">{artist.artist_name}</h2>
          </div>
          <div className="tab-wrapper">
            <Tabs defaultActiveKey="profile" className="mb-2 mt-4">
              <Tab eventKey="info" title="Info">
                <div className="tab-info">{artist.description}</div>
              </Tab>
              <Tab eventKey="gallery" title="Gallery">
                <div className="gallery__videos">
                  {artist.video ? (
                    artist.video.map((item) => (
                      <div className="player-wrapper">
                        <h2>{item.video_desk}</h2>
                        <ReactPlayer
                          url={item.video_url}
                          width="200px"
                          height="350px"
                          controls={true}
                        />
                      </div>
                    ))
                  ) : (
                    <p>No gallery</p>
                  )}
                </div>
              </Tab>
              <Tab eventKey="contacts" title="Contacts">
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </div>
      ) : (
        <p>Not Information</p>
      )}
    </div>
  );
};

export default Artist_detail;
