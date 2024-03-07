import React from "react";
import Figure from "react-bootstrap/Figure";

import Aerialists from "static/img/categories/Aerialists.jpg";
import Balloon from "static/img/categories/Balloon1.jpg";
import Band from "static/img/categories/Band.jpg";
import Bubble from "static/img/categories/Bubble.jpg";
import Caricaturist from "static/img/categories/Caricaturist1.jpg";
import Circus from "static/img/categories/Circus.jpg";
import Comedian from "static/img/categories/Comedian1.jpg";
import DJs from "static/img/categories/DJs.jpg";
import Dancers from "static/img/categories/Dancers.jpg";
import FacePainter from "static/img/categories/FacePainter1.jpg";
import Fire from "static/img/categories/Fire.jpg";
import Hypnotist from "static/img/categories/Hypnotist.jpg";
import Jugglers from "static/img/categories/Jugglers.jpg";
import Kids from "static/img/categories/Kids.jpg";
import Lookalike from "static/img/categories/Lookalike.jpg";
import Magician from "static/img/categories/Magician.jpg";
import Musicains from "static/img/categories/Musicains.jpg";
import Singers from "static/img/categories/Singers.jpg";
import Speakers from "static/img/categories/Speakers.jpg";
import Stilt from "static/img/categories/Stilt.jpg";
import TBand from "static/img/categories/TBand.jpg";
import Tribute from "static/img/categories/Tribute.jpg";

import "./ArtistsCategories.css";

const categories_list = [
  {
    id: 1,
    name: "Aerialists",
    imageUrl: Aerialists,
  },
  {
    id: 2,
    name: "Balloon",
    imageUrl: Balloon,
  },
  {
    id: 3,
    name: "Band",
    imageUrl: Band,
  },
  {
    id: 4,
    name: "Bubble",
    imageUrl: Bubble,
  },
  {
    id: 5,
    name: "Caricaturist",
    imageUrl: Caricaturist,
  },
  {
    id: 6,
    name: "Circus",
    imageUrl: Circus,
  },
  {
    id: 7,
    name: "Comedian",
    imageUrl: Comedian,
  },
  {
    id: 8,
    name: "DJs",
    imageUrl: DJs,
  },
  {
    id: 9,
    name: "Dancers",
    imageUrl: Dancers,
  },
  {
    id: 10,
    name: "FacePainter",
    imageUrl: FacePainter,
  },
  {
    id: 11,
    name: "Fire",
    imageUrl: Fire,
  },
  {
    id: 12,
    name: "Hypnotist",
    imageUrl: Hypnotist,
  },
  {
    id: 13,
    name: "Jugglers",
    imageUrl: Jugglers,
  },
  {
    id: 14,
    name: "Kids",
    imageUrl: Kids,
  },
  {
    id: 15,
    name: "Lookalike",
    imageUrl: Lookalike,
  },
  {
    id: 16,
    name: "Magician",
    imageUrl: Magician,
  },
  {
    id: 17,
    name: "Musicains",
    imageUrl: Musicains,
  },
  {
    id: 18,
    name: "Singers",
    imageUrl: Singers,
  },
  {
    id: 19,
    name: "Speakers",
    imageUrl: Speakers,
  },
  {
    id: 20,
    name: "Stilt",
    imageUrl: Stilt,
  },
  {
    id: 21,
    name: "TBand",
    imageUrl: TBand,
  },
  {
    id: 22,
    name: "Tribute",
    imageUrl: Tribute,
  },
];

const ArtistsCategories = () => {
  return (
    <>
      <Figure className="artists-categories">
        {categories_list.map((category) => (
          <Figure.Image
            className="figure-img"
            alt="category"
            src={category.imageUrl}
          />
        ))}
      </Figure>
    </>
  );
};

export default ArtistsCategories;
