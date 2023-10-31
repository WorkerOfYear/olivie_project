import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./AuthForm.css";

const AuthForm = ({ onSubmit, credentials }) => {
  const email = credentials[0].email;
  const setEmail = credentials[0].setEmail;
  const password = credentials[1].password;
  const setPassword = credentials[1].setPassword;

  return (
    <Form
      style={{
        width: "600px",
        fontSize: "1.5rem",
      }}
    >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{ fontSize: "1.5rem" }}>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="custom_shadow"
          type="email"
          placeholder="Enter email"
          style={{ height: "3rem", fontSize: "1.2rem" }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label style={{ fontSize: "1.5rem" }}>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="custom_shadow"
          type="password"
          placeholder="Password"
          style={{ height: "3rem", fontSize: "1.2rem" }}
        />
      </Form.Group>
      <Form.Group className="btn_wrapper">
        <Button
          type="button"
          variant="outline-secondary"
          style={{ marginTop: "1rem" }}
          onClick={() => onSubmit()}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AuthForm;
