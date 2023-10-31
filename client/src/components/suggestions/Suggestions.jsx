import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

const Suggestions = ({ suggestions, handleSuggestionClick }) => {
  return (
    <ListGroup className="shadow-secondary" style={{ zIndex: 1000, width: "400px" }}>
      {suggestions.map((suggestion) => (
        <Button
          variant="light"
          style={{ borderRadius: "0px" }}
          key={suggestion.id}
          onClick={() => handleSuggestionClick(suggestion.place_name)}
        >
          {suggestion.place_name}
        </Button>
      ))}
    </ListGroup>
  );
};

export default Suggestions;
