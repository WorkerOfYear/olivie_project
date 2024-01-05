import React, { FC, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectRadius, set_radius } from "store/searchReducer";

interface SearchModalProps {
  radius?: number;
  show: boolean;
  onHide: () => void;
}

const SearchModal: FC<SearchModalProps> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.radius !== undefined) {
      dispatch(set_radius(props.radius));
    }
  }, []);

  const radiusValue = useAppSelector(selectRadius);

  let radius_list = [1, 2, 3, 4, 5, 10, 15, 25, 50, 100, 150];
  let items = [];

  for (let i = 0; i < radius_list.length; i += 1) {
    items.push(
      <Pagination.Item
        key={i}
        active={radius_list[i] === radiusValue}
        onClick={() => dispatch(set_radius(radius_list[i]))}
      >
        {radius_list[i]}
      </Pagination.Item>
    );
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose region and area
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>City or region</h4>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <h4 className="mt-3">Search radius</h4>
        <Pagination size="sm">{items}</Pagination>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
