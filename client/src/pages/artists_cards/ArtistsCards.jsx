import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./ArtistsCards.css";
import SearchService from "../../API/SearchService";
import { mockArtists } from "../../API/mock/mockArtists";
import SearchBar from "../../components/UI/searchbar/SearchBar";
import { ARTISTDETAIL_ROUTE } from "../../routes";

const Artist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const who = searchParams.get("who");
  const where = searchParams.get("where");

  useEffect(() => {
    fetchArtists().then((output) => {
      output ? setData(output) : setData(mockArtists);
    });
  }, []);

  const fetchArtists = async () => {
    try {
      let result;
      if (who === "" && where === "") {
        result = await SearchService.getAll();
      } else {
        result = await SearchService.getArtistByInput(who, where);
      }
      return result;
    } catch (err) {
      console.error("Ошибка при запросе к API:", err);
    }
  };

  return (
    <div className="container">
      <div className="artist">
        <SearchBar who={who} where={where}/>
        {data != null ? (
          <div className="artist_cards">
            {data.map((art) => (
              <form key={art.id} action="">
                <Card style={{ maxWidth: "22rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ maxHeight: "15rem", objectFit: "cover" }}
                    // src={art.photo_url ? art.photo_url : default_placeholder}
                    src={art.photo_url}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "2rem" }}>
                      {art.artist_name}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "1.2rem" }}>
                      {art.description}
                    </Card.Text>
                  </Card.Body>
                  <Button
                    onClick={() => navigate(ARTISTDETAIL_ROUTE + `/${art.id}`)}
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
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

export default Artist;
