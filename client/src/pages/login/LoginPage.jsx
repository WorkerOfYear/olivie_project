import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./LoginPage.css";
import PostService from "../../API/PostService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const response = await PostService.postLogin(email, password);
    console.log(response);
  };

  return (
    <div className="container">
      <div className="post-form">
        <h1>Log into your account</h1>
        <div className="bootsrap_form">
          <Form style={{ width: "30rem", fontSize: "1.5rem" }}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Button
                type="submit"
                variant="outline-secondary"
                style={{marginTop: '1rem'}}
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
