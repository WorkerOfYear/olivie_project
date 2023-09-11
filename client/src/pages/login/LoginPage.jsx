import React, { useState } from "react";
import "./LoginPage.css";
import PostService from "../../API/PostService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const response = await PostService.postLogin(email, password);
    console.log(response)
  };

  return (
    <div className="post-form">
      <div className="container">
        <h1>Log Into Your Account</h1>
        <form className="login-form">
          <div className="login-form__email">
            <label>Email: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="text your email.."
            />
          </div> 
          <div className="login-form__password">
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="text your password.."
            />
          </div>
          <button type="button" onClick={() => loginUser()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
