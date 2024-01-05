import React, { FC } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

import { ISuggestions } from "types/types";

const Suggestions: FC<ISuggestions> = ({ suggestions, onClick }) => {
  return (
    <ListGroup
      className="shadow-secondary"
      style={{ zIndex: 1000, width: "400px" }}
    >
      {suggestions.map((suggestion) => (
        <Button
          variant="light"
          style={{ borderRadius: "0px" }}
          key={suggestion.id}
          onClick={() => onClick(suggestion.place_name)}
        >
          {suggestion.place_name}
        </Button>
      ))}
    </ListGroup>
  );
};

export default Suggestions;
