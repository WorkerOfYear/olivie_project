import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import RangeSlider from "react-bootstrap-range-slider";

import "./Filter.css";

const Filter = () => {
  const [coins, setCoins] = useState(2);

  return (
    <Form className="filter-form mt-4">
      <Form.Group as={Row} className="mb-3">
        <Col>
          <Form.Label>Coins</Form.Label>
          <Form.Group as={Row}>
            <Col xs="9">
              <RangeSlider
                value={coins}
                onChange={(changeEvent) => setCoins(changeEvent.target.value)}
                min={1}
                max={5}
                size="sm"
                variant={"secondary"}
              />
            </Col>
            <Col xs="3">
              <Form.Control value={coins} onChange={() => {}} />
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Label>Experience</Form.Label>
          <Form.Select aria-label="Experience">
            <option value="1">less than 1 year</option>
            <option value="2">1-3 years</option>
            <option value="3">more than 3 years</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <div className="last_row">
        <div className="sort_by">
          <Form.Label>Sort by</Form.Label>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary">Cost</Button>
            <Button variant="outline-secondary">Rating</Button>
            <Button variant="outline-secondary">Experience</Button>
          </ButtonGroup>
        </div>
        <Button
          style={{ backgroundColor: "#6e38f7", borderColor: "#6e38f7" }}
          variant="secondary"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default Filter;
