import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import { ARTISTDETAIL_ROUTE } from "routes";
import { IArtists } from "types/types";
import { googlePhotoParser } from "utils/utils";
import "./Cards.css";

const Cards: FC<IArtists> = ({ artists }) => {
  const navigate = useNavigate();

  return (
    <div className="artist_cards">
      {artists.map((artist) => (
        <form key={artist.id} action="">
          <Card style={{ maxWidth: "22rem" }}>
            <Card.Img
              variant="top"
              style={{ maxHeight: "15rem", objectFit: "cover" }}
              src={googlePhotoParser(artist.photo_url)}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                {artist.artist_name}
              </Card.Title>
              <Card.Text style={{ fontSize: "1.2rem" }}>
                {artist.description}
              </Card.Text>
            </Card.Body>
            <Button
              onClick={() => navigate(ARTISTDETAIL_ROUTE + `/${artist.id}`)}
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                marginLeft: "1rem",
                width: "10rem",
              }}
              variant="outline-dark"
            >
              Click to detail
            </Button>
          </Card>
        </form>
      ))}
    </div>
  );
};

export default Cards;
