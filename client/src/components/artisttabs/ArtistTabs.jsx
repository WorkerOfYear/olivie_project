import React from "react";
import ReactPlayer from "react-player";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import "./ArtistTabs.css"

const ArtistTabs = ({artist}) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-2 mt-4">
      <Tab eventKey="info" title="Info">
        <p>
          <span className="tab-info">{artist.description}</span>
        </p>
        <p>
          Type of artist: <i>{artist.info.type_of_artist}.</i>
        </p>
        <p>
          Genre and style: <i>{artist.info.genre}</i>
        </p>
        <p>
          Duration of performance: <i>{artist.info.duration}</i>
        </p>
        <p>
          Region: <i>{artist.info.region}</i>
        </p>
        <p>
          Budget: <i>{artist.info.budget}</i>
        </p>
        <p>
          Requirements for equipment and technical conditions:
          <i>{artist.info.requirements}</i>
        </p>
      </Tab>
      <Tab eventKey="gallery" title="Gallery">
        <div className="gallery__videos">
          {artist.video ? (
            artist.video.map((item) => (
              <div key={item.video_url} className="player-wrapper">
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
        <div className="contacts">
          <span>
            <AiOutlinePhone />: {artist.contacts.phone}
          </span>
          <span>
            <BiLogoTelegram />: {artist.contacts.tg_link}
          </span>
          <span>
            <HiOutlineMail />: {artist.contacts.e_mail}
          </span>
        </div>
      </Tab>
      <Tab eventKey="rating" title="Rating">
        Tab content for Rating
      </Tab>
    </Tabs>
  );
};

export default ArtistTabs;
