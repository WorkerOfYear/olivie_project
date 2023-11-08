import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CreateResumeForm = ({ show, handleClose }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="fs-2">Create your resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">Name of the organization</Form.Label>
            <Form.Control type="text" placeholder="Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">Contacts</Form.Label>
            <Form.Control type="number" placeholder="phone" autoFocus />
            <Form.Control type="email" placeholder="email" autoFocus />
            <Form.Control type="text" placeholder="telegram link" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">
              The art direction you are involved in
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="musician, actor.."
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">
              Please indicate your education and work experience
            </Form.Label>
            <Form.Control type="text" placeholder="Name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tell about yourself</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-5">
              Upload a video or photo for your portfolio
            </Form.Label>
            <Form.Control type="file" placeholder="Name" autoFocus />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateResumeForm;
