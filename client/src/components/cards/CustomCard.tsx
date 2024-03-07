import React, { FC, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import { ARTISTDETAIL_ROUTE } from "routes";
import { IArtist } from "types/types";
import { googlePhotoParser } from "utils/utils";

import "./Cards.css";

interface CustomCardProps {
  artist: IArtist;
}

const CustomCard: FC<CustomCardProps> = ({ artist }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (artist.photo_url) {
      const url = googlePhotoParser(artist.photo_url);
      setImage(url);
    }

    if (artist.description) {
      if (artist.description.length > 100) {
        setDescription(artist.description.slice(0, 97) + " ...");
      } else {
        setDescription(artist.description);
      }
    }
  }, []);

  return (
    <>
      <form action="">
        <Card className="custom-card" style={{ maxWidth: "22rem" }}>
          <Card.Img
            variant="top"
            style={{ maxHeight: "15rem", objectFit: "cover" }}
            src={image}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "2rem" }}>
              {artist.artist_name}
            </Card.Title>
            <Card.Text style={{ fontSize: "1.2rem" }}>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className="">
            <Button
              onClick={() => navigate(ARTISTDETAIL_ROUTE + `/${artist.id}`)}
              className="card-button"
              variant="outline-dark"
            >
              Click to detail
            </Button>
            <Rating size={20} initialValue={3} readonly={true} />
          </Card.Footer>
        </Card>
      </form>
    </>
  );
};

export default CustomCard;
