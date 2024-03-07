import React, { useState } from "react";

import AuthForm from "components/authform/AuthForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {};

  return (
    <div className="container">
      <div className="post-form">
        <h1>Register your account</h1>
        <div className="bootsrap_form">
          <AuthForm
            onSubmit={registerUser}
            credentials={[
              { email: email, setEmail: setEmail },
              { password: password, setPassword: setPassword },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
