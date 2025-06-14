import React, { useState } from "react";

import "./Login.css";
import UserService from "API/UserService";
import AuthForm from "components/authform/AuthForm";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    UserService.postLogin(email, password).then((response) => {
      // if (response.status === 401) {
      //   alert("Invalid credentials");
      // }
      // if (response.status === 200) {
      //   window.location.href = "/";
      // }
      console.log(response)
    });
  };

  return (
    <div className="container">
      <div className="post-form">
        <h1>Log into account</h1>
        <div className="bootsrap_form">
          <AuthForm
            onSubmit={loginUser}
            credentials={[
              { email: email, setEmail: setEmail },
              { password: password, setPassword: setPassword },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
