import React, { FC } from "react";
import ReactPlayer from "react-player";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

import { IArtist } from "types/types";
import "./ArtistTabs.css";

interface ArtistTabsProps {
  artist: IArtist;
}

const ArtistTabs: FC<ArtistTabsProps> = ({ artist }) => {
  return (
    <Tabs defaultActiveKey="info" className="mb-2 mt-4">
      <Tab eventKey="info" title="Info">
        <p>
          <span className="tab-info">{artist.description}</span>
        </p>
        {/* <p>
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
        </p> */}
      </Tab>
      <Tab eventKey="gallery" title="Gallery">
        <div className="gallery__videos">
          {/* {artist.video ? (
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
          )} */}
          {artist.promo_video_url}
        </div>
      </Tab>
      <Tab eventKey="contacts" title="Contacts">
        <div className="contacts">
          {/* <span>
            <AiOutlinePhone />: {artist.contacts.phone}
          </span>
          <span>
            <BiLogoTelegram />: {artist.contacts.tg_link}
          </span>
          <span>
            <HiOutlineMail />: {artist.contacts.e_mail}
          </span> */}
          <span>email: {artist.email}</span>
          <span>phone_number: {artist.phone_number}</span>
          <span>facebook_url: {artist.facebook_url}</span>
          <span>instagram_url: {artist.instagram_url}</span>
          <span>vk_url: {artist.vk_url}</span>
        </div>
      </Tab>
      <Tab eventKey="reviews" title="Reviews">
        {artist.reviews ? <div>{JSON.stringify(artist.reviews)}</div> : null}
      </Tab>
    </Tabs>
  );
};

export default ArtistTabs;
