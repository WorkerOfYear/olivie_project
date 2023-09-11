import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Artist.css";
import SearchService from "../../API/SearchService";
import exmpl_img from "./default-placeholder.png";

const Artist = () => {
  const location = useLocation();
  const [redirect, setRedirect] = useState();
  const [data, setData] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  const who = searchParams.get("who");
  const where = searchParams.get("where");

  useEffect(() => {
    fetchArtist().then((output) => setData(output));
  }, []);

  const fetchArtist = async () => {
    try {
      const result = await SearchService.getAll();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const callArtistDetail = (e) => {
    e.preventDefault();
    console.log(e);
  };

  if (redirect) {
    return <Navigate to={`/artist/detail`} />;
  }

  return (
    <div className="container">
      <div className="artist">
        <p>Results of search:</p>
        <div className="artist_cards">
          {data.map((art) => (
            <form key={art.id} action="">
              <Card style={{ maxWidth: "22rem", height: "35rem" }}>
                <Card.Img variant="top" src={exmpl_img} />
                <Card.Body>
                  <Card.Title>{art.artist_name}</Card.Title>
                  <Card.Text style={{ fontSize: "1rem"}}>
                    Description
                  </Card.Text>
                </Card.Body>
                <Button
                  onClick={callArtistDetail}
                  style={{
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    width: "8rem",
                  }}
                  variant="outline-dark"
                  type="submit"
                >
                  Click to detail
                </Button>
              </Card>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
